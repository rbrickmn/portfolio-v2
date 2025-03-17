/**
 * Image optimization utilities
 * Performance-focused tools for responsive, lazy-loaded images
 */

import { useState, useEffect } from 'react';

/**
 * IntersectionObserver hook - only loads images when they enter viewport
 * Uses browser's IntersectionObserver API for efficient scroll detection
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
 * URL transformer for responsive images
 * 
 * TODO: Implement with your preferred image hosting service
 * - For Cloudinary: imageUrl.replace('/upload/', `/upload/w_${width},q_auto/`)
 * - For Imgix: `${imageUrl}?w=${width}&auto=format`
 */
export const getResponsiveImageUrl = (imageUrl, width) => {
  if (!imageUrl) return '';
  
  // Currently returning original URL
  // Modify for your image hosting provider
  return imageUrl;
};

/**
 * Generates srcSet attribute for responsive images
 * Creates multiple resolution options for browsers to choose from
 */
export const getSrcSet = (imageUrl) => {
  if (!imageUrl) return '';
  
  // Common responsive breakpoints
  const widths = [320, 640, 960, 1280, 1920];
  
  return widths
    .map(width => `${getResponsiveImageUrl(imageUrl, width)} ${width}w`)
    .join(', ');
}; 