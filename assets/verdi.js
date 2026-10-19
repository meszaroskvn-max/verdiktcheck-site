// Verdi - the VERDIKT Check mascot: a neon-lime sneaker detective. Pure SVG, every pose is a function of a state object.
const VERDI_SVG = `
<svg class="verdi" viewBox="-60 -20 840 600" width="840" height="600" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <defs>
    <linearGradient id="vg-up" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#DBFF6A"/><stop offset=".6" stop-color="#C8F04A"/><stop offset="1" stop-color="#A9D12E"/></linearGradient>
    <linearGradient id="vg-sole" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#DCDDD6"/></linearGradient>
    <radialGradient id="vg-lens" cx=".35" cy=".35" r=".8"><stop offset="0" stop-color="#E9FBFF" stop-opacity=".95"/><stop offset=".55" stop-color="#9FE3FF" stop-opacity=".45"/><stop offset="1" stop-color="#5EC8F2" stop-opacity=".35"/></radialGradient>
    <filter id="vg-glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="14" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>
  <ellipse class="v-shadow" cx="320" cy="528" rx="230" ry="20" fill="#000" opacity=".45"/>
  <g class="v-body">
    <!-- back arm (waves / points) -->
    <g class="v-arm2"><path d="M8 0 C-24 -10 -56 -6 -80 4" stroke="#0E0F12" stroke-width="16"/><circle cx="-88" cy="6" r="20" fill="#F3F4F1" stroke="#0E0F12" stroke-width="9"/></g>
    <!-- sole -->
    <path d="M58 420 H584 C604 420 612 432 610 450 L606 470 C603 486 590 494 570 494 H86 C62 494 46 482 46 462 V444 C46 430 50 420 58 420 Z" fill="url(#vg-sole)" stroke="#0E0F12" stroke-width="11"/>
    <path d="M110 462 H560" stroke="#0E0F12" stroke-width="6" opacity=".25"/>
    <path d="M140 494 V478 M200 494 V478 M260 494 V478 M320 494 V478 M380 494 V478 M440 494 V478 M500 494 V478" stroke="#0E0F12" stroke-width="7" opacity=".55"/>
    <!-- upper -->
    <path class="v-upper" d="M64 420 C58 330 70 250 104 196 C118 174 146 168 166 186 C182 200 196 214 220 214 C244 214 250 150 284 132 C306 120 330 128 340 150 L366 206 C392 250 446 282 512 304 C566 322 600 352 600 392 L600 420 Z" fill="url(#vg-up)" stroke="#0E0F12" stroke-width="12"/>
    <!-- collar lining + heel tab -->
    <path d="M110 200 C130 186 152 190 166 204 C182 220 202 230 222 230" stroke="#0E0F12" stroke-width="8" opacity=".35"/>
    <path d="M72 300 C66 260 74 226 92 204" stroke="#0E0F12" stroke-width="9" opacity=".22"/>
    <!-- laces -->
    <g stroke="#0E0F12" stroke-width="10"><path d="M300 196 L338 178"/><path d="M322 226 L362 210"/><path d="M346 254 L388 240"/><path d="M372 278 L414 268"/></g>
    <!-- side brand mark: the VERDIKT check -->
    <path d="M150 336 L196 378 L286 300" stroke="#0E0F12" stroke-width="15" opacity=".9"/>
    <!-- face -->
    <g class="v-face">
      <g class="v-brows" stroke="#0E0F12" stroke-width="11"><path class="v-brow-l" d="M0 0 H52"/><path class="v-brow-r" d="M0 0 H52"/></g>
      <g class="v-eye-l"><g class="v-ball"><ellipse rx="34" ry="40" fill="#FFFFFF" stroke="#0E0F12" stroke-width="9"/><circle class="v-pup" r="17" fill="#0E0F12"/><circle class="v-shine" r="6" fill="#FFFFFF"/></g><path class="v-shut" d="M-30 4 Q0 26 30 4" stroke="#0E0F12" stroke-width="10" opacity="0"/></g>
      <g class="v-eye-r"><g class="v-ball"><ellipse rx="34" ry="40" fill="#FFFFFF" stroke="#0E0F12" stroke-width="9"/><circle class="v-pup" r="17" fill="#0E0F12"/><circle class="v-shine" r="6" fill="#FFFFFF"/></g><path class="v-shut" d="M-30 4 Q0 26 30 4" stroke="#0E0F12" stroke-width="10" opacity="0"/></g>
      <g class="v-cheeks" fill="#FF7A6E" opacity=".4"><ellipse cx="418" cy="372" rx="17" ry="8"/><ellipse cx="572" cy="370" rx="15" ry="8"/></g>
      <path class="v-mouth" d="" fill="#0E0F12" stroke="#0E0F12" stroke-width="9"/>
      <path class="v-tongue" d="" fill="#FF7A6E"/>
      <path class="v-sweat" d="M606 252 C598 266 594 274 594 282 C594 292 602 298 610 298 C618 298 626 292 626 282 C626 274 620 266 606 252 Z" fill="#7FD3FF" stroke="#0E0F12" stroke-width="6" opacity="0"/>
    </g>
    <!-- detective cap -->
    <g class="v-hat"><g transform="translate(300 150) rotate(10) scale(.82) translate(-294 -128)">
      <path d="M190 128 C196 70 250 40 306 44 C360 48 398 84 398 128 Z" fill="#2A2D35" stroke="#0E0F12" stroke-width="12"/>
      <path d="M198 114 H392" stroke="#C8F04A" stroke-width="15"/>
      <path d="M382 124 C424 120 458 130 478 148 C446 158 406 154 376 140 Z" fill="#2A2D35" stroke="#0E0F12" stroke-width="11"/>
      <path d="M248 62 C268 54 292 52 314 54" stroke="#FFFFFF" stroke-width="8" opacity=".25"/>
    </g></g>
    <!-- front arm with the magnifying glass -->
    <g class="v-arm">
      <path d="M0 0 C34 -8 64 -10 92 -4" stroke="#0E0F12" stroke-width="16"/>
      <g transform="translate(96 -4)">
        <path d="M0 0 L46 -46" stroke="#5A3A22" stroke-width="20"/><path d="M0 0 L46 -46" stroke="#0E0F12" stroke-width="28" opacity=".0"/>
        <circle cx="0" cy="0" r="20" fill="#F3F4F1" stroke="#0E0F12" stroke-width="9"/>
        <g transform="translate(78 -78)"><circle r="52" fill="url(#vg-lens)" stroke="#0E0F12" stroke-width="12"/><circle r="52" stroke="#F3F4F1" stroke-width="5" opacity=".6"/><path d="M-26 -18 C-18 -32 -4 -38 10 -36" stroke="#FFFFFF" stroke-width="8" opacity=".9"/></g>
      </g>
    </g>
  </g>
</svg>`;

