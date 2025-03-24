import { useEffect } from "react";

export const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (isLocked) {
      //Get current scroll position
      const scrollY = window.scrollY;

      //Store current body position
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      //drag the body position to the correct place by using the scrollY position
      document.body.style.top = `-${scrollY}px`;
      // Prevent scroll
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.position = "";
        document.body.style.overflow = "";
        document.body.style.top = "";
        document.body.style.overflow = "";

        window.scrollTo({
          top: scrollY,
          behavior: "instant",
        });
      };
    }
  }, [isLocked]);
};
