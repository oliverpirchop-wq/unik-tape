import { phead, cta, cards, steps, note, rollSvg, glowDemo, mailForm } from './ui.mjs';
import { categories, products } from './products.mjs';

const MAIL = 'info@uniktape.de';
const catOf = (id) => categories.find((k) => k.id === id);

const pimg = (c, p, cls = '') =>
  p.img
    ? `<img class="${cls}" src="${c.asset('img/' + p.img + '.webp')}" alt="${p.name[c.lang]}" width="600" height="600" loading="lazy" decoding="async">`
    : rollSvg(p.roll, p);

const pcard = (c, p, i = 0) => `<a class="pcard reveal" style="--d:${i % 4}" href="${c.url('tape/p/' + p.slug + '.html')}">
  <span class="pcard__img">${pimg(c, p)}</span>
  <span class="pcard__b"><span class="pcard__cat">${catOf(p.cat).name[c.lang]}</span><strong>${p.name[c.lang]}</strong><span class="pcard__code">${p.codes || c.tbc}</span></span>
  <span class="pcard__go">${c.icon('arrow')}</span>
</a>`;

// ---------- Übersicht ----------
const index = (c) => {
  const { T, url, icon, img } = c;
  return `
<section class="hero">
  <img class="hero__bg" src="${c.asset('img/hero-tape.webp')}" alt="" width="1536" height="1024" fetchpriority="high">
  <div class="wrap hero__c">
    <p class="kicker">UNIK TAPE &amp; Tech LLC · Fushë Kosovë</p>
    <h1 class="hero__t">${T('Klebeband aus eigener Produktion. <em>Für Europas Industrie.</em>', 'Tape from our own production. <em>For Europe’s industry.</em>')}</h1>
    <p class="hero__p">${T('Packband, bedrucktes Band, Kreppband, Gewebeband, Gitterband und nachleuchtendes Sicherheitsband: als Marke UNIK TAPE oder als Private Label.', 'Packing, printed, masking, cloth, mesh and photoluminescent safety tape: under the UNIK TAPE brand or as private label.')}</p>
    <p class="btnrow"><a class="btn btn--pri" href="${url('tape/inquiry.html')}">${T('Händleranfrage', 'Dealer inquiry')} ${icon('arrow')}</a><a class="btn btn--ghost" href="${url('tape/products.html')}">${T('Produkte ansehen', 'View products')}</a></p>
    <ul class="hero__facts">
      <li><b><span data-count="1993" data-from="1960">1993</span></b>${T('gegründet', 'founded')}</li>
      <li><b><span data-count="20">20</span></b>${T('Produktlinien', 'product lines')}</li>
      <li><b><span data-count="990">990</span> m</b>${T('max. Rollenlänge', 'max. roll length')}</li>
    </ul>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="sechead reveal">
      <p class="kicker">${T('Sortiment', 'Range')}</p>
      <h2 class="h2">${T('Das richtige Band für jede Aufgabe.', 'The right tape for every job.')}</h2>
      <p class="lead">${T('Schwerpunkt Industrieklebeband: vom Kartonverschluss bis zur Fluchtwegmarkierung.', 'Focus on industrial tape: from carton sealing to escape-route marking.')}</p>
    </div>
    <div class="catgrid">
      ${categories.map((k, i) => `<a class="cat reveal" style="--d:${i % 4};--c:${k.color}" href="${url('tape/products.html')}#${k.id}"><span class="cat__sw"></span><h3>${k.name[c.lang]}</h3><p>${k.tag[c.lang]}</p><span class="cat__n">${((n) => n + ' ' + (n === 1 ? T('Produkt', 'product') : T('Produkte', 'products')))(products.filter((p) => p.cat === k.id).length)}</span><span class="cat__go">${icon('arrow')}</span></a>`).join('\n      ')}
      <a class="cat cat--all reveal" style="--d:3" href="${url('tape/products.html')}"><h3>${T('Alle Produkte', 'All products')}</h3><p>${T('20 Produktlinien mit technischen Daten.', '20 product lines with technical data.')}</p><span class="btn btn--pri">${T('Zur Übersicht', 'View all')} ${icon('arrow')}</span></a>
    </div>
  </div>
</section>

<section class="sec sec--night" id="glow">
  <div class="wrap">
    <div class="sechead reveal">
      <p class="kicker">${T('Nachleuchtendes Sicherheitsband', 'Photoluminescent safety tape')}</p>
      <h2 class="h2">${T('Sichtbar, wenn das Licht ausfällt.', 'Visible when the lights go out.')}</h2>
    </div>
    ${glowDemo(c)}
    <p class="btnrow reveal"><a class="btn btn--ghost" href="${url('tape/p/glow-safety-tape.html')}">${T('Zum Produkt', 'View product')} ${icon('arrow')}</a></p>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="sechead reveal">
      <p class="kicker">${T('Warum UNIK TAPE', 'Why UNIK TAPE')}</p>
      <h2 class="h2">${T('Hersteller, nicht Zwischenhändler.', 'Manufacturer, not middleman.')}</h2>
    </div>
    ${cards(c, [
      ['factory', T('Eigene Produktion', 'Own production'), T('Seit 2008 fertigen wir Pack- und Kreppband selbst, seit 2018 auch Spezialbänder.', 'We have made packing and masking tape ourselves since 2008, and speciality tapes since 2018.'), 'tape/production.html'],
      ['print', T('Private Label', 'Private label'), T('Bedrucktes Band und Klebeprodukte unter Ihrer Marke.', 'Printed tape and adhesive products under your brand.'), 'tape/private-label.html'],
      ['layers', T('Breites Maßprogramm', 'Wide size range'), T('Breiten von 18 bis 150 mm, Längen von 30 bis 990 m.', 'Widths from 18 to 150 mm, lengths from 30 to 990 m.'), 'tape/products.html'],
      ['shield', T('Qualität & Normen', 'Quality & standards'), T('Technische Werte nach ASTM-Prüfverfahren. Zertifikate werden ergänzt.', 'Technical values based on ASTM test methods. Certificates to be added.'), 'tape/quality.html'],
      ['truck', T('Lieferung in Europa', 'Delivery in Europe'), T('Großmengen und Sonderaufträge für Händler und Industrie.', 'Bulk and custom orders for dealers and industry.'), 'tape/production.html'],
      ['users', T('Über 200 Kunden', 'More than 200 clients'), T('Im Kosovo und im Ausland, seit über 30 Jahren im Geschäft.', 'In Kosovo and abroad, in business for more than 30 years.'), 'tape/about.html'],
    ])}
  </div>
</section>

<section class="sec sec--tint">
  <div class="wrap two">
    <figure class="frame reveal">${img('about', T('UNIK TAPE Rollen und verschlossener Karton', 'UNIK TAPE rolls and a sealed carton'), '', 1600, 1067)}<span class="frame__tape"></span></figure>
    <div class="reveal" style="--d:1">
      <p class="kicker">Private Label</p>
      <h2 class="h2">${T('Ihr Logo auf jedem Karton.', 'Your logo on every carton.')}</h2>
      <p class="lead">${T('Bedrucktes BOPP-Packband macht jede Sendung zum Werbeträger und zeigt sofort, wenn ein Paket geöffnet wurde.', 'Printed BOPP packing tape turns every shipment into advertising and shows at once if a parcel has been opened.')}</p>
      <p class="btnrow"><a class="btn btn--dark" href="${url('tape/private-label.html')}">${T('Mehr zu Private Label', 'More on private label')} ${icon('arrow')}</a></p>
    </div>
  </div>
</section>

${cta(c, { title: T('Angebot für Händler anfordern', 'Request a dealer quote'), text: T('Produkt, Menge, Land: mehr brauchen wir für ein erstes Angebot nicht.', 'Product, quantity, country: that is all we need for a first quote.'), btn: T('Händleranfrage stellen', 'Send a dealer inquiry'), to: 'tape/inquiry.html', btn2: MAIL, to2: 'mailto:' + MAIL })}
`;
};

