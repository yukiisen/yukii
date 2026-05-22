# Codebase Organization Report

## Structure

```
src/
├── app.css              # Global styles + Tailwind theme
├── app.html             # HTML shell
├── lib/
│   ├── components/      # Reusable Svelte components
│   │   ├── icons/       # SVG icon components
│   │   │   ├── Discord.svelte
│   │   │   ├── Eye.svelte
│   │   │   ├── GitHub.svelte
│   │   │   └── Reddit.svelte
│   │   ├── NavBar.svelte
│   │   ├── ScreenEffect.svelte
│   │   └── Typewriter.svelte
│   ├── config.ts        # Site configuration (name, usernames)
│   ├── content/         # Data files (edit these to update content)
│   │   ├── blogs.json
│   │   └── projects.json
│   ├── styles/          # Shared stylesheets
│   │   └── markdown.css
│   └── utils.ts         # Utility functions
├── routes/              # Page routes only (no stray components)
│   ├── +layout.svelte
│   ├── +page.svelte
│   ├── archive/
│   ├── bunker/
│   ├── logs/
│   └── status/
static/
├── favicon.png
├── logo.png
└── blogs/
    └── bourak.md
```

## Round 1 Changes

### 1. Removed `deno.lock`
- Project uses Bun exclusively now.

### 2. Extracted data into JSON files
- `src/lib/content/projects.json` — project portfolio
- `src/lib/content/blogs.json` — blog post metadata
- `src/lib/config.ts` — now only site config (name, usernames)

### 3. Consolidated `ssr = false` into parent layouts
- `src/routes/archive/+layout.ts`
- `src/routes/logs/+layout.ts`

### 4. Removed osu! clips
- Deleted `src/routes/archive/clips/` and `src/lib/content/clips.json`

### 5. Created reusable Typewriter component
- `src/lib/components/Typewriter.svelte` — eliminates 5x duplication

### 6. Fixed heading hierarchy
- `h1` (36px, Cinzel Decorative) > `h2` (24px bold) > `h3` (20px) > `h4` (18px)
- Removed `!important` overrides, removed `font-family: Cinzel Decorative` from `h2`
- Added `h4` styles (was missing)

### 7. Fixed CSS issues
- Properly quoted `"Cinzel", serif` / `"Cinzel Decorative", serif` everywhere
- Replaced undefined `--color-accent` with `--color-text`

## Round 2 Changes

### 8. Reorganized `src/lib/` into clean subdirectories
- `components/` — all shared Svelte components
- `components/icons/` — SVG icon components
- `content/` — JSON data files
- `styles/` — CSS files

### 9. Moved shared components out of `routes/`
- `NavBar.svelte` → `lib/components/NavBar.svelte`
- `ScreenEffect.svelte` → `lib/components/ScreenEffect.svelte`
- `routes/` now only contains actual page routes

### 10. Extracted inline SVGs into icon components
- Eye icon (NavBar view counter) → `lib/components/icons/Eye.svelte`
- Discord, GitHub, Reddit icons (Bunker socials) → dedicated components
- Replaced ~100 lines of inline SVG markup with clean component imports

### 11. Moved `markdown.css` into `lib/styles/`
- Was at `src/markdown.css` root, now at `src/lib/styles/markdown.css`

## Not Changed (per your instruction)
- Error handling in loaders (for later)
- Tests (for later)
- Bunker form / server-down overlay (for later)
- Bunker a11y/deprecation warnings (for later)
