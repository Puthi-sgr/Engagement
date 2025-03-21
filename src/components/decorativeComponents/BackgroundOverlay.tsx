import React from "react";

interface GradientColor {
  initialColor?: string;
  middleColor?: string;
  endColor?: string;
}
export const BackgroundOverlay = ({
  initialColor = "gold",
  middleColor = "transparent",
  endColor = "gold",
}: GradientColor) => {
  return (
    <div>
      <div
        className={`absolute inset-0 bg-gradient-to-r from-${initialColor}-200/10  via-${middleColor}   to-${endColor}-200/20`}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-b from-${initialColor}/20 via-${middleColor} to-${endColor}/20`}
      />
    </div>
  );
};

export default BackgroundOverlay;
