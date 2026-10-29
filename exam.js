
(() => {
  const papers = {
    accounting: {
      subject: 'Accounting', paper: 'Paper 1', session: 'September 2026',
      duration: 180, marks: 100, kind: 'written', count: 6,
      file: './accounting-sep-2026.pdf',
      instructions: 'Time allowed: 3 hours · Maximum marks: 100. Question 1 is compulsory. Answer any four of the remaining five questions. Complete written answers on paper; use the checklist to track questions attempted.'
    },
    'business-laws': {
      subject: 'Business Laws', paper: 'Paper 2', session: 'September 2026',
      duration: 180, marks: 100, kind: 'written', count: 6,
      file: './business-laws-sep-2026.pdf',
      instructions: 'Time allowed: 3 hours · Maximum marks: 100. Question 1 is compulsory. Answer any four of the remaining five questions. Complete written answers on paper; use the checklist to track questions attempted.'
    },
    'quantitative-aptitude': {
      subject: 'Quantitative Aptitude', paper: 'Paper 3', session: 'September 2026',
      duration: 120, marks: 100, kind: 'mcq', count: 100,
      file: './quantitative-aptitude-sep-2026.pdf',
      instructions: 'Time allowed: 2 hours · 100 questions · Maximum marks: 100. The supplied booklet states +1 for a correct response, −0.25 for a wrong response, and 0 for a blank response. Record choices below while viewing the scanned paper.'
    },
    'business-economics': {
      subject: 'Business Economics', paper: 'Paper 4', session: 'September 2026',
      duration: 120, marks: 100, kind: 'mcq', count: 100,
      file: './business-economics-sep-2026.pdf',
      instructions: 'Time allowed: 2 hours · 100 questions · Maximum marks: 100. The supplied booklet states +1 for a correct response, −0.25 for a wrong response, and 0 for a blank response. Record choices below while viewing the scanned paper.'
    }
  };
  const stateKey = 'aethel-practice-exam-v1';
  const historyKey = 'aethel-practice-exam-history-v1';
  const answerKeysStorageKey = 'aethel-practice-exam-answer-keys-v1';
  const $ = id => document.getElementById(id);
  let timerId = 0;

  function read(key, fallback) {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return value == null ? fallback : value;
    } catch (_) {
      return fallback;
    }
  }
  function write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (_) {
      return false;
    }
  }
  function currentState() {
    const value = read(stateKey, null);
    return value && papers[value.paperId] ? value : null;
  }
  function savedAnswerKeys() { return read(answerKeysStorageKey, {}); }
  function scorePaper(paper, state, key) {
    if (!key || paper.kind !== 'mcq') return null;
    const answers = state.answers || {};
    let correct = 0, wrong = 0, blank = 0;
    for (let n = 1; n <= paper.count; n++) {
      const answer = answers[n] || '';
      if (!answer) blank++;
      else if (answer === key[n - 1]) correct++;
      else wrong++;
    }
    return { correct, wrong, blank, total: correct - wrong * 0.25 };
  }
  function formatScore(score) { return Number(score).toFixed(2).replace(/\.00$/, ''); }
  function parseAnswerKey(value, count) {
    const normalized = String(value || '').toUpperCase().replace(/[^A-D]/g, '');
    return normalized.length === count ? normalized : null;
  }
  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, ch => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    })[ch]);
  }
  function durationLabel(minutes) {
    return minutes === 120 ? '2 hours' : minutes === 180 ? '3 hours' : minutes + ' minutes';
  }
  function remainingText(ms) {
    const total = Math.max(0, Math.ceil(ms / 1000));
    const hours = Math.floor(total / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const seconds = total % 60;
    return [hours, minutes, seconds].map(x => String(x).padStart(2, '0')).join(':');
  }
  function answeredCount(paper, state) {
    if (paper.kind === 'mcq') return Object.values(state.answers || {}).filter(Boolean).length;
    return Object.values(state.attempted || {}).filter(Boolean).length;
  }
  function showDetails() {
    const id = $('examPaperSelect').value;
    const paper = papers[id];
    $('examStart').disabled = !paper;
    if (!paper) {
      $('examPaperDetails').textContent = 'Select a paper to see its real exam duration and instructions.';
      return;
    }
    $('examPaperDetails').innerHTML = '<strong>' + esc(paper.paper + ' · ' + paper.subject + ' · ' + paper.session) +
      '</strong><span>' + esc(durationLabel(paper.duration) + ' · ' + paper.count + (paper.kind === 'mcq' ? ' MCQs' : ' descriptive questions') + ' · ' + paper.marks + ' marks') +
      '</span><br><span>' + esc(paper.instructions) + '</span>';
  }
  function saveHistory(state, paper) {
    const items = read(historyKey, []);
    const elapsed = Math.max(0, Math.min(paper.duration * 60000, (state.finishedAt || Date.now()) - state.startedAt));
    items.unshift({
      id: String(state.startedAt),
      paperId: state.paperId,
      status: state.status,
      startedAt: state.startedAt,
      finishedAt: state.finishedAt,
      elapsedMs: elapsed,
      answered: answeredCount(paper, state),
      score: scorePaper(paper, state, savedAnswerKeys()[state.paperId])?.total ?? null
    });
    write(historyKey, items.slice(0, 12));
  }
  function finishExam(status) {
    const state = currentState();
    if (!state || state.status !== 'active') return;
    state.status = status;
    state.finishedAt = Date.now();
    write(stateKey, state);
    saveHistory(state, papers[state.paperId]);
    if (timerId) clearInterval(timerId);
    timerId = 0;
    renderExam();
  }
  function updateProgress(paper, state) {
    const count = answeredCount(paper, state);
    if (paper.kind === 'mcq') {
      $('examAnswerProgress').textContent = count + ' of ' + paper.count + ' responses recorded · ' + (paper.count - count) + ' blank';
    } else {
      $('examAnswerProgress').textContent = count + ' of ' + paper.count + ' questions marked as attempted · Question 1 and any four of Questions 2–6 are required by the paper instructions.';
    }
  }
  function renderAnswerSheet(paper, state, frozen) {
    $('examAnswerInstructions').textContent = paper.kind === 'mcq'
      ? (frozen ? 'Your answer sheet is read-only. Correct answers appear below when an answer key is saved.' : 'Choose one response per question. Your choices are saved in this browser as you go.')
      : 'Write your answers on paper. Mark each question you attempt here to track your progress.';
    const disabled = frozen ? ' disabled' : '';
    if (paper.kind === 'mcq') {
      const key = savedAnswerKeys()[state.paperId] || '';
      $('examAnswerSheet').innerHTML = '<div class="examAnswers">' + Array.from({length: paper.count}, (_, i) => {
        const n = i + 1, value = (state.answers || {})[n] || '';
        const correct = key && key.length === paper.count && value === key[n - 1];
        const wrong = key && value && value !== key[n - 1];
        const rowClass = correct ? ' correct' : wrong ? ' incorrect' : '';
        const keyHint = frozen && key ? '<small class="examKeyHint">Correct answer: ' + key[n - 1] + '</small>' : '';
        return '<label class="examAnswerRow' + rowClass + '"><strong>Q' + n + '</strong><span class="examChoice"><select data-exam-answer="' + n + '" aria-label="Answer for question ' + n + '"' + disabled + '><option value="">Blank</option>' +
          ['A','B','C','D'].map(letter => '<option value="' + letter + '"' + (value === letter ? ' selected' : '') + '>' + letter + '</option>').join('') +
          '</select>' + keyHint + '</span></label>';
      }).join('') + '</div>';
      document.querySelectorAll('[data-exam-answer]').forEach(select => select.onchange = () => {
        const next = currentState();
        if (!next || next.status !== 'active') return;
        next.answers = next.answers || {};
        if (select.value) next.answers[select.dataset.examAnswer] = select.value;
        else delete next.answers[select.dataset.examAnswer];
        write(stateKey, next);
        updateProgress(paper, next);
      });
    } else {
      $('examAnswerSheet').innerHTML = '<div class="examWrittenChecklist">' + Array.from({length: paper.count}, (_, i) => {
        const n = i + 1;
        const note = n === 1 ? 'Compulsory' : 'Choose any four of Questions 2–6';
        return '<label><input type="checkbox" data-exam-attempted="' + n + '"' + ((state.attempted || {})[n] ? ' checked' : '') + disabled + '><span><strong>Question ' + n + '</strong><br><span class="small">' + note + '</span></span></label>';
      }).join('') + '</div>';
      document.querySelectorAll('[data-exam-attempted]').forEach(input => input.onchange = () => {
        const next = currentState();
        if (!next || next.status !== 'active') return;
        next.attempted = next.attempted || {};
        next.attempted[input.dataset.examAttempted] = input.checked;
        write(stateKey, next);
        updateProgress(paper, next);
      });
    }
    updateProgress(paper, state);
  }
  function renderHistory() {
    const history = read(historyKey, []);
    if (!history.length) {
      $('examHistory').innerHTML = '';
      return;
    }
    const latestScores = {};
    history.forEach(attempt => {
      if (Number.isFinite(attempt.score) && (attempt.paperId === 'quantitative-aptitude' || attempt.paperId === 'business-economics') && latestScores[attempt.paperId] == null) latestScores[attempt.paperId] = attempt.score;
    });
    const combined = Number.isFinite(latestScores['quantitative-aptitude']) && Number.isFinite(latestScores['business-economics'])
      ? '<div class="examCombined"><span>Latest combined MCQ total</span><strong>' + formatScore(latestScores['quantitative-aptitude'] + latestScores['business-economics']) + ' <small>/ 200</small></strong></div>' : '';
    const list = history.map(attempt => {
      const paper = papers[attempt.paperId];
      const date = new Date(attempt.finishedAt || attempt.startedAt).toLocaleString([], {dateStyle:'medium',timeStyle:'short'});
      const status = attempt.status === 'time-up' ? 'Time expired' : 'Submitted';
      const result = paper.kind === 'mcq' && Number.isFinite(attempt.score) ? ' · ' + formatScore(attempt.score) + '/100' : '';
      return '<div class="examHistoryItem"><span><strong>' + esc(paper.subject) + '</strong> · ' + esc(status) + ' · ' + esc(date) + '</span><span>' + attempt.answered + '/' + paper.count + ' recorded' + result + '</span></div>';
    }).join('');
    $('examHistory').innerHTML = combined + '<details><summary>Recent attempts · ' + history.length + '</summary><div class="examHistoryList">' + list + '</div></details>';
  }
  function renderResult(paper, state) {
    const key = savedAnswerKeys()[state.paperId] || '';
    const score = scorePaper(paper, state, key);
    const status = state.status === 'time-up' ? 'Time expired.' : 'Exam submitted.';
    if (paper.kind !== 'mcq') {
      $('examResult').innerHTML = '<span class="examSubmitMsg">' + esc(status) + '</span> ' + esc(answeredCount(paper, state) + ' of ' + paper.count + ' questions marked attempted.');
      return;
    }
    if (score) {
      $('examResult').innerHTML = '<div class="examScore"><div><span class="small">YOUR SCORE</span><strong>' + formatScore(score.total) + ' <small>/ 100</small></strong></div><div class="examScoreBreakdown"><span>' + score.correct + ' correct</span><span>' + score.wrong + ' wrong · −' + formatScore(score.wrong * 0.25) + '</span><span>' + score.blank + ' blank</span></div></div><p class="small">' + esc(status + ' Marking: +1 correct · −0.25 wrong · 0 blank.') + '</p><details class="examKeyDetails"><summary>Update answer key</summary>' + answerKeyForm(key) + '</details>';
    } else {
      $('examResult').innerHTML = '<span class="examSubmitMsg">' + esc(status) + '</span> ' + answeredCount(paper, state) + ' of ' + paper.count + ' responses recorded. Paste a verified answer key to calculate the score using +1 for correct, −0.25 for wrong, and 0 for blank.' +
        '<p class="small"><a href="https://www.icai.org/post/suggested-answer-foundation-course" target="_blank" rel="noopener">Check ICAI suggested answers</a>. Paste only the 100 answer letters in question order.</p>' + answerKeyForm('');
    }
    const form = $('examAnswerKeyForm');
    if (form) form.onsubmit = event => {
      event.preventDefault();
      const value = parseAnswerKey($('examAnswerKeyInput').value, paper.count);
      const error = $('examAnswerKeyError');
      if (!value) {
        error.textContent = 'Enter exactly 100 answer letters (A, B, C or D). Spaces and punctuation are okay.';
        return;
      }
      const keys = savedAnswerKeys(); keys[state.paperId] = value;
      if (!write(answerKeysStorageKey, keys)) {
        error.textContent = 'Your browser could not save the key. Free some browser storage and try again.';
        return;
      }
      const history = read(historyKey, []);
      const entry = history.find(item => item.id === String(state.startedAt));
      const nextScore = scorePaper(paper, state, value);
      if (entry) { entry.score = nextScore.total; write(historyKey, history); }
      renderExam();
    };
  }
  function answerKeyForm(value) {
    return '<form id="examAnswerKeyForm" class="examAnswerKeyForm"><label for="examAnswerKeyInput">100-letter answer key</label><textarea id="examAnswerKeyInput" rows="3" inputmode="text" autocomplete="off" autocapitalize="characters" placeholder="Example: ABCDABCD…" aria-describedby="examAnswerKeyError">' + esc(value || '') + '</textarea><div id="examAnswerKeyError" class="error" aria-live="polite"></div><button class="btn alt" type="submit">Save key and calculate marks</button></form>';
  }
  function tick() {
    const state = currentState();
    if (!state || state.status !== 'active') return;
    const remaining = state.deadline - Date.now();
    if (remaining <= 0) {
      finishExam('time-up');
      return;
    }
    $('examTimer').textContent = remainingText(remaining);
    $('examTimer').parentElement.classList.toggle('warning', remaining <= 5 * 60 * 1000);
  }
  function renderExam() {
    if (!$('examSetup')) return;
    renderHistory();
    const state = currentState();
    if (!state) {
      $('examSetup').classList.remove('hidden');
      $('examSession').classList.add('hidden');
      if (timerId) clearInterval(timerId);
      timerId = 0;
      showDetails();
      return;
    }
    const paper = papers[state.paperId]; if (state.status === 'active' && state.deadline <= Date.now()) { finishExam('time-up'); return; }
    $('examSetup').classList.add('hidden');
    $('examSession').classList.remove('hidden');
    $('examSessionPaper').textContent = paper.paper + ' · ' + paper.subject + ' · ' + paper.session;
    $('examSessionStatus').textContent = state.status === 'active' ? 'In progress · the timer continues in the background.' : state.status === 'time-up' ? 'Time is up · your answer sheet is saved.' : 'Submitted · your answer sheet is saved.';
    const viewer = $('examPdfViewer');
    if (viewer.getAttribute('src') !== paper.file) viewer.setAttribute('src', paper.file);
    const complete = state.status !== 'active';
    $('examSubmit').classList.toggle('hidden', complete);
    $('examNewAttempt').classList.toggle('hidden', !complete);
    if (complete) {
      $('examTimer').textContent = state.status === 'time-up' ? '00:00:00' : remainingText(Math.max(0, state.deadline - state.finishedAt));
      $('examTimer').parentElement.classList.toggle('warning', state.status === 'time-up');
      $('examResult').classList.remove('hidden');
      renderResult(paper, state);
      if (timerId) clearInterval(timerId);
      timerId = 0;
    } else {
      $('examResult').classList.add('hidden');
      tick(); const latest = currentState(); if (!latest || latest.status !== 'active') return;
      if (!timerId) timerId = setInterval(tick, 1000);
    }
    renderAnswerSheet(paper, state, complete);
  }
  $('examPaperSelect').onchange = showDetails;
  $('examStart').onclick = () => {
    const paperId = $('examPaperSelect').value, paper = papers[paperId];
    if (!paper || currentState() && currentState().status === 'active') return;
    const startedAt = Date.now();
    const state = {
      paperId,
      status: 'active',
      startedAt,
      deadline: startedAt + paper.duration * 60000,
      answers: {},
      attempted: {}
    };
    if (!write(stateKey, state)) {
      $('examPaperDetails').textContent = 'Your browser could not save this attempt. Free some browser storage and try again.';
      return;
    }
    renderExam();
  };
  $('examSubmit').onclick = () => {
    if (window.confirm('Submit this paper now? The timer will stop and the answer sheet will become read-only.')) finishExam('submitted');
  };
  $('examNewAttempt').onclick = () => {
    if (window.confirm('Start a fresh attempt? The completed attempt will remain in Recent attempts.')) {
      localStorage.removeItem(stateKey);
      $('examPaperSelect').value = '';
      renderExam();
    }
  };
  const tab = document.querySelector('.tabs button[data-page="exam"]');
  if (tab) {
    const prior = tab.onclick;
    tab.onclick = event => {
      if (typeof prior === 'function') prior.call(tab, event);
      renderExam();
    };
  }
  window.addEventListener('pageshow', tick);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') tick(); const latest = currentState(); if (!latest || latest.status !== 'active') return; });
  renderExam();
})();
