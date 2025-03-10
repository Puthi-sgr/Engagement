import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Share2 } from 'lucide-react';

interface DateAndVenueProps {
  onAddToCalendar: () => void;
  onShare: () => void;
}

export function DateAndVenue({ onAddToCalendar, onShare }: DateAndVenueProps) {
  return (
    <motion.section 
      className="py-24 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            className="flex items-center justify-center mb-8"
            whileHover={{ scale: 1.1 }}
          >
            <Calendar className="w-8 h-8 text-gold-600" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-gray-800">
            Saturday, September 14th, 2024
          </h2>
          <p className="text-xl text-gray-600 mb-12">at four o'clock in the afternoon</p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={onAddToCalendar}
              className="flex items-center gap-2 px-6 py-3 bg-gold-600 text-white rounded-full hover:bg-gold-700 transition-colors duration-300"
            >
              <Calendar className="w-5 h-5" />
              Add to Calendar
            </button>
            <button
              onClick={onShare}
              className="flex items-center gap-2 px-6 py-3 border-2 border-gold-600 text-gold-600 rounded-full hover:bg-gold-600 hover:text-white transition-colors duration-300"
            >
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>
          <motion.div 
            className="flex items-center justify-center mb-8"
            whileHover={{ scale: 1.1 }}
          >
            <MapPin className="w-8 h-8 text-gold-600" />
          </motion.div>
          <h3 className="text-3xl font-serif mb-4 text-gray-800">The Grand Plaza Hotel</h3>
          <p className="text-xl text-gray-600">123 Elegant Avenue, New York, NY</p>
        </div>
      </div>
    </motion.section>
  );
}