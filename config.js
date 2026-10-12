// Edit these lines once. They appear on every page of this site.
window.SITE = {
  owner: 'Mészáros Kevin',                         // who runs the app (your name or company)
  email: 'support@verdiktcheck.com',               // contact email for users (support / data requests)
  // For the certificate check page (verify.html) – the same two values as in GitHub Variables:
  supabaseUrl: 'IDE_IRD_A_SUPABASE_URL',           // SUPABASE_URL, e.g. https://abcd1234.supabase.co
  anonKey: 'IDE_IRD_A_SUPABASE_ANON_KEY',          // SUPABASE_ANON_KEY (the public publishable key)
  playUrl: 'https://play.google.com/store/apps/details?id=com.verdiktcheck.app'
};
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-site]').forEach(function (el) {
    var k = el.getAttribute('data-site');
    var v = (window.SITE && window.SITE[k]) || '';
    if (k === 'email' && el.tagName === 'A') el.href = 'mailto:' + v;
    el.textContent = v;
  });
});
