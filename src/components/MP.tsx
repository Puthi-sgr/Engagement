import React from "react";
import MPImage from "../assets/images/InitialRemovedBG.png";

export const MP = ({ width = 32 }: { width?: number }) => {
  return (
    <>
      <img
        src={MPImage}
        alt="Logo"
        className={`w-${width} md:w-48 mx-auto mb-4`} // Add width classes and margin
      />
    </>
  );
};
