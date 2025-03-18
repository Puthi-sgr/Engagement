import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/Hero.webp";

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
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-gray-800">
            រឿងរបស់ពីអ្នកយើង
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={img}
                alt="Couple"
                className="rounded-lg shadow-xl"
                loading="lazy"
              />
            </motion.div>
            <div className="flex items-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                យើងបានចាប់ផ្តើមជាមនុស្សស្គាល់គ្នាសាមញ្ញក្នុងពេលយុវវ័យរបស់យើង
                បន្ទាប់មកបានប្រែក្លាយទៅជាមិត្តភាពដ៏ជ្រាលជ្រៅក្នុងអំឡុងពេលដ៏ពុះពារមួយរបស់កូនកំលោះ។
                មិនយូរប៉ុន្មានចំណងមិត្តភាពនោះ
                ក៏ក្លាយជាចំណងស្នេហ៍ដែលបានរីកដុះដាលទៅជាដំណើរផ្សងព្រេងរាប់មិនអស់
                ក្តីសុបិនរួម និងសេចក្តីស្រឡាញ់ដែលរីកចម្រើនជារៀងរាល់ថ្ងៃ។ ឥឡូវនេះ
                យើងត្រៀមខ្លួនរួចរាល់
                ដើម្បីចាប់ផ្តើមជំពូកបន្ទាប់របស់យើង—ជាមួយគ្នា។
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
