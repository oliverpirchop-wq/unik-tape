// Produktdaten UNIK TAPE — Quelle: uniktape.de und Produktkatalog 2025 (quelle/).
// Werte mit "↑" sind Mindestwerte laut Katalog. Wo nichts belegt ist: null => "Angabe folgt".

const W_FULL = '18, 24, 30, 38, 45, 48, 50, 60, 70, 80, 90, 100, 120, 150 mm';
const L_FULL = '30, 50, 66, 80, 90, 100, 120, 132, 150, 180, 200, 300, 500, 600, 990 m';
const W_MASK = '18, 24, 30, 38, 45, 48, 50 mm';
const L_MASK = '30 m, 50 m';
const W_45 = '45, 48, 50 mm';
const L_CLOTH = '10, 20, 30, 40, 50 m';
const L_PVC = '27 m, 33 m';

const H = {
  type: { de: 'Typ', en: 'Type' },
  thick: { de: 'Gesamtdicke', en: 'Total thickness' },
  backing: { de: 'Trägerdicke', en: 'Backing thickness' },
  adhesive: { de: 'Klebstoff', en: 'Adhesive' },
  peelN: { de: 'Schälkraft (N/in)', en: 'Peel adhesion (N/in)' },
  peelOz: { de: 'Schälkraft ASTM D-3330 (oz/in)', en: 'Peel adhesion ASTM D-3330 (oz/in)' },
  tensN: { de: 'Zugfestigkeit (N/in)', en: 'Tensile strength (N/in)' },
  tens: { de: 'Zugfestigkeit', en: 'Tensile strength' },
  tensLb: { de: 'Zugfestigkeit ASTM D-3759 (lb/in)', en: 'Tensile strength ASTM D-3759 (lb/in)' },
  elong: { de: 'Bruchdehnung ASTM D-3759', en: 'Elongation at break ASTM D-3759' },
  elongS: { de: 'Dehnung', en: 'Elongation' },
  tack: { de: 'Anfangshaftung (Tack)', en: 'Initial tack' },
  temp: { de: 'Temperatur max. (1 h)', en: 'Max. temperature (1 h)' },
  prop: { de: 'Eigenschaft', en: 'Property' },
  val: { de: 'Wert', en: 'Value' },
};
const BOPP_HEAD = [H.type, H.thick, H.peelN, H.peelOz, H.tensN, H.tensLb, H.elong];
const NR = { de: 'Naturkautschuk', en: 'Natural rubber' };
const HM = 'Hot Melt';

const carRefinish = (thick, steel, temp, removal) => ({
  head: [H.prop, H.val],
  rows: [
    [{ de: 'Papiergewicht', en: 'Paper weight' }, '62 g/m²'],
    [H.adhesive, NR],
    [H.thick, thick + ' µm'],
    [{ de: 'Zugfestigkeit längs', en: 'Longitudinal tensile strength' }, '3,2 kg/cm'],
    [{ de: 'Bruchdehnung längs', en: 'Longitudinal elongation at break' }, '6 %'],
    [{ de: 'Klebkraft auf Stahl', en: 'Adhesion to steel plate' }, steel + ' g/cm'],
    [{ de: 'Rolling-Ball-Tack', en: 'Rolling ball tack' }, '1 cm'],
    [{ de: 'Temperaturbeständigkeit', en: 'Temperature resistance' }, temp],
    [{ de: 'Entfernbar innerhalb', en: 'Removal time' }, removal],
  ],
});
const carDesc = {
  de: 'Papier-Kreppband für allgemeine Lackierarbeiten im Fahrzeugbereich. Geeignet, wo gute Haltekraft und Temperaturbeständigkeit gefragt sind. Der Naturkautschuk-Kleber haftet sofort, lässt sich sauber abziehen und liefert scharfe Farbkanten.',
  en: 'Paper masking tape for general car refinishing. Suited to jobs that need good holding power and temperature performance. The natural rubber adhesive grips instantly, lifts off cleanly and leaves a sharp paint edge.',
};

