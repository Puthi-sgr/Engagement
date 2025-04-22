import { useEffect, useCallback } from "react";

export const useViewportHeight = () => {
  const setAppHeight = useCallback(() => {
    // Get the maximum viewport height (when address bar is hidden)
    const maxHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    );
    document.documentElement.style.setProperty(
      "--app-height",
      `${maxHeight}px`
    );
  }, []);

  useEffect(() => {
    // Set initial height
    setAppHeight();

    // Only update on orientation change, not on address bar show/hide
    const orientationQuery = window.matchMedia("(orientation: portrait)");
    orientationQuery.addEventListener("change", () => {
      // Add slight delay to ensure proper height calculation after rotation
      setTimeout(setAppHeight, 100);
    });

    // Handle initial page load
    window.addEventListener("load", setAppHeight);

    return () => {
      orientationQuery.removeEventListener("change", setAppHeight);
      window.removeEventListener("load", setAppHeight);
    };
  }, [setAppHeight]);
};
