import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

interface LazyImageProps {
  src: string;
  alt: string;
  className: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "50px",
  });

  return (
    <div ref={ref} className="relative w-full h-full">
      {/* Low quality placeholder */}
      <div
        className={`absolute inset-0 bg-gray-200 ${
          isLoaded ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
      />

      {inView && (
        <img
          src={src}
          alt={alt}
          className={`${className} ${
            isLoaded ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
          onLoad={() => setIsLoaded(true)}
          draggable="false"
        />
      )}
    </div>
  );
};
