# Image Optimization Implementation Guide

## Quick Start

### 1. Basic Usage
```astro
---
import SmartImage from '@/components/ui/SmartImage.astro 
1. Add new images to `/src/assets/images/`
2. Update `imageBudget.ts` with new image configs
3. Run `npm run image-budget` to check usage
4. Optimize images if over budget
5. Test with `npm run dev:images`o';
import { imageSizes } from '@/utils/imageUtils';
---

<!-- Simple thumbnail -->
<SmartImage 
  src="/src/assets/images/games/snake-game.webp"
  alt="Snake Game Screenshot"
  config={imageSizes.thumbnail}
/>

<!-- Game card with custom sizing -->
<SmartImage 
  src="/src/assets/images/games/tetris-hero.webp"
  alt="Tetris Game"
  config={{ width: 300, height: 200, quality: 80, format: 'webp' }}
  loading="lazy"
/>
```

### 2. Responsive Hero Images
```astro
---
import SmartImage from '@/components/ui/SmartImage.astro';
import { imageSizes } from '@/utils/imageUtils';
---

<SmartImage 
  src="/src/assets/images/games/hero-banner.webp"
  alt="Games Collection Banner"
  config={imageSizes.hero}
  loading="eager"
  class="hero-image"
  style="width: 100%; height: auto;"
/>
```

### 3. Budget Monitoring
```bash
# Check current image budget
npm run image-budget

# Development with budget checking
npm run dev:images

# Build with analysis
npm run build:analyze
```

## Advanced Patterns

### 1. Dynamic Game Cards
```astro
---
import SmartImage from '@/components/ui/SmartImage.astro';
import { imageSizes } from '@/utils/imageUtils';
import { games } from '@/utils/gameData';

// Calculate total budget usage
const totalImages = games.length;
const budgetPerImage = (14 * 1024) / totalImages; // bytes per image
---

{games.map((game) => (
  <article class="game-card">
    <SmartImage 
      src={`/src/assets/images/games/${game.slug}-thumbnail.webp`}
      alt={`${game.title} Screenshot`}
      config={imageSizes.card}
      loading="lazy"
    />
    <h3>{game.title}</h3>
    <p>{game.description}</p>
  </article>
))}
```

### 2. Progressive Loading with Placeholders
```astro
---
import SmartImage from '@/components/ui/SmartImage.astro';
---

<SmartImage 
  src="/src/assets/images/games/large-screenshot.webp"
  alt="Detailed Game Screenshot"
  config={{ width: 600, height: 400, quality: 85, format: 'webp' }}
  loading="lazy"
  placeholder="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3C/svg%3E"
/>
```

### 3. Format Fallbacks
```astro
<!-- Automatic format selection based on browser support -->
<SmartImage 
  src="/src/assets/images/games/artwork.webp"
  alt="Game Artwork"
  config={{ width: 400, height: 300, quality: 90, format: 'avif' }}
  fallback="webp"
  loading="lazy"
/>
```

## Best Practices

### 1. Image Preparation
- **Source Images**: Keep high-quality originals in a separate folder
- **Optimization**: Use tools like Squoosh.app for manual optimization
- **Naming**: Use descriptive, consistent naming conventions

### 2. Performance Guidelines
- **Critical Images**: Use `loading="eager"` for above-the-fold content
- **Lazy Loading**: Use `loading="lazy"` for below-the-fold images
- **Sizing**: Always specify width and height to prevent layout shift
- **Format Priority**: AVIF > WebP > JPEG > PNG

### 3. Budget Management
```typescript
// Example budget calculation
import { validateImageBudget, imageSizes } from '@/utils/imageUtils';

const pageImages = [
  imageSizes.hero,     // ~8kB
  imageSizes.card,     // ~4kB  
  imageSizes.thumbnail // ~2kB
];

if (!validateImageBudget(pageImages)) {
  console.warn('Page over image budget!');
}
```

### 4. Development Workflow
1. Add new images to `/src/assets/images/`
2. Update `imageBudget.ts` with new image configs
3. Run `npm run image-budget` to check usage
4. Optimize images if over budget
5. Test with `npm run dev:images`

## Troubleshooting

### Common Issues
- **Format Support**: Ensure fallbacks for older browsers
- **Loading Performance**: Check network tab for image load timing
- **Budget Exceeded**: Use smaller sizes or better compression
- **Layout Shift**: Always specify dimensions

### Debug Commands
```bash
# Check image budget
npm run image-budget

# Analyze build output
npm run build:analyze

# View image network requests
npm run dev
# Then open DevTools > Network > Images
```

## Examples by Use Case

### Game Thumbnails (2-3kB each)
```astro
<SmartImage 
  config={imageSizes.thumbnail}
  loading="lazy"
/>
```

### Game Cards (4-5kB each)  
```astro
<SmartImage 
  config={imageSizes.card}
  loading="lazy"
/>
```

### Hero Images (8-10kB max)
```astro
<SmartImage 
  config={imageSizes.hero}
  loading="eager"
/>
```

### Icons and UI (1kB each)
```astro
<SmartImage 
  config={imageSizes.icon}
  loading="eager"
/>
```
