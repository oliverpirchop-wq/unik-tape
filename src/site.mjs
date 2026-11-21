import { phead, cta, note } from './ui.mjs';
import { categories } from './products.mjs';

const home = (c) => {
  const { T, url, icon, img } = c;
  return `
<section class="doors" aria-label="${T('Unsere zwei Bereiche', 'Our two divisions')}">
  <a class="door door--tape" href="${url('tape/index.html')}">
    <img class="door__bg" src="${c.asset('img/hero-tape.webp')}" alt="" width="1536" height="1024" fetchpriority="high">
    <div class="door__c">
      <p class="kicker">UNIK TAPE &amp; Tech LLC · ${T('Hersteller seit', 'Manufacturer since')} <span data-count="1993" data-from="1960">1993</span></p>
      <h1 class="door__t">${T('Industrie&shy;klebeband,<br>das <em>hält.</em>', 'Industrial tape<br>that <em>holds.</em>')}</h1>
      <p class="door__p">${T('Packband, bedrucktes Band, Krepp-, Gewebe- und Sicherheitsband: produziert im Kosovo, geliefert nach ganz Europa.', 'Packing, printed, masking, cloth and safety tape: made in Kosovo, delivered across Europe.')}</p>
      <span class="btn btn--pri">${T('Zum Klebeband', 'Explore tape')} ${icon('arrow')}</span>
    </div>
    <span class="door__no">01</span>
  </a>
  <a class="door door--biz" href="${url('business/index.html')}">
    <img class="door__bg" src="${c.asset('img/biz.webp')}" alt="" width="1600" height="1067">
    <div class="door__c">
      <p class="kicker">Labeat Data &amp; Ops | Hajdari Group</p>
      <h2 class="door__t">${T('Business Services<br>für <em>DACH.</em>', 'Business services<br>for <em>DACH.</em>')}</h2>
      <p class="door__p">${T('Wir übernehmen Ihre Geschäftsprozesse. Sie konzentrieren sich auf Ihr Wachstum.', 'We take over your business processes. You focus on your growth.')}</p>
      <span class="btn btn--pri">${T('Zu den Business Services', 'Explore business services')} ${icon('arrow')}</span>
    </div>
    <span class="door__no">02</span>
  </a>
</section>

<section class="sec sec--dark stats-sec">
  <div class="wrap">
    <div class="stats">
      <div class="stat reveal"><span class="stat__n"><span data-count="1993" data-from="1950">1993</span></span><span class="stat__l">${T('gegründet von Xhelal Neziri', 'founded by Xhelal Neziri')}</span></div>
      <div class="stat reveal" style="--d:1"><span class="stat__n"><span data-count="2008" data-from="1993">2008</span></span><span class="stat__l">${T('Start der eigenen Produktion', 'own production started')}</span></div>
      <div class="stat reveal" style="--d:2"><span class="stat__n"><span data-count="200">200</span>+</span><span class="stat__l">${T('Kunden im In- und Ausland', 'clients at home and abroad')}</span></div>
      <div class="stat reveal" style="--d:3"><span class="stat__n"><span data-count="150">150</span> mm</span><span class="stat__l">${T('Bandbreiten von 18 bis 150 mm', 'tape widths from 18 to 150 mm')}</span></div>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap two">
    <div class="reveal">
      <p class="kicker">${T('Das Unternehmen', 'The company')}</p>
      <h2 class="h2">${T('Vom Händler zum Hersteller.', 'From trader to manufacturer.')}</h2>
      <p class="lead">${T('1993 begann Xhelal Neziri mit dem Handel von Klebeband aus Slowenien. Seit 2008 produzieren wir selbst, seit 2016 als UNIK TAPE mit eigener Maschinentechnik in Fushë Kosovë.', 'In 1993 Xhelal Neziri started trading adhesive tape from Slovenia. We have been manufacturing ourselves since 2008, and since 2016 as UNIK TAPE with our own machinery in Fushë Kosovë.')}</p>
      <p>${T('Heute beliefern wir über 200 Kunden mit Packband, Kreppband, Gewebeband und bedrucktem Band, auf Wunsch unter Ihrer eigenen Marke.', 'Today we supply more than 200 clients with packing, masking, cloth and printed tape, under your own brand if you wish.')}</p>
      <p class="btnrow"><a class="btn btn--dark" href="${url('tape/about.html')}">${T('Unsere Geschichte', 'Our story')} ${icon('arrow')}</a><a class="btn btn--line" href="${url('tape/products.html')}">${T('Alle Produkte', 'All products')}</a></p>
    </div>
    <figure class="frame reveal" style="--d:1">${img('machine', T('Schneid- und Wickelmaschine für Klebeband', 'Slitting and rewinding machine for adhesive tape'), '', 1024, 1024)}<span class="frame__tape"></span></figure>
  </div>
</section>

<section class="sec sec--tint">
  <div class="wrap">
    <div class="sechead reveal">
      <p class="kicker">${T('Sortiment', 'Range')}</p>
      <h2 class="h2">${T('Sieben Bandfamilien für Industrie und Handel.', 'Seven tape families for industry and trade.')}</h2>
    </div>
    <div class="catgrid">
      ${categories.map((k, i) => `<a class="cat reveal" style="--d:${i % 4};--c:${k.color}" href="${url('tape/products.html')}#${k.id}"><span class="cat__sw"></span><h3>${k.name[c.lang]}</h3><p>${k.tag[c.lang]}</p><span class="cat__go">${icon('arrow')}</span></a>`).join('\n      ')}
      <a class="cat cat--all reveal" style="--d:3" href="${url('tape/products.html')}"><h3>${T('Alle Produkte', 'All products')}</h3><p>${T('20 Produktlinien mit technischen Daten.', '20 product lines with technical data.')}</p><span class="btn btn--pri">${T('Zur Übersicht', 'View all')} ${icon('arrow')}</span></a>
    </div>
  </div>
</section>

<section class="sec bizband">
  <div class="wrap two">
    <div class="reveal">
      <p class="kicker">Business Services · Labeat Data &amp; Ops | Hajdari Group</p>
      <h2 class="h2">${T('Ihr deutschsprachiges Team in Prishtina.', 'Your German-speaking team in Prishtina.')}</h2>
      <p class="lead">${T('Customer Service, Buchhaltung, Backoffice, Sales Support, Digital Operations und HR: als BPO-Partner für Unternehmen in Deutschland, Österreich und der Schweiz.', 'Customer service, accounting, back office, sales support, digital operations and HR: as a BPO partner for companies in Germany, Austria and Switzerland.')}</p>
      <ul class="ticks">
        <li>${icon('check')}${T('Deutsch auf C1-Niveau und Englisch', 'German at C1 level, plus English')}</li>
        <li>${icon('check')}${T('Gleiche Zeitzone (MEZ)', 'Same time zone (CET)')}</li>
        <li>${icon('check')}${T('15–35 € pro Stunde, kostenloses Erstgespräch', '€15–35 per hour, free initial call')}</li>
      </ul>
      <p class="btnrow"><a class="btn btn--pri" href="${url('business/index.html')}">${T('Business Services ansehen', 'View business services')} ${icon('arrow')}</a></p>
    </div>
    <figure class="frame frame--biz reveal" style="--d:1">${img('biz', T('Geschäftspartner im Gespräch', 'Business partners in conversation'), '', 1600, 1067)}</figure>
  </div>
</section>

${cta(c, { title: T('Sie sind Händler oder Einkäufer?', 'Are you a dealer or buyer?'), text: T('Nennen Sie uns Produkt, Menge und Lieferland. Wir melden uns mit einem Angebot.', 'Tell us the product, quantity and destination country. We will come back to you with a quote.'), btn: T('Händleranfrage stellen', 'Send a dealer inquiry'), to: 'tape/inquiry.html', btn2: T('Kontakt', 'Contact'), to2: 'tape/contact.html' })}
`;
};