// ---------- Produktübersicht ----------
const list = (c) => {
  const { T } = c;
  return `
${phead(c, { kicker: T('Produkte', 'Products'), title: T('Alle Klebebänder im Überblick', 'All adhesive tapes at a glance'), lead: T('20 Produktlinien in sieben Familien. Jede Produktseite enthält die technischen Daten aus unserem Katalog.', '20 product lines in seven families. Each product page shows the technical data from our catalogue.'), crumbs: [[T('Klebeband', 'Adhesive tape'), 'tape/index.html'], [T('Produkte', 'Products')]] })}
<div class="chips"><div class="wrap chips__in">${categories.map((k) => `<a href="#${k.id}" style="--c:${k.color}"><i></i>${k.name[c.lang]}</a>`).join('')}</div></div>
${categories.map((k, n) => `
<section class="sec sec--cat${n % 2 ? ' sec--tint' : ''}" id="${k.id}">
  <div class="wrap">
    <div class="sechead sechead--row reveal"><div><p class="kicker">${String(n + 1).padStart(2, '0')}</p><h2 class="h2">${k.name[c.lang]}</h2></div><p class="lead">${k.tag[c.lang]}</p></div>
    <div class="pgrid">
      ${products.filter((p) => p.cat === k.id).map((p, i) => pcard(c, p, i)).join('\n      ')}
    </div>
  </div>
</section>`).join('')}
${cta(c, { title: T('Nicht das Passende gefunden?', 'Not found what you need?'), text: T('Wir fertigen auch Sonderabmessungen und Großmengen. Fragen Sie an.', 'We also produce custom sizes and bulk quantities. Just ask.'), btn: T('Händleranfrage', 'Dealer inquiry'), to: 'tape/inquiry.html' })}
`;
};

