/**
 * Skeleton UI component library
 * Drop-in loading placeholders for common UI elements
 */

const SkeletonLoader = ({ type = 'text', lines = 1, className = '', width = 'full' }) => {
  // Width presets for quick implementation
  const widths = {
    full: 'w-full',
    'three-quarters': 'w-3/4',
    half: 'w-1/2',
    third: 'w-1/3',
    quarter: 'w-1/4',
  };
  
  const widthClass = widths[width] || 'w-full';
  
  // Render different skeleton shapes based on type prop
  switch (type) {
    case 'circle':
      return (
        <div className={`rounded-full bg-gray-200 animate-pulse ${className}`} />
      );
      
    case 'avatar':
      return (
        <div className={`h-10 w-10 rounded-full bg-gray-200 animate-pulse ${className}`} />
      );
      
    case 'button':
      return (
        <div className={`h-10 rounded-md bg-gray-200 animate-pulse ${widthClass} ${className}`} />
      );
      
    case 'image':
      return (
        <div className={`rounded-md bg-gray-200 animate-pulse ${widthClass} ${className}`} />
      );
      
    case 'card':
      return (
        <div className={`rounded-md bg-gray-100 p-4 animate-pulse ${className}`}>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      );
      
    case 'text':
    default:
      return (
        <div className={`space-y-2 ${className}`}>
          {[...Array(lines)].map((_, i) => {
            // Last line is shorter for a more realistic text block
            const lineWidth = i === lines - 1 && lines > 1 ? 'w-3/4' : 'w-full';
            return (
              <div key={i} className={`h-4 bg-gray-200 rounded animate-pulse ${lineWidth}`}></div>
            );
          })}
        </div>
      );
  }
};

export default SkeletonLoader; 