import React, { useEffect, useState } from "react";

const FadeInWrapper = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Short timeout to ensure the component has been rendered
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const delayClass = delay ? `delay-${delay}` : "";

  return (
    <div
      className={`${
        isVisible ? "fade-in" : "opacity-0"
      } ${delayClass} ${className}`}
      style={{
        animationDelay: typeof delay === "number" ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default FadeInWrapper;
