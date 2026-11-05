/* Renders the invitation from window.INVITATION (see invitation.config.js).
   You normally don't need to edit this file. */
(function () {
  var C = window.INVITATION || {};

  // ---- tiny DOM helper (text is always inserted safely) ----
  function h(tag, attrs, kids) {
    var el = document.createElement(tag);
    for (var k in attrs || {}) {
      if (attrs[k] == null || attrs[k] === false) continue;
      if (k === 'class') el.className = attrs[k];
      else el.setAttribute(k, attrs[k]);
    }
    [].concat(kids == null ? [] : kids).forEach(function (c) {
      if (c == null || c === false || c === '') return;
      el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return el;
  }
  function rv(tag, cls, kids) { return h(tag, { class: (cls ? cls + ' ' : '') + 'rv' }, kids); }
  function list(a) { return Array.isArray(a) ? a.filter(Boolean) : a ? [a] : []; }

  // Local images go through the Netlify Image CDN, external URLs are used as-is
  function img(src, w) {
    if (!src) return '';
    if (/^https?:|^data:/.test(src) || location.protocol === 'file:') return src;
    return '/.netlify/images?url=' + encodeURIComponent(src) + '&w=' + w + '&fm=webp';
  }

  // "18th November" -> 18<sup>th</sup> November
  function dateEl(text) {
    var el = h('div', { class: 'd' });
    String(text || '').split(/(\d+)(st|nd|rd|th)\b/i).forEach(function (part, i) {
      if (i % 3 === 2) el.appendChild(h('sup', null, part));
      else if (part) el.appendChild(document.createTextNode(part));
    });
    return el;
  }

  var bride = C.bride || {}, groom = C.groom || {};
  var couple = [bride.name, groom.name].filter(Boolean).join(' & ');

  // ---- opening title ----
  document.querySelectorAll('[data-bind]').forEach(function (el) {
    var v = el.getAttribute('data-bind').split('.').reduce(function (o, k) { return o && o[k]; }, C);
    el.textContent = v || '';
  });

  var app = document.getElementById('app');
  var col = h('div', { class: 'col' });
  app.appendChild(col);

  // ---- 1. hero + invitation card ----
  var card = h('div', { class: 'card' }, [
    C.invocation ? rv('div', 'deva', C.invocation) : null,
    list(C.blessings).length
      ? h('div', { class: 'grp' }, list(C.blessings).map(function (b) {
          return [b.text ? rv('div', 't', b.text) : null].concat(list(b.names).map(function (n) { return rv('div', 'g', n); }));
        }).reduce(function (a, b) { return a.concat(b); }, []))
      : null,
    C.inviteLine ? h('div', { class: 'grp' }, rv('div', 't', C.inviteLine)) : null,
    h('div', { class: 'rule rv' }),
    h('div', { class: 'grp' }, [
      rv('div', 'nm', bride.name),
      bride.parents ? rv('div', 't', bride.parents) : null,
      rv('div', 't with', 'with'),
      rv('div', 'nm', groom.name),
      groom.parents ? rv('div', 't', groom.parents) : null,
    ]),
  ]);
  col.appendChild(h('section', { class: 'hero' }, [
    h('img', { src: img('/img/hero.png', 960), alt: 'A bride and groom walking hand in hand toward a temple at sunrise', width: 896, height: 1200 }),
    card,
    h('div', { class: 'hero-end' }),
  ]));

  // ---- 2. timeline + events ----
  var tl = C.timeline || {};
  col.appendChild(h('section', { class: 'tl' }, [
    tl.eyebrow ? rv('div', 'sm', tl.eyebrow) : null,
    tl.title ? rv('div', 'nm', tl.title) : null,
    tl.subtitle ? rv('div', 'it', tl.subtitle) : null,
    rv('div', 'orn', '✦ ✦ ✦'),
  ]));

  var evs = h('section', { class: 'evs' });
  function hostEl(host) {
    return rv('div', 'host', [host.names ? h('span', { class: 'hn' }, host.names) : null].concat(
      list(host.lines).map(function (l) { return h('span', null, l); })));
  }
  list(C.events).forEach(function (ev, i) {
    evs.appendChild(h('article', { class: 'ev rv' }, [
      ev.date ? dateEl(ev.date) : null,
      h('div', { class: 'ti' }, ev.title),
      h('div', { class: 'ln' }),
      ev.time ? h('div', { class: 'tm' }, ev.time) : null,
    ].concat(list(ev.schedule).map(function (s) { return h('div', { class: 'sch' }, s); }), [
      ev.venue ? h('div', { class: 'vn' }, ev.venue) : null,
      ev.mapUrl ? h('a', { class: 'loc', href: ev.mapUrl, target: '_blank', rel: 'noopener' }, 'View Location') : null,
    ])));
    if (C.host && (C.host.afterEvent || 1) === i + 1) evs.appendChild(hostEl(C.host));
  });
  if (C.host && (C.host.afterEvent || 1) > list(C.events).length) evs.appendChild(hostEl(C.host));
  col.appendChild(evs);

  // ---- 3. meet the couple ----
  var cp = C.couple;
  if (cp) {
    col.appendChild(h('section', { class: 'cp' }, [
      rv('h2', 'mh', [cp.heading ? h('span', null, cp.heading) : null, cp.title]),
      cp.photo ? h('div', { class: 'ph rv' }, h('img', { src: img(cp.photo, 640), alt: cp.photoAlt || couple, loading: 'lazy' })) : null,
      rv('div', 'cap', couple),
    ]));
  }

  // ---- 4. families, blessings, rsvp, countdown ----
  var fin = h('section', { class: 'fin' });
  var fam = C.families;
  if (fam) {
    fin.appendChild(rv('h2', 'mh', [fam.eyebrow ? h('span', null, fam.eyebrow) : null, fam.title]));
    if (list(fam.names).length) fin.appendChild(rv('div', 'fam', list(fam.names).map(function (n) { return h('p', null, n); })));
  }
  if (C.heavenlyBlessings) {
    fin.appendChild(h('div', { class: 'bls' }, [
      h('div', { class: 'rule rv' }),
      rv('div', 'bl', [C.heavenlyBlessings.text + ' ', h('b', null, C.heavenlyBlessings.name)]),
      h('div', { class: 'rule rv' }),
    ]));
  }
  var rs = C.rsvp;
  if (rs && (list(rs.lines).length || list(rs.phones).length)) {
    var phones = list(rs.phones);
    var mob = phones.length ? h('div', null, ['Mob.: '].concat(phones.map(function (p, i) {
      return [i ? ', ' : '', h('a', { href: 'tel:' + String(p).replace(/[^\d+]/g, '') }, String(p))];
    }).reduce(function (a, b) { return a.concat(b); }, []))) : null;
    fin.appendChild(rv('div', 'rsvp', [h('div', { class: 'rh' }, 'RSVP')].concat(
      list(rs.lines).map(function (l) { return h('div', null, l); }), [mob])));
  }
  var cd = C.countdown, cdEls = {};
  if (cd && cd.target) {
    var boxes = ['Days', 'Hours', 'Minutes', 'Seconds'].map(function (u) {
      cdEls[u] = h('b', null, '00');
      return h('div', { class: 'cb' }, [cdEls[u], h('i', null, u)]);
    });
    fin.appendChild(h('div', { class: 'cdw' }, [
      rv('div', 'sun', '☀'),
      cd.heading ? rv('h2', 'mh', cd.heading) : null,
      cd.message ? rv('p', 'sub', cd.message) : null,
      rv('div', 'cd', boxes),
    ]));
  }
  fin.appendChild(h('img', { class: 'elp rv', src: img('/img/elephant.png', 900), alt: 'A decorated elephant raising a lotus beside a garden pond', width: 1200, height: 896, loading: 'lazy' }));
  col.appendChild(fin);

  // ---- footer ----
  col.appendChild(h('footer', { class: 'ft' }, [
    h('div', { class: 'mono' }, [bride.name ? bride.name.charAt(0) : '', ' & ', groom.name ? groom.name.charAt(0) : '']),
    C.footer ? h('p', null, C.footer) : null,
  ]));

  // =================== behaviour ===================
  var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var title = document.getElementById('title'), hint = document.getElementById('hint'), toran = document.getElementById('toran');

  // parallax opening
  var ticking = false;
  function onScroll() {
    ticking = false;
    var y = window.scrollY || 0, vh = window.innerHeight;
    toran.style.transform = 'translate(-50%,' + (-y * 0.55) + 'px)';
    title.style.transform = 'translateY(' + (-y * 0.45) + 'px)';
    title.style.opacity = Math.max(0, 1 - y / (vh * 0.55));
    hint.style.opacity = y > 40 ? 0 : 1;
  }
  if (!still) {
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
    onScroll();
  } else {
    window.addEventListener('scroll', function () { title.style.opacity = window.scrollY > window.innerHeight * 0.4 ? 0 : 1; }, { passive: true });
  }

  // bells chime when tapped
  var AC;
  function ctx() { AC = AC || new (window.AudioContext || window.webkitAudioContext)(); if (AC.state === 'suspended') AC.resume(); return AC; }
  function chime(f) {
    try {
      var a = ctx(), t = a.currentTime, m = a.createGain();
      m.gain.value = 0.5; m.connect(a.destination);
      [[1, 1, 2.8], [2.76, 0.5, 1.7], [5.4, 0.28, 1], [8.93, 0.14, 0.5]].forEach(function (p) {
        var o = a.createOscillator(), g = a.createGain();
        o.frequency.value = f * p[0];
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.35 * p[1], t + 0.006);
        g.gain.exponentialRampToValueAtTime(0.0001, t + p[2]);
        o.connect(g); g.connect(m); o.start(t); o.stop(t + p[2] + 0.05);
      });
    } catch (e) {}
  }
  document.querySelectorAll('.bell').forEach(function (b) {
    function ring() {
      b.classList.add('fast'); clearTimeout(b._t);
      b._t = setTimeout(function () { b.classList.remove('fast'); }, 2600);
      chime(+b.dataset.f);
    }
    b.addEventListener('pointerdown', ring);
    b.addEventListener('click', function (e) { if (e.detail === 0) ring(); });
  });

  // countdown
  if (cd && cd.target) {
    var T = new Date(cd.target).getTime();
    var p2 = function (n) { return n < 10 ? '0' + n : '' + n; };
    var tick = function () {
      var s = Math.max(0, Math.floor((T - Date.now()) / 1000));
      cdEls.Days.textContent = p2(Math.floor(s / 86400));
      cdEls.Hours.textContent = p2(Math.floor((s % 86400) / 3600));
      cdEls.Minutes.textContent = p2(Math.floor((s % 3600) / 60));
      cdEls.Seconds.textContent = p2(s % 60);
    };
    tick(); setInterval(tick, 1000);
  }

  // background music (starts on first tap, toggle button bottom-right)
  if (C.music) {
    var audio = new Audio(C.music), btn = document.getElementById('mus'), chosen = false;
    audio.loop = true; audio.volume = 0.5; btn.hidden = false;
    var ui = function () {
      var on = !audio.paused;
      btn.classList.toggle('on', on);
      btn.setAttribute('aria-pressed', on);
      btn.setAttribute('aria-label', on ? 'Turn music off' : 'Turn music on');
    };
    audio.addEventListener('play', ui); audio.addEventListener('pause', ui);
    btn.addEventListener('click', function (e) {
      e.stopPropagation(); chosen = true;
      if (audio.paused) audio.play().catch(function () {}); else audio.pause();
    });
    var first = function (e) {
      if (chosen || (e.target.closest && e.target.closest('#mus'))) return;
      chosen = true; audio.play().catch(function () {});
      ['pointerup', 'keydown'].forEach(function (t) { document.removeEventListener(t, first, true); });
    };
    ['pointerup', 'keydown'].forEach(function (t) { document.addEventListener(t, first, true); });
    document.addEventListener('visibilitychange', function () { if (document.hidden && !audio.paused) { audio.pause(); audio._resume = true; } else if (!document.hidden && audio._resume) { audio._resume = false; audio.play().catch(function () {}); } });
  }

  // reveal on scroll
  var nodes = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window && !still) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.2 });
    nodes.forEach(function (n, i) { n.style.transitionDelay = (i % 6) * 0.08 + 's'; io.observe(n); });
  } else {
    nodes.forEach(function (n) { n.classList.add('in'); });
  }
})();