// ---------- Produktseite ----------
const cell = (c, v) => c.L(v);
const product = (p) => (c) => {
  const { T, L, url, icon } = c;
  const k = catOf(p.cat);
  const tbc = `<span class="tbc">${c.tbc}</span>`;
  const row = (label, v) => `<tr><th scope="row">${label}</th><td>${v == null ? tbc : L(v)}</td></tr>`;
  const related = products.filter((x) => x.cat === p.cat && x !== p).slice(0, 4);
  const more = related.length ? related : products.filter((x) => x.cat === 'packing').slice(0, 4);
  return `
${phead(c, { kicker: k.name[c.lang], title: p.name[c.lang], lead: p.desc[c.lang], crumbs: [[T('Klebeband', 'Adhesive tape'), 'tape/index.html'], [T('Produkte', 'Products'), 'tape/products.html'], [p.name[c.lang]]] })}
<section class="sec">
  <div class="wrap prod">
    <div class="prod__media reveal">
      <div class="prod__img">${pimg(c, p)}</div>
      ${p.codes ? `<p class="prod__codes"><span>${T('Artikelcodes', 'Item codes')}</span>${p.codes}</p>` : ''}
    </div>
    <div class="reveal" style="--d:1">
      <h2 class="h3">${T('Technische Daten', 'Technical data')}</h2>
      <div class="tablewrap"><table class="ptable"><tbody>
        ${row(T('Material', 'Material'), p.material)}
        ${row(T('Breite', 'Width'), p.width)}
        ${row(T('Länge', 'Length'), p.length)}
        ${row(T('Klebkraft', 'Adhesion'), p.adhesion)}
        ${row(T('Temperaturbereich', 'Temperature range'), p.temp)}
        ${row(T('Mindestmenge', 'Minimum order quantity'), null)}
        ${p.colors ? row(T('Farben', 'Colours'), p.colors) : ''}
      </tbody></table></div>
      <p class="btnrow"><a class="btn btn--pri" href="${url('tape/inquiry.html')}?p=${encodeURIComponent(p.name[c.lang])}">${T('Dieses Produkt anfragen', 'Inquire about this product')} ${icon('arrow')}</a></p>
    </div>
  </div>
</section>
${p.glow ? `<section class="sec sec--night"><div class="wrap"><div class="sechead reveal"><p class="kicker">${T('Ausprobieren', 'Try it')}</p><h2 class="h2">${T('Licht aus. Band an.', 'Lights off. Tape on.')}</h2></div>${glowDemo(c)}
<div class="reveal">${note(c, T('Normen (z. B. DIN 67510 für langnachleuchtende Produkte) nennen wir erst, wenn die Prüfnachweise vorliegen.', 'We will only cite standards (e.g. DIN 67510 for photoluminescent products) once test evidence is available.'))}</div></div></section>` : ''}
${p.variants ? `
<section class="sec sec--tint">
  <div class="wrap">
    <div class="sechead reveal"><p class="kicker">${T('Ausführungen', 'Versions')}</p><h2 class="h2">${T('Werte je Ausführung', 'Values by version')}</h2></div>
    <div class="tablewrap reveal" tabindex="0" role="region" aria-label="${T('Tabelle der Ausführungen', 'Table of versions')}"><table class="vtable">
      <thead><tr>${p.variants.head.map((h) => `<th scope="col">${L(h)}</th>`).join('')}</tr></thead>
      <tbody>${p.variants.rows.map((r) => `<tr>${r.map((v, i) => (i === 0 ? `<th scope="row">${cell(c, v)}</th>` : `<td>${cell(c, v)}</td>`)).join('')}</tr>`).join('')}</tbody>
    </table></div>
    <p class="fine reveal">${T('Quelle: UNIK TAPE Produktkatalog 2025. „↑“ bedeutet Mindestwert. Angaben ohne Gewähr, verbindlich ist das Datenblatt zum Angebot.', 'Source: UNIK TAPE product catalogue 2025. “↑” means minimum value. No guarantee is given; the data sheet supplied with the quote is binding.')}</p>
  </div>
</section>` : `
<section class="sec sec--tint"><div class="wrap narrow reveal">${note(c, T('Für dieses Produkt liegen noch keine technischen Daten vor. Alle Felder mit „Angabe folgt“ werden ergänzt, sobald der Hersteller sie liefert.', 'No technical data is available for this product yet. All fields marked “To be confirmed” will be completed once the manufacturer supplies them.'))}</div></section>`}
<section class="sec">
  <div class="wrap">
    <div class="sechead reveal"><h2 class="h2">${T('Weitere Produkte', 'More products')}</h2></div>
    <div class="pgrid">${more.map((x, i) => pcard(c, x, i)).join('')}</div>
  </div>
</section>
`;
};

