import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface InvitationDetailsProps {
  leftColumnY: any;
  rightColumnY: any;
}

export function InvitationDetails({ leftColumnY, rightColumnY }: InvitationDetailsProps) {
  return (
    <section className="py-12 md:py-24 bg-gold-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Groom's Column */}
          <motion.div 
            className="text-center p-6 md:p-8 bg-white rounded-lg shadow-lg relative"
            style={{ y: leftColumnY }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ margin: "-100px" }}
          >
            <div className="absolute inset-0 border-2 border-gold-200 rounded-lg m-4"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-serif mb-4 text-gray-800">The Groom</h3>
              <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="James"
                  className="w-full h-full object-cover rounded-full border-4 border-gold-200"
                />
              </div>
              <p className="text-lg md:text-xl mb-2 text-gray-700">James Michael Thompson</p>
              <p className="text-gray-600 mb-4">Son of</p>
              <p className="text-base md:text-lg text-gray-700">Mr. & Mrs. Robert Thompson</p>
              <p className="text-gray-600 mt-6 leading-relaxed text-sm md:text-base">
                Born and raised in Boston, James is a dedicated architect who finds beauty in every detail.
              </p>
            </div>
          </motion.div>

          {/* Center Column - Formal Invitation */}
          <motion.div 
            className="text-center p-6 md:p-8 bg-white rounded-lg shadow-lg relative order-first md:order-none mb-8 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ margin: "-100px" }}
          >
            <div className="absolute inset-0 border-2 border-gold-300 rounded-lg m-4"></div>
            <div className="relative z-10 flex flex-col h-full justify-center">
              <div className="mb-6 md:mb-8">
                <Heart className="w-10 h-10 md:w-12 md:h-12 text-gold-600 mx-auto" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-800">Formal Invitation</h2>
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                Together with their families,
              </p>
              <p className="text-xl md:text-2xl font-serif text-gray-800 mb-2">Sarah Elizabeth Davis</p>
              <p className="text-lg md:text-xl text-gray-700 mb-2">&</p>
              <p className="text-xl md:text-2xl font-serif text-gray-800 mb-6">James Michael Thompson</p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Request the honor of your presence
                as they join their lives in marriage
              </p>
              <div className="mt-6 md:mt-8 space-y-2">
                <p className="text-xl md:text-2xl font-serif text-gold-600">Saturday, September 14th</p>
                <p className="text-lg md:text-xl text-gray-700">Four o'clock in the afternoon</p>
                <p className="text-lg md:text-xl text-gray-700">The Grand Plaza Hotel</p>
              </div>
            </div>
          </motion.div>

          {/* Bride's Column */}
          <motion.div 
            className="text-center p-6 md:p-8 bg-white rounded-lg shadow-lg relative"
            style={{ y: rightColumnY }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ margin: "-100px" }}
          >
            <div className="absolute inset-0 border-2 border-gold-200 rounded-lg m-4"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-serif mb-4 text-gray-800">The Bride</h3>
              <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Sarah"
                  className="w-full h-full object-cover rounded-full border-4 border-gold-200"
                />
              </div>
              <p className="text-lg md:text-xl mb-2 text-gray-700">Sarah Elizabeth Davis</p>
              <p className="text-gray-600 mb-4">Daughter of</p>
              <p className="text-base md:text-lg text-gray-700">Mr. & Mrs. William Davis</p>
              <p className="text-gray-600 mt-6 leading-relaxed text-sm md:text-base">
                A passionate artist from New York, Sarah brings color and creativity to everything she touches.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}