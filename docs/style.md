# Style guide

## Color palette (sourced from rauhanvillage.com CSS)

| Token | Value | Usage |
|---|---|---|
| `--color-ink` | `#333333` | Body text, headings |
| `--color-muted` | `#666666` | Secondary text, descriptions |
| `--color-surface` | `#ffffff` | Page background, cards |
| `--color-surface-soft` | `#f7f7f7` | Alternate section background |
| `--color-surface-strong` | `#ffffff` | Card backgrounds |
| `--color-accent` | `#006bc3` | Primary CTA buttons, borders, badges |
| `--color-accent-dark` | `#0055a5` | Gradient start, hover states |
| `--color-accent-light` | `#7ebec5` | Mobile nav icons, secondary accents |
| `--color-footer` | `#000000` | Footer background |
| `--color-line` | `rgba(0,107,195,0.14)` | Borders, dividers |

### Key color usage from original site CSS
- **Hero background**: `linear-gradient(180deg, #0055a5 0%, #00b9f7 100%)`
- **Section with blue bg**: `#006BC3` solid
- **CTA section background**: `linear-gradient(180deg, #30a7f2 0%, #004da0 100%)`
- **Footer**: `#000000` (black)
- **Header**: `#ffffff` (white, with blue text/accents)
- **Alt section**: `#f7f7f7`
- **Mobile nav icon**: `#7EBEC5`

## Typography (from original site)

| Font | Usage |
|---|---|
| **Rubik** (Google Font) | All headings (h1–h4) |
| **Open Sans** (Google Font) | Body text |
| **Arimo** (Google Font) | Buttons, CTAs |

Font size: 14px base (inherited from Divi Customizer)

## Buttons (from original site CSS)

- **Border**: 4px solid (not filled) — outline style
- **Radius**: 0px (square corners)
- **Letter-spacing**: 4px (wide spaced)
- **Text-transform**: uppercase
- **Hover**: filled with `#006BC3` background, white text

## Section tones

| Tone | Background |
|---|---|
| `default` | `#ffffff` |
| `accent` | `#f7f7f7` (soft blue-white) |
| `solidBlue` / `solidGreen` | `linear-gradient(180deg, #0055a5, #00b9f7)` |

## Border radii

- `--radius-card: 0px` — square card corners (matches Divi default on original site)
- `--radius-pill: 999px` — only for pill-shaped elements (nav, badges)
