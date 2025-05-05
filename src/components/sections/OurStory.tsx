import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/images/Hero.webp";

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
          <h2 className="py-7 font-moul text-4xl md:text-5xl text-center mb-16 bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-500 bg-clip-text text-transparent py-1">
            ពីដំបូងឡើយ......
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
              <p className="font-odar-mean-chey text-lg leading-relaxed bg-gradient-to-br from-amber-800 via-yellow-700 to-amber-600 bg-clip-text text-transparent">
                យើងបានស្គាល់គ្នាក្នុងវ័យសិក្សា បន្ទាប់មកដោយភាពចៃដន្យ
                ក៏បានប្រែក្លាយទៅជាមិត្តភាពដ៏ជ្រាលជ្រៅ។
                ដោយមាននិស្ស័យហើយប្រហែលជាយើងបានសាងបុណ្យរួមគ្នាពីជាតិមុន
                ទើបចំណងមិត្តភាពនោះបានក្លាយជាចំណងស្នេហ៍ ​និងរីកដុះដាលទៅជា​
                ក្តីស្រឡាញ់ដែលរីកចម្រើនចំពោះគ្នាជារៀងរាល់ថ្ងៃ។ ឥឡូវនេះ
                យើងបានត្រៀមខ្លួនរួចរាល់
                ដើម្បីចាប់ផ្តើមជំពូកបន្ទាប់របស់យើង—ជាមួយគ្នា 🤍
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
