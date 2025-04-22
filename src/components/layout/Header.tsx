import React, { useEffect, useId, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { SparkleArea } from "../Sparkle";
import MP from "../../assets/images/InitialRemovedBG.png";
import Hero from "../../assets/images/Hero.webp";
import { MotionValue } from "framer-motion";
import { BackgroundOverlay } from "../decorativeComponents/BackgroundOverlay";
import { once } from "events";

interface HeaderProps {
  scrollY: number;
  heroScale: MotionValue<number>;
  heroOpacity: MotionValue<number>;
}

export function Header({ scrollY, heroScale, heroOpacity }: HeaderProps) {
  const [viewportHeight, setViewportHeight] = useState("101vh"); //initial state for header

  const { ref, inView } = useInView({
    threshold: 0.0, // if 0 of the element is in view

    triggerOnce: false,
  });

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
      ref={ref}
      className="relative   flex items-center justify-center overflow-hidden bg-white"
      initial={{ opacity: 0, scale: 2 }}
      animate={{ opacity: 1, scale: 1.01 }} // Change from whileInView to animate
      transition={{ duration: 0.5 }}
      style={{
        height: viewportHeight,
        scale: heroScale,
        opacity: heroOpacity,
      }}
    >
      {inView && (
        <div>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 "
            style={{
              backgroundImage: `url(${Hero})`,
              backgroundPosition: "53% center",
              backgroundSize: "cover",
              transform: `scale(${1 + scrollY * 0.0002})`,
              y: scrollY * 0.5,
            }}
          />{" "}
          <div className="absolute inset-8 border-4 border-white/20 z-20" />
          <div className="absolute inset-7 border border-white/10 z-20" />
          <div className="absolute inset-0 bg-black/20" />
          <motion.div
            className="relative z-20 text-center  text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src={MP}
              alt="Logo"
              className="w-56 md:w-48 mx-auto mb-4" // Add width classes and margin
            />

            <h1
              className="text-6xl sm:text-3xl md:text-2xl lg:text-6xl xl:text-6xl mb-6 font-serif whitespace-nowrap"
              style={{ color: "#FFF9C4" }}
            >
              Manith & Pichta
            </h1>
            <div className="mt-8">
              <Heart className="inline-block text-gold-400 w-8 h-8" />
            </div>
          </motion.div>
          <BackgroundOverlay
            initialColor="gold"
            middleColor="transparent"
            endColor="gold"
          />
          <SparkleArea
            density={40}
            maxDuration={2}
            minDuration={1}
            maxSize={10}
            colors={[
              "#FFFFFF",
              "#FAFAFA",
              "#F5F5F5",
              "#FFFAFA",
              "#F0F8FF",
              "#F8F8FF",
              "#FFFFF0",
              "#FFFAF0",
              "#FFF5EE",
              "#FFFAFA",
              "#F0FFFF",
              "#FFFFFF",
              "#FEFEFE",
              "#FDFDFD",
              "#FCFCFC",
              "#FFE4E1",
              "#FFF0F5",
              "#FFFFFF",
              "#F8F8FF",
              "#FFFFF0",
            ]}
          />
        </div>
      )}
    </motion.section>
  );
}
