# Wedding Invitation

A scrolling, mobile-first Indian wedding invitation website. It opens with a hanging toran of bells you can tap to ring and the couple's names over a sunrise sky. Scrolling down shows an illustrated temple scene with the invitation card, event cards with map links, a "Meet the Bride and Groom" photo section, family names, RSVP contacts, a live countdown and optional background music.

## Fill in your details

Edit **`invitation.config.js`**. It's the only file you need to change. Every name, date, event, venue, phone number and message is in there, with comments explaining each field.

- **Couple photo:** replace `img/couple.png` with your own photo, or change `couple.photo` in the config.
- **Music:** put an `.mp3` in `audio/` and set `music: '/audio/your-song.mp3'`.
- **Browser tab and WhatsApp preview text:** update the `<title>` and `og:` tags at the top of `index.html`.
- **Hide a section:** set it to `null`, for example `host: null` or `heavenlyBlessings: null`.

## Tech

- Plain HTML, CSS and JavaScript with no framework and no build step
- Netlify Image CDN (`/.netlify/images`) for resized WebP images
- Google Fonts: Pinyon Script, Cormorant Garamond, Alice, Noto Serif Devanagari
- Illustrations generated for this project with Netlify AI Gateway

## Run locally

```bash
netlify dev
```

The Image CDN URLs need Netlify (or `netlify dev`) to work. If you open `index.html` directly from disk, the page falls back to the original images, but the sky background won't load.
