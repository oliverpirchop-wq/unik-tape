// Wiederverwendbare Bausteine.

export const phead = (c, { kicker, title, lead, crumbs = [] }) => `
<section class="phead">
  <div class="wrap">
    ${crumbs.length ? `<nav class="crumbs" aria-label="Breadcrumb">${crumbs.map(([l, to]) => (to ? `<a href="${c.url(to)}">${l}</a>` : `<span>${l}</span>`)).join('<i>/</i>')}</nav>` : ''}
    ${kicker ? `<p class="kicker">${kicker}</p>` : ''}
    <h1 class="h1">${title}</h1>
    ${lead ? `<p class="lead">${lead}</p>` : ''}
  </div>
</section>`;

export const cta = (c, { title, text, btn, to, btn2, to2 }) => `
<section class="sec cta">
  <div class="wrap cta__in reveal">
    <div><h2 class="h2">${title}</h2><p>${text}</p></div>
    <div class="cta__btns">
      <a class="btn btn--pri" href="${to.startsWith('http') || to.startsWith('mailto') ? to : c.url(to)}">${btn} ${c.icon('arrow')}</a>
      ${btn2 ? `<a class="btn btn--ghost" href="${to2.startsWith('http') || to2.startsWith('mailto') ? to2 : c.url(to2)}">${btn2}</a>` : ''}
    </div>
  </div>
</section>`;

export const cards = (c, items, cols = 3) => `
<div class="grid g${cols}">
${items.map(([ic, h, p, to], i) => `  <${to ? `a href="${c.url(to)}"` : 'div'} class="card${to ? ' card--link' : ''} reveal" style="--d:${i % cols}">
    <span class="card__ic">${c.icon(ic)}</span><h3>${h}</h3><p>${p}</p>${to ? `<span class="card__go">${c.icon('arrow')}</span>` : ''}
  </${to ? 'a' : 'div'}>`).join('\n')}
</div>`;

export const steps = (items) => `
<ol class="steps">
${items.map(([h, p], i) => `  <li class="reveal" style="--d:${i}"><span class="steps__n">${String(i + 1).padStart(2, '0')}</span><h3>${h}</h3><p>${p}</p></li>`).join('\n')}
</ol>`;

export const note = (c, text) => `<p class="note">${c.icon('doc')}<span>${text}</span></p>`;

// Illustrierte Rolle für Produkte ohne Foto
export const rollSvg = (color, { mesh = false, glow = false } = {}) => `
<svg class="roll${glow ? ' roll--glow' : ''}" viewBox="0 0 220 200" role="img" aria-label="">
  <defs>${mesh ? `<pattern id="mesh" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(8)"><path d="M0 0H9M0 0V9" stroke="#191a47" stroke-opacity=".28" stroke-width="1.2" fill="none"/></pattern>` : ''}</defs>
  <ellipse cx="110" cy="182" rx="78" ry="8" fill="#191a47" opacity=".12"/>
  <ellipse cx="92" cy="100" rx="50" ry="72" fill="${color}"/>
  <ellipse cx="92" cy="100" rx="50" ry="72" fill="#191a47" opacity=".22"/>
  <rect x="92" y="28" width="36" height="144" fill="${color}"/>
  <rect x="92" y="28" width="36" height="144" fill="#191a47" opacity=".1"/>
  <ellipse cx="128" cy="100" rx="50" ry="72" fill="${color}"/>
  ${mesh ? '<ellipse cx="128" cy="100" rx="50" ry="72" fill="url(#mesh)"/>' : ''}
  <ellipse cx="128" cy="100" rx="29" ry="43" fill="#f4f1ea"/>
  <ellipse cx="128" cy="100" rx="23" ry="36" fill="#d9d5ca"/>
  <ellipse cx="131" cy="100" rx="20" ry="33" fill="#f8f6f0"/>
</svg>`;

// "Licht aus"-Demo für nachleuchtendes Band
export const glowDemo = (c) => {
  const { T } = c;
  return `
