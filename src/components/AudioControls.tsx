import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioControlsProps {
  isMuted: boolean;
  toggleMute: () => void;
}

export function AudioControls({ isMuted, toggleMute }: AudioControlsProps) {
  return (
    <motion.button
      className="fixed top-4 right-4 md:top-6 md:right-6 z-50 bg-gradient-to-r from-pink-400/10 to-gold-600/10 backdrop-blur-sm p-4 md:p-3 rounded-full shadow-lg hover:from-pink-400/20 hover:to-gold-600/20 transition-colors duration-300 touch-none"
      onClick={toggleMute}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      aria-label={isMuted ? "Unmute background music" : "Mute background music"}
      style={{
        minWidth: '44px',
        minHeight: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {isMuted ? (
        <VolumeX className="w-6 h-6 md:w-5 md:h-5 text-pink-400" />
      ) : (
        <Volume2 className="w-6 h-6 md:w-5 md:h-5 text-gold-600" />
      )}
    </motion.button>
  );
}