// ---------- Qualität & Normen ----------
const quality = (c) => {
  const { T } = c;
  const ph = `<span class="tbc">${T('Platzhalter · Nachweis folgt', 'Placeholder · evidence to follow')}</span>`;
  return `
${phead(c, { kicker: T('Qualität & Normen', 'Quality & standards'), title: T('Geprüfte Werte statt großer Worte.', 'Tested values, not big words.'), lead: T('Was wir belegen können, steht hier. Was noch nicht belegt ist, kennzeichnen wir offen als Platzhalter.', 'What we can prove is stated here. What is not yet proven is openly marked as a placeholder.'), crumbs: [[T('Klebeband', 'Adhesive tape'), 'tape/index.html'], [T('Qualität & Normen', 'Quality & standards')]] })}
<section class="sec">
  <div class="wrap">
    ${cards(c, [
      ['chart', T('Messbare Kennwerte', 'Measurable values'), T('Schälkraft, Zugfestigkeit, Dehnung und Dicke sind je Ausführung auf den Produktseiten ausgewiesen.', 'Peel adhesion, tensile strength, elongation and thickness are listed per version on the product pages.')],
      ['doc', T('Genannte Prüfverfahren', 'Test methods cited'), T('Unser Katalog gibt die Werte nach ASTM D-3330 (Schälkraft) und ASTM D-3759 (Zugfestigkeit, Bruchdehnung) an.', 'Our catalogue states values according to ASTM D-3330 (peel adhesion) and ASTM D-3759 (tensile strength, elongation at break).')],
      ['factory', T('Kontrolle in der Fertigung', 'Control in production'), T('Beschreibung der Prüfschritte in Wareneingang, Produktion und Endkontrolle: Angabe folgt.', 'Description of inspection steps at goods-in, production and final inspection: to be confirmed.')],
    ])}
  </div>
</section>
<section class="sec sec--tint">
  <div class="wrap">
    <div class="sechead reveal">
      <p class="kicker">${T('DIN- und ISO-Konformität', 'DIN and ISO conformity')}</p>
      <h2 class="h2">${T('Normen und Zertifikate', 'Standards and certificates')}</h2>
    </div>
    <div class="reveal">${note(c, T('Wichtig: Die folgende Tabelle ist ein Platzhalter. Normnummern und Zertifikate werden erst als erfüllt ausgewiesen, wenn die Nachweise (Zertifikat, Prüfbericht) vorliegen. Bis dahin gilt keine dieser Normen als zugesichert.', 'Important: the table below is a placeholder. Standards and certificates will only be shown as fulfilled once the evidence (certificate, test report) is available. Until then, none of these standards is to be taken as assured.'))}</div>
    <div class="tablewrap reveal" tabindex="0" role="region" aria-label="${T('Normen-Tabelle', 'Standards table')}"><table class="vtable vtable--left">
      <thead><tr><th scope="col">${T('Norm (Beispiel)', 'Standard (example)')}</th><th scope="col">${T('Gegenstand', 'Subject')}</th><th scope="col">${T('Betrifft', 'Applies to')}</th><th scope="col">Status</th></tr></thead>
      <tbody>
        <tr><th scope="row">ISO 9001</th><td>${T('Qualitätsmanagementsystem', 'Quality management system')}</td><td>${T('Unternehmen', 'Company')}</td><td>${ph}</td></tr>
        <tr><th scope="row">DIN 67510</th><td>${T('Langnachleuchtende Pigmente und Produkte', 'Photoluminescent pigments and products')}</td><td>${T('Nachleuchtendes Sicherheitsband', 'Photoluminescent safety tape')}</td><td>${ph}</td></tr>
        <tr><th scope="row">${T('Weitere Normen', 'Further standards')}</th><td>${c.tbc}</td><td>${c.tbc}</td><td>${ph}</td></tr>
      </tbody>
    </table></div>
  </div>
</section>
<section class="sec">
  <div class="wrap">
    <div class="sechead reveal"><p class="kicker">${T('Unterlagen', 'Documents')}</p><h2 class="h2">${T('Dokumente für Ihren Einkauf', 'Documents for your purchasing')}</h2></div>
    ${cards(c, [
      ['doc', T('Technische Datenblätter', 'Technical data sheets'), T('Je Produkt, zusammen mit dem Angebot. Download hier: Angabe folgt.', 'Per product, supplied with the quote. Download here: to be confirmed.')],
      ['shield', T('Zertifikate', 'Certificates'), T('Werden hier veröffentlicht, sobald sie vorliegen.', 'Will be published here as soon as they are available.')],
      ['box', T('Muster', 'Samples'), T('Musterrollen zur eigenen Prüfung: Bedingungen folgen.', 'Sample rolls for your own testing: terms to follow.')],
    ])}
  </div>
</section>
${cta(c, { title: T('Sie brauchen einen bestimmten Nachweis?', 'Need a specific proof?'), text: T('Schreiben Sie uns, welche Norm oder welches Dokument Ihr Einkauf verlangt.', 'Tell us which standard or document your purchasing department requires.'), btn: T('Anfrage senden', 'Send inquiry'), to: 'tape/inquiry.html' })}
`;
};

// ---------- Private Label ----------
const privateLabel = (c) => {
  const { T, img, url, icon } = c;
  return `
${phead(c, { kicker: 'Private Label', title: T('Ihr Band. Ihre Marke.', 'Your tape. Your brand.'), lead: T('Wir bedrucken Packband mit Ihrem Logo und fertigen Klebeprodukte unter Ihrer Handelsmarke.', 'We print packing tape with your logo and manufacture adhesive products under your own label.'), crumbs: [[T('Klebeband', 'Adhesive tape'), 'tape/index.html'], ['Private Label']] })}
<section class="sec">
  <div class="wrap two">
    <div class="reveal">
      <h2 class="h2">${T('Bedrucktes Packband', 'Printed packing tape')}</h2>
      <p class="lead">${T('Jeder Karton trägt Ihren Namen: Das stärkt die Marke und macht Manipulation sichtbar.', 'Every carton carries your name: this strengthens the brand and makes tampering visible.')}</p>
      <div class="tablewrap"><table class="ptable"><tbody>
        <tr><th scope="row">${T('Basis', 'Base')}</th><td>${T('BOPP-Packband 45, 50 oder 55 µm', 'BOPP packing tape 45, 50 or 55 µm')}</td></tr>
        <tr><th scope="row">${T('Breite', 'Width')}</th><td>18–150 mm</td></tr>
        <tr><th scope="row">${T('Länge', 'Length')}</th><td>30–990 m</td></tr>
        <tr><th scope="row">${T('Druckfarben', 'Print colours')}</th><td><span class="tbc">${c.tbc}</span></td></tr>
        <tr><th scope="row">${T('Mindestmenge', 'Minimum order quantity')}</th><td><span class="tbc">${c.tbc}</span></td></tr>
        <tr><th scope="row">${T('Lieferzeit', 'Lead time')}</th><td><span class="tbc">${c.tbc}</span></td></tr>
      </tbody></table></div>
      <p class="btnrow"><a class="btn btn--dark" href="${url('tape/p/printed-bopp.html')}">${T('Zum Produkt', 'View product')} ${icon('arrow')}</a></p>
    </div>
    <figure class="frame reveal" style="--d:1">${img('about', T('Bedrucktes UNIK TAPE Packband auf einem Karton', 'Printed UNIK TAPE packing tape on a carton'), '', 1600, 1067)}<span class="frame__tape"></span></figure>
  </div>
</section>
<section class="sec sec--tint">
  <div class="wrap">
    <div class="sechead reveal"><p class="kicker">${T('Ablauf', 'Process')}</p><h2 class="h2">${T('In vier Schritten zum eigenen Band', 'Four steps to your own tape')}</h2></div>
    ${steps([
      [T('Anfrage', 'Inquiry'), T('Sie nennen Produkt, Abmessung, Menge und Lieferland und senden Ihr Logo.', 'You tell us product, size, quantity and destination country and send your logo.')],
      [T('Angebot & Druckvorlage', 'Quote & artwork'), T('Sie erhalten Preis und eine Druckvorlage zur Freigabe.', 'You receive a price and an artwork proof for approval.')],
      [T('Produktion', 'Production'), T('Nach Freigabe fertigen wir Ihr Band in Fushë Kosovë.', 'After approval we manufacture your tape in Fushë Kosovë.')],
      [T('Lieferung', 'Delivery'), T('Versand an Ihr Lager in Europa.', 'Shipment to your warehouse in Europe.')],
    ])}
  </div>
</section>
${cta(c, { title: T('Eigenes Band anfragen', 'Ask for your own tape'), text: T('Schicken Sie uns Ihr Logo und die gewünschte Menge.', 'Send us your logo and the quantity you need.'), btn: T('Händleranfrage', 'Dealer inquiry'), to: 'tape/inquiry.html' })}
`;
};

