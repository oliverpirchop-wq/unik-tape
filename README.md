# UNIK TAPE – Website-Entwurf

Statische Website (HTML/CSS/JS, keine Abhängigkeiten, keine kostenpflichtigen Dienste) für
UNIK TAPE & Tech LLC, Fushë Kosovë, mit dem Bereich „Business Services“
(Labeat Data & Ops | Hajdari Group). Sprachen: Deutsch und Englisch.

**Status: Entwurf.** Suchmaschinen sind ausgesperrt (`noindex` auf jeder Seite, `robots.txt`).

## Lokal ansehen

- Doppelklick auf `index.html` (funktioniert direkt aus dem Ordner), oder
- `python -m http.server 8000` im Projektordner und dann <http://localhost:8000/>.

## Inhalte ändern

Die Seiten in `de/` und `en/` werden erzeugt. Nicht dort ändern, sondern in `src/`:

| Datei | Inhalt |
| --- | --- |
| `src/products.mjs` | Produkte, Kategorien, technische Daten |
| `src/tape.mjs` | Seiten im Bereich Klebeband |
| `src/business.mjs` | Seiten im Bereich Business Services |
| `src/site.mjs` | Startseite, Impressum, Datenschutz |
| `src/ui.mjs` | Bausteine (Seitenkopf, Karten, Formular, Licht-aus-Demo) |
| `build.mjs` | Layout, Menü, Footer, Erzeugung |
| `assets/` | CSS, JavaScript, Bilder, Schrift |

Danach `node build.mjs` ausführen und committen.

## Quellen

- `quelle/bilder/`: Originalbilder von uniktape.de (Stand 21.11.2026)
- Produktkatalog 2025 (PDF, liegt lokal in `quelle/`, nicht im Repository)
- Schrift: Archivo (SIL Open Font License), lokal eingebunden

Fehlende Angaben sind auf der Seite mit „Angabe folgt“ markiert. Normen und Zertifikate
(z. B. ISO 9001, DIN 67510) sind bewusst nur Platzhalter, bis Nachweise vorliegen.
