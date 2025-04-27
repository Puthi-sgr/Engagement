import { useEffect, useRef } from "react";

export const useScrollLock = (isLocked: boolean) => {
  // Use a ref to store the original scroll position
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (isLocked) {
      // Store original styles and position
      const originalStyles = {
        position: document.body.style.position,
        top: document.body.style.top,
        width: document.body.style.width,
        overflow: document.body.style.overflow,
      };

      // Store current scroll position
      scrollYRef.current = window.scrollY;

      // Apply scroll lock
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.overflow = "hidden";

      return () => {
        // Restore original styles
        document.body.style.position = originalStyles.position;
        document.body.style.top = originalStyles.top;
        document.body.style.width = originalStyles.width;
        document.body.style.overflow = originalStyles.overflow;

        // Use a small delay to ensure styles are applied before scrolling
        setTimeout(() => {
          window.scrollTo(0, scrollYRef.current);
        }, 10);
      };
    }
  }, [isLocked]);
};