// ---------- Produktion & Lieferung ----------
const production = (c) => {
  const { T, img } = c;
  return `
${phead(c, { kicker: T('Produktion & Lieferung', 'Production & delivery'), title: T('Gefertigt in Fushë Kosovë. Geliefert in Europa.', 'Made in Fushë Kosovë. Delivered in Europe.'), lead: T('Seit 2008 produzieren wir selbst. 2016 kam eine neue Produktionsanlage hinzu, 2018 die Spezialbänder.', 'We have been manufacturing ourselves since 2008. A new production line followed in 2016, speciality tapes in 2018.'), crumbs: [[T('Klebeband', 'Adhesive tape'), 'tape/index.html'], [T('Produktion & Lieferung', 'Production & delivery')]] })}
<section class="sec">
  <div class="wrap two">
    <figure class="frame reveal">${img('manufacturing', T('Mitarbeiterin in der Produktionshalle', 'Employee in the production hall'), '', 1600, 1067)}<span class="frame__tape"></span></figure>
    <div class="reveal" style="--d:1">
      <p class="kicker">${T('Fertigung', 'Manufacturing')}</p>
      <h2 class="h2">${T('Vom Mutterrollen-Zuschnitt bis zur fertigen Rolle', 'From slitting the jumbo roll to the finished roll')}</h2>
      <p>${T('Wir schneiden, wickeln, bedrucken und konfektionieren Klebeband am eigenen Standort. So können wir Breiten von 18 bis 150 mm und Längen von 30 bis 990 m liefern, als Hand- oder Maschinenrolle.', 'We slit, rewind, print and pack adhesive tape at our own site. This lets us supply widths from 18 to 150 mm and lengths from 30 to 990 m, as hand or machine rolls.')}</p>
      <ul class="ticks">
        <li>${c.icon('check')}${T('Packband, Kreppband, Gewebeband', 'Packing, masking and cloth tape')}</li>
        <li>${c.icon('check')}${T('Bedrucktes Band und Private Label', 'Printed tape and private label')}</li>
        <li>${c.icon('check')}${T('Großmengen und Sonderaufträge', 'Bulk and custom orders')}</li>
      </ul>
    </div>
  </div>
</section>
<section class="sec sec--tint">
  <div class="wrap">
    <div class="gallery">
      <figure class="reveal">${img('hero-tape-s', T('Klebebandrollen auf dem Förderband', 'Tape rolls on the conveyor'), '', 800, 533)}</figure>
      <figure class="reveal" style="--d:1">${img('machine-s', T('Wickelmaschine', 'Rewinding machine'), '', 800, 800)}</figure>
      <figure class="reveal" style="--d:2">${img('boxes-s', T('Verschlossene Kartons im Lager', 'Sealed cartons in the warehouse'), '', 800, 560)}</figure>
    </div>
  </div>
</section>
<section class="sec">
  <div class="wrap">
    <div class="sechead reveal"><p class="kicker">${T('Lieferung', 'Delivery')}</p><h2 class="h2">${T('Logistik für europäische Kunden', 'Logistics for European customers')}</h2></div>
    <div class="tablewrap reveal"><table class="ptable"><tbody>
      <tr><th scope="row">${T('Liefergebiet', 'Delivery area')}</th><td>${T('Kosovo und Europa; Länderliste: Angabe folgt', 'Kosovo and Europe; list of countries: to be confirmed')}</td></tr>
      <tr><th scope="row">${T('Lieferbedingungen (Incoterms)', 'Delivery terms (Incoterms)')}</th><td><span class="tbc">${c.tbc}</span></td></tr>
      <tr><th scope="row">${T('Lieferzeit', 'Lead time')}</th><td><span class="tbc">${c.tbc}</span></td></tr>
      <tr><th scope="row">${T('Verpackungseinheit / Palette', 'Packaging unit / pallet')}</th><td><span class="tbc">${c.tbc}</span></td></tr>
      <tr><th scope="row">${T('Zoll und Ursprungsnachweis', 'Customs and proof of origin')}</th><td><span class="tbc">${c.tbc}</span></td></tr>
      <tr><th scope="row">${T('Mindestmenge', 'Minimum order quantity')}</th><td><span class="tbc">${c.tbc}</span></td></tr>
    </tbody></table></div>
  </div>
</section>
${cta(c, { title: T('Großes Projekt geplant?', 'Planning a large project?'), text: T('Wir bearbeiten Großmengen und Sonderaufträge. Schreiben Sie uns.', 'We handle bulk and custom orders. Get in touch.'), btn: T('Händleranfrage', 'Dealer inquiry'), to: 'tape/inquiry.html' })}
`;
};

