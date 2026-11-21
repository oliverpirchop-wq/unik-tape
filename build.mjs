// Statischer Seitengenerator für UNIK TAPE (keine Abhängigkeiten).
// Aufruf:  node build.mjs   -> erzeugt /de, /en, index.html, 404.html, robots.txt
import { mkdirSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { sitePages } from './src/site.mjs';
import { tapePages } from './src/tape.mjs';
import { bizPages } from './src/business.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const LANGS = ['de', 'en'];
export const CONTACT = {
  tape: { mail: 'info@uniktape.de', tel1: '+383 44 782 000', tel2: '+383 44 783 000' },
  biz: { mail: 'info@hajdari-group.com', wa: '+383 49 505 090', waLink: 'https://wa.me/38349505090' },
};

const NAV = {
  tape: [
    ['tape/index.html', 'Übersicht', 'Overview'],
    ['tape/products.html', 'Produkte', 'Products'],
    ['tape/quality.html', 'Qualität & Normen', 'Quality & standards'],
    ['tape/private-label.html', 'Private Label', 'Private label'],
    ['tape/production.html', 'Produktion & Lieferung', 'Production & delivery'],
    ['tape/about.html', 'Über uns', 'About us'],
    ['tape/inquiry.html', 'Händleranfrage', 'Dealer inquiry'],
    ['tape/contact.html', 'Kontakt', 'Contact'],
  ],
  biz: [
    ['business/index.html', 'Übersicht', 'Overview'],
    ['business/services.html', 'Dienstleistungen', 'Services'],
    ['business/industries.html', 'Branchen', 'Industries'],
    ['business/why-kosovo.html', 'Warum Kosovo?', 'Why Kosovo?'],
    ['business/pricing.html', 'Preise', 'Pricing'],
    ['business/privacy-quality.html', 'Datenschutz & Qualität', 'Data protection & quality'],
    ['business/faq.html', 'FAQ', 'FAQ'],
    ['business/contact.html', 'Kontakt', 'Contact'],
  ],
};

const ICONS = {
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  check: '<path d="M4 12.5l5 5L20 6.5"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>',
  pin: '<path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.800 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z"/>',
  box: '<path d="M3 8l9-5 9 5v8l-9 5-9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
  print: '<path d="M7 8V3h10v5M7 17H4V9h16v8h-3"/><rect x="7" y="14" width="10" height="7"/>',
  truck: '<path d="M2 6h11v10H2zM13 9h5l3 3v4h-8z"/><circle cx="6.500" cy="17.500" r="1.800"/><circle cx="17" cy="17.500" r="1.800"/>',
  factory: '<path d="M3 21V10l6 4v-4l6 4V5h6v16z"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.500 8-8 9-4.500-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  users: '<circle cx="9" cy="8" r="3.500"/><path d="M2.500 20c.500-4 3-6 6.500-6s6 2 6.500 6"/><circle cx="17.500" cy="9" r="2.500"/><path d="M17 14c3 0 4.500 2 5 5"/>',
  headset: '<path d="M4 14v-2a8 8 0 0116 0v2"/><rect x="2.500" y="13" width="4" height="6" rx="1.500"/><rect x="17.500" y="13" width="4" height="6" rx="1.500"/><path d="M20 19c0 2-2 2.500-5 2.500"/>',
  calc: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 12h2M12 12h0M16 12h0M8 16h2M12 16h0M16 16h0"/>',
  folder: '<path d="M3 6h7l2 2h9v11H3z"/>',
  chart: '<path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-7"/>',
  screen: '<rect x="3" y="4" width="18" height="12" rx="1.500"/><path d="M8 20h8M12 16v4"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5"/>',
  home: '<path d="M3 11l9-7 9 7v9h-6v-6H9v6H3z"/>',
  cart: '<path d="M3 4h3l2.500 11h10L21 7H7"/><circle cx="10" cy="19" r="1.500"/><circle cx="17" cy="19" r="1.500"/>',
  doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
  moon: '<path d="M20 14.500A8.500 8.500 0 019.500 4 7 7 0 1020 14.500z"/>',
};
export const icon = (n, cls = '') =>
  `<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.700" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${(ICONS[n] || '').replace(/\.(\d)00/g, '.$1')}</svg>`;

function context(lang, path) {
  const depth = (lang + '/' + path).split('/').length - 1;
  const root = '../'.repeat(depth);
  const T = (de, en) => (lang === 'de' ? de : en);
  const L = (v) => (v == null ? T('Angabe folgt', 'To be confirmed') : typeof v === 'object' ? v[lang] : lang === 'en' ? String(v).replace(/(\d),(\d)/g, '$1.$2') : v);
  return {
    lang, path, root, T, L, icon,
    url: (to) => root + lang + '/' + to,
    asset: (p) => root + 'assets/' + p,
    img: (name, alt, cls = '', w = 800, h = 533) =>
      `<img class="${cls}" src="${root}assets/img/${name}.webp" alt="${alt}" width="${w}" height="${h}" loading="lazy" decoding="async">`,
    tbc: T('Angabe folgt', 'To be confirmed'),
  };
}

function layout(c, page) {
  const { T, url, asset, lang, path } = c;
  const sec = page.section; // home | tape | biz
  const other = lang === 'de' ? 'en' : 'de';
  const title = page.title[lang] + ' · ' + (sec === 'biz' ? 'Labeat Data & Ops | Hajdari Group' : 'UNIK TAPE');
  const contactTo = sec === 'biz' ? 'business/contact.html' : 'tape/contact.html';
  const main = [
    ['index.html', T('Start', 'Home'), sec === 'home'],
    ['tape/index.html', T('Klebeband', 'Adhesive tape'), sec === 'tape' && path !== 'tape/contact.html'],
    ['business/index.html', 'Business Services', sec === 'biz' && path !== 'business/contact.html'],
    [contactTo, T('Kontakt', 'Contact'), path === contactTo],
  ];
  const sub = NAV[sec];
  const subActive = (p) => p === path || (p === 'tape/products.html' && path.startsWith('tape/p/'));
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow, noarchive">
<title>${title}</title>
<meta name="description" content="${page.desc[lang]}">
<meta name="theme-color" content="#191a47">
<link rel="icon" href="${asset('img/favicon.png')}">
<link rel="preload" href="${asset('fonts/archivo-var.woff2')}" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${asset('css/style.css')}">
<script>document.documentElement.className='js'</script>
<link rel="alternate" hreflang="${other}" href="${c.root + other + '/' + path}">
</head>
<body class="t-${sec}${page.bodyClass ? ' ' + page.bodyClass : ''}">
<a class="skip" href="#main">${T('Zum Inhalt springen', 'Skip to content')}</a>
<div class="draft" role="note"><span class="draft__dot"></span>${T('Entwurf · Vorschau, Inhalte noch nicht final', 'Draft · preview, content not final')}</div>
<header class="hdr" data-hdr>
  <div class="hdr__in">
    <a class="logo" href="${url('index.html')}" aria-label="UNIK TAPE – ${T('Startseite', 'Home')}"><img src="${asset('img/logo-white.png')}" alt="UNIK TAPE" width="209" height="63"></a>
    <nav class="nav" id="nav" aria-label="${T('Hauptmenü', 'Main menu')}">
      ${main.map(([p, l, a]) => `<a href="${url(p)}"${a ? ' class="is-active" aria-current="true"' : ''}>${l}</a>`).join('\n      ')}
      ${sub ? `<div class="nav__sub">${sub.map(([p, de, en]) => `<a href="${url(p)}">${T(de, en)}</a>`).join('')}</div>` : ''}
    </nav>
    <div class="lang" role="group" aria-label="${T('Sprache', 'Language')}">
      <a href="${c.root + 'de/' + path}" lang="de" hreflang="de"${lang === 'de' ? ' class="is-active" aria-current="true"' : ''}>DE</a>
      <a href="${c.root + 'en/' + path}" lang="en" hreflang="en"${lang === 'en' ? ' class="is-active" aria-current="true"' : ''}>EN</a>
    </div>
    <button class="burger" type="button" aria-controls="nav" aria-expanded="false" aria-label="${T('Menü', 'Menu')}"><span></span><span></span></button>
  </div>
  ${sub ? `<div class="subnav"><div class="subnav__in">
    <span class="subnav__brand">${sec === 'biz' ? 'Labeat Data &amp; Ops <i>|</i> Hajdari Group' : T('Klebeband', 'Adhesive tape')}</span>
    ${sub.map(([p, de, en]) => `<a href="${url(p)}"${subActive(p) ? ' class="is-active" aria-current="page"' : ''}>${T(de, en)}</a>`).join('\n    ')}
  </div></div>` : ''}
</header>
<main id="main"${page.tapeLine ? ' data-tapeline' : ''}>
${page.body(c)}
</main>
<footer class="ftr">
  <div class="wrap ftr__grid">
    <div>
      <img src="${asset('img/logo-white.png')}" alt="UNIK TAPE" width="209" height="63" class="ftr__logo" loading="lazy">
      <p>${T('UNIK TAPE &amp; Tech LLC · Hersteller von Industrieklebeband in Fushë Kosovë, Kosovo. Gegründet 1993.', 'UNIK TAPE &amp; Tech LLC · manufacturer of industrial adhesive tape in Fushë Kosovë, Kosovo. Founded 1993.')}</p>
      <p class="ftr__small">Miradi, Fushë Kosovë, 12000, Kosovo<br><a href="tel:${CONTACT.tape.tel1.replace(/ /g, '')}">${CONTACT.tape.tel1}</a> · <a href="mailto:${CONTACT.tape.mail}">${CONTACT.tape.mail}</a></p>
    </div>
    <div><h3>${T('Klebeband', 'Adhesive tape')}</h3><ul>${NAV.tape.map(([p, de, en]) => `<li><a href="${url(p)}">${T(de, en)}</a></li>`).join('')}</ul></div>
    <div><h3>Business Services</h3><ul>${NAV.biz.map(([p, de, en]) => `<li><a href="${url(p)}">${T(de, en)}</a></li>`).join('')}</ul></div>
    <div><h3>${T('Rechtliches', 'Legal')}</h3><ul>
      <li><a href="${url('imprint.html')}">${T('Impressum', 'Imprint')}</a></li>
      <li><a href="${url('privacy.html')}">${T('Datenschutz', 'Privacy policy')}</a></li>
      <li><a href="https://www.facebook.com/uniktapeks" rel="noopener noreferrer" target="_blank">Facebook</a></li>
      <li><a href="https://www.instagram.com/unik.tape/" rel="noopener noreferrer" target="_blank">Instagram</a></li>
    </ul></div>
  </div>
  <div class="wrap ftr__bar"><span>© 2026 UNIK TAPE &amp; Tech LLC</span><span>${T('Entwurf · nicht zur Veröffentlichung bestimmt', 'Draft · not for publication')}</span></div>
</footer>
<script src="${asset('js/main.js')}" defer></script>
</body>
</html>
`;
}

// ---------- Build ----------
for (const l of LANGS) if (existsSync(join(ROOT, l))) rmSync(join(ROOT, l), { recursive: true });
const pages = [...sitePages, ...tapePages, ...bizPages];
let n = 0;
for (const lang of LANGS) {
  for (const page of pages) {
    const out = join(ROOT, lang, page.path);
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, layout(context(lang, page.path), page));
    n++;
  }
}

const head = `<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex, nofollow, noarchive"><title>UNIK TAPE</title>`;
const mini = `body{margin:0;min-height:100vh;display:grid;place-items:center;background:#191a47;color:#fff;font:18px/1.5 system-ui,sans-serif;text-align:center}a{color:#ffca05;margin:0 .6em}`;
writeFileSync(join(ROOT, 'index.html'), `<!doctype html><html lang="de"><head>${head}
<script>location.replace(((navigator.language||'de').toLowerCase().indexOf('de')===0?'de':'en')+'/index.html')</script>
<noscript><meta http-equiv="refresh" content="0; url=de/index.html"></noscript><style>${mini}</style></head>
<body><p>UNIK TAPE<br><a href="de/index.html">Deutsch</a><a href="en/index.html">English</a></p></body></html>
`);
writeFileSync(join(ROOT, '404.html'), `<!doctype html><html lang="de"><head>${head}<style>${mini}</style></head>
<body><p>404 · Seite nicht gefunden / Page not found<br><a href="./de/index.html" id="d">Deutsch</a><a href="./en/index.html" id="e">English</a></p>
<script>var b=location.pathname.split('/').slice(0,location.hostname.indexOf('github.io')>-1?2:1).join('/')+'/';d.href=b+'de/index.html';e.href=b+'en/index.html'</script></body></html>
`);
writeFileSync(join(ROOT, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
writeFileSync(join(ROOT, '.nojekyll'), '');
console.log(`OK: ${n} Seiten (${pages.length} je Sprache)`);
