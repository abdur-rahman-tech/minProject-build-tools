Summarizes frontend tool history, provides the tool comparison matrix, and details setup instructions.
# Mini Project: Build Tools & SCSS

## 1. Evolution of Frontend Development
* **Pre-Build Era**: Static HTML, CSS, and JS files were linked directly in HTML script tags. Code could not be modularized, causing global namespace collisions and un-minified assets.
* **Task Runners (Gulp/Grunt)**: Automated file processing tasks (compiling Sass/SCSS, minifying files) sequentially using code scripts.
* **Module Bundlers (Webpack)**: Built full dependency graphs starting from entry points, bundling JavaScript modules, SCSS, and assets into static output files.
* **Modern ESM Tools (Vite)**: Leverages native ES modules (ESM) during development to serve un-bundled code with instant Hot Module Replacement (HMR).

---

## 2. Tool Comparison Matrix

| Feature | Gulp | Webpack | Vite |
| :--- | :--- | :--- | :--- |
| **Primary Role** | Task Runner | Module Bundler | Next-Gen ESM Build Tool |
| **Dev Speed** | Slow (task re-runs) | Moderate (graph re-bundling) | Instant (Native ESM + HMR) |
| **Configuration** | Programmatic pipeline | Complex config file | Minimal / zero-config |
| **Build Engine** | Custom streams | Webpack Compiler | Rollup / Rolldown |

---

## 3. Tool Choice Justification
**Selected Tool**: **Vite**
* **Instant Development**: Vite serves files via native browser ESM during development, delivering instant startup and sub-millisecond HMR.
* **Built-in SCSS Integration**: Automatically compiles SCSS partials to CSS when the `sass` package is installed.
* **Production Bundling**: Uses Rollup/Rolldown under the hood to output optimized, minified static assets.

---

## 4. Execution Steps
1. Install dependencies: `npm install`
2. Start development server: `npm run dev` (Runs on `http://localhost:5173`)
3. Build for production: `npm run build` (Outputs to `dist/`)