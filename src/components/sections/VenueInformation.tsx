import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Car, Hotel, Plane } from "lucide-react";

export function VenueInformation() {
  const [activeTab, setActiveTab] = useState("directions");

  return (
    <motion.section
      className="pt-12 bg-gold-50 relative overflow-hidden"
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
            <h2 className="text-4xl font-bold md:text-5xl font-serif mb-6 text-gold-800">
              ទីតាំងកម្មវិធី
            </h2>
            <p className="text-xl text-gold-700 max-w-3xl mx-auto">
              ភោជនីយដ្ឋាន De.Royce កែងផ្លូវ ៣៤៧ និងផ្លូវ ៥២៨ សង្កាត់បឹងកក់
              ខណ្ឌទួលគោក
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden shadow-xl h-96"
            >
              <div className="absolute inset-0 border-2 border-gold-200 rounded-lg m-2 z-10 pointer-events-none"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.4972395088034!2d104.89553334595476!3d11.587855419136405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109510057a139cb%3A0x86ae614cf7dfbfff!2sDe.Royce!5e0!3m2!1sen!2skh!4v1742018552112!5m2!1sen!2skh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Venue Map - Orussey Market"
                className="absolute inset-0"
              />

              <motion.div
                className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md z-20"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <MapPin className="text-gold-600 w-5 h-5" />
                  <p className="text-sm font-medium text-gold-800">De .Royce</p>
                </div>
                <p className="text-xs text-gold-600 mt-1">
                  កែងផ្លូវ ៣៤៧ និងផ្លូវ ៥២៨ សង្កាត់បឹងកក់ ខណ្ឌទួលគោក
                </p>
              </motion.div>
            </motion.div>
          </div>
          <div className="flex justify-center items-center mt-12 mb-8">
            <button className=" text-xl flex items-center gap-2 px-6 py-3 border-2 border-gold-600 text-white bg-gold-600 rounded-full hover:bg-gold-600 hover:text-white transition-colors animate-glow drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] duration-300">
              <a
                href="https://maps.app.goo.gl/h7maZeZ4k4aGWibDA"
                target="_blank"
              >
                ចុចមើលទីតាំង
              </a>
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
