<!-- This wont be rendered on the server so dw about --- --- lines for astro-->
# 🎨 Style Guide — 20 Games Challenge

## Colours

| Name                | Hex       | Notes                      |
| ------------------- | --------- | -------------------------- |
| **Main BG (Dark)**  | `#0e1320` | Default dark background    |
| **Main BG (Light)** | `#f7f8fd` | Light theme background     |
| **Card BG (Dark)**  | `#121a2b` | Panels/cards in dark mode  |
| **Card BG (Light)** | `#ffffff` | Panels/cards in light mode |
| **Text (Dark)**     | `#e9ecf5` | Light text for dark mode   |
| **Text (Light)**    | `#1a1f2e` | Dark text for light mode   |
| **Text Muted (Dark)** | `#c7cce0` | Subdued text for dark mode |
| **Text Muted (Light)** | `#475069` | Subdued text for light mode |
| **Border (Dark)**   | `#223047` | Card borders in dark mode  |
| **Border (Light)**  | `#dfe4f2` | Card borders in light mode |
| **Accent Pink**     | `#ff5ea8` | Primary accent             |
| **Accent Gold**     | `#f6d36b` | Secondary accent           |
| **Accent Emerald**  | `#3ee07d` | Third accent               |
| **Accent Cyan**     | `#4dd7ff` | Fourth accent              |
| **Accent Purple**   | `#a987ff` | Fifth accent               |

## Gradients

| Name                  | CSS                                                                    |
| --------------------- | ---------------------------------------------------------------------- |
| **Accent Gradient**   | `linear-gradient(90deg in oklch, var(--accent-emerald), var(--accent-pink), var(--accent-gold))` |
| **Hero Background**   | Multi-layer radial gradients with subtle color hints                  |
| **Page Background**   | Composed gradient from hero + dark overlay at bottom                  |
| **Card Gradient**     | `linear-gradient(180deg, var(--card), color-mix(in lab, var(--card) 86%, black))` |
| **Pill Gradient**     | `linear-gradient(180deg, var(--card), color-mix(in lab, var(--card) 88%, black))` |

## CSS Custom Properties

```css
:root {
  /* Colors */
  --bg: #0e1320;
  --bg-2: #0b0f1a;
  --fg: #e9ecf5;
  --fg-muted: #c7cce0;
  --card: #121a2b;
  --border: #223047;
  
  /* Accents */
  --accent-pink: #ff5ea8;
  --accent-gold: #f6d36b;
  --accent-emerald: #3ee07d;
  --accent-cyan: #4dd7ff;
  --accent-purple: #a987ff;
  
  /* Gradients */
  --grad-accent: linear-gradient(90deg in oklch, var(--accent-emerald), var(--accent-pink), var(--accent-gold));
  --grad-hero: /* Complex multi-layer radial gradients */;
  --page-bg: /* Composed full-page background */;
}

/* Light theme overrides */
:root[data-theme="light"] {
  --bg: #f7f8fd;
  --bg-2: #ffffff;
  --fg: #1a1f2e;
  --fg-muted: #475069;
  --card: #ffffff;
  --border: #dfe4f2;
}
```

## Typography

- **Body:** System stack for performance: `system-ui, sans-serif`
- **Headings:** Enhanced with `letter-spacing: .5px` and `text-shadow: 0 1px 0 rgba(0,0,0,.15)`
- **Line Height:** `1.5` for optimal readability
- **Muted Text:** Uses `--fg-muted` for secondary content

## Components

### Pills (Navigation)
Small button-like elements with:
- Subtle gradient background
- Inset shadows for depth
- Hover animation (translateY(-1px))
- Used for navigation links

### Cards
Content containers with:
- Gradient background from light to slightly darker
- Colored top accent bar using `--grad-accent`
- Hover effects: lift, border color change, shadow
- Rounded corners with subtle depth

### Progress Bar
Animated progress indicator with:
- Track background using mixed card color
- Fill using `--grad-accent` gradient
- Smooth width transition (0.25s ease)
- Proper ARIA accessibility attributes

### Theme Toggle
Button matching pill styling that:
- Shows 🌙 for light mode, ☀️ for dark mode
- Stores preference in localStorage
- Applies theme via `data-theme` attribute
- Respects system preference as fallback

### Hero Section
Main content area featuring:
- Multi-layer gradient background
- Subtle inner glow effect
- Progress bar integration
- Blend mode for visual interest

## Layout

### Base Layout
**Location:** `src/layouts/Base.astro`

Provides:
- Early theme detection script (prevents flash)
- Global CSS variables and base styles
- Background composition on html element
- System font loading optimization

### Page Structure
```
header > nav (pills + theme toggle)
main > hero + content sections
footer > links
```

### Grid System
- Auto-fit columns: `repeat(auto-fit, minmax(220px, 1fr))`
- Responsive spacing (16px on mobile, scales up)
- Cards adapt from 1-column on mobile to 3+ on desktop

## Interactions

### Hover Effects
- **Pills/Buttons:** Lift 1px, enhanced shadow
- **Cards:** Lift 2px, border color shift, larger shadow
- **Theme Toggle:** Matches pill behavior

### Focus States
- Pink outline: `2px solid var(--accent-pink)`
- Offset: `2px` for clear separation
- Applied to all interactive elements

### Transitions
- **Standard:** `transform .12s ease, background .2s ease, box-shadow .2s ease`
- **Progress:** `width .25s ease`
- **Border color:** `border-color .2s ease`

## Accessibility

- **Color contrast:** Meets WCAG AA standards
- **Focus indicators:** Visible pink outlines
- **Progress bars:** Proper ARIA attributes
- **Theme preference:** Respects system settings
- **Reduced motion:** Ready for `prefers-reduced-motion`

## Performance

### Current Stats
- **Raw HTML:** ~8.8KB
- **Gzipped:** ~2.8KB  
- **Brotli:** ~2.3KB
- **Target:** <14KB (well under budget!)

### Optimizations
- System fonts only (no webfont loading)
- Inlined critical CSS in layout
- Minimal JavaScript (theme toggle only)
- Efficient gradient usage
- Early theme detection prevents flash

## File Structure

```
src/
├── components/ui/
│   └── ThemeToggle.astro       # Theme switching button
├── layouts/
│   └── Base.astro              # Main layout with inlined CSS
├── pages/
│   ├── index.astro             # Homepage with hero + cards
│   ├── games/index.astro       # Game collection page
│   └── styleguide.md           # This style guide
└── utils/
    └── dataTypes.ts            # Game data & TypeScript types
```

## Usage Guidelines

### Theme Implementation
```astro
<!-- Always use Base layout for theme support -->
<Base title="Page Title" description="Optional description">
  <!-- Theme toggle in navigation -->
  <ThemeToggle />
  <!-- Content automatically themed -->
</Base>
```

### Data Management
Import from `dataTypes.ts`:
```typescript
import { games, posts, type Game, type BlogPost } from '../utils/dataTypes';
```

### Color Usage
- Use CSS custom properties: `var(--fg)`, `var(--card)`, etc.
- Accent gradient for progress bars and card accents
- Muted text for secondary content

### Progressive Enhancement
- Theme works without JavaScript (respects system preference)
- JavaScript enhances with localStorage persistence
- Graceful degradation for older browsers