// ---------- Über uns ----------
const about = (c) => {
  const { T, img } = c;
  const tl = [
    ['1993', T('Der Anfang', 'The beginning'), T('Xhelal Neziri gründet ein Handelsunternehmen für Importwaren von AERO aus Celje, Slowenien. Das erste Produkt: Aero Tape.', 'Xhelal Neziri founds a trading company for imported goods from AERO in Celje, Slovenia. The first product: Aero Tape.')],
    ['2008', T('Eigene Produktion', 'Own production'), T('Start der lokalen Fertigung von Packband und Kreppband.', 'Local production of packing and masking tape begins.')],
    ['2016', T('UNIK TAPE entsteht', 'UNIK TAPE is born'), T('Gründung der Firma UNIK TAPE mit einer neuen Produktionsanlage.', 'The company UNIK TAPE is founded with a new production line.')],
    ['2018', T('Spezialbänder', 'Speciality tapes'), T('Erweiterung um bedrucktes Band, Kreppbänder für höhere Temperaturen, Gewebe- und Gitterband.', 'Expansion into printed tape, masking tapes for higher temperatures, cloth and mesh tape.')],
    [T('Heute', 'Today'), T('Über 200 Kunden', 'More than 200 clients'), T('Wir beliefern Kunden im Kosovo und im Ausland und bauen den Vertrieb in Europa aus.', 'We supply clients in Kosovo and abroad and are expanding sales in Europe.')],
  ];
  return `
${phead(c, { kicker: T('Über uns', 'About us'), title: T('Immer auf der Suche nach der besseren Lösung.', 'Always in pursuit of innovation.'), lead: T('UNIK TAPE &amp; Tech LLC ist ein Unternehmen aus Fushë Kosovë, das seit über 30 Jahren mit Klebeband arbeitet: erst als Händler, heute als Hersteller.', 'UNIK TAPE &amp; Tech LLC is a company from Fushë Kosovë that has worked with adhesive tape for more than 30 years: first as a trader, today as a manufacturer.'), crumbs: [[T('Klebeband', 'Adhesive tape'), 'tape/index.html'], [T('Über uns', 'About us')]] })}
<section class="sec">
  <div class="wrap two">
    <div class="reveal">
      <p class="kicker">${T('Wer wir sind', 'Who we are')}</p>
      <h2 class="h2">${T('Hersteller und Händler von Klebeband', 'Manufacturer and distributor of adhesive tape')}</h2>
      <p>${T('Wir produzieren Packband, Kreppband und Gewebeband, bedrucken Band für Handelsmarken und vertreiben Klebeprodukte im Kosovo und im Ausland.', 'We produce packing, masking and cloth tape, print tape for private labels and distribute adhesive products in Kosovo and abroad.')}</p>
      <div class="stats stats--light">
        <div class="stat"><span class="stat__n"><span data-count="1993" data-from="1950">1993</span></span><span class="stat__l">${T('Gründung', 'founded')}</span></div>
        <div class="stat"><span class="stat__n"><span data-count="200">200</span>+</span><span class="stat__l">${T('Kunden', 'clients')}</span></div>
      </div>
    </div>
    <figure class="frame reveal" style="--d:1">${img('history', T('Mitarbeiter an der Klebebandmaschine', 'Employee at the tape machine'), '', 1600, 1066)}<span class="frame__tape"></span></figure>
  </div>
</section>
<section class="sec sec--dark">
  <div class="wrap">
    <div class="sechead reveal"><p class="kicker">${T('Unsere Geschichte', 'Our story')}</p><h2 class="h2">${T('Von 1993 bis heute', 'From 1993 to today')}</h2></div>
    <ol class="tl">
      ${tl.map(([y, h, p], i) => `<li class="reveal" style="--d:${i % 3}"><span class="tl__y">${y}</span><h3>${h}</h3><p>${p}</p></li>`).join('\n      ')}
    </ol>
  </div>
</section>
<section class="sec">
  <div class="wrap">
    <div class="sechead reveal"><p class="kicker">${T('Was wir tun', 'What we do')}</p><h2 class="h2">${T('Drei Standbeine', 'Three pillars')}</h2></div>
    ${cards(c, [
      ['factory', T('Herstellung', 'Manufacturing'), T('Packband, Kreppband, Gewebeband und Spezialbänder aus eigener Fertigung.', 'Packing, masking, cloth and speciality tapes from our own production.'), 'tape/production.html'],
      ['print', 'Private Label', T('Bedrucktes Band und Klebeprodukte unter der Marke des Kunden.', 'Printed tape and adhesive products under the customer’s brand.'), 'tape/private-label.html'],
      ['truck', T('Vertrieb & Handel', 'Distribution & trade'), T('Lieferung im Kosovo und ins Ausland.', 'Supply across Kosovo and abroad.'), 'tape/inquiry.html'],
    ])}
  </div>
</section>
${cta(c, { title: T('Lernen wir uns kennen', 'Let’s get to know each other'), text: T('Wir freuen uns über Anfragen von Händlern und Industriekunden aus ganz Europa.', 'We welcome inquiries from dealers and industrial customers across Europe.'), btn: T('Kontakt', 'Contact'), to: 'tape/contact.html' })}
`;
};

