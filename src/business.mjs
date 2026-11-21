import { phead, cta, cards, steps, note, mailForm } from './ui.mjs';

const MAIL = 'info@hajdari-group.com';
const WA = 'https://wa.me/38349505090';
const WA_TXT = '+383 49 505 090';
const BRAND = 'Labeat Data &amp; Ops | Hajdari Group';

const services = (T) => [
  ['headset', 'Customer Service', T('Kundenanfragen per E-Mail, Telefon und Chat, Ticketbearbeitung, Bestell- und Retourenabwicklung.', 'Customer requests by e-mail, phone and chat, ticket handling, order and returns processing.'),
    T(['E-Mail-, Telefon- und Chat-Support', 'Ticketsysteme und Helpdesk', 'Bestellungen, Retouren, Reklamationen'], ['E-mail, phone and chat support', 'Ticket systems and helpdesk', 'Orders, returns, complaints'])],
  ['calc', 'Accounting &amp; Finance', T('Vorbereitende Buchhaltung, Belegerfassung, Rechnungsstellung und Mahnwesen.', 'Preparatory bookkeeping, document entry, invoicing and dunning.'),
    T(['Belegerfassung und Kontierung', 'Rechnungen und offene Posten', 'Mahnwesen und Zahlungsabgleich'], ['Document entry and account assignment', 'Invoices and open items', 'Dunning and payment reconciliation'])],
  ['folder', 'Backoffice', T('Datenpflege, Dokumentenmanagement, Terminkoordination und allgemeine Sachbearbeitung.', 'Data maintenance, document management, scheduling and general administration.'),
    T(['Datenerfassung und Datenpflege', 'Dokumente und Ablage', 'Termine und Korrespondenz'], ['Data entry and maintenance', 'Documents and filing', 'Scheduling and correspondence'])],
  ['chart', 'Sales Support', T('Lead-Recherche, CRM-Pflege, Angebotsvorbereitung und Terminvereinbarung für Ihren Vertrieb.', 'Lead research, CRM maintenance, quote preparation and appointment setting for your sales team.'),
    T(['Lead-Recherche und Qualifizierung', 'CRM-Pflege', 'Angebote und Terminierung'], ['Lead research and qualification', 'CRM maintenance', 'Quotes and appointment setting'])],
  ['screen', 'Digital Operations', T('Produktdatenpflege, Shop- und Marktplatzbetreuung, Content-Pflege und Reporting.', 'Product data maintenance, shop and marketplace support, content upkeep and reporting.'),
    T(['Produktdaten und Listings', 'Shop- und Marktplatzpflege', 'Auswertungen und Reports'], ['Product data and listings', 'Shop and marketplace upkeep', 'Analyses and reports'])],
  ['users', 'HR &amp; Operations', T('Bewerbermanagement, Personaladministration und Unterstützung im operativen Tagesgeschäft.', 'Applicant management, HR administration and support in day-to-day operations.'),
    T(['Bewerbermanagement', 'Personaladministration', 'Operative Unterstützung'], ['Applicant management', 'HR administration', 'Operational support'])],
];

const benefits = (T) => [
  ['chat', T('Deutsch C1 + Englisch', 'German C1 + English'), T('Ihre Kunden und Kollegen sprechen mit Menschen, die Deutsch sicher beherrschen.', 'Your customers and colleagues talk to people with a confident command of German.')],
  ['clock', T('Gleiche Zeitzone (MEZ)', 'Same time zone (CET)'), T('Wir arbeiten, wenn Sie arbeiten: ohne Zeitverschiebung.', 'We work when you work: no time difference.')],
  ['users', T('Persönliches Teammanagement', 'Personal team management'), T('Ein fester Ansprechpartner führt Ihr Team und berichtet an Sie.', 'A dedicated contact leads your team and reports to you.')],
  ['layers', T('Skalierbare Teams', 'Scalable teams'), T('Starten Sie klein und wachsen Sie nach Bedarf.', 'Start small and grow as needed.')],
  ['bolt', T('Zwei Internetleitungen + USV', 'Two internet lines + UPS'), T('Redundante Anbindung und unterbrechungsfreie Stromversorgung sichern den Betrieb.', 'Redundant connectivity and an uninterruptible power supply keep operations running.')],
  ['shield', T('Qualitätskontrolle', 'Quality control'), T('Laufende Prüfung der Ergebnisse statt einmaliger Abnahme.', 'Ongoing checks of results instead of a one-off sign-off.')],
];

