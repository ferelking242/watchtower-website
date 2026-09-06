# Watchtower website

The documentation and landing page for Watchtower.

## Local development

```bash
npm install
npm run dev
```

The app opens on the full Kage WebGL experience, including its loading gate, live Three.js scene, scroll chapters, and foreground layers. Use the small **Docs** control to open the Watchtower documentation, switch between English and French from the language control, or use the GitHub icon to open the source repository.

## Deployment

The `Deploy to GitHub Pages` workflow builds the Vite site and publishes `dist/` to GitHub Pages on every push to `main`.