export const categories = [
  { id: 'packing', name: { de: 'Packband', en: 'Packing tape' }, tag: { de: 'BOPP-Packbänder mit Acrylat-, Hot-Melt- oder Naturkautschuk-Kleber, für Hand- und Maschinenverarbeitung.', en: 'BOPP packing tapes with acrylic, hot-melt or natural rubber adhesive, for hand and machine application.' }, color: '#c98a3a' },
  { id: 'printed', name: { de: 'Bedrucktes Band', en: 'Printed tape' }, tag: { de: 'Packband mit Ihrem Logo: Markenauftritt und Originalitätsschutz auf jedem Karton.', en: 'Packing tape with your logo: branding and tamper evidence on every carton.' }, color: '#ffca05' },
  { id: 'masking', name: { de: 'Kreppband', en: 'Masking tape' }, tag: { de: 'Abdeckbänder von 60 °C bis 80 °C für Maler, Lackierer und Industrie.', en: 'Masking tapes from 60 °C to 80 °C for painters, refinishers and industry.' }, color: '#f3dfa6' },
  { id: 'cloth', name: { de: 'Gewebeband', en: 'Cloth tape' }, tag: { de: 'Reißfestes Gewebeband (Duct Tape) zum Abdichten, Bündeln und Fixieren.', en: 'Strong cloth duct tape for sealing, bundling and fixing.' }, color: '#9aa3ad' },
  { id: 'mesh', name: { de: 'Gitterband', en: 'Mesh tape' }, tag: { de: 'Gitterband aus eigener Fertigung. Technische Daten folgen.', en: 'Mesh tape from our own production. Technical data to follow.' }, color: '#e9e6dc' },
  { id: 'glow', name: { de: 'Nachleuchtendes Sicherheitsband', en: 'Photoluminescent safety tape' }, tag: { de: 'Lädt sich bei Licht auf und leuchtet im Dunkeln: für Fluchtwege, Stufen und Kanten.', en: 'Charges in light and glows in the dark: for escape routes, steps and edges.' }, color: '#c8ff5a' },
  { id: 'pvc', name: { de: 'PVC- & Schutzband', en: 'PVC & protective tape' }, tag: { de: 'PVC-Bänder für Rohrummantelung, Oberflächenschutz und Verpackung.', en: 'PVC tapes for pipe wrapping, surface protection and packaging.' }, color: '#e8562a' },
];