const industries = (T) => [
  ['cart', 'E-Commerce', T('Kundenservice, Bestell- und Retourenabwicklung, Produktdatenpflege.', 'Customer service, order and returns handling, product data maintenance.')],
  ['home', T('Immobilien', 'Real estate'), T('Mieteranfragen, Terminierung von Besichtigungen, Objekt- und Dokumentenpflege.', 'Tenant inquiries, scheduling viewings, property and document maintenance.')],
  ['truck', T('Logistik', 'Logistics'), T('Sendungsverfolgung, Disposition im Backoffice, Kunden- und Fahrerkommunikation.', 'Shipment tracking, back-office dispatch support, customer and driver communication.')],
  ['shield', T('Versicherungen', 'Insurance'), T('Schaden- und Vertragsbearbeitung im Backoffice, Kundenkorrespondenz.', 'Back-office claims and policy processing, customer correspondence.')],
  ['calc', T('Steuerkanzleien', 'Tax firms'), T('Belegerfassung, vorbereitende Buchhaltung, Mandantenkommunikation.', 'Document entry, preparatory bookkeeping, client communication.')],
  ['screen', 'IT / SaaS', T('First-Level-Support, Onboarding-Unterstützung, Ticket- und Datenpflege.', 'First-level support, onboarding assistance, ticket and data maintenance.')],
];

const process = (T) => [
  [T('Erstgespräch', 'Initial call'), T('30 Minuten, kostenlos. Wir klären Aufgaben, Umfang und Ziele.', '30 minutes, free of charge. We clarify tasks, scope and goals.')],
  [T('Testprojekt', 'Trial project'), T('5 Stunden zu je 15 €. Sie sehen unsere Arbeit, bevor Sie sich binden.', '5 hours at €15 each. You see our work before you commit.')],
  [T('Angebot', 'Quote'), T('Sie erhalten ein Angebot, passend zu Aufgaben und Teamgröße.', 'You receive a quote tailored to tasks and team size.')],
  [T('Monatsvertrag', 'Monthly contract'), T('Zusammenarbeit auf Monatsbasis statt langer Bindung.', 'Cooperation on a monthly basis instead of long lock-in.')],
  [T('Laufende Qualitätskontrolle', 'Ongoing quality control'), T('Wir prüfen die Ergebnisse fortlaufend und berichten an Sie.', 'We check results continuously and report to you.')],
];

const crumb = (T, l) => [['Business Services', 'business/index.html'], [l]];
const bizCta = (c) => cta(c, { title: c.T('30 Minuten, die sich lohnen.', '30 minutes well spent.'), text: c.T('Im kostenlosen Erstgespräch klären wir, welche Prozesse wir für Sie übernehmen können.', 'In a free initial call we clarify which processes we can take over for you.'), btn: c.T('Gespräch vereinbaren', 'Book a call'), to: 'business/contact.html', btn2: 'WhatsApp', to2: WA });

