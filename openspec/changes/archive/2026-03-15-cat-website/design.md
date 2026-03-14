## Context

The cat website is a static web application showcasing cat information and gallery. The implementation uses vanilla HTML, CSS, and JavaScript with no backend dependencies, enabling fast deployment and minimal maintenance overhead. The site must support modern browsers and respond to user preferences for light/dark themes.

## Goals / Non-Goals

**Goals:**
- Build a fully responsive static website (no backend required)
- Implement theme toggle (light/dark mode) with localStorage persistence
- Create an intuitive image gallery with modal/lightbox interaction
- Ensure fast load times and SEO-friendly structure
- Enable easy deployment to GitHub Pages or similar platforms
- Provide a clear example of spec-driven web development using OpenSpec

**Non-Goals:**
- Server-side rendering or backend API
- User authentication or accounts
- Dynamic content management system
- Advanced analytics or tracking beyond basic page metrics
- Real-time features or WebSockets

## Decisions

### 1. Static HTML/CSS/JavaScript (no build tool)
**Decision**: No build tool (Webpack, Vite, etc.). Serve HTML/CSS/JS directly.

**Rationale**: Simplicity and minimal dependencies; faster iteration and easier for developers new to the project. GitHub Pages hosting is straightforward.

**Alternatives Considered**:
- Next.js/React: Adds complexity; overkill for static content
- Hugo/Jekyll: Requires Ruby/Go setup; less flexible for interactive elements
- Vite/Webpack: Good if we add node_modules in future, but unnecessary now

### 2. CSS Custom Properties (Variables) for Theming
**Decision**: Use CSS variables (`:root { --color-bg, --color-text, ... }`) and toggle dark mode via `.dark` class on `<html>`.

**Rationale**: Works across all modern browsers; no build step needed; easy to maintain centralized color tokens; `localStorage` persists user choice.

**Alternatives Considered**:
- Tailwind CSS: Great but adds PostCSS build complexity
- SCSS: Requires build step
- Inline styles: Not maintainable

### 3. Vanilla JavaScript for Gallery and Theme Toggle
**Decision**: Use plain JavaScript (no jQuery, no framework) for event listeners and DOM manipulation.

**Rationale**: Keeps dependencies zero; teaches fundamentals; rapid implementation.

**Alternatives Considered**:
- Vue/React: Adds ~40KB+ of JavaScript; slower initial load
- jQuery: Outdated; not needed for modern DOM APIs

### 4. Directory Structure
```
web/
├── index.html
├── styles.css
├── scripts.js
├── images/
│   └── cats/
│       ├── siamese.jpg
│       └── ... (cat images)
└── README.md
```

## Risks / Trade-offs

| Risk | Mitigation |
|------|-----------|
| **No package manager**: Harder to update dependencies in future | Clear documentation on manual updates; consider adding package.json later if complexity grows |
| **No build tool**: CSS/JS not minified; loss of ~10-15% on large assets | Accept tradeoff; minification can be added via CI if needed (e.g., GitHub Actions + csso/terser) |
| **Storage limits**: localStorage is ~5-10MB; sufficient for theme/gallery state | Keep state minimal (theme choice only); images served separately |
| **Browser compatibility**: Older IE11 not supported (CSS variables, etc.) | Acceptable; IE11 is <1% of traffic; document minimum browsers (Chrome, FF, Safari, Edge) |
| **Image optimization**: No automatic WebP or responsive srcset | Add manual responsive images and WebP variants in next phase if needed |

## Migration Plan

**Deployment**:
1. Create `web/` directory with all HTML/CSS/JS/images
2. Test locally: `python -m http.server 8000` or similar
3. Push to GitHub
4. Enable GitHub Pages on repo (`Settings` → `Pages` → Source: `main` branch, `/root` or `/docs`)
5. Site live at `https://<username>.github.io/<repo>`

**Rollback**:
- GitHub Pages rolls back to previous commit on push of fix. No special step needed.

## Open Questions

- Will images be original photography or stock images? (Impacts licensing and storage)
- Target browsers: Modern only (Chrome 90+, Firefox 88+, Safari 14+) or include CSS fallbacks?
- Do we need a search/filter feature for the gallery, or just paginated grid?
- Should we track page visits or analytics, or keep it fully static with no telemetry?
