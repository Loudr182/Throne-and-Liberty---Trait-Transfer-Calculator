# Trait Transfer Calculator (React + Vite + Material UI)

A web-based calculator for planning and simulating the transfer of traits between item tiers in a game. The application currently supports the Tier 1 → Tier 2 process, with a future placeholder for Tier 2 → Tier 3.

## Features

- **Dynamic Trait Calculator:**
  - Configure the number of Tier 1 (T1) items (1–8).
  - For each T1 item, set trait levels (1–4) for three traits and add extra blessings.
  - The first T1 item is special: it provides more blessings and should be transferred last for maximum effect.
  - See the total blessings contributed by all T1 items.
  - Simulate the Tier 2 (T2) item and its trait levels, and see how many blessings are still required.
  - "Max Out T1 Traits" button for quick max configuration.

- **Language Support:**
  - English and Czech translations.
  - Language selector updates all UI and rules dynamically.

- **Responsive Design:**
  - Mobile-friendly layout using Material UI and custom styles.

- **Main Menu:**
  - The main `index.html` page shows two images: T1→T2 (links to calculator) and T2→T3 (coming soon).

## Technical Implementation

- **React + Vite + Material UI:**
  - All UI and state management use React functional components and hooks.
  - Uses [Material UI](https://mui.com/) for styling and layout.
  - Custom responsive tweaks in `index.css` and `App.css`.

- **Translations:**
  - Language files are in `public/assets/translations/lang-*.json`.
  - The language selector loads the appropriate JSON and updates the UI.

- **Deployment:**
  - Deployable as a static site to any web server.
  - Multi-page support: `index.html` (main menu) and `T1-T2.html` (calculator).

## File Structure

- `index.html` — Main menu page with links to calculators.
- `T1-T2.html` — Calculator page.
- `src/App.jsx` — Main React app logic and state.
- `src/components/` — All React UI components.
- `public/assets/images/` — Contains favicon and static images.
- `src/assets/images/` — Images imported in React components.
- `public/assets/translations/` — Language JSON files.
- `src/index.css`, `src/App.css` — Custom responsive styles.

## How to Use

1. Open `index.html` in your browser (or run `npm run dev` for local development).
2. Click the T1→T2 image to open the calculator.
3. Configure your T1 items and traits. The blessings and requirements update live.
4. Change the language using the selector in the top right.

## Development Notes

- No Tailwind CSS or PostCSS dependencies are used; all styling is via Material UI and custom CSS.
- All logic is in the React components; you can edit and deploy directly.
- To add new languages, copy a translation file in `public/assets/translations/` and update the language selector logic.

## License

MIT License (or specify your own)
