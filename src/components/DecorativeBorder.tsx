import React from "react";
import { motion } from "framer-motion";
import { SparkleArea } from "./Sparkle";

export function DecorativeBorder() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Main Border Frame */}
      <div className="absolute inset-0 border-[15px] md:border-[20px] border-gold-600/20">
        {/* Inner Animated Border */}
        <motion.div
          className="absolute inset-0 border-2 border-gold-400/30"
          animate={{
            scale: [1, 1.001, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Gradient Overlays
        <div className="absolute inset-0 bg-gradient-to-r from-gold-200/20 via-transparent to-gold-200/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30" /> */}

        {/* Corner Sparkles - Reduced density
        <div className="absolute top-0 left-0 w-48 h-48">
          <SparkleArea
            density={15}
            colors={["#FFD700", "#FF69B4"]}
            minSize={3}
            maxSize={5}
            minDuration={2}
            maxDuration={3}
          />
        </div>
        <div className="absolute top-0 right-0 w-48 h-48">
          <SparkleArea
            density={15}
            colors={["#FFD700", "#FF69B4"]}
            minSize={3}
            maxSize={5}
            minDuration={2}
            maxDuration={3}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-48 h-48">
          <SparkleArea
            density={15}
            colors={["#FFD700", "#FF69B4"]}
            minSize={3}
            maxSize={5}
            minDuration={2}
            maxDuration={3}
          />
        </div>
        <div className="absolute bottom-0 right-0 w-48 h-48">
          <SparkleArea
            density={20}
            colors={["#FFD700", "#FF69B4"]}
            minSize={3}
            maxSize={5}
            minDuration={2}
            maxDuration={3}
          />
        </div> */}

        {/* Corner Decorations - Simplified animation */}
        {[
          "top-0 left-0 origin-top-left",
          "top-0 right-0 origin-top-right rotate-90",
          "bottom-0 right-0 origin-bottom-right rotate-180",
          "bottom-0 left-0 origin-bottom-left -rotate-90",
        ].map((position, index) => (
          <motion.div
            key={index}
            className={`absolute w-16 h-16 ${position}`}
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="absolute inset-0 bg-gold-600/20 transform rotate-45" />
            <div className="absolute inset-[2px] bg-gradient-to-br from-white/40 to-transparent transform rotate-45" />
          </motion.div>
        ))}

        {/* Animated Edge Highlights - Reduced to two edges */}
        {["top", "bottom"].map((edge, index) => (
          <motion.div
            key={edge}
            className={`absolute h-[2px] w-full ${edge}-0 bg-gradient-to-r from-transparent via-white/40 to-transparent`}
            animate={{
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              delay: index * 3,
            }}
          />
        ))}

        {/* Inner Glow - Simplified */}
        <div className="absolute inset-4 border-2 border-gold-400/10 blur-sm" />
      </div>
    </div>
  );
}
