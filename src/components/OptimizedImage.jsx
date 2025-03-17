import { useRef, useState } from "react";
import { useIntersection, getSrcSet } from "../utils/imageOptimization";

/**
 * Performance-optimized image component that handles:
 * - Lazy loading only when scrolled into view
 * - Responsive image sizing
 * - Loading states with skeleton UI
 * - Error handling for broken images
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

  // Merge dimension props with custom style
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
      {/* Show loading skeleton until image loads */}
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {/* Show error state for broken images */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <span className="text-gray-500">Image failed to load</span>
        </div>
      )}

      {/* Only render image when in viewport */}
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
