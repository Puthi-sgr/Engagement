import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { SparkleArea } from '../Sparkle';

interface HeaderProps {
  scrollY: number;
  heroScale: any;
  heroOpacity: any;
}

export function Header({ scrollY, heroScale, heroOpacity }: HeaderProps) {
  return (
    <motion.section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ scale: heroScale, opacity: heroOpacity }}
    >
      <motion.div 
        className="absolute inset-0 bg-black/20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: scrollY * 0.5,
        }}
      />
      
      {/* Sparkle Effects */}
      <SparkleArea 
        density={50}
        colors={['#FFFFFF', '#FFF9C4', '#FFD700', '#FFECB3', '#D4AF37']}
        minSize={6}
        maxSize={18}
      />
      
      <motion.div 
        className="relative z-20 text-center text-white px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="text-xl md:text-2xl mb-4 font-light tracking-widest">Together with their families</p>
        <h1 className="text-6xl md:text-8xl mb-6 font-serif">
Manith & Pichta
        </h1>
        <p className="text-2xl md:text-3xl font-light tracking-wider">Request the pleasure of your company</p>
        <div className="mt-8">
          <Heart className="inline-block text-gold-400 w-8 h-8" />
        </div>
      </motion.div>
    </motion.section>
  );
}