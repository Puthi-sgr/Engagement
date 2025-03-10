import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Share2 } from 'lucide-react';

interface FooterProps {
  onShare: () => void;
}

export function Footer({ onShare }: FooterProps) {
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-4 mb-4">
          <motion.a 
            href="#" 
            className="text-gold-400 hover:text-gold-300"
            whileHover={{ scale: 1.2 }}
          >
            <Instagram className="w-6 h-6" />
          </motion.a>
          <motion.button
            onClick={onShare}
            className="text-gold-400 hover:text-gold-300"
            whileHover={{ scale: 1.2 }}
          >
            <Share2 className="w-6 h-6" />
          </motion.button>
        </div>
        <p className="text-sm text-gray-400">
          #SarahAndJames2024
        </p>
      </div>
    </footer>
  );
}