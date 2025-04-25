import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { SparkleArea } from "./Sparkle";
import button from "../assets/decorativeButtons/14.png";
import DecorativeElementContainer from "./decorativeComponents/DecorativeElementContainer";

interface EntryScreenProps {
  onEnter: () => void;
}

export function EntryScreen({ onEnter }: EntryScreenProps) {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-pink-100/80 via-gold-50 to-pink-50 flex items-center justify-center z-50">
      {/* Background Sparkles */}
      <SparkleArea
        density={50}
        colors={["#FFFFFF", "#FFF9C4", "#FFD700", "#FFB6C1", "#FFE4EE"]}
        minSize={4}
        maxSize={12}
      />

      <div className="text-center px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-serif text-gold-600 mb-4">
            Manith & Pichta
          </h1>
          <p className="text-xl md:text-2xl text-gold-700 font-light tracking-widest">
            ការអញ្ជើញចូលរួម
          </p>
        </motion.div>

        <motion.button
          onClick={onEnter}
          className="relative group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Pulsing rings */}
          <motion.div
            className="absolute inset-0 rounded-lg bg-pink-400/5"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-lg bg-gold-600/10"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />
          {/* Button */}
          <motion.div className="flex justify-center h-40 -mt-5">
            <SparkleArea
              density={20}
              colors={["#FFFFFF", "#FFF9C4", "#FFD700", "#FFB6C1", "#FFE4EE"]}
              minSize={4}
              maxSize={12}
            />
            <motion.div
              className="-mt-16"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <DecorativeElementContainer img={button} size={268} />
            </motion.div>
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}
