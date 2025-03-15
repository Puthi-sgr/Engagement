import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SparkleProps {
  color?: string;
  size?: number;
  duration?: number;
}

export const Sparkle: React.FC<SparkleProps> = ({
  color = "#FFFFFF",
  size = 8,
  duration = 1.5,
}) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ scale: 0, rotate: 0, opacity: 0 }}
      animate={{
        scale: [0, 1, 0.8, 0],
        rotate: [0, 90],
        opacity: [0, 1, 0.8, 0],
      }}
      transition={{
        duration: duration,
        ease: "easeInOut",
      }}
    >
      <path
        d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
        fill={color}
      />
    </motion.svg>
  );
};

interface SparkleAreaProps {
  density?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  minDuration?: number;
  maxDuration?: number;
}

export const SparkleArea: React.FC<SparkleAreaProps> = ({
  density = 30,
  colors = ["#FFFFFF", "#FFF9C4", "#FFD700", "#FFECB3"],
  minSize = 6,
  maxSize = 20,
  minDuration = 1.5,
  maxDuration = 3.5,
}) => {
  const [sparkles, setSparkles] = useState<
    Array<{
      id: string;
      x: string;
      y: string;
      size: number;
      color: string;
      duration: number;
    }>
  >([]);

  const generateUniqueId = () => {
    return Math.random().toString(36).substring(2, 9);
  };

  useEffect(() => {
    // Initial sparkles
    generateSparkles();

    // Create new sparkles periodically
    const interval = setInterval(() => {
      generateSparkles(Math.floor(density / 5));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const generateSparkles = (count = density) => {
    const newSparkles = Array.from({ length: count }, () => ({
      id: generateUniqueId(),
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: Math.random() * (maxSize - minSize) + minSize,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * (maxDuration - minDuration) + minDuration,
    }));

    setSparkles((current) => [...current, ...newSparkles]);

    // Remove sparkles after they've animated
    setTimeout(() => {
      setSparkles((current) =>
        current.filter((s) => !newSparkles.some((ns) => ns.id === s.id))
      );
    }, maxDuration * 1000);
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute"
            style={{
              left: sparkle.x,
              top: sparkle.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            <Sparkle
              color={sparkle.color}
              size={sparkle.size}
              duration={sparkle.duration}
            />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};
