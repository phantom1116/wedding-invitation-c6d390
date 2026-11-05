# AGENTS.md

Static wedding invitation site with no build step and no framework. Netlify publishes the repo root (see `netlify.toml`).

## Files
- `invitation.config.js`: the single source of all invitation content (`window.INVITATION`). Content changes go here, never in markup.
- `app.js`: renders every section into `<main id="app">` from the config using a small `h()` DOM helper (text nodes only, so no HTML injection). It also handles parallax, bell chimes (Web Audio synth), the countdown, music and scroll reveal (`.rv` → `.in`).
- `index.html`: shell with the fixed sky, toran/bells, opening title (`data-bind="path"` filled from config) and static `<head>` meta. Share-preview meta tags must stay static, so they're edited by hand.
- `style.css`: all styles. The content column has width `--cw` and uses container query units (`cqw`), so everything scales with the column.
- `img/`: generated illustrations (sky, hero, mandap, elephant, couple placeholder). Always reference them through `/.netlify/images?url=…&w=…&fm=webp` (the `img()` helper in app.js does this).
- `audio/`: optional background music.

## Conventions
- Optional config sections are skipped when `null` or empty. Keep that behavior for any new section.
- Ordinals in event dates (`18th`) are auto-wrapped in `<sup>`.
- Respect `prefers-reduced-motion` for any new animation.
