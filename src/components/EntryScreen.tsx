import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { SparkleArea } from './Sparkle';

interface EntryScreenProps {
  onEnter: () => void;
}

export function EntryScreen({ onEnter }: EntryScreenProps) {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-pink-100/80 via-gold-50 to-pink-50 flex items-center justify-center z-50">
      {/* Background Sparkles */}
      <SparkleArea 
        density={70}
        colors={['#FFFFFF', '#FFF9C4', '#FFD700', '#FFB6C1', '#FFE4EE']}
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
          <p className="text-xl md:text-2xl text-pink-400 font-light tracking-widest">
            Wedding Invitation
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
            className="absolute inset-0 rounded-full bg-pink-400/20"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.7, 0, 0.7]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute inset-0 rounded-full bg-gold-600/30"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.7, 0, 0.7]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
          />
          
          {/* Button */}
          <div className="relative bg-gradient-to-r from-pink-400 to-gold-600 text-white px-8 py-4 rounded-full flex items-center gap-2 shadow-lg shadow-pink-400/30 hover:shadow-gold-600/50 transition-shadow duration-300">
            <Heart className="w-5 h-5" />
            <span className="text-lg font-medium tracking-wide">Click to Enter</span>
          </div>
        </motion.button>
      </div>
    </div>
  );
}