// state: { x, y, s (scale), squash (-1..1), tilt (deg), look:[dx,dy], blink 0..1, wink 0..1, brow ('up','down','worried', number), mouth ('smile','talk','o','grimace','smirk','flat'), talk 0..1,
//          arm (deg, magnifier arm), arm2 (deg, back arm), sweat 0..1, hat (deg) }
function verdiPose(root, st) {
  const q = (sel) => root.querySelector(sel);
  const sq = st.squash || 0;
  const sx = (st.s || 1) * (1 + sq * .12), sy = (st.s || 1) * (1 - sq * .14);
  root.style.transform = 'translate(' + (st.x - 380) + 'px,' + (st.y - 548) + 'px) scale(' + sx + ',' + sy + ') rotate(' + (st.tilt || 0) + 'deg)';
  root.style.transformOrigin = '380px 548px';
  root.style.opacity = st.o == null ? 1 : st.o;
  q('.v-shadow').setAttribute('rx', 230 * (1 - (st.lift || 0) * .35)); q('.v-shadow').setAttribute('opacity', .45 * (1 - (st.lift || 0) * .5));
  q('.v-body').setAttribute('transform', 'translate(0 ' + (-(st.lift || 0) * 60) + ')');
  // eyes
  const eyes = [['.v-eye-l', 452, 318], ['.v-eye-r', 536, 314]];
  const [lx, ly] = st.look || [0, 0];
  eyes.forEach(([sel, cx, cy], i) => {
    const g = q(sel); g.setAttribute('transform', 'translate(' + cx + ' ' + cy + ')');
    g.querySelector('.v-pup').setAttribute('cx', lx * 12); g.querySelector('.v-pup').setAttribute('cy', ly * 14);
    g.querySelector('.v-shine').setAttribute('cx', lx * 12 + 6); g.querySelector('.v-shine').setAttribute('cy', ly * 14 - 7);
    let b = st.blink || 0; if (i === 1) b = Math.max(b, st.wink || 0);
    const pupScale = st.mouth === 'o' ? .78 : 1; g.querySelector('.v-pup').setAttribute('r', 17 * pupScale);
    g.querySelector('.v-ball').setAttribute('transform', 'scale(1 ' + Math.max(.06, 1 - b) + ')');
    g.querySelector('.v-shut').setAttribute('opacity', b > .75 ? 1 : 0); g.querySelector('.v-ball').setAttribute('opacity', b > .75 ? 0 : 1);
  });
  // brows
  const brow = st.brow || 'up';
  const B = { up: [-62, 0, 0], down: [-50, 10, -10], worried: [-66, -14, 14], angry: [-52, 16, -16], raise: [-70, 0, 0] }[brow] || [-62, 0, 0];
  q('.v-brow-l').setAttribute('transform', 'translate(426 ' + (318 + B[0]) + ') rotate(' + B[1] + ' 26 0)');
  q('.v-brow-r').setAttribute('transform', 'translate(510 ' + (314 + B[0] - (brow === 'raise' ? 12 : 0)) + ') rotate(' + B[2] + ' 26 0)');
  // mouth
  const m = st.mouth || 'smile', cx = 494, cy = 378, a = Math.max(0, Math.min(1, st.talk || 0));
  let d = '', tg = '', fill = '#0E0F12';
  if (m === 'smile') { d = 'M' + (cx - 30) + ' ' + cy + ' Q' + cx + ' ' + (cy + 30) + ' ' + (cx + 30) + ' ' + cy; fill = 'none'; }
  else if (m === 'smirk') { d = 'M' + (cx - 26) + ' ' + (cy + 6) + ' Q' + (cx + 4) + ' ' + (cy + 22) + ' ' + (cx + 30) + ' ' + (cy - 6); fill = 'none'; }
  else if (m === 'flat') { d = 'M' + (cx - 22) + ' ' + (cy + 8) + ' H' + (cx + 22); fill = 'none'; }
  else if (m === 'talk') { const h = 8 + 24 * a, w = 24 + 6 * a; d = 'M' + (cx - w) + ' ' + cy + ' Q' + cx + ' ' + (cy - 4) + ' ' + (cx + w) + ' ' + cy + ' Q' + (cx + w * .8) + ' ' + (cy + h) + ' ' + cx + ' ' + (cy + h) + ' Q' + (cx - w * .8) + ' ' + (cy + h) + ' ' + (cx - w) + ' ' + cy + ' Z';
    tg = a > .3 ? 'M' + (cx - 12) + ' ' + (cy + h - 4) + ' Q' + cx + ' ' + (cy + h - 16 * a) + ' ' + (cx + 12) + ' ' + (cy + h - 4) + ' Z' : ''; }
  else if (m === 'o') { d = 'M' + cx + ' ' + (cy - 8) + ' C' + (cx + 18) + ' ' + (cy - 8) + ' ' + (cx + 18) + ' ' + (cy + 30) + ' ' + cx + ' ' + (cy + 30) + ' C' + (cx - 18) + ' ' + (cy + 30) + ' ' + (cx - 18) + ' ' + (cy - 8) + ' ' + cx + ' ' + (cy - 8) + ' Z'; }
  else if (m === 'grimace') { d = 'M' + (cx - 30) + ' ' + (cy - 4) + ' H' + (cx + 30) + ' Q' + (cx + 36) + ' ' + (cy + 8) + ' ' + (cx + 30) + ' ' + (cy + 20) + ' H' + (cx - 30) + ' Q' + (cx - 36) + ' ' + (cy + 8) + ' ' + (cx - 30) + ' ' + (cy - 4) + ' Z M' + (cx - 30) + ' ' + (cy + 8) + ' H' + (cx + 30) + ' M' + (cx - 10) + ' ' + (cy - 4) + ' V' + (cy + 20) + ' M' + (cx + 10) + ' ' + (cy - 4) + ' V' + (cy + 20); fill = '#FFFFFF'; }
  q('.v-mouth').setAttribute('d', d); q('.v-mouth').setAttribute('fill', fill);
  q('.v-tongue').setAttribute('d', tg);
  q('.v-sweat').setAttribute('opacity', st.sweat || 0);
  q('.v-sweat').setAttribute('transform', 'translate(0 ' + ((st.sweat || 0) * 14) + ')');
  // arms: shoulder points on the side of the upper
  q('.v-arm').setAttribute('transform', 'translate(566 402) rotate(' + (st.arm == null ? -20 : st.arm) + ')');
  q('.v-arm2').setAttribute('transform', 'translate(70 344) rotate(' + (st.arm2 == null ? 20 : st.arm2) + ')');
  q('.v-hat').setAttribute('transform', 'rotate(' + (st.hat || 0) + ' 300 150) translate(0 ' + (-(st.hatUp || 0) * 40) + ')');
}
