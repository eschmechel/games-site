---
title: "Style Guide"
#layout: "../layouts/Base.astro"
---

# 🎨 Style Guide — 20 Games Challenge

## Colours

| Name                | Hex       | Notes                      |
| ------------------- | --------- | -------------------------- |
| **Main BG (Dark)**  | `#0F1923` | Default dark background    |
| **Main BG (Light)** | `#F6F7FB` | Light theme background     |
| **Card BG (Dark)**  | `#141A2E` | Panels/cards in dark mode  |
| **Card BG (Light)** | `#FFFFFF` | Panels/cards in light mode |
| **Text (Dark)**     | `#E6E9F2` | Light text for dark mode   |
| **Text (Light)**    | `#1C1F2A` | Dark text for light mode   |
| **Accent Pink**     | `#E94E77` | Primary accent             |
| **Accent Gold**     | `#F7C948` | Secondary accent           |
| **Accent Emerald**  | `#3DDC84` | Third accent               |

## Gradients

| Name                  | CSS                                                                    |
| --------------------- | ---------------------------------------------------------------------- |
| **Light Gradient**    | `linear-gradient(90deg, #E94E77 0%, #F7C948 100%)`                     |
| **Dark Gradient**     | `linear-gradient(135deg, #3DDC84 0%, #E94E77 50%, #F7C948 100%)`       |
| **Universal Overlay** | `linear-gradient(90deg, rgba(233,78,119,0.18), rgba(247,201,72,0.18))` |

## Fonts

- **Pixel Headings/UI:** [Pixelify Sans](https://fonts.google.com/specimen/Pixelify+Sans) — readable, pixel-inspired
- **Optional Logo / Display:** [VT323](https://fonts.google.com/specimen/VT323) or [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) for big headings only
- **Body:** System stack for speed: system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif

## Light/Dark Mode

- **Light mode:** Background `#F6F7FB`, Text `#1C1F2A`, Card `#FFFFFF`
- **Dark mode:** Background `#0F1923`, Text `#E6E9F2`, Card `#141A2E`
- Toggle with a `<button>` and `document.documentElement.dataset.theme`

## Components


## Layouts

### Base Layout
**Location:** `src/layouts/Base.astro`

Main layout template providing:
- HTML structure with proper meta tags
- CSS custom properties (design tokens)
- System font stack for performance
- Accessibility-focused styling (focus outlines)
- Light/dark mode support via `prefers-color-scheme`

```astro
---
import Base from "../layouts/Base.astro";
---
<Base title="Page Title" description="Optional description">
  <h1>Your content here</h1>
</Base>
```

## File Structure

```
src/
├── components/
│   └── CRTFrame.astro          # Retro CRT monitor effect
├── layouts/
│   └── Base.astro              # Main layout template
├── pages/
│   ├── index.astro             # Homepage
│   ├── styleguide.md           # This style guide
│   └── games/
│       └── index.astro         # Games listing
├── utils/
│   └── gameData.ts             # Game data & TypeScript types
└── styles/                     # Global CSS (optional)
```

## Accessibility Notes

- Ensure focus outlines are visible
- Keep contrast ratio ≥ 4.5:1 for text
- Respect `prefers-reduced-motion` for CRT scanlines
- Large tap targets (≥44px)

## Usage Guidelines

### Component Organization
- **Components:** Reusable UI elements in `src/components/`
- **Layouts:** Page templates in `src/layouts/`
- **Utils:** Shared data and functions in `src/utils/`
- **Pages:** Route-based pages in `src/pages/`

### Performance
Keep homepage under 14 kB by avoiding:
- Webfonts on index
- Images above the fold
- Large inline JS
- Use gradients sparingly to keep byte size and visual noise low

### Data Management
Use `src/utils/gameData.ts` for:
- Game metadata and status
- Blog post references
- Shared constants and types
