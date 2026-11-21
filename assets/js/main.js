/* UNIK TAPE — Interaktionen. Keine Bibliotheken. */
(function () {
  'use strict';
  var doc = document, win = window;
  var reduce = win.matchMedia && win.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || doc).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); };

  /* Header + mobiles Menü */
  var hdr = $('[data-hdr]'), burger = $('.burger'), nav = $('#nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { nav.classList.remove('is-open'); burger.setAttribute('aria-expanded', 'false'); burger.focus(); }
    });
  }
  var active = $('.subnav a.is-active');
  if (active && active.scrollIntoView) { var box = active.parentNode; box.scrollLeft = Math.max(0, active.offsetLeft - box.clientWidth / 2 + active.clientWidth / 2); }

  /* Einblenden beim Scrollen */
  var reveals = $$('.reveal');
  if (reduce || !('IntersectionObserver' in win)) {
    reveals.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* Zahlen hochzählen */
  var counters = $$('[data-count]');
  function runCount(el) {
    var to = parseFloat(el.getAttribute('data-count')), from = parseFloat(el.getAttribute('data-from') || '0');
    var t0 = null, dur = 1500;
    function step(t) {
      if (t0 === null) t0 = t;
      var p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 4);
      el.textContent = String(Math.round(from + (to - from) * e));
      if (p < 1) win.requestAnimationFrame(step);
    }
    win.requestAnimationFrame(step);
  }
  if (!reduce && 'IntersectionObserver' in win) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { runCount(en.target); cio.unobserve(en.target); } });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  }

  /* Licht aus: nachleuchtendes Band */
  $$('[data-glow]').forEach(function (g) {
    var btn = $('[data-glow-btn]', g), state = $('.glow__state', g);
    btn.addEventListener('click', function () {
      var dark = g.classList.toggle('is-dark');
      btn.setAttribute('aria-checked', dark ? 'true' : 'false');
      if (state) state.textContent = state.getAttribute(dark ? 'data-off' : 'data-on');
    });
  });

  /* Formulare -> mailto */
  $$('form[data-mailto]').forEach(function (f) {
    var q = /[?&]p=([^&]+)/.exec(win.location.search);
    if (q) {
      var sel = $('select', f), want = decodeURIComponent(q[1].replace(/\+/g, ' '));
      if (sel) $$('option', sel).forEach(function (o) { if (o.textContent === want) sel.value = o.value || o.textContent; });
    }
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var lines = [];
      $$('input, select, textarea', f).forEach(function (el) { if (el.value) lines.push(el.name + ': ' + el.value); });
      win.location.href = 'mailto:' + f.getAttribute('data-mailto') + '?subject=' + encodeURIComponent(f.getAttribute('data-subject')) + '&body=' + encodeURIComponent(lines.join('\n'));
    });
  });

  /* Klebeband, das sich beim Scrollen abrollt */
  var main = $('main[data-tapeline]');
  if (main && doc.createElementNS) {
    var NS = 'http://www.w3.org/2000/svg';
    var svg = doc.createElementNS(NS, 'svg');
    svg.setAttribute('class', 'tapeline'); svg.setAttribute('aria-hidden', 'true');
    var mk = function (cls) { var p = doc.createElementNS(NS, 'path'); p.setAttribute('class', cls); svg.appendChild(p); return p; };
    var edge = mk('tapeline__edge'), band = mk('tapeline__band'), shine = mk('tapeline__shine');
    var roll = doc.createElementNS(NS, 'g'); roll.setAttribute('class', 'tapeline__roll');
    roll.innerHTML = '<g><circle r="30" fill="#ffca05" stroke="#d6a800" stroke-width="2"/><circle r="30" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="3" stroke-dasharray="26 162"/><circle r="15" fill="#f4f1ea" stroke="#cfc9b8" stroke-width="2"/><circle r="9" fill="#191a47"/><path d="M-9 0H9M0 -9V9" stroke="#f4f1ea" stroke-width="2"/></g>';
    svg.appendChild(roll);
    main.insertBefore(svg, main.firstChild);
    var spin = roll.firstChild, total = 0, ys = [], STEP = 12, drawn = -1, ticking = false, rollScale = 1;

    var build = function () {
      var W = main.clientWidth, H = main.scrollHeight;
      var secs = $$(':scope > section', main);
      if (secs.length < 3) { svg.style.display = 'none'; return; }
      var small = W < 760, w = small ? 10 : 16;
      var m = small ? 8 : Math.max(22, Math.min(64, (W - 1240) / 2 * 0.5));
      var r = small ? 26 : 56;
      rollScale = small ? 0.5 : 1;
      var xl = m, xr = W - m, side = 1; // 1 = rechts
      var y = secs[1].offsetTop;
      var d = 'M' + (W + 40) + ' ' + y;
      for (var i = 1; i < secs.length; i++) {
        var next = i + 1 < secs.length ? secs[i + 1].offsetTop : H - 36;
        var x = side > 0 ? xl : xr, dir = side > 0 ? 1 : -1; // Ziel-x nach der Querung
        // Querung zur anderen Seite, dann abwärts bis zur nächsten Sektionsgrenze
        d += ' H' + (x + dir * r) + ' Q' + x + ' ' + y + ' ' + x + ' ' + (y + r);
        if (i + 1 < secs.length) { d += ' V' + (next - r) + ' Q' + x + ' ' + next + ' ' + (x + dir * r) + ' ' + next; }
        else { d += ' V' + next; }
        y = next; side = -side;
      }
      svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
      svg.style.height = H + 'px';
      [edge, band, shine].forEach(function (p) { p.setAttribute('d', d); });
      edge.setAttribute('stroke-width', w + 2); band.setAttribute('stroke-width', w); shine.setAttribute('stroke-width', Math.max(2, w / 6));
      total = band.getTotalLength();
      ys = [];
      for (var l = 0; l <= total; l += STEP) ys.push(band.getPointAtLength(l).y);
      [edge, band, shine].forEach(function (p) { p.style.strokeDasharray = total + ' ' + total; });
      drawn = -1; update();
    };

    var update = function () {
      ticking = false;
      if (!total) return;
      var len;
      if (reduce) len = total;
      else {
        var target = win.pageYOffset + win.innerHeight * 0.62 - (main.getBoundingClientRect().top + win.pageYOffset);
        var lo = 0, hi = ys.length - 1;
        while (lo < hi) { var mid = (lo + hi + 1) >> 1; if (ys[mid] <= target) lo = mid; else hi = mid - 1; }
        len = ys[0] > target ? 0 : Math.min(total, lo * STEP + STEP);
      }
      if (Math.abs(len - drawn) < 0.5) return;
      drawn = len;
      var off = total - len;
      edge.style.strokeDashoffset = off; band.style.strokeDashoffset = off; shine.style.strokeDashoffset = off;
      var pt = band.getPointAtLength(len);
      roll.setAttribute('transform', 'translate(' + pt.x + ' ' + pt.y + ') scale(' + rollScale + ')');
      spin.setAttribute('transform', 'rotate(' + (len * 1.9 % 360) + ')');
      roll.style.opacity = len <= 0 || len >= total ? 0 : 1;
    };
    var req = function () { if (!ticking) { ticking = true; win.requestAnimationFrame(update); } };
    var rebuildT;
    var rebuild = function () { clearTimeout(rebuildT); rebuildT = setTimeout(build, 120); };
    win.addEventListener('scroll', req, { passive: true });
    win.addEventListener('resize', rebuild);
    win.addEventListener('load', build);
    if ('ResizeObserver' in win) new ResizeObserver(rebuild).observe(main);
    build();
  }

  /* Header-Schatten */
  var onScroll = function () { if (hdr) hdr.classList.toggle('is-stuck', win.pageYOffset > 8); };
  win.addEventListener('scroll', onScroll, { passive: true }); onScroll();
})();
