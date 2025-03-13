import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import video from "../assets/AnimatedBorderFlowersFinalized.mp4";

export function DecorativeVideoBorder() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <video
        className="w-full h-full object-cover pointer-events-none"
        style={{
          backgroundColor: "transparent",
          mixBlendMode: "screen", // This can help with black backgrounds
        }}
        autoPlay
        muted
        playsInline
        loop
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
}