// ---------- Übersicht ----------
const index = (c) => {
  const { T, url, icon } = c;
  return `
<section class="hero hero--biz">
  <img class="hero__bg" src="${c.asset('img/biz.webp')}" alt="" width="1600" height="1067" fetchpriority="high">
  <div class="wrap hero__c">
    <p class="kicker">${BRAND} · Prishtina</p>
    <h1 class="hero__t">${T('Wir übernehmen Ihre Geschäftsprozesse. <em>Sie konzentrieren sich auf Ihr Wachstum.</em>', 'We take over your business processes. <em>You focus on your growth.</em>')}</h1>
    <p class="hero__p">${T('Ihr deutschsprachiger BPO-Partner aus Prishtina für Unternehmen in Deutschland, Österreich und der Schweiz.', 'Your German-speaking BPO partner from Prishtina for companies in Germany, Austria and Switzerland.')}</p>
    <p class="btnrow"><a class="btn btn--pri" href="${url('business/contact.html')}">${T('Kostenloses Erstgespräch', 'Free initial call')} ${icon('arrow')}</a><a class="btn btn--ghost" href="${url('business/services.html')}">${T('Leistungen ansehen', 'View services')}</a></p>
    <ul class="hero__facts">
      <li><b>C1</b>${T('Deutschniveau', 'German level')}</li>
      <li><b><span data-count="15">15</span>–<span data-count="35">35</span> €</b>${T('pro Stunde', 'per hour')}</li>
      <li><b><span data-count="30">30</span> min</b>${T('Erstgespräch gratis', 'free initial call')}</li>
    </ul>
  </div>
</section>
<section class="sec">
  <div class="wrap">
    <div class="sechead reveal"><p class="kicker">${T('Leistungen', 'Services')}</p><h2 class="h2">${T('Sechs Bereiche, ein Team.', 'Six areas, one team.')}</h2></div>
    ${cards(c, services(T).map(([ic, h, p]) => [ic, h, p, 'business/services.html']))}
  </div>
</section>
<section class="sec sec--dark">
  <div class="wrap">
    <div class="sechead reveal"><p class="kicker">${T('Vorteile', 'Benefits')}</p><h2 class="h2">${T('Warum Unternehmen mit uns arbeiten', 'Why companies work with us')}</h2></div>
    ${cards(c, benefits(T))}
  </div>
</section>
<section class="sec">
  <div class="wrap">
    <div class="sechead reveal"><p class="kicker">${T('Ablauf', 'Process')}</p><h2 class="h2">${T('Vom ersten Gespräch zum eingespielten Team', 'From first call to a well-rehearsed team')}</h2></div>
    ${steps(process(T))}
  </div>
</section>
<section class="sec sec--tint">
  <div class="wrap">
    <div class="sechead sechead--row reveal"><div><p class="kicker">${T('Branchen', 'Industries')}</p><h2 class="h2">${T('Erfahrung, die zu Ihrer Branche passt', 'Experience that fits your industry')}</h2></div><p class="lead"><a class="tlink" href="${url('business/industries.html')}">${T('Alle Branchen ansehen', 'View all industries')}</a></p></div>
    <div class="tags reveal">${industries(T).map(([ic, h]) => `<span>${icon(ic)}${h}</span>`).join('')}</div>
  </div>
</section>
${bizCta(c)}
`;
};

const servicesPage = (c) => {
  const { T, icon } = c;
  return `
${phead(c, { kicker: T('Dienstleistungen', 'Services'), title: T('Prozesse abgeben. Kontrolle behalten.', 'Hand over processes. Keep control.'), lead: T('Sie bestimmen Aufgaben und Qualität, wir stellen das Team und die tägliche Umsetzung.', 'You define tasks and quality, we provide the team and day-to-day delivery.'), crumbs: crumb(T, T('Dienstleistungen', 'Services')) })}
<section class="sec">
  <div class="wrap">
    <div class="svc">
      ${services(T).map(([ic, h, p, li], i) => `<article class="svc__i reveal" style="--d:${i % 2}"><span class="card__ic">${icon(ic)}</span><div><h2 class="h3">${h}</h2><p>${p}</p><ul class="ticks">${li.map((x) => `<li>${icon('check')}${x}</li>`).join('')}</ul></div></article>`).join('\n      ')}
    </div>
    <div class="reveal">${note(c, T('Der genaue Leistungsumfang wird im Erstgespräch festgelegt. Die Aufzählungen sind Beispiele.', 'The exact scope is defined in the initial call. The lists are examples.'))}</div>
  </div>
</section>
<section class="sec sec--dark">
  <div class="wrap">
    <div class="sechead reveal"><p class="kicker">${T('Vorteile', 'Benefits')}</p><h2 class="h2">${T('Was Sie von uns erwarten können', 'What you can expect from us')}</h2></div>
    ${cards(c, benefits(T))}
  </div>
</section>
${bizCta(c)}
`;
};

const industriesPage = (c) => {
  const { T } = c;
  return `
${phead(c, { kicker: T('Branchen', 'Industries'), title: T('Sechs Branchen, die wir verstehen.', 'Six industries we understand.'), lead: T('Jede Branche hat eigene Abläufe und eine eigene Sprache. Wir arbeiten uns in Ihre ein.', 'Every industry has its own processes and its own language. We learn yours.'), crumbs: crumb(T, T('Branchen', 'Industries')) })}
<section class="sec">
  <div class="wrap">
    ${cards(c, industries(T))}
    <div class="reveal">${note(c, T('Ihre Branche ist nicht dabei? Sprechen Sie uns an: Viele Abläufe lassen sich übertragen. Referenzen: Angabe folgt.', 'Your industry is not listed? Talk to us: many processes are transferable. References: to be confirmed.'))}</div>
  </div>
</section>
${bizCta(c)}
`;
};

