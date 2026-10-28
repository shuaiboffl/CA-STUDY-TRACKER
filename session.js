const env = () => ({
  url: String(process.env.SUPABASE_URL || '').replace(/\/$/, ''),
  publishable: String(process.env.SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_ANON_KEY || '')
});

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  if (status === 405) res.setHeader('Allow', 'GET');
  res.end(JSON.stringify(body));
}

module.exports = async (req, res) => {
  if (req.method !== 'GET') return send(res, 405, { error: 'Method not allowed.' });

  const config = env();
  if (!config.url || !config.publishable) {
    return send(res, 503, { error: 'Cloud sign-in is not configured yet.' });
  }

  return send(res, 200, {
    configured: true,
    supabaseUrl: config.url,
    publishableKey: config.publishable
  });
};
