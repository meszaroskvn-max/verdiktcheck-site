/* VERDIKT Check – tester application page (tesztelo.html). Sends the form to the same server action as the
   homepage sign-up, with form: 'tester' and the extra details (name, birth date, phone). */
(function () {
  'use strict';
  var T = {
    hu: {
      home: 'Főoldal', kicker: 'Zárt teszt · Android', h1a: 'Legyél VERDIKT', h1b: 'tesztelő.',
      lead: 'Próbáld ki elsőként az AI-alapú eredetiség-ellenőrzőt, még mielőtt bárki más letölthetné – és segíts, hogy tökéletes legyen.',
      jump: 'Kitöltöm a lapot',
      p1t: 'Elsőként próbálod ki', p1: 'Hetekkel a megjelenés előtt.',
      p2t: '1 hónap PRO ajándékba', p2: 'A tesztelők köszönetként kapják.',
      p3t: 'Te is alakítod', p3: 'A visszajelzésed bekerül az appba.',
      req_t: 'Mit kérünk tőled?',
      r1t: 'Androidos telefon', r1: 'iPhone-on egyelőre nem érhető el.',
      r2t: 'Google-fiók (Gmail)', r2: 'Amivel a Play Áruházba belépsz – erre küldjük a meghívót.',
      r3t: 'Legalább 14 nap', r3: 'Ennyi ideig tartsd telepítve, és néha használd. Ez a Google feltétele ahhoz, hogy az app megjelenhessen.',
      r4t: 'Őszinte visszajelzés', r4: 'Ha hibát látsz vagy ötleted van, szólj nekünk.',
      r5t: 'Elmúltál 16 éves', r5: 'Fiatalabbak sajnos még nem jelentkezhetnek.',
      form_t: 'Jelentkezési lap', f_name: 'Teljes név', ph_name: 'pl. Kovács Anna', f_birth: 'Születési dátum', y: 'Év', m: 'Hónap', d: 'Nap',
      months: ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december'],
      age: function (n) { return n + ' éves'; },
      f_email: 'E-mail-cím (Google-fiók)', ph_email: 'pelda@gmail.com', h_email: 'Ezzel a címmel lépsz be a Play Áruházba – erre jön a meghívó.',
      f_phone: 'Telefonod típusa', opt: '(nem kötelező)', ph_phone: 'pl. Samsung Galaxy A54',
      c1: 'Androidos telefonom van, és ezzel az e-mail-címmel lépek be a Google Play Áruházba.',
      c2: 'Vállalom, hogy legalább 14 napig telepítve tartom és használom az appot, és jelzem, ha hibát találok.',
      c3: 'Elmúltam 16 éves, és elfogadom az <a href="privacy.html" target="_blank" rel="noopener">adatkezelési tájékoztatót</a>.',
      send: 'Jelentkezem tesztelőnek', sending: 'Küldés…',
      fine: 'Az adataidat csak a zárt teszthez használjuk. A nevedet, születési dátumodat és a telefonod típusát legfeljebb 6 hónap után automatikusan töröljük.',
      e_name: 'Írd be a teljes nevedet.', e_birth: 'Add meg a születési dátumodat.', e_young: '16 éves kor alatt sajnos még nem jelentkezhetsz tesztelőnek.',
      e_email: 'Ez nem tűnik érvényes e-mail-címnek.', e_c1: 'Jelöld be, hogy van Androidos telefonod és Google-fiókod.', e_c2: 'Jelöld be, hogy vállalod a 14 napos tesztelést.',
      e_c3: 'Fogadd el az adatkezelési tájékoztatót.', e_rate: 'Túl sok jelentkezés érkezett innen. Próbáld újra holnap.', e_net: 'Nem sikerült elküldeni. Próbáld újra egy perc múlva.',
      done_t: function (n) { return 'Megvagy' + (n ? ', ' + n : '') + '!'; },
      done_p: function (e) { return 'Amint indul a zárt teszt, a(z) ' + e + ' címre küldjük a meghívót. Addig kövess minket TikTokon és Instagramon!'; },
      back: 'Vissza a főoldalra',
      cl_t: 'A jelentkezés hamarosan nyílik', cl_p: 'A zárt teszt nemsokára indul. Kérj értesítést a főoldalon, és szólunk, amint jelentkezhetsz.', cl_btn: 'Kérek értesítést',
      st_t: 'Mi történik ezután?', s1t: 'Jelentkezel', s1: 'Kitöltöd a lapot – kb. egy perc.',
      s2t: 'Megjön a meghívó', s2: 'Amikor indul a zárt teszt, e-mailben küldjük a linket a Google Play-hez.',
      s3t: 'Letöltöd és tesztelsz', s3: 'A Play Áruházból telepíted, és 14 napig használod. Ha valami nem stimmel, szólsz.',
      l_terms: 'Felhasználási feltételek', l_privacy: 'Adatvédelem', indep: 'Független szolgáltatás, egyik márkával sem áll kapcsolatban.',
      title: 'Tesztelő-jelentkezés – VERDIKT Check'
    },
    en: {
      home: 'Home', kicker: 'Closed test · Android', h1a: 'Become a VERDIKT', h1b: 'tester.',
      lead: 'Try the AI authenticity checker before anyone else can download it – and help us make it perfect.',
      jump: 'Fill in the form',
      p1t: 'Try it first', p1: 'Weeks before the launch.',
      p2t: '1 month of PRO, free', p2: 'Our thank-you to testers.',
      p3t: 'Shape the app', p3: 'Your feedback goes into the app.',
      req_t: 'What we ask of you',
      r1t: 'An Android phone', r1: 'Not available on iPhone yet.',
      r2t: 'A Google account (Gmail)', r2: 'The one you use for the Play Store – the invite goes there.',
      r3t: 'At least 14 days', r3: 'Keep it installed that long and use it now and then. Google requires this before the app can launch.',
      r4t: 'Honest feedback', r4: 'If you see a bug or have an idea, tell us.',
      r5t: 'You’re 16 or older', r5: 'Younger people can’t sign up yet, sorry.',
      form_t: 'Application form', f_name: 'Full name', ph_name: 'e.g. Anna Smith', f_birth: 'Date of birth', y: 'Year', m: 'Month', d: 'Day',
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      age: function (n) { return n + ' years old'; },
      f_email: 'Email (Google account)', ph_email: 'you@gmail.com', h_email: 'The address you use for the Play Store – the invite goes there.',
      f_phone: 'Your phone model', opt: '(optional)', ph_phone: 'e.g. Samsung Galaxy A54',
      c1: 'I have an Android phone and use this email address for the Google Play Store.',
      c2: 'I’ll keep the app installed and use it for at least 14 days, and tell you if I find a bug.',
      c3: 'I’m 16 or older and I accept the <a href="privacy.html" target="_blank" rel="noopener">privacy policy</a>.',
      send: 'Sign me up as a tester', sending: 'Sending…',
      fine: 'We only use your details for the closed test. Your name, date of birth and phone model are deleted automatically after 6 months at the latest.',
      e_name: 'Enter your full name.', e_birth: 'Enter your date of birth.', e_young: 'Sorry, you need to be 16 or older to sign up as a tester.',
      e_email: 'That doesn’t look like a valid email address.', e_c1: 'Tick the box to confirm you have an Android phone and a Google account.', e_c2: 'Tick the box to confirm the 14-day test.',
      e_c3: 'Please accept the privacy policy.', e_rate: 'Too many sign-ups from here. Please try again tomorrow.', e_net: 'Couldn’t send it. Please try again in a minute.',
      done_t: function (n) { return 'You’re in' + (n ? ', ' + n : '') + '!'; },
      done_p: function (e) { return 'As soon as the closed test starts, we’ll send the invite to ' + e + '. Until then, follow us on TikTok and Instagram!'; },
      back: 'Back to the homepage',
      cl_t: 'Sign-ups open soon', cl_p: 'The closed test starts soon. Get notified on the homepage and we’ll tell you as soon as you can sign up.', cl_btn: 'Notify me',
      st_t: 'What happens next?', s1t: 'You sign up', s1: 'Fill in the form – about a minute.',
      s2t: 'The invite arrives', s2: 'When the closed test starts, we email you the Google Play link.',
      s3t: 'Install and test', s3: 'Install it from the Play Store and use it for 14 days. If something’s off, tell us.',
      l_terms: 'Terms of use', l_privacy: 'Privacy', indep: 'Independent service, not affiliated with any brand.',
      title: 'Tester sign-up – VERDIKT Check'
    }
  };

  var $ = function (s) { return document.querySelector(s); };
  var $$ = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };
  var store = { get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } } };
  var S = window.SITE || {};
  var OPEN = S.signup !== 'closed' && S.testers !== false;

  var q = (location.search.match(/[?&]lang=(hu|en)/) || [])[1];
  var lang = q || store.get('vk-lang') || ((navigator.language || 'hu').toLowerCase().indexOf('hu') === 0 ? 'hu' : 'en');
  if (lang !== 'hu' && lang !== 'en') lang = 'hu';

  // Date of birth: year, month, day lists (the age is worked out from them, nobody has to type it twice).
  var ySel = $('#tf-y'), mSel = $('#tf-m'), dSel = $('#tf-d'), ageEl = $('#tf-age');
  var now = new Date(), thisYear = now.getFullYear();
  function opt(sel, v, t) { var o = document.createElement('option'); o.value = v; o.textContent = t; sel.appendChild(o); }
  for (var yy = thisYear - 10; yy >= thisYear - 90; yy--) opt(ySel, yy, yy);
  for (var dd = 1; dd <= 31; dd++) opt(dSel, dd, dd);
  function fillMonths() {
    var keep = mSel.value; while (mSel.options.length > 1) mSel.remove(1);
    T[lang].months.forEach(function (n, i) { opt(mSel, i + 1, n); }); mSel.value = keep;
  }
  function birth() {
    var y = +ySel.value, m = +mSel.value, d = +dSel.value;
    if (!y || !m || !d) return null;
    var dt = new Date(Date.UTC(y, m - 1, d));
    if (dt.getUTCMonth() !== m - 1) return 'bad';
    var age = now.getFullYear() - y - ((now.getMonth() + 1 < m || (now.getMonth() + 1 === m && now.getDate() < d)) ? 1 : 0);
    return { iso: y + '-' + String(m).padStart(2, '0') + '-' + String(d).padStart(2, '0'), age: age };
  }
  function showAge() {
    var b = birth();
    if (!b || b === 'bad') { ageEl.hidden = true; return; }
    ageEl.hidden = false; ageEl.textContent = T[lang].age(b.age); ageEl.classList.toggle('young', b.age < 16);
  }
  [ySel, mSel, dSel].forEach(function (s) { s.addEventListener('change', function () { s.classList.toggle('set', !!s.value); showAge(); }); });

  function applyLang(l) {
    lang = l; var L = T[l];
    document.documentElement.lang = l; document.title = L.title;
    $$('[data-i18n]').forEach(function (el) { var v = L[el.getAttribute('data-i18n')]; if (typeof v === 'string') el.textContent = v; });
    $$('[data-i18n-html]').forEach(function (el) { var v = L[el.getAttribute('data-i18n-html')]; if (typeof v === 'string') el.innerHTML = v; });
    $$('[data-i18n-ph]').forEach(function (el) { var v = L[el.getAttribute('data-i18n-ph')]; if (v) el.setAttribute('placeholder', v); });
    $$('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === l)); });
    ySel.setAttribute('aria-label', L.y); mSel.setAttribute('aria-label', L.m); dSel.setAttribute('aria-label', L.d);
    fillMonths(); showAge();
    if (doneState) renderDone();
  }
  $$('.lang button').forEach(function (b) { b.addEventListener('click', function () { var l = b.getAttribute('data-lang'); store.set('vk-lang', l); applyLang(l); }); });

  var form = $('#tf'), msg = $('#tf-msg'), btn = $('#tf-btn'), doneState = null;
  // A field marked red goes back to normal as soon as it is changed.
  ['input', 'change'].forEach(function (ev) { form.addEventListener(ev, function (e) { if (e.target && e.target.classList) e.target.classList.remove('bad'); }); });
  function renderDone() {
    $('#tf-done-t').textContent = T[lang].done_t(doneState.first);
    $('#tf-done-p').textContent = T[lang].done_p(doneState.email);
  }
  if (!OPEN) { form.hidden = true; $('#tf-closed').hidden = false; document.body.classList.add('tp-closed'); }

  var api = ((S.supabaseUrl && !/IDE_IRD/.test(S.supabaseUrl)) ? S.supabaseUrl : 'https://vtiuuginymzhxndrmjxs.supabase.co').replace(/\/+$/, '') + '/functions/v1/api';
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!OPEN) return;
    var L = T[lang];
    $$('.tf .bad').forEach(function (x) { x.classList.remove('bad'); });
    var err = function (k, el) { msg.textContent = L[k]; msg.className = 'msg err'; if (el) { el.classList.add('bad'); el.focus(); } };
    var name = $('#tf-name').value.replace(/\s+/g, ' ').trim();
    var email = $('#tf-email').value.trim();
    var phone = $('#tf-phone').value.replace(/\s+/g, ' ').trim();
    var b = birth();
    if (name.length < 3 || name.indexOf(' ') < 0 || /[<>@\d]/.test(name)) return err('e_name', $('#tf-name'));
    if (!b || b === 'bad') return err('e_birth', !ySel.value ? ySel : !mSel.value ? mSel : dSel);
    if (b.age < 16) return err('e_young', ySel);
    if (!/^[^\s@]{1,64}@[^\s@]+\.[a-z]{2,24}$/i.test(email) || email.length > 254) return err('e_email', $('#tf-email'));
    if (!$('#tf-c1').checked) return err('e_c1', $('#tf-c1'));
    if (!$('#tf-c2').checked) return err('e_c2', $('#tf-c2'));
    if (!$('#tf-c3').checked) return err('e_c3', $('#tf-c3'));
    btn.disabled = true; msg.className = 'msg'; msg.textContent = L.sending;
    fetch(api, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
      action: 'tester_signup', form: 'tester', email: email, name: name, birth: b.iso, phone: phone,
      consent: true, terms: true, lang: lang, hp: form.company.value
    }) }).then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { status: r.status, body: j }; }); })
      .then(function (r) {
        btn.disabled = false;
        if (r.status === 200 && r.body && r.body.ok) {
          msg.textContent = ''; doneState = { first: name.split(' ').slice(-1)[0], email: email };
          if (lang === 'en') doneState.first = name.split(' ')[0];
          renderDone(); form.hidden = true; $('#tf-done').hidden = false;
          $('#lap').scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
        var c = r.body && r.body.error && r.body.error.code;
        err(c === 'bad_email' ? 'e_email' : c === 'bad_name' ? 'e_name' : c === 'bad_birth' ? 'e_birth' : c === 'too_young' ? 'e_young' : c === 'consent' || c === 'terms' ? 'e_c3' : c === 'rate_limited' ? 'e_rate' : 'e_net');
      })
      .catch(function () { btn.disabled = false; err('e_net'); });
  });

  applyLang(lang);
})();
