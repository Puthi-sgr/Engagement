import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Car, Hotel, Plane } from "lucide-react";
import button from "../../assets/decorativeButtons/13.png";
import DecorativeElementContainer from "../decorativeComponents/DecorativeElementContainer";

export function VenueInformation() {
  const [activeTab, setActiveTab] = useState("directions");

  return (
    <motion.section
      className="bg-gradient-to-b from-white/50 via-white/60 to-white/50 relative overflow-hidden "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex items-center justify-center mb-8"
            whileHover={{ scale: 1.1 }}
          >
            <MapPin className="w-14 h-14 text-gold-600" />
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold md:text-4xl font-serif mb-6 text-gold-800">
              ទីតាំងកម្មវិធី
            </h2>
            <p className="text-xl text-gold-600 max-w-3xl mx-auto">
              ភោជនីយដ្ឋាន De.Royce កែងផ្លូវ ៣៤៧ និងផ្លូវ ៥២៨ សង្កាត់បឹងកក់
              ខណ្ឌទួលគោក
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Map Section */}
          </div>
          <div className="h-24 flex justify-center items-center mb-8">
            <motion.div
              className="absolute"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <a
                href="https://maps.app.goo.gl/h7maZeZ4k4aGWibDA"
                target="_blank"
              >
                <DecorativeElementContainer img={button} size={250} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