const whyKosovo = (c) => {
  const { T } = c;
  return `
${phead(c, { kicker: T('Warum Kosovo?', 'Why Kosovo?'), title: T('Nah an DACH. In Sprache, Zeit und Arbeitsweise.', 'Close to DACH. In language, time and working style.'), lead: T('Prishtina liegt rund zwei Flugstunden von den großen deutschsprachigen Städten entfernt und in derselben Zeitzone.', 'Prishtina is roughly a two-hour flight from the major German-speaking cities and in the same time zone.'), crumbs: crumb(T, T('Warum Kosovo?', 'Why Kosovo?')) })}
<section class="sec">
  <div class="wrap">
    ${cards(c, [
      ['chat', T('Deutsch ist verbreitet', 'German is widely spoken'), T('Viele Menschen im Kosovo haben in Deutschland, Österreich oder der Schweiz gelebt oder Familie dort. Unser Team arbeitet auf C1-Niveau.', 'Many people in Kosovo have lived in Germany, Austria or Switzerland or have family there. Our team works at C1 level.')],
      ['clock', T('Gleiche Zeitzone', 'Same time zone'), T('Mitteleuropäische Zeit: Ihr Team ist zu Ihren Bürozeiten erreichbar.', 'Central European Time: your team is available during your office hours.')],
      ['globe', T('Euro als Währung', 'Euro as currency'), T('Im Kosovo wird mit dem Euro bezahlt. Sie rechnen ohne Wechselkursrisiko.', 'The euro is used in Kosovo. You calculate without exchange-rate risk.')],
      ['users', T('Junge, gut ausgebildete Fachkräfte', 'Young, well-educated talent'), T('Der Kosovo hat eine der jüngsten Bevölkerungen Europas und viele motivierte Berufseinsteiger.', 'Kosovo has one of the youngest populations in Europe and many motivated graduates.')],
      ['chart', T('Wirtschaftliche Stundensätze', 'Economical hourly rates'), T('15–35 € pro Stunde bei persönlicher Betreuung durch ein festes Team.', '€15–35 per hour with personal support from a dedicated team.')],
      ['bolt', T('Stabile Infrastruktur', 'Stable infrastructure'), T('Zwei getrennte Internetleitungen und eine USV halten das Büro auch bei Störungen arbeitsfähig.', 'Two separate internet lines and a UPS keep the office working even during outages.')],
    ])}
  </div>
</section>
<section class="sec sec--tint">
  <div class="wrap narrow reveal">
    <h2 class="h2">${T('Offen gesagt', 'To be frank')}</h2>
    <p class="lead">${T('Der Kosovo ist kein EU-Mitglied. Für den Datenschutz heißt das: Die Zusammenarbeit braucht eine saubere vertragliche Grundlage. Wie wir das lösen, steht unter „Datenschutz &amp; Qualität“.', 'Kosovo is not an EU member. For data protection this means cooperation needs a sound contractual basis. How we handle this is explained under “Data protection &amp; quality”.')}</p>
    <p class="btnrow"><a class="btn btn--dark" href="${c.url('business/privacy-quality.html')}">${T('Datenschutz &amp; Qualität', 'Data protection &amp; quality')} ${c.icon('arrow')}</a></p>
  </div>
</section>
${bizCta(c)}
`;
};

