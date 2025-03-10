import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-pink-50 to-white flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <div className="w-24 h-24 mx-auto mb-8 relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-pink-400 rounded-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Heart className="w-12 h-12 text-pink-400" />
          </div>
        </div>
        <h2 className="font-serif text-2xl bg-gradient-to-r from-pink-400 to-gold-600 bg-clip-text text-transparent">
          Sarah & James
        </h2>
      </motion.div>
    </div>
  );
}