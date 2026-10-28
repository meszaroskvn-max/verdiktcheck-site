/* VERDIKT Check – website: "Legit-pecsét" section. Visitors stamp a LEGIT stamp on a visitor certificate and answer
   a one-question poll; Verdi reacts. Totals come from the separate "pecset" function (no sign-in, no cookies: the
   server recognises a visitor for one day by a hash, like the visit counter). This browser remembers its own stamp
   and vote in localStorage. Loaded after verdi.js and site.js; it only touches elements inside #pecset. */
(function () {
  'use strict';
  var root = document.getElementById('pecset');
  if (!root) return;
  var $ = function (s) { return root.querySelector(s); };
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } }
  };
  var S = window.SITE || {};
  var api = ((S.supabaseUrl && !/IDE_IRD/.test(S.supabaseUrl)) ? S.supabaseUrl : 'https://vtiuuginymzhxndrmjxs.supabase.co').replace(/\/+$/, '') + '/functions/v1/pecset';
  function post(body) {
    return fetch(api, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      .then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; });
  }

  /* ---------- texts ---------- */
  var T = {
    hu: {
      k: 'A te verdikted', t: 'Verdi mindent megítél. <span class="grad">Most te jössz.</span>',
      lead: 'Ha tetszik, amit látsz, nyomd rá a LEGIT pecsétet. Egy kattintás, nem kell hozzá regisztráció.',
      idle: 'Mindent megítélek. Most fordult a kocka.', hover: 'Na, merre billen a mérleg?',
      yay: 'LEGIT! Ezt bekeretezem.', again: 'Egy ember, egy pecsét. Szabály az szabály.', again_v: 'Egy ember, egy szavazat.',
      top: 'LÁTOGATÓI TANÚSÍTVÁNY', r1: 'Vizsgált tárgy', r2: 'Vizsgálók', r2v: 'a látogatók', r3: 'Ítélet',
      wait: 'A te pecsétedre vár', done: 'LEGIT, a te pecséteddel is', hint: 'IDE JÖN<br>A PECSÉT', ring: 'VERDIKT CHECK · LÁTOGATÓI ÍTÉLET ·',
      cnt: 'LEGIT-pecsét eddig', btn: 'Rányomom a pecsétet', btn_done: 'Megkaptuk a pecsétedet',
      fine: 'Egy látogató, egy pecsét.', fine_done: 'Köszi! Egy látogató, egy pecsét.',
      q: 'Mit ellenőriznél először?', votes: 'SZAVAZAT', opts: ['Cipőt', 'Táskát', 'Ruhát', 'Valami mást'], vote_hint: 'Szavazz, és látod az állást',
      lines: ['Cipő? Az a szakterületem. Én magam is az vagyok.', 'Varrás, címke, fém csatok. Mindet átnézem.', 'A belső címke sokat elárul. Azt fotózd le!', 'Írd meg Instán, mire lennél kíváncsi!'],
      foot: 'Az app hamarosan jön Androidra. Szólunk, amint letölthető.', notify: 'Kérem az értesítést'
    },
    en: {
      k: 'Your verdict', t: 'Verdi judges everything. <span class="grad">Now it’s your turn.</span>',
      lead: 'If you like what you see, hit it with the LEGIT stamp. One tap, no sign-up.',
      idle: 'I judge everything. Now the tables have turned.', hover: 'So, which way does it tip?',
      yay: 'LEGIT! I’m framing this.', again: 'One person, one stamp. Rules are rules.', again_v: 'One person, one vote.',
      top: 'VISITOR CERTIFICATE', r1: 'Item checked', r2: 'Checked by', r2v: 'the visitors', r3: 'Verdict',
      wait: 'Waiting for your stamp', done: 'LEGIT, with your stamp too', hint: 'YOUR STAMP<br>GOES HERE', ring: 'VERDIKT CHECK · VISITOR VERDICT ·',
      cnt: 'LEGIT stamps so far', btn: 'Stamp it', btn_done: 'We got your stamp',
      fine: 'One visitor, one stamp.', fine_done: 'Thanks! One visitor, one stamp.',
      q: 'What would you check first?', votes: 'VOTES', opts: ['Sneakers', 'Bags', 'Clothes', 'Something else'], vote_hint: 'Vote to see the results',
      lines: ['Sneakers? That’s my field. I literally am one.', 'Stitching, labels, metal hardware. I check them all.', 'The inside label says a lot. Snap a photo of it!', 'Tell us on Instagram what you’d like checked!'],
      foot: 'The app is coming to Android soon. We’ll tell you when it’s out.', notify: 'Notify me'
    }
  };
  var lang = document.documentElement.lang === 'en' ? 'en' : 'hu';
  var L = function () { return T[lang]; };
  var fmt = function (n) { return String(Math.max(0, Math.round(n))).replace(/\B(?=(\d{3})+(?!\d))/g, lang === 'hu' ? ' ' : ','); };

  /* ---------- state ---------- */
  var st0 = store.get('vk-pecset') === '1', p0 = parseInt(store.get('vk-pecset-poll'), 10);
  var state = { stamped: st0, count: 0, votes: [0, 0, 0, 0], pick: p0 >= 0 && p0 <= 3 ? p0 : -1, loaded: false };

  /* ---------- particles: ink splash + confetti ---------- */
  var cv = null, cx = null, parts = [], running = false, dpr = 1;
  function sizeFx() { if (!cv) return; dpr = Math.min(2, window.devicePixelRatio || 1); cv.width = innerWidth * dpr; cv.height = innerHeight * dpr; }
  var COLORS = ['#C8F04A', '#DBFF6A', '#FFB020', '#F4F5F2', '#C8F04A'];
  function burst(x, y, n, power, kinds) {
    if (reduce) return;
    if (!cv) { cv = document.createElement('canvas'); cv.className = 'pc-fx'; cv.setAttribute('aria-hidden', 'true'); document.body.appendChild(cv); cx = cv.getContext('2d'); sizeFx(); window.addEventListener('resize', sizeFx); }
    for (var i = 0; i < n; i++) {
      var a = Math.random() * Math.PI * 2, v = power * (.35 + Math.random() * .75);
      parts.push({ x: x, y: y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - power * .35, g: .32 + Math.random() * .2,
        r: 3 + Math.random() * 5, rot: Math.random() * 6, vr: (Math.random() - .5) * .4, life: 0, max: 60 + Math.random() * 50,
        c: COLORS[(Math.random() * COLORS.length) | 0], k: kinds[(Math.random() * kinds.length) | 0] });
    }
    if (!running) { running = true; requestAnimationFrame(tick); }
  }
  function centerOf(el) { var r = el.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; }
  function tick() {
    cx.setTransform(dpr, 0, 0, dpr, 0, 0); cx.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = parts.length - 1; i >= 0; i--) {
      var p = parts[i]; p.life++; p.vx *= .985; p.vy = p.vy * .985 + p.g; p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      var o = 1 - p.life / p.max; if (o <= 0) { parts.splice(i, 1); continue; }
      cx.save(); cx.globalAlpha = o; cx.translate(p.x, p.y); cx.rotate(p.rot); cx.fillStyle = p.c; cx.strokeStyle = p.c;
      if (p.k === 'dot') { cx.beginPath(); cx.arc(0, 0, p.r, 0, 7); cx.fill(); }
      else if (p.k === 'ink') { cx.beginPath(); cx.ellipse(0, 0, p.r * 1.6, p.r * .7, 0, 0, 7); cx.fill(); }
      else if (p.k === 'bit') { cx.fillRect(-p.r, -p.r * .45, p.r * 2, p.r * .9); }
      else { cx.lineWidth = 2.6; cx.lineCap = 'round'; cx.lineJoin = 'round'; cx.beginPath(); cx.moveTo(-p.r, 0); cx.lineTo(-p.r * .2, p.r * .8); cx.lineTo(p.r * 1.2, -p.r * .9); cx.stroke(); }
      cx.restore();
    }
    if (parts.length) requestAnimationFrame(tick); else { running = false; cx.clearRect(0, 0, innerWidth, innerHeight); }
  }

  /* ---------- odometer counter ---------- */
  var odo = $('#pc-odo'), counterBox = $('#pc-counter');
  function odoSet(n) {
    var s = fmt(n), digits = s.replace(/\D/g, '');
    odo.setAttribute('aria-label', s + ' ' + L().cnt);
    var cols = odo.querySelectorAll('.d');
    if (cols.length !== digits.length || odo.getAttribute('data-fmt') !== s.replace(/\d/g, '0')) {
      odo.innerHTML = s.split('').map(function (ch) {
        if (!/\d/.test(ch)) return '<span class="sp"></span>';
        var col = ''; for (var k = 0; k <= 9; k++) col += '<span>' + k + '</span>';
        return '<span class="d" aria-hidden="true"><span class="col">' + col + '</span></span>';
      }).join('');
      odo.setAttribute('data-fmt', s.replace(/\d/g, '0'));
      cols = odo.querySelectorAll('.d');
      void odo.offsetWidth;
    }
    for (var i = 0; i < cols.length; i++) cols[i].firstChild.style.transform = 'translateY(' + (-digits[i]) + 'em)';
  }

  /* ---------- Verdi ---------- */
  var box = $('#pc-verdi'), bubble = $('#pc-bubble'), svg = null, bubbleKey = 'idle', bubbleBig = false;
  var vs = { x: 380, y: 548, s: 1, look: [0, 0], blink: 0, wink: 0, mouth: 'smile', brow: 'up', arm: -20, arm2: 20, talk: 0, lift: 0, squash: 0 };
  var react = { kind: '', t: -1e9 }, hover = false, visible = true;
  function bubbleText() { return bubbleKey.indexOf('line') === 0 ? L().lines[+bubbleKey.slice(4)] : L()[bubbleKey]; }
  function say(key, big) {
    bubbleKey = key; bubbleBig = !!big;
    bubble.classList.add('swap');
    setTimeout(function () { bubble.textContent = bubbleText(); bubble.classList.toggle('big', bubbleBig); bubble.classList.remove('swap'); }, reduce ? 0 : 200);
  }
  function startReact(kind) { react.kind = kind; react.t = performance.now(); }
  if (box && typeof VERDI_SVG === 'string' && typeof verdiPose === 'function') {
    box.innerHTML = VERDI_SVG.replace(/vg-/g, 'pc-vg-'); svg = box.firstElementChild;
    svg.removeAttribute('width'); svg.removeAttribute('height');
    verdiPose(svg, vs);
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }).observe(box);
    var t0 = performance.now(), look = [0.5, 0], target = [0.7, 0.1], nextLook = 1200, nextBlink = 1500, blinkT = -1;
    var loop = function (now) {
      requestAnimationFrame(loop);
      if (!visible) return;
      var t = now - t0, r = now - react.t;
      if (t > nextLook) { target = [Math.random() * 1.4 - .4, Math.random() * .8 - .4]; nextLook = t + 1600 + Math.random() * 2000; }
      if (hover) target = [0.9, 0.55];
      look[0] += (target[0] - look[0]) * .08; look[1] += (target[1] - look[1]) * .08;
      if (t > nextBlink) { blinkT = t; nextBlink = t + 2600 + Math.random() * 2600; }
      var b = blinkT >= 0 ? Math.max(0, 1 - Math.abs((t - blinkT) - 90) / 90) : 0;
      vs.look = look; vs.blink = b; vs.wink = 0; vs.lift = 0; vs.squash = 0; vs.brow = hover ? 'raise' : 'up'; vs.sweat = 0;
      vs.mouth = hover ? 'o' : 'smile'; vs.talk = 0; vs.hatUp = 0; vs.hat = 0; vs.tilt = 0;
      vs.arm = -20 + Math.sin(t / 900) * 16; vs.arm2 = 20 + Math.sin(t / 1300 + 1) * 8;
      if (react.kind === 'stamp' && r < 2000) {
        var up = r < 640 ? Math.sin(r / 640 * Math.PI) : 0, hatK = r < 1000 ? Math.sin(r / 1000 * Math.PI) : 0;
        vs.lift = up * 1.6; vs.hatUp = hatK * 2.6; vs.hat = -hatK * 40; vs.tilt = up * -6;
        vs.squash = r > 590 && r < 860 ? Math.sin((r - 590) / 270 * Math.PI) * .9 : 0;
        vs.mouth = r < 640 ? 'o' : 'smile'; vs.brow = 'raise'; vs.wink = r > 900 && r < 1600 ? 1 : 0;
        vs.arm = -80 + Math.sin(r / 110) * 22; vs.arm2 = -50 + Math.sin(r / 140) * 18; vs.look = [0.8, 0.3];
      } else if (react.kind === 'again' && r < 1400) {
        vs.brow = 'raise'; vs.mouth = 'smirk'; vs.wink = r > 300 && r < 900 ? 1 : 0; vs.look = [0.9, 0.2]; vs.tilt = Math.sin(r / 140) * 3 * (1 - r / 1400);
      } else if (react.kind === 'poll' && r < 1300) {
        vs.mouth = 'talk'; vs.talk = .5 + .5 * Math.sin(r / 70); vs.look = [0.6, 0.9]; vs.arm = -10 + Math.sin(r / 160) * 10;
        vs.lift = r < 380 ? Math.sin(r / 380 * Math.PI) * .45 : 0;
      }
      if (reduce) { vs.lift = 0; vs.squash = 0; vs.hatUp = 0; vs.hat = 0; vs.tilt = 0; }
      verdiPose(svg, vs);
    };
    requestAnimationFrame(loop);
  }

  /* ---------- 3D tilt toward the pointer ---------- */
  var tilt = $('#pc-tilt'), cert = $('#pc-cert');
  if (!reduce && window.matchMedia && matchMedia('(hover: hover)').matches) {
    tilt.addEventListener('pointermove', function (e) {
      var r = tilt.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      cert.style.setProperty('--pc-ry', (x * 9).toFixed(2) + 'deg'); cert.style.setProperty('--pc-rx', (-y * 7).toFixed(2) + 'deg');
    });
    tilt.addEventListener('pointerleave', function () { cert.style.setProperty('--pc-ry', '0deg'); cert.style.setProperty('--pc-rx', '0deg'); });
  }

  /* ---------- the stamp ---------- */
  var btn = $('#pc-btn'), btnLbl = $('#pc-btn-l'), stamp = $('#pc-stamp'), zone = $('#pc-zone'), verdict = $('#pc-verdict'), fine = $('#pc-fine');
  function renderStamp(animate) {
    btn.setAttribute('aria-pressed', String(state.stamped));
    btn.classList.toggle('pulse', !state.stamped);
    btnLbl.textContent = state.stamped ? L().btn_done : L().btn;
    zone.classList.toggle('stamped', state.stamped);
    tilt.classList.toggle('legit', state.stamped);
    stamp.classList.toggle('on', state.stamped);
    stamp.classList.remove('slam');
    if (state.stamped && animate && !reduce) { void stamp.getBoundingClientRect(); stamp.classList.add('slam'); }
    verdict.textContent = state.stamped ? L().done : L().wait;
    verdict.classList.toggle('pc-done', state.stamped);
    fine.textContent = state.stamped ? L().fine_done : L().fine;
  }
  function shock(cls) { var d = document.createElement('span'); d.className = 'pc-shock' + (cls ? ' ' + cls : ''); zone.appendChild(d); setTimeout(function () { d.remove(); }, 1000); }
  btn.addEventListener('click', function () {
    if (state.stamped) { startReact('again'); say('again'); return; }
    state.stamped = true; store.set('vk-pecset', '1');
    renderStamp(true); startReact('stamp'); say('yay', true);
    var req = post({ action: 'stamp' });
    setTimeout(function () {
      state.count += 1; if (state.loaded) odoSet(state.count);
      if (reduce) return;
      shock(); shock('s2');
      cert.classList.remove('thud'); void cert.offsetWidth; cert.classList.add('thud');
      tilt.classList.remove('flash'); void tilt.offsetWidth; tilt.classList.add('flash');
      var c = centerOf(zone); burst(c[0], c[1], 70, 11, ['ink', 'ink', 'dot', 'check']);
      if (state.loaded) { var p = document.createElement('span'); p.className = 'pc-plus'; p.textContent = '+1'; counterBox.appendChild(p); setTimeout(function () { p.remove(); }, 1200); }
    }, reduce ? 0 : 270);
    setTimeout(function () { if (svg) { var c = centerOf(box); burst(c[0], c[1] - 40, 46, 9, ['bit', 'dot', 'check']); } }, reduce ? 0 : 640);
    // settle on the real total once the server answers (after the roll has played)
    req.then(function (d) { if (d && typeof d.stamps === 'number') setTimeout(function () { applyServer(d); }, 1200); });
  });
  btn.addEventListener('pointerenter', function () { if (!state.stamped) { hover = true; say('hover'); } });
  btn.addEventListener('pointerleave', function () { hover = false; });

  /* ---------- the poll ---------- */
  var opts = Array.prototype.slice.call(root.querySelectorAll('.pc-opt')), meta = $('#pc-meta');
  function renderPoll(animate) {
    var total = state.votes.reduce(function (a, b) { return a + b; }, 0), voted = state.pick >= 0 && state.loaded;
    var lead = total ? state.votes.indexOf(Math.max.apply(null, state.votes)) : -1;
    meta.textContent = state.loaded ? fmt(total) + ' ' + (lang === 'en' && total === 1 ? 'VOTE' : L().votes) : '';
    opts.forEach(function (o, i) {
      var pct = total ? Math.round(state.votes[i] / total * 100) : 0, pctEl = o.querySelector('.pct');
      o.querySelector('.lbl').textContent = L().opts[i];
      o.setAttribute('aria-pressed', String(state.pick === i));
      if (voted) {
        var tail = ' · ' + fmt(state.votes[i]);
        if (animate && !reduce) {
          (function (el, p) { var t0 = performance.now(); (function step(now) { var k = Math.min(1, (now - t0) / 900), e = 1 - Math.pow(1 - k, 3); el.textContent = Math.round(p * e) + '%' + tail; if (k < 1) requestAnimationFrame(step); })(t0); })(pctEl, pct);
        } else pctEl.textContent = pct + '%' + tail;
      } else pctEl.textContent = L().vote_hint;
      var badge = o.querySelector('.top');
      if (voted && i === lead) { if (!badge) { badge = document.createElement('span'); badge.className = 'top'; badge.textContent = 'TOP'; o.appendChild(badge); } }
      else if (badge) badge.remove();
      var bar = o.querySelector('.bar');
      if (!animate) bar.style.transition = 'none';
      bar.style.width = voted ? pct + '%' : '0';
      if (!animate) { void bar.offsetWidth; bar.style.transition = ''; }
    });
  }
  opts.forEach(function (o, i) {
    o.addEventListener('click', function () {
      if (state.pick === i) return;
      if (state.pick >= 0) { startReact('again'); say('again_v'); return; }
      state.pick = i; store.set('vk-pecset-poll', String(i));
      state.votes[i] += 1;
      if (!state.loaded) { state.loaded = true; }
      renderPoll(true);
      var c = centerOf(o); burst(c[0], c[1], 28, 7, ['dot', 'bit', 'check']);
      startReact('poll'); say('line' + i);
      post({ action: 'vote', choice: i }).then(function (d) { if (d && Array.isArray(d.votes)) setTimeout(function () { applyServer(d); }, 1200); });
    });
  });

  /* ---------- notify: go to the existing e-mail sign-up ---------- */
  $('#pc-notify').addEventListener('click', function () {
    var form = ['hsu', 'bsu'].map(function (id) { return document.getElementById(id); }).filter(function (f) { return f && f.offsetParent; })[0];
    var target = form || document.getElementById('beta');
    if (!target) return;
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
    var input = form && form.querySelector('input[type=email]');
    if (input) setTimeout(function () { try { input.focus({ preventScroll: true }); } catch (e) { input.focus(); } }, reduce ? 0 : 600);
  });

  /* ---------- texts, server totals ---------- */
  function applyTexts() {
    root.querySelectorAll('[data-pc]').forEach(function (el) { var v = L()[el.getAttribute('data-pc')]; if (typeof v === 'string') el.textContent = v; });
    root.querySelectorAll('[data-pc-html]').forEach(function (el) { var v = L()[el.getAttribute('data-pc-html')]; if (typeof v === 'string') el.innerHTML = v; });
    bubble.textContent = bubbleText();
    var ring = $('#pc-ringtext'); if (ring) ring.textContent = L().ring;
    if (state.loaded) odoSet(state.count);
    renderStamp(false); renderPoll(false);
  }
  function applyServer(d) {
    state.count = Math.max(d.stamps, state.stamped ? 1 : 0);
    if (Array.isArray(d.votes) && d.votes.length === 4) {
      state.votes = d.votes.map(function (n) { return Math.max(0, +n || 0); });
      if (state.pick >= 0 && state.votes[state.pick] === 0) state.votes[state.pick] = 1;
    }
    state.loaded = true; counterBox.hidden = false;
    odoSet(state.count); renderPoll(false);
  }
  new MutationObserver(function () { var l = document.documentElement.lang === 'en' ? 'en' : 'hu'; if (l !== lang) { lang = l; applyTexts(); } })
    .observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  counterBox.hidden = true;
  applyTexts();
  post({ action: 'get' }).then(function (d) { if (d && typeof d.stamps === 'number') applyServer(d); });
})();