const legal = (kind) => (c) => {
  const { T } = c;
  const imp = kind === 'imprint';
  const rows = imp
    ? [
        [T('Anbieter', 'Provider'), 'UNIK TAPE &amp; Tech LLC<br>Miradi, Fushë Kosovë, 12000, Kosovo'],
        [T('Kontakt', 'Contact'), 'info@uniktape.de · +383 44 782 000 · +383 44 783 000'],
        [T('Vertretungsberechtigt', 'Authorised representative'), c.tbc],
        [T('Handelsregister / Registernummer', 'Commercial register / registration no.'), c.tbc],
        [T('Umsatzsteuer- bzw. Steuernummer', 'VAT / tax number'), c.tbc],
        [T('Verantwortlich für den Inhalt', 'Responsible for content'), c.tbc],
        [T('Business Services', 'Business services'), `Labeat Data &amp; Ops | Hajdari Group, Prishtina · info@hajdari-group.com<br>${T('Rechtsform, Anschrift und Register', 'Legal form, address and register')}: ${c.tbc}`],
      ]
    : [
        [T('Verantwortlicher', 'Controller'), 'UNIK TAPE &amp; Tech LLC, Miradi, Fushë Kosovë, 12000, Kosovo · info@uniktape.de'],
        [T('Hosting', 'Hosting'), T('Diese Vorschau liegt auf GitHub Pages. Beim Aufruf verarbeitet GitHub technisch notwendige Zugriffsdaten (z. B. IP-Adresse). Endgültiger Hoster: Angabe folgt.', 'This preview is hosted on GitHub Pages. GitHub processes technically necessary access data (e.g. IP address) when the site is requested. Final host: to be confirmed.')],
        [T('Cookies und Tracking', 'Cookies and tracking'), T('Diese Seite setzt keine Cookies, nutzt kein Tracking und lädt keine Schriften oder Skripte von Drittanbietern.', 'This site sets no cookies, uses no tracking and loads no fonts or scripts from third parties.')],
        [T('Formulare', 'Forms'), T('Die Formulare öffnen Ihr eigenes E-Mail-Programm (mailto). Es werden keine Daten auf dieser Website gespeichert.', 'The forms open your own e-mail program (mailto). No data is stored on this website.')],
        [T('Ihre Rechte, Rechtsgrundlagen, Speicherdauer', 'Your rights, legal bases, retention'), c.tbc],
        [T('EU-Vertreter nach Art. 27 DSGVO', 'EU representative under Art. 27 GDPR'), c.tbc],
      ];
  return `
${phead(c, { kicker: T('Rechtliches', 'Legal'), title: imp ? T('Impressum', 'Imprint') : T('Datenschutz', 'Privacy policy'), lead: T('Platzhalter. Der rechtlich geprüfte Text wird vor der Veröffentlichung ergänzt.', 'Placeholder. The legally reviewed text will be added before publication.') })}
<section class="sec">
  <div class="wrap narrow">
    ${note(c, T('Entwurf: Diese Seite ist ein Platzhalter und ersetzt keine Rechtsberatung. Fehlende Angaben sind mit „Angabe folgt“ markiert.', 'Draft: this page is a placeholder and no substitute for legal advice. Missing details are marked “To be confirmed”.'))}
    <div class="tablewrap"><table class="ptable"><tbody>
      ${rows.map(([a, b]) => `<tr><th scope="row">${a}</th><td>${b}</td></tr>`).join('\n      ')}
    </tbody></table></div>
  </div>
</section>`;
};

export const sitePages = [
  { path: 'index.html', section: 'home', tapeLine: true, bodyClass: 'is-home',
    title: { de: 'Industrieklebeband & Business Services', en: 'Industrial adhesive tape & business services' },
    desc: { de: 'UNIK TAPE & Tech LLC: Hersteller von Industrieklebeband im Kosovo seit 1993. Dazu Business Services für DACH von Labeat Data & Ops | Hajdari Group.', en: 'UNIK TAPE & Tech LLC: manufacturer of industrial adhesive tape in Kosovo since 1993. Plus business services for DACH by Labeat Data & Ops | Hajdari Group.' },
    body: home },
  { path: 'imprint.html', section: 'home', title: { de: 'Impressum', en: 'Imprint' }, desc: { de: 'Impressum (Platzhalter).', en: 'Imprint (placeholder).' }, body: legal('imprint') },
  { path: 'privacy.html', section: 'home', title: { de: 'Datenschutz', en: 'Privacy policy' }, desc: { de: 'Datenschutzerklärung (Platzhalter).', en: 'Privacy policy (placeholder).' }, body: legal('privacy') },
];