const pricing = (c) => {
  const { T, icon, url } = c;
  return `
${phead(c, { kicker: T('Preise', 'Pricing'), title: T('Klare Stundensätze. Keine Überraschungen.', 'Clear hourly rates. No surprises.'), lead: T('Sie zahlen für geleistete Stunden. Der Satz richtet sich nach Aufgabe und Qualifikation.', 'You pay for hours worked. The rate depends on the task and the qualification required.'), crumbs: crumb(T, T('Preise', 'Pricing')) })}
<section class="sec">
  <div class="wrap">
    <div class="prices">
      <div class="price reveal">
        <h2 class="h3">${T('Testprojekt', 'Trial project')}</h2>
        <p class="price__n"><span data-count="15">15</span> €<small>/ h</small></p>
        <p>${T('5 Stunden zum Kennenlernen: insgesamt 75 €.', '5 hours to get to know us: €75 in total.')}</p>
        <ul class="ticks"><li>${icon('check')}${T('Echte Aufgabe aus Ihrem Alltag', 'A real task from your daily business')}</li><li>${icon('check')}${T('Ohne weitere Verpflichtung', 'No further obligation')}</li></ul>
        <a class="btn btn--line" href="${url('business/contact.html')}">${T('Testprojekt anfragen', 'Request trial project')}</a>
      </div>
      <div class="price price--main reveal" style="--d:1">
        <span class="price__tag">${T('Standard', 'Standard')}</span>
        <h2 class="h3">${T('Laufende Zusammenarbeit', 'Ongoing cooperation')}</h2>
        <p class="price__n"><span data-count="15">15</span>–<span data-count="35">35</span> €<small>/ h</small></p>
        <p>${T('Je nach Leistung und Qualifikation. Abrechnung im Monatsvertrag.', 'Depending on service and qualification. Billed under a monthly contract.')}</p>
        <ul class="ticks"><li>${icon('check')}${T('Persönliches Teammanagement', 'Personal team management')}</li><li>${icon('check')}${T('Laufende Qualitätskontrolle', 'Ongoing quality control')}</li><li>${icon('check')}${T('Team wächst mit Ihrem Bedarf', 'Team grows with your needs')}</li></ul>
        <a class="btn btn--pri" href="${url('business/contact.html')}">${T('Angebot anfordern', 'Request a quote')} ${icon('arrow')}</a>
      </div>
      <div class="price reveal" style="--d:2">
        <h2 class="h3">Enterprise</h2>
        <p class="price__n price__n--txt">${T('Individuell', 'Custom')}</p>
        <p>${T('Für größere Teams und umfangreiche Prozesse erstellen wir ein individuelles Angebot.', 'For larger teams and extensive processes we prepare a custom quote.')}</p>
        <ul class="ticks"><li>${icon('check')}${T('Eigene Teamstruktur', 'Dedicated team structure')}</li><li>${icon('check')}${T('Abgestimmte Abläufe und Berichte', 'Agreed processes and reporting')}</li></ul>
        <a class="btn btn--line" href="${url('business/contact.html')}">${T('Gespräch vereinbaren', 'Book a call')}</a>
      </div>
    </div>
    <p class="fine reveal">${T('Alle Preise netto. Zuordnung der Stundensätze zu einzelnen Leistungen, Mindestabnahme und Kündigungsfrist: Angabe folgt.', 'All prices net. Allocation of hourly rates to individual services, minimum hours and notice period: to be confirmed.')}</p>
  </div>
</section>
<section class="sec sec--tint">
  <div class="wrap">
    <div class="sechead reveal"><p class="kicker">${T('Ablauf', 'Process')}</p><h2 class="h2">${T('So starten wir', 'How we start')}</h2></div>
    ${steps(process(T))}
  </div>
</section>
${bizCta(c)}
`;
};

