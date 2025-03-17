/**
 * Optimized Image component with lazy loading
 * This utility helps optimize image performance across your portfolio
 */

import { useState, useEffect } from 'react';

/**
 * Hook to check if an element is in viewport for lazy loading
 */
export const useIntersection = (ref, options = {}) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);
    
    observer.observe(ref.current);
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isIntersecting;
};

/**
 * Format image URL to request different sizes for responsive images
 * This assumes you're using a service like Cloudinary, Imgix, or similar
 * Adjust the implementation based on your actual image hosting
 */
export const getResponsiveImageUrl = (imageUrl, width) => {
  // Example implementation - modify based on your image hosting solution
  // If you're using local images, you might return different image files based on width
  
  if (!imageUrl) return '';
  
  // For demonstration - in a real implementation, you would transform the URL
  // based on your image hosting provider's API
  // Example for Cloudinary:
  // return imageUrl.replace('/upload/', `/upload/w_${width},q_auto,f_auto/`);
  
  return imageUrl;
};

/**
 * Calculate srcSet for responsive images
 */
export const getSrcSet = (imageUrl) => {
  if (!imageUrl) return '';
  
  // Generate different sizes for your images
  const widths = [320, 640, 960, 1280, 1920];
  
  return widths
    .map(width => `${getResponsiveImageUrl(imageUrl, width)} ${width}w`)
    .join(', ');
}; 