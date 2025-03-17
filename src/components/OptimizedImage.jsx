import { useRef, useState } from "react";
import { useIntersection, getSrcSet } from "../utils/imageOptimization";

/**
 * OptimizedImage component for performance-optimized image loading
 * Features:
 * - Lazy loading with IntersectionObserver
 * - Responsive image sizes
 * - Loading placeholder
 * - Error handling
 */
const OptimizedImage = ({
  src,
  alt,
  className = "",
  width,
  height,
  sizes = "100vw",
  blur = false,
  style = {},
}) => {
  const imgRef = useRef(null);
  const isVisible = useIntersection(imgRef, { rootMargin: "200px" });
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  // Create container style with width/height if provided
  const containerStyle = { 
    ...(width || height ? { width, height } : {}),
    ...style 
  };

  return (
    <div
      className={`relative overflow-hidden h-full w-full ${className}`}
      style={containerStyle}
      ref={imgRef}
    >
      {/* Loading skeleton */}
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <span className="text-gray-500">Image failed to load</span>
        </div>
      )}

      {/* The actual image */}
      {isVisible && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
          srcSet={getSrcSet(src)}
          sizes={sizes}
          style={style}
          className={`
            w-full h-full transition-opacity duration-300 
            ${isLoaded ? "opacity-100" : "opacity-0"}
            ${blur && isLoaded ? "blur-none" : ""}
            ${blur && !isLoaded ? "blur-sm scale-105" : ""}
            object-cover
          `}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