const privacyQuality = (c) => {
  const { T } = c;
  const ph = `<span class="tbc">${T('Platzhalter · Unterlage folgt', 'Placeholder · document to follow')}</span>`;
  return `
${phead(c, { kicker: T('Datenschutz & Qualität', 'Data protection & quality'), title: T('Ihre Daten und Ihre Kunden in guten Händen.', 'Your data and your customers in good hands.'), lead: T('Outsourcing braucht Vertrauen. Hier steht, was heute gilt und welche Unterlagen noch folgen.', 'Outsourcing needs trust. This page states what applies today and which documents are still to come.'), crumbs: crumb(T, T('Datenschutz & Qualität', 'Data protection & quality')) })}
<section class="sec">
  <div class="wrap">
    <div class="sechead reveal"><p class="kicker">${T('Qualität', 'Quality')}</p><h2 class="h2">${T('So sichern wir die Qualität', 'How we safeguard quality')}</h2></div>
    ${cards(c, [
      ['users', T('Persönliches Teammanagement', 'Personal team management'), T('Ein fester Ansprechpartner steuert Ihr Team und ist für Sie erreichbar.', 'A dedicated contact manages your team and is available to you.')],
      ['shield', T('Laufende Qualitätskontrolle', 'Ongoing quality control'), T('Ergebnisse werden fortlaufend geprüft, nicht nur zum Projektstart.', 'Results are checked continuously, not only at project start.')],
      ['bolt', T('Ausfallsicherheit', 'Resilience'), T('Zwei Internetleitungen und eine unterbrechungsfreie Stromversorgung (USV).', 'Two internet lines and an uninterruptible power supply (UPS).')],
    ])}
  </div>
</section>
<section class="sec sec--tint">
  <div class="wrap">
    <div class="sechead reveal"><p class="kicker">${T('Datenschutz', 'Data protection')}</p><h2 class="h2">${T('DSGVO und Drittland Kosovo', 'GDPR and Kosovo as a third country')}</h2>
      <p class="lead">${T('Der Kosovo gilt nach der DSGVO als Drittland. Werden personenbezogene Daten dort verarbeitet, sind zusätzliche Garantien nötig, in der Praxis meist die EU-Standardvertragsklauseln zusammen mit einem Auftragsverarbeitungsvertrag.', 'Under the GDPR, Kosovo is a third country. If personal data is processed there, additional safeguards are required, in practice usually the EU Standard Contractual Clauses together with a data processing agreement.')}</p></div>
    <div class="reveal">${note(c, T('Platzhalter: Die folgenden Punkte beschreiben, welche Unterlagen vorgesehen sind. Sie gelten erst als zugesagt, wenn die Dokumente vorliegen und rechtlich geprüft sind.', 'Placeholder: the items below describe which documents are planned. They only count as committed once the documents exist and have been legally reviewed.'))}</div>
    <div class="tablewrap reveal" tabindex="0" role="region" aria-label="${T('Unterlagen', 'Documents')}"><table class="vtable vtable--left">
      <thead><tr><th scope="col">${T('Thema', 'Topic')}</th><th scope="col">${T('Inhalt', 'Content')}</th><th scope="col">Status</th></tr></thead>
      <tbody>
        <tr><th scope="row">${T('Auftragsverarbeitung', 'Data processing agreement')}</th><td>${T('Vertrag nach Art. 28 DSGVO', 'Agreement under Art. 28 GDPR')}</td><td>${ph}</td></tr>
        <tr><th scope="row">${T('Drittlandtransfer', 'Third-country transfer')}</th><td>${T('EU-Standardvertragsklauseln', 'EU Standard Contractual Clauses')}</td><td>${ph}</td></tr>
        <tr><th scope="row">${T('Vertraulichkeit', 'Confidentiality')}</th><td>${T('Verpflichtung der Mitarbeitenden (NDA)', 'Staff confidentiality undertakings (NDA)')}</td><td>${ph}</td></tr>
        <tr><th scope="row">${T('Technische und organisatorische Maßnahmen', 'Technical and organisational measures')}</th><td>${T('Zugriffsschutz, Geräte, Netzwerk', 'Access control, devices, network')}</td><td>${ph}</td></tr>
        <tr><th scope="row">${T('Zertifizierungen', 'Certifications')}</th><td>${c.tbc}</td><td>${ph}</td></tr>
      </tbody>
    </table></div>
  </div>
</section>
${bizCta(c)}
`;
};

