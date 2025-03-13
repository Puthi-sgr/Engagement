import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface InvitationDetailsProps {
  leftColumnY: any;
  rightColumnY: any;
}

export function InvitationDetails({
  leftColumnY,
  rightColumnY,
}: InvitationDetailsProps) {
  return (
    <section className="py-12 md:py-24 bg-gold-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
              <h3 className="text-2xl md:text-3xl font-serif mb-4 text-gray-800">
                The Groom
              </h3>
              <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-6">
                <img
                  src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="James"
                  className="w-full h-full object-cover rounded-full border-4 border-gold-200"
                />
              </div>
              <p className="text-lg md:text-xl mb-2 text-gray-700">Oum Manit</p>
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
              <h3 className="text-2xl md:text-3xl font-serif mb-4 text-gray-800">
                The Bride
              </h3>
              <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-6">
                <img
                  src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Sarah"
                  className="w-full h-full object-cover rounded-full border-4 border-gold-200"
                />
              </div>
              <p className="text-lg md:text-xl mb-2 text-gray-700">
                Mey Srey Pichta
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
