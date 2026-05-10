# sigo Prototype (Vite + React)

A modular React prototype for an insurance comparison website, converted from a single HTML sample into reusable UI sections.

## Tech
- Vite
- React
- Plain CSS (DM Sans + DM Serif Display)

## Project Structure
- `src/App.jsx`
  - Main app container.
  - Holds lightweight state for:
    - selected language
    - selected category
    - current view (`catalog | form | compare`)
    - expanded compare row
  - Uses simple data objects to render UI, making future expansion easy.
- `src/index.css`
  - Global styles and design tokens.
  - Includes the original visual language (colors, spacing, cards, hero, form, comparison rows).
- `src/main.jsx`
  - React entry point.

## Current Functional Scope
- Multi-language header toggle (TR/EN/FR/RU/FA).
- Hero section and insurance category grid.
- “Coming soon” state for unavailable categories.
- Prototype form view.
- Prototype comparison list with expandable details.

## How to Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## How to Extend (Recommended)
1. **Add real i18n**
   - Move `content` object in `App.jsx` into separate locale files (`src/locales/*.js`).
2. **Split components**
   - Extract sections into:
     - `components/NavBar.jsx`
     - `components/Hero.jsx`
     - `components/CategoryGrid.jsx`
     - `components/InsuranceForm.jsx`
     - `components/CompareList.jsx`
3. **Introduce routing**
   - Use `react-router-dom` for `/`, `/quote`, `/compare`.
4. **Add API layer**
   - Create `src/services/insuranceApi.js`.
   - Replace static compare rows with backend response.
5. **Add form model + validation**
   - Use a schema (e.g. Zod) and form library (React Hook Form).
6. **State management if needed**
   - Keep local state for now.
   - Move to Zustand/Redux only when cross-page complexity grows.

## Notes for Next Agent
- The current implementation intentionally favors simplicity over full feature parity to keep the code easy to evolve.
- Styling is designed to stay close to the provided mock while avoiding heavy architecture too early.
- Start by component extraction before adding business logic.