const faq = (c) => {
  const { T } = c;
  const qa = [
    [T('Was kostet die Zusammenarbeit?', 'What does cooperation cost?'), T('Zwischen 15 und 35 € pro Stunde, je nach Leistung. Für Enterprise-Kunden erstellen wir ein individuelles Angebot.', 'Between €15 and €35 per hour, depending on the service. For enterprise clients we prepare a custom quote.')],
    [T('Wie starten wir?', 'How do we start?'), T('Mit einem kostenlosen 30-Minuten-Gespräch. Danach folgt ein Testprojekt über 5 Stunden zu je 15 €, dann das Angebot und ein Monatsvertrag.', 'With a free 30-minute call. This is followed by a 5-hour trial project at €15 per hour, then the quote and a monthly contract.')],
    [T('Welche Sprachen spricht das Team?', 'Which languages does the team speak?'), T('Deutsch auf C1-Niveau und Englisch.', 'German at C1 level and English.')],
    [T('Zu welchen Zeiten ist das Team erreichbar?', 'When is the team available?'), T('Wir arbeiten in mitteleuropäischer Zeit (MEZ), also zu Ihren Bürozeiten. Genaue Servicezeiten vereinbaren wir im Angebot.', 'We work in Central European Time (CET), i.e. during your office hours. Exact service hours are agreed in the quote.')],
    [T('Wie lange binde ich mich?', 'How long am I committed?'), T('Die Zusammenarbeit läuft über einen Monatsvertrag. Kündigungsfrist: Angabe folgt.', 'Cooperation runs on a monthly contract. Notice period: to be confirmed.')],
    [T('Kann das Team wachsen oder kleiner werden?', 'Can the team grow or shrink?'), T('Ja. Die Teams sind skalierbar und werden an Ihren Bedarf angepasst.', 'Yes. Teams are scalable and are adjusted to your needs.')],
    [T('Wer ist mein Ansprechpartner?', 'Who is my contact?'), T('Sie haben ein persönliches Teammanagement: eine feste Person, die Ihr Team führt und an Sie berichtet.', 'You get personal team management: one dedicated person who leads your team and reports to you.')],
    [T('Was passiert bei Strom- oder Internetausfall?', 'What happens in a power or internet outage?'), T('Das Büro hat zwei Internetleitungen und eine unterbrechungsfreie Stromversorgung (USV).', 'The office has two internet lines and an uninterruptible power supply (UPS).')],
    [T('Wie steht es um den Datenschutz?', 'What about data protection?'), T('Der Kosovo ist nach der DSGVO ein Drittland. Die vertraglichen Unterlagen dazu werden vorbereitet, Details stehen unter „Datenschutz &amp; Qualität“.', 'Under the GDPR, Kosovo is a third country. The contractual documents are being prepared; see “Data protection &amp; quality” for details.')],
    [T('Für welche Branchen arbeiten Sie?', 'Which industries do you work for?'), T('E-Commerce, Immobilien, Logistik, Versicherungen, Steuerkanzleien sowie IT und SaaS.', 'E-commerce, real estate, logistics, insurance, tax firms, and IT and SaaS.')],
  ];
  return `
${phead(c, { kicker: 'FAQ', title: T('Häufige Fragen', 'Frequently asked questions'), lead: T('Kurze Antworten auf das, was Interessenten zuerst wissen wollen.', 'Short answers to what prospects want to know first.'), crumbs: crumb(T, 'FAQ') })}
<section class="sec">
  <div class="wrap narrow">
    <div class="faq">
      ${qa.map(([q, a], i) => `<details class="reveal"${i === 0 ? ' open' : ''}><summary>${q}<span class="faq__x" aria-hidden="true"></span></summary><p>${a}</p></details>`).join('\n      ')}
    </div>
  </div>
</section>
${bizCta(c)}
`;
};

