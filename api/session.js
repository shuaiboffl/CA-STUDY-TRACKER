const crypto = require('crypto');

const env = () => ({
  url: String(process.env.SUPABASE_URL || '').replace(/\/$/, ''),
  publishable: String(process.env.SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_ANON_KEY || ''),
  secret: String(process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || ''),
  modernSecret: !!process.env.SUPABASE_SECRET_KEY
});

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}

function enrollmentCodes() {
  try {
    const value = JSON.parse(process.env.ACCESS_CODES || '[]');
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function requestBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') {
    try { return JSON.parse(req.body); } catch { return {}; }
  }
  return {};
}

async function verifyUser(config, accessToken) {
  const response = await fetch(config.url + '/auth/v1/user', {
    headers: { apikey: config.publishable, Authorization: 'Bearer ' + accessToken }
  });
  const user = await response.json().catch(() => ({}));
  if (!response.ok || !user.id) return null;
  return user;
}

async function adminRequest(config, path, options) {
  const response = await fetch(config.url + '/rest/v1/' + path, {
    ...options,
    headers: {
      apikey: config.secret,
      ...(config.modernSecret ? {} : { Authorization: 'Bearer ' + config.secret }),
      'Content-Type': 'application/json',
      ...(options && options.headers || {})
    }
  });
  const body = await response.json().catch(() => null);
  return { response, body };
}

module.exports = async (req, res) => {
  const config = env();

  if (req.method === 'GET') {
    if (!config.url || !config.publishable) return send(res, 503, { error: 'Cloud sign-in is not configured yet.' });
    return send(res, 200, { configured: true, supabaseUrl: config.url, publishableKey: config.publishable });
  }

  if (req.method !== 'POST') return send(res, 405, { error: 'Method not allowed.' });
  if (!config.url || !config.publishable || !config.secret) return send(res, 503, { error: 'Cloud sign-in is not configured yet.' });

  const body = requestBody(req);
  if (body.action !== 'activate') return send(res, 400, { error: 'Invalid request.' });

  const accessToken = String(body.accessToken || '');
  const code = String(body.code || '').trim();
  if (!accessToken || code.length < 8 || code.length > 128) return send(res, 400, { error: 'Enter your account and valid enrolment code.' });

  try {
    const user = await verifyUser(config, accessToken);
    if (!user) return send(res, 401, { error: 'Your sign-in expired. Sign in again and retry.' });
    if (!user.email_confirmed_at && !user.confirmed_at) return send(res, 403, { error: 'Verify your email address before activating planner access.' });

    const hash = crypto.createHash('sha256').update(code, 'utf8').digest('hex');
    const record = enrollmentCodes().find(item => String(item.hash || '').toLowerCase() === hash);
    if (!record) return send(res, 401, { error: 'That enrolment code was not recognised.' });

    const existing = await adminRequest(config, 'planner_access?user_id=eq.' + encodeURIComponent(user.id) + '&select=display_name', { method: 'GET' });
    if (!existing.response.ok) return send(res, 502, { error: 'Could not check your planner access. Please retry.' });
    if (Array.isArray(existing.body) && existing.body.length) return send(res, 200, { activated: true, name: existing.body[0].display_name || record.name || 'Student' });

    const inserted = await adminRequest(config, 'planner_access', {
      method: 'POST',
      headers: { Prefer: 'return=representation' },
      body: JSON.stringify({
        user_id: user.id,
        email: String(user.email || '').toLowerCase(),
        display_name: String(record.name || 'Student').slice(0, 60),
        enrollment_code_hash: hash
      })
    });

    if (!inserted.response.ok) {
      const detail = inserted.body && (inserted.body.code || inserted.body.message);
      if (inserted.response.status === 409 || detail === '23505') return send(res, 409, { error: 'This enrolment code has already been used. Contact Shuaib on WhatsApp for help.' });
      return send(res, 502, { error: 'Could not activate this account. Please try again or contact the planner owner.' });
    }
    return send(res, 200, { activated: true, name: String(record.name || 'Student').slice(0, 60) });
  } catch {
    return send(res, 502, { error: 'Cloud service unavailable. Check your connection and try again.' });
  }
};