// ---------- Händleranfrage ----------
const COUNTRIES = {
  de: ['Deutschland', 'Österreich', 'Schweiz', 'Albanien', 'Belgien', 'Bosnien und Herzegowina', 'Bulgarien', 'Dänemark', 'Frankreich', 'Griechenland', 'Italien', 'Kosovo', 'Kroatien', 'Montenegro', 'Niederlande', 'Nordmazedonien', 'Polen', 'Rumänien', 'Schweden', 'Serbien', 'Slowenien', 'Spanien', 'Tschechien', 'Ungarn', 'Vereinigtes Königreich', 'Anderes Land'],
  en: ['Germany', 'Austria', 'Switzerland', 'Albania', 'Belgium', 'Bosnia and Herzegovina', 'Bulgaria', 'Croatia', 'Czech Republic', 'Denmark', 'France', 'Greece', 'Hungary', 'Italy', 'Kosovo', 'Montenegro', 'Netherlands', 'North Macedonia', 'Poland', 'Romania', 'Serbia', 'Slovenia', 'Spain', 'Sweden', 'United Kingdom', 'Other country'],
};
const inquiry = (c) => {
  const { T } = c;
  return `
${phead(c, { kicker: T('Für Händler und Einkäufer', 'For dealers and buyers'), title: T('Händleranfrage', 'Dealer inquiry'), lead: T('Produkt, Menge, Land: Mit diesen drei Angaben erstellen wir Ihr Angebot.', 'Product, quantity, country: with these three details we prepare your quote.'), crumbs: [[T('Klebeband', 'Adhesive tape'), 'tape/index.html'], [T('Händleranfrage', 'Dealer inquiry')]] })}
<section class="sec">
  <div class="wrap formwrap">
    ${mailForm(c, {
      to: MAIL, subject: T('Händleranfrage Klebeband', 'Dealer inquiry adhesive tape'),
      fields: [
        ['product', T('Produkt', 'Product'), 'select', true, [...products.map((p) => p.name[c.lang]), T('Private Label / eigener Druck', 'Private label / custom print'), T('Mehrere Produkte / Sonstiges', 'Several products / other')]],
        ['qty', T('Menge', 'Quantity'), 'text', true, T('z. B. 5.000 Rollen 48 mm × 66 m', 'e.g. 5,000 rolls 48 mm × 66 m')],
        ['country', T('Lieferland', 'Destination country'), 'select', true, COUNTRIES[c.lang]],
        ['company', T('Firma', 'Company'), 'text', true],
        ['name', T('Ansprechpartner', 'Contact person'), 'text', true],
        ['email', T('E-Mail', 'E-mail'), 'email', true],
        ['phone', T('Telefon', 'Phone'), 'tel', false],
        ['msg', T('Nachricht (Abmessungen, Farbe, Druck, Liefertermin)', 'Message (sizes, colour, print, delivery date)'), 'textarea', false],
      ],
      submit: T('Anfrage per E-Mail senden', 'Send inquiry by e-mail'),
      hint: T(`Der Knopf öffnet Ihr E-Mail-Programm mit einer vorbereiteten Nachricht an ${MAIL}. Es wird nichts auf dieser Website gespeichert.`, `The button opens your e-mail program with a prepared message to ${MAIL}. Nothing is stored on this website.`),
    })}
    <aside class="aside reveal" style="--d:1">
      <h2 class="h3">${T('So geht es weiter', 'What happens next')}</h2>
      <ol class="mini">
        <li>${T('Wir prüfen Ihre Anfrage und klären offene Punkte.', 'We review your inquiry and clarify open points.')}</li>
        <li>${T('Sie erhalten Angebot und Datenblatt.', 'You receive a quote and data sheet.')}</li>
        <li>${T('Auf Wunsch senden wir Muster.', 'On request we send samples.')}</li>
      </ol>
      <h2 class="h3">${T('Direkter Draht', 'Direct line')}</h2>
      <p><a href="mailto:${MAIL}">${c.icon('mail')} ${MAIL}</a><br><a href="tel:+38344782000">${c.icon('phone')} +383 44 782 000</a><br><a href="tel:+38344783000">${c.icon('phone')} +383 44 783 000</a></p>
      <p class="fine">${T('Mo–Fr 8–17 Uhr (MEZ)', 'Mon–Fri 8 am–5 pm (CET)')}</p>
    </aside>
  </div>
</section>`;
};