const contact = (c) => {
  const { T, icon } = c;
  return `
${phead(c, { kicker: T('Kontakt', 'Contact'), title: T('Lassen Sie uns sprechen.', 'Let’s talk.'), lead: T('Das Erstgespräch dauert 30 Minuten und kostet nichts.', 'The initial call takes 30 minutes and costs nothing.'), crumbs: crumb(T, T('Kontakt', 'Contact')) })}
<section class="sec">
  <div class="wrap">
    <div class="grid g3 contact">
      <div class="card reveal"><span class="card__ic">${icon('mail')}</span><h3>${T('E-Mail', 'E-mail')}</h3><p><a href="mailto:${MAIL}">${MAIL}</a></p></div>
      <div class="card reveal" style="--d:1"><span class="card__ic">${icon('chat')}</span><h3>WhatsApp</h3><p><a href="${WA}" target="_blank" rel="noopener noreferrer">${WA_TXT}</a></p></div>
      <div class="card reveal" style="--d:2"><span class="card__ic">${icon('pin')}</span><h3>${T('Standort', 'Location')}</h3><p>${BRAND}<br>Prishtina, Kosovo<br><span class="tbc">${T('Anschrift: Angabe folgt', 'Address: to be confirmed')}</span></p></div>
    </div>
  </div>
</section>
<section class="sec sec--tint">
  <div class="wrap formwrap">
    ${mailForm(c, {
      to: MAIL, subject: T('Anfrage Business Services', 'Business services inquiry'),
      fields: [
        ['name', 'Name', 'text', true],
        ['company', T('Firma', 'Company'), 'text', true],
        ['email', T('E-Mail', 'E-mail'), 'email', true],
        ['phone', T('Telefon', 'Phone'), 'tel', false],
        ['service', T('Gewünschte Leistung', 'Service required'), 'select', false, ['Customer Service', 'Accounting & Finance', 'Backoffice', 'Sales Support', 'Digital Operations', 'HR & Operations', T('Noch offen', 'Not sure yet')]],
        ['scope', T('Umfang (Stunden pro Woche)', 'Scope (hours per week)'), 'text', false],
        ['msg', T('Worum geht es?', 'What is it about?'), 'textarea', true],
      ],
      submit: T('Anfrage per E-Mail senden', 'Send inquiry by e-mail'),
      hint: T(`Öffnet Ihr E-Mail-Programm mit einer vorbereiteten Nachricht an ${MAIL}. Es wird nichts auf dieser Website gespeichert.`, `Opens your e-mail program with a prepared message to ${MAIL}. Nothing is stored on this website.`),
    })}
    <aside class="aside reveal" style="--d:1">
      <h2 class="h3">${T('Ihr Weg zu uns', 'Your way to us')}</h2>
      <ol class="mini">
        <li>${T('Erstgespräch: 30 Minuten, kostenlos', 'Initial call: 30 minutes, free')}</li>
        <li>${T('Testprojekt: 5 Stunden à 15 €', 'Trial project: 5 hours at €15')}</li>
        <li>${T('Angebot und Monatsvertrag', 'Quote and monthly contract')}</li>
      </ol>
      <p><a class="btn btn--pri" href="${WA}" target="_blank" rel="noopener noreferrer">${icon('chat')} ${T('Per WhatsApp schreiben', 'Message on WhatsApp')}</a></p>
    </aside>
  </div>
</section>`;
};

const pg = (path, de, en, dde, den, body) => ({ path, section: 'biz', title: { de, en }, desc: { de: dde, en: den }, body });

export const bizPages = [
  pg('business/index.html', 'Business Services für DACH', 'Business services for DACH', 'Deutschsprachiger BPO-Partner aus Prishtina: Customer Service, Accounting, Backoffice, Sales Support, Digital Operations, HR.', 'German-speaking BPO partner from Prishtina: customer service, accounting, back office, sales support, digital operations, HR.', index),
  pg('business/services.html', 'Dienstleistungen', 'Services', 'Customer Service, Accounting & Finance, Backoffice, Sales Support, Digital Operations, HR & Operations.', 'Customer service, accounting & finance, back office, sales support, digital operations, HR & operations.', servicesPage),
  pg('business/industries.html', 'Branchen', 'Industries', 'E-Commerce, Immobilien, Logistik, Versicherungen, Steuerkanzleien, IT/SaaS.', 'E-commerce, real estate, logistics, insurance, tax firms, IT/SaaS.', industriesPage),
  pg('business/why-kosovo.html', 'Warum Kosovo?', 'Why Kosovo?', 'Deutschkenntnisse, gleiche Zeitzone, Euro: Gründe für Outsourcing nach Prishtina.', 'German skills, same time zone, euro: reasons for outsourcing to Prishtina.', whyKosovo),
  pg('business/pricing.html', 'Preise', 'Pricing', '15–35 € pro Stunde, Testprojekt 5 Stunden à 15 €, Enterprise individuell.', '€15–35 per hour, trial project 5 hours at €15, enterprise on request.', pricing),
  pg('business/privacy-quality.html', 'Datenschutz & Qualität', 'Data protection & quality', 'Qualitätssicherung und Datenschutz bei Labeat Data & Ops | Hajdari Group.', 'Quality assurance and data protection at Labeat Data & Ops | Hajdari Group.', privacyQuality),
  pg('business/faq.html', 'FAQ', 'FAQ', 'Häufige Fragen zu Preisen, Ablauf, Sprache und Datenschutz.', 'Frequently asked questions on pricing, process, language and data protection.', faq),
  pg('business/contact.html', 'Kontakt', 'Contact', 'Kontakt zu Labeat Data & Ops | Hajdari Group: E-Mail und WhatsApp.', 'Contact Labeat Data & Ops | Hajdari Group: e-mail and WhatsApp.', contact),
];
