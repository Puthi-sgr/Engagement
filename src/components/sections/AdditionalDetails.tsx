import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Music } from 'lucide-react';

export function AdditionalDetails() {
  return (
    <motion.section 
      className="py-24 bg-white relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <motion.div 
            className="text-center"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Gift className="w-8 h-8 text-gold-600 mx-auto mb-6" />
            <h3 className="text-3xl font-serif mb-6 text-gray-800">Gift Registry</h3>
            <p className="text-gray-600 mb-8">
              Your presence is our present. However, if you wish to give a gift,
              we are registered at the following stores.
            </p>
            <motion.button 
              className="border-2 border-gold-600 text-gold-600 px-8 py-3 rounded-full hover:bg-gold-600 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Registry
            </motion.button>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Music className="w-8 h-8 text-gold-600 mx-auto mb-6" />
            <h3 className="text-3xl font-serif mb-6 text-gray-800">Wedding Details</h3>
            <p className="text-gray-600 mb-8">
              Find information about accommodation, dress code, 
              and other important details for our special day.
            </p>
            <motion.button 
              className="border-2 border-gold-600 text-gold-600 px-8 py-3 rounded-full hover:bg-gold-600 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Details
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}