// Edit these lines once. They appear on every page of this site.
window.SITE = {
  owner: 'Mészáros Kevin',                         // who runs the app (your name or company)
  email: 'support@verdiktcheck.com',               // contact email for users (support / data requests)
  // For the certificate check page (verify.html) – the same two values as in GitHub Variables:
  supabaseUrl: 'https://vtiuuginymzhxndrmjxs.supabase.co', // SUPABASE_URL (public project address)
  anonKey: 'IDE_IRD_A_SUPABASE_ANON_KEY',          // SUPABASE_ANON_KEY (the public publishable key)
  playUrl: 'https://play.google.com/store/apps/details?id=com.verdiktcheck.app',
  // Sign-up on the homepage: 'notify' = "tell me when it's out" (+ optional tester tick box), 'tester' = closed-test
  // sign-up, 'closed' = no sign-up, only "coming soon".
  signup: 'notify'
};
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-site]').forEach(function (el) {
    var k = el.getAttribute('data-site');
    var v = (window.SITE && window.SITE[k]) || '';
    if (k === 'email' && el.tagName === 'A') el.href = 'mailto:' + v;
    el.textContent = v;
  });
});

// Anonymous visit counter (no cookies, no IP stored): page, where the visitor came from and phone/computer.
// Open https://verdiktcheck.com/?nostat=1 once on your own devices so your visits are not counted (?nostat=0 undoes it).
(function () {
  try {
    var q = location.search;
    if (/[?&]nostat=1/.test(q)) localStorage.setItem('vk-nostat', '1');
    if (/[?&]nostat=0/.test(q)) localStorage.removeItem('vk-nostat');
    if (localStorage.getItem('vk-nostat') === '1') return;
  } catch (e) { /* private mode: count as usual */ }
  if (!/^https:$/.test(location.protocol) || navigator.webdriver || !window.SITE || !SITE.supabaseUrl || /IDE_IRD/.test(SITE.supabaseUrl)) return;
  var p = location.pathname.replace(/\/+$/, '').split('/').pop().replace(/\.html$/, '') || 'index';
  var page = { index: 'home', verify: 'verify', privacy: 'privacy', terms: 'terms', 'delete-account': 'delete', 'child-safety': 'child', f: 'friend' }[p] || 'other';
  var ua = navigator.userAgent || '', ref = '';
  try { ref = document.referrer ? new URL(document.referrer).hostname.replace(/^www\./, '') : ''; } catch (e) { ref = ''; }
  var utm = ((q.match(/[?&]utm_source=([^&#]+)/) || [])[1] || '').toLowerCase();
  var src = 'direct';
  if (/tiktok/.test(utm) || /tiktok\.com$/.test(ref) || /musical_ly|BytedanceWebview|TikTok/i.test(ua)) src = 'tiktok';
  else if (/instagram|^ig$/.test(utm) || /instagram\.com$/.test(ref) || /Instagram/.test(ua)) src = 'instagram';
  else if (/^qr$/.test(utm)) src = 'qr';
  else if (/facebook|^fb$/.test(utm) || /facebook\.com$|fb\.com$|messenger\.com$/.test(ref) || /FBAN|FBAV/.test(ua)) src = 'facebook';
  else if (/google\./.test(ref) || utm === 'google') src = 'google';
  else if (/youtube\.com$|youtu\.be$/.test(ref)) src = 'youtube';
  else if (/^(t\.co|x\.com|twitter\.com)$/.test(ref)) src = 'x';
  else if (ref && ref !== location.hostname.replace(/^www\./, '')) src = 'other';
  if (ref && ref === location.hostname.replace(/^www\./, '') && !utm) src = 'direct';
  var device = (window.matchMedia && matchMedia('(pointer:coarse)').matches) || /Mobi|Android|iPhone/i.test(ua) ? 'mobile' : 'desktop';
  var send = function () {
    try {
      fetch(SITE.supabaseUrl.replace(/\/+$/, '') + '/functions/v1/api', { method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'site_visit', page: page, source: src, device: device }) }).catch(function () {});
    } catch (e) { /* never break the page */ }
  };
  if (document.readyState === 'complete') setTimeout(send, 300); else window.addEventListener('load', function () { setTimeout(send, 300); });
})();
