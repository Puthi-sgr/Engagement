import React from 'react';
import { motion } from 'framer-motion';

export function RSVP() {
  return (
    <motion.section 
      className="py-24 bg-gray-900 text-white relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Join Our Celebration</h2>
          <p className="text-xl mb-12">Please RSVP by August 1st, 2024</p>
          <motion.button 
            className="bg-gold-600 text-white px-12 py-4 rounded-full text-lg tracking-wide hover:bg-gold-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            RSVP Now
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}