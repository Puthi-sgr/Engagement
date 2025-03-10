import React from 'react';
import { motion } from 'framer-motion';
import { SparkleArea } from './Sparkle';

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
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-gold-200/20 via-transparent to-gold-200/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30" />

        {/* Corner Sparkles */}
        <div className="absolute top-0 left-0 w-48 h-48">
          <SparkleArea 
            density={50}
            colors={['#FFFFFF', '#FFD700', '#FFF9C4', '#FFB6C1', '#D4AF37']}
            minSize={2}
            maxSize={6}
            minDuration={1}
            maxDuration={2}
          />
        </div>
        <div className="absolute top-0 right-0 w-48 h-48">
          <SparkleArea 
            density={50}
            colors={['#FFFFFF', '#FFD700', '#FFF9C4', '#FFB6C1', '#D4AF37']}
            minSize={2}
            maxSize={6}
            minDuration={1}
            maxDuration={2}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-48 h-48">
          <SparkleArea 
            density={50}
            colors={['#FFFFFF', '#FFD700', '#FFF9C4', '#FFB6C1', '#D4AF37']}
            minSize={2}
            maxSize={6}
            minDuration={1}
            maxDuration={2}
          />
        </div>
        <div className="absolute bottom-0 right-0 w-48 h-48">
          <SparkleArea 
            density={50}
            colors={['#FFFFFF', '#FFD700', '#FFF9C4', '#FFB6C1', '#D4AF37']}
            minSize={2}
            maxSize={6}
            minDuration={1}
            maxDuration={2}
          />
        </div>

        {/* Corner Decorations */}
        {[
          'top-0 left-0 origin-top-left',
          'top-0 right-0 origin-top-right rotate-90',
          'bottom-0 right-0 origin-bottom-right rotate-180',
          'bottom-0 left-0 origin-bottom-left -rotate-90'
        ].map((position, index) => (
          <motion.div
            key={index}
            className={`absolute w-16 h-16 ${position}`}
            initial={{ opacity: 0.5, scale: 0.95 }}
            animate={{ 
              opacity: [0.5, 1, 0.5],
              scale: [0.95, 1, 0.95],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          >
            <div className="absolute inset-0 bg-gold-600/20 transform rotate-45" />
            <div className="absolute inset-[2px] bg-gradient-to-br from-white/40 to-transparent transform rotate-45" />
          </motion.div>
        ))}

        {/* Animated Edge Highlights */}
        {['top', 'right', 'bottom', 'left'].map((edge, index) => (
          <motion.div
            key={edge}
            className={`absolute ${
              edge === 'left' || edge === 'right' ? 'w-[2px] h-full' : 'h-[2px] w-full'
            } ${edge}-0 bg-gradient-to-r from-transparent via-white/40 to-transparent`}
            animate={{
              opacity: [0, 1, 0],
              [edge === 'left' ? 'y' : edge === 'right' ? '-y' : edge === 'top' ? 'x' : '-x']: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: index * 2,
            }}
          />
        ))}

        {/* Inner Glow */}
        <div className="absolute inset-4 border-2 border-gold-400/10 blur-sm" />
        <motion.div
          className="absolute inset-4 border border-white/5"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}