import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Share2 } from "lucide-react";

export function DateAndVenue() {
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
          
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-gray-800">
            Saturday, September 14th, 2024
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            at four o'clock in the afternoon
          </p>

          
          <h3 className="text-3xl font-serif mb-4 text-gray-800">
            The Grand Plaza Hotel
          </h3>
          <p className="text-xl text-gray-600">
            123 Elegant Avenue, New York, NY
          </p>
        </div>
      </div>
    </motion.section>
  );
}