// ---------- Kontakt ----------
const contact = (c) => {
  const { T, icon } = c;
  return `
${phead(c, { kicker: T('Kontakt', 'Contact'), title: T('Sprechen Sie mit uns.', 'Talk to us.'), lead: T('Fragen zu Produkten, Mustern oder Lieferung? Wir sind montags bis freitags für Sie da.', 'Questions about products, samples or delivery? We are here for you Monday to Friday.'), crumbs: [[T('Klebeband', 'Adhesive tape'), 'tape/index.html'], [T('Kontakt', 'Contact')]] })}
<section class="sec">
  <div class="wrap">
    <div class="grid g4 contact">
      <div class="card reveal"><span class="card__ic">${icon('pin')}</span><h3>${T('Adresse', 'Address')}</h3><p>UNIK TAPE &amp; Tech LLC<br>Miradi, Fushë Kosovë<br>12000, Kosovo</p><p><a class="tlink" href="https://www.openstreetmap.org/search?query=Miradi%2C%20Fush%C3%AB%20Kosov%C3%AB" target="_blank" rel="noopener noreferrer">${T('Auf der Karte ansehen', 'View on map')}</a></p></div>
      <div class="card reveal" style="--d:1"><span class="card__ic">${icon('phone')}</span><h3>${T('Telefon', 'Phone')}</h3><p><a href="tel:+38344782000">+383 44 782 000</a><br><a href="tel:+38344783000">+383 44 783 000</a></p></div>
      <div class="card reveal" style="--d:2"><span class="card__ic">${icon('mail')}</span><h3>${T('E-Mail', 'E-mail')}</h3><p><a href="mailto:${MAIL}">${MAIL}</a></p><p><a class="tlink" href="${c.url('tape/inquiry.html')}">${T('Zur Händleranfrage', 'Go to dealer inquiry')}</a></p></div>
      <div class="card reveal" style="--d:3"><span class="card__ic">${icon('clock')}</span><h3>${T('Öffnungszeiten', 'Opening hours')}</h3><p>${T('Montag–Freitag: 8–17 Uhr<br>Samstag, Sonntag: geschlossen', 'Monday–Friday: 8 am–5 pm<br>Saturday, Sunday: closed')}</p></div>
    </div>
  </div>
</section>
<section class="sec sec--tint">
  <div class="wrap formwrap">
    ${mailForm(c, {
      to: MAIL, subject: T('Kontaktanfrage über die Website', 'Contact request via website'),
      fields: [
        ['name', 'Name', 'text', true],
        ['email', T('E-Mail', 'E-mail'), 'email', true],
        ['phone', T('Telefon', 'Phone'), 'tel', false],
        ['company', T('Firma', 'Company'), 'text', false],
        ['msg', T('Nachricht', 'Message'), 'textarea', true],
      ],
      submit: T('Nachricht per E-Mail senden', 'Send message by e-mail'),
      hint: T('Öffnet Ihr E-Mail-Programm. Es wird nichts auf dieser Website gespeichert.', 'Opens your e-mail program. Nothing is stored on this website.'),
    })}
    <aside class="aside reveal" style="--d:1">
      <h2 class="h3">Social Media</h2>
      <p><a href="https://www.facebook.com/uniktapeks" target="_blank" rel="noopener noreferrer">Facebook</a><br><a href="https://www.instagram.com/unik.tape/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
      <h2 class="h3">Business Services</h2>
      <p>${T('Fragen zu Outsourcing und BPO beantwortet das Team von Labeat Data &amp; Ops | Hajdari Group.', 'Questions about outsourcing and BPO are answered by the team at Labeat Data &amp; Ops | Hajdari Group.')}</p>
      <p><a class="tlink" href="${c.url('business/contact.html')}">${T('Zum Business-Kontakt', 'Go to business contact')}</a></p>
    </aside>
  </div>
</section>`;
};

const pg = (path, de, en, dde, den, body, extra = {}) => ({ path, section: 'tape', title: { de, en }, desc: { de: dde, en: den }, body, ...extra });

export const tapePages = [
  pg('tape/index.html', 'Industrieklebeband vom Hersteller', 'Industrial adhesive tape from the manufacturer', 'Packband, bedrucktes Band, Kreppband, Gewebeband, Gitterband und nachleuchtendes Sicherheitsband von UNIK TAPE.', 'Packing, printed, masking, cloth, mesh and photoluminescent safety tape by UNIK TAPE.', index, { tapeLine: true }),
  pg('tape/products.html', 'Produkte', 'Products', 'Alle Klebebänder von UNIK TAPE mit technischen Daten.', 'All UNIK TAPE adhesive tapes with technical data.', list),
  ...products.map((p) => pg('tape/p/' + p.slug + '.html', p.name.de, p.name.en, p.desc.de, p.desc.en, product(p))),
  pg('tape/quality.html', 'Qualität & Normen', 'Quality & standards', 'Prüfverfahren, Normen und Zertifikate bei UNIK TAPE (teilweise Platzhalter).', 'Test methods, standards and certificates at UNIK TAPE (partly placeholders).', quality),
  pg('tape/private-label.html', 'Private Label & eigener Druck', 'Private label & custom print', 'Bedrucktes Packband und Klebeprodukte unter Ihrer Marke.', 'Printed packing tape and adhesive products under your brand.', privateLabel),
  pg('tape/production.html', 'Produktion & Lieferung', 'Production & delivery', 'Eigene Fertigung in Fushë Kosovë, Lieferung in Europa.', 'Own production in Fushë Kosovë, delivery in Europe.', production),
  pg('tape/about.html', 'Über uns', 'About us', 'Die Geschichte von UNIK TAPE seit 1993.', 'The story of UNIK TAPE since 1993.', about),
  pg('tape/inquiry.html', 'Händleranfrage', 'Dealer inquiry', 'Anfrageformular für Händler: Produkt, Menge, Land.', 'Inquiry form for dealers: product, quantity, country.', inquiry),
  pg('tape/contact.html', 'Kontakt', 'Contact', 'Adresse, Telefon, E-Mail und Öffnungszeiten von UNIK TAPE.', 'Address, phone, e-mail and opening hours of UNIK TAPE.', contact),
];
