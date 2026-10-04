# Sorted marketing site

React + Tailwind CSS + Framer Motion (Vite).

```bash
npm install
npm run dev        # local dev server
npm run build      # production build in dist/
SINGLE=1 npm run build   # one self-contained dist/index.html
```

## Before launch
- Replace everything flagged `SAMPLE` in `src/data.js` (stats, case studies, testimonials, FAQ policies).
- Swap the dashed college-logo boxes (`src/components/Proof.jsx`) and the striped photo frames (`PhotoFrame` in `src/components/ui.jsx`) for real, lazy-loaded images with alt text.
- Wire the quote form to a backend (`TODO` in `src/components/Pricing.jsx`). It currently shows the success state without sending anything.
- Set the real domain in the Open Graph / Twitter tags in `index.html` and replace `hello@sorted.example` and the social links in `src/components/Closing.jsx`.
- Fonts load from Google Fonts (Inter Tight for headings, Inter for body). Swap in Satoshi or General Sans if you have a licence.

## Notes
- One accent only: electric lime `#C6F432`, always paired with `#111` ink. Colours are CSS variables in `src/index.css`.
- Dark mode follows the OS and can be toggled in the nav; the choice is remembered.
- All motion respects `prefers-reduced-motion`.
