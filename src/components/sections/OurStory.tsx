import React from 'react';
import { motion } from 'framer-motion';

interface OurStoryProps {
  scrollY: number;
}

export function OurStory({ scrollY }: OurStoryProps) {
  return (
    <motion.section 
      className="py-24 bg-gold-50 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-gray-800">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1529634597503-139d3726fed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Couple"
                className="rounded-lg shadow-xl"
                loading="lazy"
              />
            </motion.div>
            <div className="flex items-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our journey began five years ago in a small café in Manhattan. 
                What started as a chance encounter over spilled coffee turned into 
                countless adventures, shared dreams, and a love that grows stronger 
                each day. Now, we're ready to begin our greatest adventure yet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}