<div class="glow reveal" data-glow>
  <div class="glow__scene">
    <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${T('Flur mit nachleuchtender Fluchtwegmarkierung', 'Corridor with photoluminescent escape-route marking')}">
      <rect class="g-wall" width="800" height="450"/>
      <polygon class="g-ceil" points="0,0 800,0 520,110 280,110"/>
      <polygon class="g-side" points="0,0 280,110 280,300 0,450"/>
      <polygon class="g-side" points="800,0 520,110 520,300 800,450"/>
      <polygon class="g-floor" points="0,450 280,300 520,300 800,450"/>
      <rect class="g-back" x="280" y="110" width="240" height="190"/>
      <rect class="g-door" x="352" y="150" width="96" height="150"/>
      <circle class="g-knob" cx="436" cy="232" r="4"/>
      <g class="g-lamp"><rect x="330" y="20" width="140" height="10" rx="5"/></g>
      <!-- nachleuchtende Elemente -->
      <g class="g-tape">
        <polygon points="18,450 44,450 296,304 284,304"/>
        <polygon points="782,450 756,450 504,304 516,304"/>
        <path d="M346 300V144h108v156h-8V152h-92v148z"/>
        <polygon points="0,318 0,332 280,246 280,240"/>
        <polygon points="800,318 800,332 520,246 520,240"/>
        <g class="g-chev">
          <path d="M400 330l-34 26h18l16-12 16 12h18z"/>
          <path d="M400 366l-52 38h27l25-18 25 18h27z"/>
          <path d="M400 412l-74 38h38l36-18 36 18h38z"/>
        </g>
        <g transform="translate(362 118)">
          <rect width="76" height="26" rx="3"/>
          <path class="g-cut" d="M12 13h24M28 6l8 7-8 7M46 6h18v14H46z"/>
        </g>
      </g>
    </svg>
    <span class="glow__state" aria-live="polite" data-on="${T('Licht an', 'Lights on')}" data-off="${T('Licht aus · das Band leuchtet nach', 'Lights off · the tape keeps glowing')}">${T('Licht an', 'Lights on')}</span>
  </div>
  <div class="glow__ctl">
    <button class="switch" type="button" role="switch" aria-checked="false" data-glow-btn>
      <span class="switch__track"><span class="switch__knob">${c.icon('moon')}</span></span>
      <span class="switch__lbl">${T('Licht aus', 'Lights off')}</span>
    </button>
    <p>${T('Schalten Sie das Licht aus: Nachleuchtendes Band speichert Licht und markiert Fluchtweg, Türrahmen und Kanten auch bei Stromausfall.', 'Switch the lights off: photoluminescent tape stores light and keeps the escape route, door frame and edges visible, even in a power cut.')}</p>
    <p class="glow__hint">${T('Darstellung schematisch. Leuchtdichte und Nachleuchtdauer: Angabe folgt.', 'Schematic illustration. Luminance and afterglow duration: to be confirmed.')}</p>
  </div>
</div>`;
};

// mailto-Formular: fields = [[name, label, type, required, options|placeholder]]
export const mailForm = (c, { to, subject, fields, submit, hint }) => `
<form class="form reveal" action="mailto:${to}" method="post" enctype="text/plain" data-mailto="${to}" data-subject="${subject}">
${fields.map(([name, label, type, req, extra]) => {
    const id = 'f-' + name;
    const r = req ? ' required' : '';
    const lab = `<label for="${id}">${label}${req ? ' <b aria-hidden="true">*</b>' : ''}</label>`;
    if (type === 'select') return `  <div class="form__f">${lab}<select id="${id}" name="${label}"${r}><option value="">${c.T('Bitte wählen', 'Please choose')}</option>${extra.map((o) => `<option>${o}</option>`).join('')}</select></div>`;
    if (type === 'textarea') return `  <div class="form__f form__f--w">${lab}<textarea id="${id}" name="${label}" rows="4"${r}></textarea></div>`;
    return `  <div class="form__f">${lab}<input id="${id}" name="${label}" type="${type}"${r}${extra ? ` placeholder="${extra}"` : ''}></div>`;
  }).join('\n')}
  <div class="form__f form__f--w form__end">
    <button class="btn btn--pri" type="submit">${submit} ${c.icon('arrow')}</button>
    <p class="form__hint">${hint}</p>
  </div>
</form>`;
