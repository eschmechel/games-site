# Image Directory Structure

This directory contains optimized images for the games site.

## Directory Structure

- `games/` - Game screenshots, artwork, and related visuals
- `ui/` - Interface elements, icons, and decorative images
- `placeholders/` - Placeholder images and loading states

## Image Guidelines

### Size Limits
- **Critical**: Keep total image budget under 14kB per page
- **Thumbnails**: 200x150px, ~2-3kB each
- **Cards**: 300x200px, ~4-5kB each
- **Heroes**: 800x400px, ~8-10kB each

### Formats
- **WebP**: Primary format for modern browsers
- **AVIF**: For maximum compression when supported
- **JPEG**: Fallback for complex images
- **PNG**: Only for images requiring transparency

### Optimization
- Use the `SmartImage` component for all images
- Leverage lazy loading for below-the-fold content
- Implement progressive loading with placeholders
- Use responsive images with appropriate srcsets

### Naming Convention
- Use descriptive names: `snake-game-thumbnail.webp`
- Include size in name if multiple versions: `hero-image-800w.webp`
- Use kebab-case for consistency

## Tools
- Use `imageUtils.ts` for size calculations
- Validate budget with `validateImageBudget()`
- Generate responsive images with `generateSrcSet()`
