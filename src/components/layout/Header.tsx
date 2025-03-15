import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { SparkleArea } from "../Sparkle";
import MP from "../../assets/InitialRemovedBG.png";
import Hero from "../../assets/Hero.webp";
import { MotionValue } from "framer-motion";

interface HeaderProps {
  scrollY: number;
  heroScale: MotionValue<number>;
  heroOpacity: MotionValue<number>;
}

export function Header({ scrollY, heroScale, heroOpacity }: HeaderProps) {
  const [viewportHeight, setViewportHeight] = useState("101vh"); //initial state for header

  //This effect function handles the quirks of browsers in mobile phone
  useEffect(() => {
    const updateViewHeight = () => {
      //converting to px gives you more accurate control
      setViewportHeight(`${window.innerHeight}px`);
    };

    updateViewHeight();

    window.addEventListener("resize", updateViewHeight);

    return () => {
      window.removeEventListener("resize", updateViewHeight);
    };
  }, []);

  return (
    <motion.section
      className="relative0 h-screen flex items-center justify-center overflow-hidden"
      style={{
        height: viewportHeight,
        scale: heroScale,
        opacity: heroOpacity,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 "
        style={{
          backgroundImage: `url(${Hero})`,

          backgroundPosition: "53% center",
          backgroundSize: "cover",

          // transform: `scale(${1 + scrollY * 0.0002})`,
          y: scrollY * 0.5,
        }}
      />{" "}
      <div className="absolute inset-8 border-4 border-white/20 z-20" />
      <div className="absolute inset-7 border border-white/10 z-20" />
      <div className="absolute inset-0 bg-black/20" />
      {/* Sparkle Effects */}
      <motion.div
        className="relative z-20 text-center  text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img
          src={MP}
          alt="Logo"
          className="w-32 md:w-48 mx-auto mb-4" // Add width classes and margin
        />
        <h1
          className="text-6xl md:text-8xl mb-6 font-serif "
          style={{ color: "#FFF9C4" }}
        >
          Manith & Pichta
        </h1>

        <div className="mt-8">
          <Heart className="inline-block text-gold-400 w-8 h-8" />
        </div>
      </motion.div>
    </motion.section>
  );
}
