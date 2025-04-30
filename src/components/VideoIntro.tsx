import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import video from "../assets/video/IntroCompressed.webm";
import "../index.css";

interface VideoIntroProps {
  onComplete: () => void;
}

export function VideoIntro({ onComplete }: VideoIntroProps) {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoadedVideo = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    // Auto-complete after video duration (8 seconds)
    const timer = setTimeout(() => {
      onComplete();
    }, 12000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleSkipClick = () => {
    console.log("Handle skip has been clicked");
    onComplete();
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white">Loading...</div>
        </div>
      )}
      <motion.div
        className="fixed inset-0 bg-black z-[9999]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          onLoadedData={handleLoadedVideo}
          onEnded={onComplete}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Skip Button */}
        <motion.button
          className="absolute bottom-8 right-8 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full 
                     hover:bg-white/20 transition-colors duration-300"
          onClick={handleSkipClick}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          Skip Intro
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}