export const products = [
  // ---------- Packband ----------
  {
    slug: 'bopp-acrylic', cat: 'packing', img: 'p1', codes: '38ATTY 38MY · 38ATTC 38MY · 38ATTY 50MY · 38ATTC 50MY',
    name: { de: 'BOPP-Packband Acrylat (wasserbasiert)', en: 'BOPP packing tape, water-based acrylic' },
    desc: { de: 'Das wirtschaftliche Standard-Packband für Kartonverschluss, Verpackung und Bündelung.', en: 'The economical standard tape for carton sealing, packaging and bundling.' },
    material: { de: 'BOPP-Folie, Acrylatkleber auf Wasserbasis', en: 'BOPP film, water-based acrylic adhesive' },
    width: W_FULL, length: L_FULL,
    adhesion: { de: '4–6,5 N/in (14,3–23,3 oz/in, ASTM D-3330), je nach Dicke', en: '4–6.5 N/in (14.3–23.3 oz/in, ASTM D-3330), depending on thickness' },
    variants: { head: BOPP_HEAD, rows: [
      ['B134', '34 µm', '4 ↑', '14,3 ↑', '80 ↑', '17,9 ↑', '100 %'], ['B134', '38 µm', '4,1 ↑', '14,7 ↑', '80 ↑', '17,9 ↑', '100 %'],
      ['B134', '40 µm', '4,2 ↑', '15,1 ↑', '80 ↑', '17,9 ↑', '100 %'], ['B134', '43 µm', '4,4 ↑', '15,8 ↑', '80 ↑', '17,9 ↑', '100 %'],
      ['B134', '45 µm', '4,5 ↑', '16,1 ↑', '82 ↑', '18,4 ↑', '100 %'], ['B134', '50 µm', '5,2 ↑', '18,7 ↑', '85 ↑', '19,1 ↑', '100 %'],
      ['B134', '55 µm', '5,5 ↑', '20,8 ↑', '85 ↑', '19,1 ↑', '100 %'], ['B134', '60 µm', '5,5 ↑', '19,7 ↑', '100 ↑', '22,4 ↑', '100 %'],
      ['B134', '65 µm', '6 ↑', '21,5 ↑', '115 ↑', '25,8 ↑', '100 %'], ['B134', '70 µm', '6,2 ↑', '22,3 ↑', '120 ↑', '26,9 ↑', '100 %'],
      ['B134', '78 µm', '6,3 ↑', '22,6 ↑', '125 ↑', '28,1 ↑', '100 %'], ['B134', '90 µm', '6,5 ↑', '23,3 ↑', '130 ↑', '29,2 ↑', '100 %'],
    ] },
  },
  {
    slug: 'bopp-hot-melt', cat: 'packing', img: 'p0', codes: '38HMT · 38HMW',
    name: { de: 'BOPP-Packband Hot Melt', en: 'BOPP packing tape, hot melt' },
    desc: { de: 'Packband mit hoher Soforthaftung. Laut Katalog häufig für Lebensmittelverpackungen eingesetzt.', en: 'Packing tape with high initial grab. According to the catalogue, widely used for food packaging.' },
    material: { de: 'BOPP-Folie, Hot-Melt-Kleber', en: 'BOPP film, hot-melt adhesive' },
    width: W_FULL, length: L_FULL,
    adhesion: { de: '9–9,7 N/in (32,3–34,9 oz/in, ASTM D-3330), je nach Dicke', en: '9–9.7 N/in (32.3–34.9 oz/in, ASTM D-3330), depending on thickness' },
    variants: { head: BOPP_HEAD, rows: [
      ['B838', '38 µm', '9 ↑', '32,3 ↑', '80 ↑', '17,9 ↑', '100 %'], ['B840', '40 µm', '9,2 ↑', '33,3 ↑', '80 ↑', '17,9 ↑', '100 %'],
      ['B843', '43 µm', '9,5 ↑', '34,1 ↑', '80 ↑', '17,9 ↑', '100 %'], ['B845', '45 µm', '9,5 ↑', '34,1 ↑', '85 ↑', '19,1 ↑', '100 %'],
      ['B847', '47 µm', '9,5 ↑', '34,1 ↑', '85 ↑', '19,1 ↑', '100 %'], ['B850', '50 µm', '9,7 ↑', '34,9 ↑', '90 ↑', '20,2 ↑', '100 %'],
    ] },
  },
  {
    slug: 'bopp-super-clear', cat: 'packing', img: 'p3', codes: '38ATTSC 45MY',
    name: { de: 'BOPP-Packband Super Clear', en: 'Super clear BOPP packing tape' },
    desc: { de: 'Glasklares Packband für Kartonverschluss und Verpackung, auch für den täglichen Einsatz im Büro.', en: 'Crystal-clear tape for carton sealing and packaging, also for everyday office use.' },
    material: { de: 'BOPP-Folie glasklar, Acrylatkleber auf Wasserbasis', en: 'Crystal-clear BOPP film, water-based acrylic adhesive' },
    width: W_FULL, length: L_FULL,
    adhesion: { de: '4–6,2 N/in (14,3–22,3 oz/in, ASTM D-3330), je nach Dicke', en: '4–6.2 N/in (14.3–22.3 oz/in, ASTM D-3330), depending on thickness' },
    variants: { head: BOPP_HEAD, rows: [
      ['B437B', '37 µm', '4 ↑', '14,3 ↑', '75 ↑', '16,8 ↑', '100 %'], ['B442B', '50 µm', '4,3 ↑', '15,4 ↑', '75 ↑', '16,8 ↑', '100 %'],
      ['B445B', '45 µm', '4,5 ↑', '16,1 ↑', '80 ↑', '17,9 ↑', '100 %'], ['B447B', '47 µm', '5 ↑', '17,9 ↑', '80 ↑', '17,9 ↑', '100 %'],
      ['B450B', '50 µm', '5,1 ↑', '18,3 ↑', '85 ↑', '19,1 ↑', '100 %'], ['B456B', '56 µm', '6,2 ↑', '22,3 ↑', '85 ↑', '19,1 ↑', '100 %'],
      ['B466B', '66 µm', '6 ↑', '21,5 ↑', '115 ↑', '25,8 ↑', '100 %'],
    ] },
  },
  {
    slug: 'bopp-silence', cat: 'packing', img: 'p5', codes: '38ATWS 50MY',
    name: { de: 'BOPP-Packband Silence (leise abrollend)', en: 'Silence BOPP packing tape (low noise)' },
    desc: { de: 'Rollt leise ab und lässt sich leicht von Hand verarbeiten: ideal für Packplätze, an denen Lärm stört.', en: 'Unwinds quietly and is easy to apply by hand: ideal for packing stations where noise is a problem.' },
    material: { de: 'BOPP-Folie, Acrylatkleber auf Wasserbasis', en: 'BOPP film, water-based acrylic adhesive' },
    width: W_FULL, length: L_FULL,
    adhesion: { de: '4,1–6 N/in (14,7–21,5 oz/in, ASTM D-3330), je nach Dicke', en: '4.1–6 N/in (14.7–21.5 oz/in, ASTM D-3330), depending on thickness' },
    variants: { head: BOPP_HEAD, rows: [
      ['BN38', '38 µm', '4,1 ↑', '14,7 ↑', '75 ↑', '16,8 ↑', '80 %'], ['BN50', '50 µm', '5,2 ↑', '18,7 ↑', '85 ↑', '19,1 ↑', '100 %'],
      ['BN55', '55 µm', '5,8 ↑', '20,8 ↑', '85 ↑', '19,1 ↑', '120 %'], ['BN63', '63 µm', '5,9 ↑', '21,2 ↑', '105 ↑', '23,6 ↑', '140 %'],
      ['BN65', '65 µm', '6 ↑', '21,5 ↑', '115 ↑', '25,8 ↑', '140 %'],
    ] },
  },
  {
    slug: 'pp-natural-rubber', cat: 'packing', img: 'pnr', codes: '3828ST · 3828SB',
    name: { de: 'PP-Packband Naturkautschuk', en: 'PP packing tape, natural rubber' },
    desc: { de: 'Für anspruchsvolle Untergründe: haftet zuverlässig auf Recyclingkarton und Kunststoffbeuteln, bei Wärme wie bei Kälte. Als Hand- und Maschinenrolle, auch in Low-Noise- und Easy-Print-Ausführung.', en: 'For demanding surfaces: bonds reliably to recycled cardboard and plastic bags, in hot and cold seasons. As hand and machine rolls, also in low-noise and easy-print versions.' },
    material: { de: 'Polypropylen-Folie, Kleber aus Naturkautschuk und Harzen', en: 'Polypropylene film, natural rubber and resin adhesive' },
    width: W_FULL, length: L_FULL, colors: { de: 'transparent, weiß, braun', en: 'clear, white, brown' },
    variants: { head: [H.type, H.backing], rows: [
      ['400', '25 µm'], ['500', '28 µm'], ['550', '30 µm'], ['600', '35 µm'], ['750', '50 µm'],
      ['830', '30 µm Low Noise'], ['800', '35 µm Low Noise'], ['839', '30 µm Easy Print'], ['899', '35 µm Easy Print'],
    ] },
  },
  {
    slug: 'pp-acrylic-silent', cat: 'packing', img: 'pas', codes: '3828AT · 3828AW',
    name: { de: 'PP-Packband Acrylat „Natural Silent“', en: 'PP packing tape, acrylic “Natural Silent”' },
    desc: { de: 'Polypropylen-Packband in fünf Folienstärken: normal oder leise abrollend, als High-Tack- und als bedruckbare Ausführung, für Hand- und Maschinenrollen.', en: 'Polypropylene packing tape in five film thicknesses: noisy or low-noise, as high-tack and printable versions, for hand and machine rolls.' },
    material: { de: 'Polypropylen-Folie, Acrylatkleber auf Wasserbasis', en: 'Polypropylene film, water-based acrylic adhesive' },
    width: W_FULL, length: L_FULL, colors: { de: 'transparent, weiß, braun, honig', en: 'clear, white, brown, honey' },
    variants: { head: [H.backing, { de: 'Ausführungen', en: 'Versions' }], rows: [
      ['23 µm', 'Noisy'], ['25 µm', 'Noisy · Low Noise'], ['28 µm', 'Noisy · Low Noise · Printable · High Tack Low Noise'],
      ['32 µm', 'Noisy · Low Noise · Printable · High Tack Low Noise'], ['35 µm', 'High Tack Low Noise'],
    ] },
  },
  // ---------- Bedruckt ----------
  {
    slug: 'printed-bopp', cat: 'printed', img: 'p7', codes: '38ATP 50MY',
    name: { de: 'Bedrucktes BOPP-Packband', en: 'Printed BOPP packing tape' },
    desc: { de: 'Packband mit Ihrem Logo oder Warnhinweis: für Kartonverschluss und Werbung in einem Arbeitsgang.', en: 'Packing tape with your logo or warning text: carton sealing and advertising in one step.' },
    material: { de: 'BOPP-Folie, bedruckt', en: 'BOPP film, printed' },
    width: W_FULL, length: L_FULL,
    adhesion: { de: '3,2–6,5 N/in (11,5–23,3 oz/in, ASTM D-3330)', en: '3.2–6.5 N/in (11.5–23.3 oz/in, ASTM D-3330)' },
    variants: { head: [H.type, H.thick, H.peelN, H.peelOz, H.tensN, H.tensLb, H.elong], rows: [
      ['B645', '45 µm', '3,2–6,5', '11,5–23,3', '80 ↑', '17,9 ↑', '100 %'],
      ['B650', '50 µm', '3,2–6,5', '11,5–23,3', '85 ↑', '19,1 ↑', '100 %'],
      ['B655', '55 µm', '3,2–6,5', '11,5–23,3', '85 ↑', '19,1 ↑', '100 %'],
    ] },
  },
  // ---------- Kreppband ----------
  {
    slug: 'masking-60', cat: 'masking', img: 'p8', codes: '38MAAW120 · 38MAAY120',
    name: { de: 'Allzweck-Kreppband 60 °C', en: 'General purpose masking tape 60 °C' },
    desc: { de: 'Für Dekoration, Bündeln, Verpacken und das Fixieren leichter Teile.', en: 'For decorating, bundling, packaging and fixing light goods.' },
    material: { de: 'Krepppapier, Naturkautschuk-Kleber', en: 'Crepe paper, natural rubber adhesive' },
    width: W_MASK, length: L_MASK,
    adhesion: { de: '5–7 N/in, je nach Dicke', en: '5–7 N/in, depending on thickness' },
    temp: { de: 'bis 60 °C (140 °F), 1 Stunde', en: 'up to 60 °C (140 °F), 1 hour' },
    variants: { head: [H.thick, H.temp, H.adhesive, H.tack, H.peelN, H.tens, H.elongS], rows: [
      ['100 µm', '60 °C', NR, '5 ↑', '5 ↑', '55 ↑', '6 %'], ['120 µm', '60 °C', NR, '5 ↑', '5 ↑', '60 ↑', '8 %'],
      ['130 µm', '60 °C', NR, '5 ↑', '6 ↑', '60 ↑', '6 %'], ['120 µm', '60 °C', NR, '5 ↑', '6 ↑', '60 ↑', '6 %'],
      ['130 µm', '60 °C', NR, '5 ↑', '6 ↑', '60 ↑', '6 %'], ['150 µm', '60 °C', NR, '6 ↑', '7 ↑', '63 ↑', '6 %'],
    ] },
  },
  {
    slug: 'masking-80', cat: 'masking', img: 'p10', codes: '38MAAW120 · 38MAAY120',
    name: { de: 'Kreppband 80 °C', en: 'Masking tape 80 °C' },
    desc: { de: 'Für Malerarbeiten innen und außen, Fahrzeuglackierung, Bündeln, Verpacken und Fixieren leichter Teile.', en: 'For indoor and outdoor decorating, automotive painting, bundling, packaging and fixing light goods.' },
    material: { de: 'Krepppapier, Naturkautschuk-Kleber', en: 'Crepe paper, natural rubber adhesive' },
    width: W_MASK, length: L_MASK,
    adhesion: { de: '5–6 N/in, je nach Typ', en: '5–6 N/in, depending on type' },
    temp: { de: 'bis 80 °C (176 °F), 1 Stunde', en: 'up to 80 °C (176 °F), 1 hour' },
    variants: { head: [H.temp, H.adhesive, { de: 'Träger', en: 'Backing' }, H.tack, H.peelN, H.tens, H.elongS], rows: [
      ['80 °C', NR, { de: 'Krepppapier', en: 'Crepe paper' }, '8 ↑', '5 ↑', '60 ↑', '6 %'],
      ['80 °C', NR, { de: 'Krepppapier', en: 'Crepe paper' }, '8 ↑', '6 ↑', '63 ↑', '6 %'],
      ['80 °C', NR, { de: 'Krepppapier', en: 'Crepe paper' }, '6 ↑', '5,5 ↑', '75 ↑', '8 %'],
    ] },
  },
  {
    slug: 'masking-rice-premium', cat: 'masking', img: 'p11', codes: '38HEC100',
    name: { de: 'Reispapier-Abdeckband Premium', en: 'Rice paper masking tape (premium)' },
    desc: { de: 'Dünnes Premium-Abdeckband für Kreativ- und DIY-Arbeiten, zum Verpacken und Fixieren leichter Industrieprodukte.', en: 'Thin premium masking tape for creative and DIY work, packaging and fixing light industrial products.' },
    material: { de: 'Papierträger (laut Katalog: Krepppapier), Acrylatkleber auf Wasserbasis', en: 'Paper backing (catalogue: crepe paper), water-based acrylic adhesive' },
    width: W_MASK, length: L_MASK,
    adhesion: { de: '2 ↑ (Einheit im Katalog nicht angegeben)', en: '2 ↑ (unit not stated in catalogue)' },
    variants: { head: [H.type, H.adhesive, H.thick, H.tack, { de: 'Schälkraft', en: 'Peel adhesion' }, H.tens], rows: [
      ['HEC110', { de: 'Acrylat, wasserbasiert', en: 'Water-based acrylic' }, '120 µm', '5 ↑', '2 ↑', '3 %'],
      ['HEC100', { de: 'Acrylat, wasserbasiert', en: 'Water-based acrylic' }, '110 µm', '8 ↑', '2 ↑', '3 %'],
    ] },
  },
  {
    slug: 'masking-refinish-38219y', cat: 'masking', img: 'p8', codes: '38219Y',
    name: { de: 'Lackier-Kreppband 38219Y (60 °C)', en: 'Refinish masking tape 38219Y (60 °C)' },
    desc: carDesc, material: { de: 'Krepppapier 62 g/m², Naturkautschuk-Kleber', en: 'Crepe paper 62 g/m², natural rubber adhesive' },
    width: W_MASK, length: L_MASK,
    adhesion: { de: '210 g/cm auf Stahl', en: '210 g/cm on steel' },
    temp: { de: 'bis 60 °C (45 min)', en: 'up to 60 °C (45 min)' },
    variants: carRefinish(124, 210, '60 °C / 45 min', { de: '3 Tagen (innen)', en: '3 days (indoor)' }),
  },
  {
    slug: 'masking-refinish-38225y', cat: 'masking', img: 'p10', codes: '38225Y',
    name: { de: 'Lackier-Kreppband 38225Y (80 °C)', en: 'Refinish masking tape 38225Y (80 °C)' },
    desc: carDesc, material: { de: 'Krepppapier 62 g/m², Naturkautschuk-Kleber', en: 'Crepe paper 62 g/m², natural rubber adhesive' },
    width: W_MASK, length: L_MASK,
    adhesion: { de: '230 g/cm auf Stahl', en: '230 g/cm on steel' },
    temp: { de: 'bis 80 °C (30 min)', en: 'up to 80 °C (30 min)' },
    variants: carRefinish(129, 230, '80 °C / 30 min', { de: '5 Tagen (innen)', en: '5 days (indoor)' }),
  },
  {
    slug: 'masking-refinish-38219b', cat: 'masking', img: 'p9', codes: '38219B',
    name: { de: 'Lackier-Kreppband 38219B (60 °C)', en: 'Refinish masking tape 38219B (60 °C)' },
    desc: carDesc, material: { de: 'Krepppapier 62 g/m², Naturkautschuk-Kleber', en: 'Crepe paper 62 g/m², natural rubber adhesive' },
    width: W_MASK, length: L_MASK,
    adhesion: { de: '210 g/cm auf Stahl', en: '210 g/cm on steel' },
    temp: { de: 'bis 60 °C (45 min)', en: 'up to 60 °C (45 min)' },
    variants: carRefinish(124, 210, '60 °C / 45 min', { de: '3 Tagen (innen)', en: '3 days (indoor)' }),
  },
  // ---------- Gewebeband ----------
  {
    slug: 'cloth-hot-melt', cat: 'cloth', img: 'p13', codes: '38DEB170 · 38DNB250',
    name: { de: 'Gewebeband Hot Melt', en: 'Cloth duct tape, hot melt' },
    desc: { de: 'Für Rohrummantelung, Abdichtung, das Bündeln schwerer Teile, Fixierarbeiten und DIY.', en: 'For pipe wrapping, sealing, bundling heavy objects, fixing and DIY.' },
    material: { de: 'Gewebeträger, Hot-Melt-Kleber', en: 'Cloth backing, hot-melt adhesive' },
    width: W_45, length: L_CLOTH, colors: { de: 'schwarz, silber, weiß', en: 'black, silver, white' },
    adhesion: { de: '18–26 oz/in (ASTM D-3330), je nach Dicke', en: '18–26 oz/in (ASTM D-3330), depending on thickness' },
    variants: { head: [H.type, H.adhesive, H.thick, H.tack, H.peelOz, H.tensLb], rows: [
      ['D13', HM, '130 µm', '15 ↑', '18 ↑', '55 ↑'], ['D115', HM, '150 µm', '18 ↑', '20 ↑', '65 ↑'], ['D117', HM, '170 µm', '20 ↑', '20 ↑', '85 ↑'],
      ['D119', HM, '190 µm', '22 ↑', '22 ↑', '85 ↑'], ['D121', HM, '210 µm', '22 ↑', '22 ↑', '95 ↑'], ['D123', HM, '230 µm', '25 ↑', '24 ↑', '105 ↑'],
      ['D125', HM, '250 µm', '26 ↑', '24 ↑', '110 ↑'], ['D127', HM, '270 µm', '27 ↑', '24 ↑', '120 ↑'], ['D129', HM, '290 µm', '28 ↑', '26 ↑', '125 ↑'],
    ] },
  },
  {
    slug: 'cloth-natural-rubber', cat: 'cloth', img: 'p12', codes: '38DEA200 · 38DPA250 · 38DPA300 · 38DPA420',
    name: { de: 'Gewebeband Naturkautschuk', en: 'Cloth duct tape, natural rubber' },
    desc: { de: 'Für Rohrummantelung, Abdichtung, das Bündeln schwerer Teile, Fixierarbeiten und DIY.', en: 'For pipe wrapping, sealing, bundling heavy objects, fixing and DIY.' },
    material: { de: 'Gewebeträger, Naturkautschuk-Kleber', en: 'Cloth backing, natural rubber adhesive' },
    width: W_45, length: L_CLOTH, colors: { de: 'schwarz, silber, weiß', en: 'black, silver, white' },
    adhesion: { de: '6–15 oz/in (ASTM D-3330), je nach Dicke', en: '6–15 oz/in (ASTM D-3330), depending on thickness' },
    variants: { head: [H.type, H.adhesive, H.thick, H.tack, H.peelOz, H.tensLb], rows: [
      ['DR20', NR, '200 µm', '13 ↑', '6 ↑', '85 ↑'], ['DR23', NR, '230 µm', '10 ↑', '9 ↑', '85 ↑'], ['DR25', NR, '250 µm', '12 ↑', '10 ↑', '85 ↑'],
      ['DR27', NR, '270 µm', '12 ↑', '12 ↑', '110 ↑'], ['DR30', NR, '300 µm', '16 ↑', '15 ↑', '120 ↑'], ['DR36', NR, '360 µm', '15 ↑', '15 ↑', '125 ↑'],
      ['DR42', NR, '420 µm', '25 ↑', '15 ↑', '130 ↑'],
    ] },
  },
  // ---------- Gitterband ----------
  {
    slug: 'mesh-tape', cat: 'mesh', roll: '#e9e6dc', mesh: true, codes: null,
    name: { de: 'Gitterband', en: 'Mesh tape' },
    desc: { de: 'Gitterband gehört seit der Sortimentserweiterung 2018 zum Programm von UNIK TAPE. Die technischen Daten liegen uns noch nicht vor und werden ergänzt.', en: 'Mesh tape has been part of the UNIK TAPE range since the 2018 expansion. Technical data has not been supplied yet and will be added.' },
    material: null, width: null, length: null,
  },
  // ---------- Nachleuchtend ----------
  {
    slug: 'glow-safety-tape', cat: 'glow', roll: '#c8ff5a', glow: true, codes: null,
    name: { de: 'Nachleuchtendes Sicherheitsband', en: 'Photoluminescent safety tape' },
    desc: { de: 'Phosphoreszierendes Band, das sich bei Tages- oder Kunstlicht auflädt und bei Stromausfall oder Dunkelheit sichtbar bleibt: zur Markierung von Fluchtwegen, Stufenkanten, Türrahmen und Hindernissen. Technische Daten und Nachweise werden ergänzt.', en: 'Phosphorescent tape that charges in daylight or artificial light and stays visible in a power cut or in darkness: for marking escape routes, step edges, door frames and obstacles. Technical data and evidence will be added.' },
    material: null, width: null, length: null,
  },
  // ---------- PVC ----------
  {
    slug: 'pvc-easy-tear', cat: 'pvc', img: 'p16', codes: '38EYC150 · 38EYC180',
    name: { de: 'PVC-Band Easy Tear', en: 'PVC easy tear tape' },
    desc: { de: 'Von Hand abreißbares Band, als Hand- und Maschinenrolle. Haftet in warmen wie kalten Jahreszeiten und eignet sich für Recyclingkarton und Kunststoffbeutel.', en: 'Hand-tearable tape, available as hand and machine rolls. Bonds in hot and cold seasons and suits recycled cardboard and plastic bags.' },
    material: { de: 'PVC-Folie, Naturkautschuk-Kleber', en: 'PVC film, natural rubber adhesive' },
    width: W_45, length: L_PVC, colors: { de: 'transparent, weiß, braun', en: 'clear, white, brown' },
    adhesion: { de: '2,5 oz/in ↑ (ASTM D-3330)', en: '2.5 oz/in ↑ (ASTM D-3330)' },
    variants: { head: [H.type, H.adhesive, H.thick, H.peelOz, H.tens, H.elong], rows: [
      ['WC15-F', NR, '150 µm', '2,5 ↑', '50 ↑', '110 %'], ['WC18-F', NR, '180 µm', '2,5 ↑', '60 ↑', '110 %'],
    ] },
  },
  {
    slug: 'pvc-pipe-wrapping', cat: 'pvc', img: 'p14', codes: '38EGC150',
    name: { de: 'PVC-Rohrwickelband', en: 'PVC pipe wrapping tape' },
    desc: { de: 'Schützt die Oberflächen von Aluminiumprofilen und Stahlrohren vor Kratzern.', en: 'Protects the surfaces of aluminium profiles and steel pipes against scratches.' },
    material: { de: 'PVC-Folie, Naturkautschuk-Kleber', en: 'PVC film, natural rubber adhesive' },
    width: W_45, length: L_PVC, colors: { de: 'schwarz, silber, orange', en: 'black, silver, orange' },
    adhesion: { de: '2,75 oz/in ↑ (ASTM D-3330)', en: '2.75 oz/in ↑ (ASTM D-3330)' },
    variants: { head: [H.type, H.adhesive, H.thick, H.peelOz, H.tens, H.elong], rows: [
      ['WC13-F', NR, '130 µm', '2,75 ↑', '45 ↑', '160 %'], ['WC15-F', NR, '150 µm', '2,75 ↑', '55 ↑', '160 %'], ['WC18-F', NR, '180 µm', '2,75 ↑', '65 ↑', '160 %'],
    ] },
  },
  {
    slug: 'pvc-protective', cat: 'pvc', img: 'p14', codes: '38EBB120-q',
    name: { de: 'PVC-Schutzband', en: 'PVC protective tape' },
    desc: { de: 'Für die Bauwirtschaft: Schutz von Außenwänden und Rohrleitungen.', en: 'For construction: protection of exterior walls and pipelines.' },
    material: { de: 'PVC-Folie, Naturkautschuk-Kleber', en: 'PVC film, natural rubber adhesive' },
    width: W_45, length: L_PVC, colors: { de: 'schwarz, silber, orange', en: 'black, silver, orange' },
    adhesion: { de: '2,2 oz/in ↑ (ASTM D-3330)', en: '2.2 oz/in ↑ (ASTM D-3330)' },
    variants: { head: [H.type, H.adhesive, H.thick, H.peelOz, H.tens, H.elong], rows: [
      ['BHB12Q-F', NR, '120 µm', '2,2 ↑', '55 ↑', '180 %'],
    ] },
  },
];
