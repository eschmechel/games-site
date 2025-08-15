// Image optimization utilities and configurations

export interface ImageConfig {
  width: number;
  height: number;
  quality: number;
  format: 'webp' | 'avif' | 'jpeg' | 'png';
}

// Predefined image sizes for consistency
export const imageSizes = {
  thumbnail: { width: 200, height: 150, quality: 80, format: 'webp' as const },
  card: { width: 300, height: 200, quality: 80, format: 'webp' as const },
  hero: { width: 800, height: 400, quality: 85, format: 'webp' as const },
  avatar: { width: 100, height: 100, quality: 90, format: 'webp' as const },
  icon: { width: 64, height: 64, quality: 95, format: 'webp' as const }
};

// Generate optimized image URL
export function getOptimizedImageUrl(src: string, config: ImageConfig): string {
  const { width, height, quality, format } = config;
  
  // For external URLs, return as-is
  if (src.startsWith('http')) {
    return src;
  }
  
  // For local images, add optimization parameters
  const extension = format === 'jpeg' ? 'jpg' : format;
  const optimizedSrc = src.replace(/\.(jpg|jpeg|png|webp|avif)$/i, `.${extension}`);
  
  return `${optimizedSrc}?w=${width}&h=${height}&q=${quality}&format=${format}`;
}

// Generate responsive srcset
export function generateSrcSet(src: string, config: ImageConfig): string {
  const { width, height, quality, format } = config;
  
  const sizes = [
    { w: Math.floor(width * 0.5), suffix: '0.5x' },
    { w: width, suffix: '1x' },
    { w: Math.floor(width * 1.5), suffix: '1.5x' },
    { w: width * 2, suffix: '2x' }
  ];
  
  return sizes
    .map(size => `${getOptimizedImageUrl(src, { ...config, width: size.w })} ${size.suffix}`)
    .join(', ');
}

// Calculate estimated file size (rough estimation)
export function estimateImageSize(config: ImageConfig): number {
  const { width, height, quality, format } = config;
  const pixels = width * height;
  
  // Rough estimates based on format and quality
  const bytesPerPixel = {
    webp: (quality / 100) * 0.8,
    avif: (quality / 100) * 0.6,
    jpeg: (quality / 100) * 1.2,
    png: 3
  };
  
  return Math.floor(pixels * bytesPerPixel[format]);
}

// Validate image fits within budget
export function validateImageBudget(images: ImageConfig[], budgetKB = 14): boolean {
  const totalBytes = images.reduce((sum, config) => sum + estimateImageSize(config), 0);
  const totalKB = totalBytes / 1024;
  
  console.log(`Image budget: ${totalKB.toFixed(1)}kB / ${budgetKB}kB`);
  
  return totalKB <= budgetKB;
}
