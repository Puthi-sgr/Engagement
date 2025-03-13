import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { SparkleArea } from "../Sparkle";
import { Mail } from "lucide-react";

export function FormalRequest() {
  return (
    <motion.section
      className="py-32 bg-transparent relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ margin: "-100px" }}
    >
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 0h6v6h-6zM0 54h6v6H0z' fill='%23D4AF37' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
        animate={{
          y: [0, 20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 opacity-10 transform rotate-180"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 0h6v6h-6zM0 54h6v6H0z' fill='%23D4AF37' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [180, 175, 180],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ margin: "-100px" }}
            className="mb-12"
          >
            <Mail className="w-12 h-12 text-gold-600 mx-auto" />
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ margin: "-100px" }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
              សូមគោរពអញ្ជើញ
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញវត្តមាន
              <br />
              ដ៏ថ្លៃថ្លារបស់លោកអ្នកជាទីស្រលាញ់
              ចូលរួមក្នុងកម្មវិធីភ្ជាប់ពាក្យយើងទាំងពីរ ដែលប្រារព្ធឡើងនៅ
            </p>

            <h3 className="text-2xl font-serif text-gold-600 mt-8">
              ថ្ងៃទី៣១ <span className="mx-2">||</span> ខែឧសភា{" "}
              <span className="mx-2 font-bold">||</span> ឆ្នាំ២០២៥
            </h3>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ margin: "-100px" }}
            className="space-y-4 mb-12"
          >
            <p className="text-2xl font-serif text-gold-600">
              Saturday, September 14th, 2024
            </p>
            <p className="text-xl text-gray-700">
              Four o'clock in the afternoon
            </p>
            <p className="text-xl text-gray-700">The Grand Plaza Hotel</p>
            <p className="text-xl text-gray-700">
              123 Elegant Avenue, New York, NY
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ margin: "-100px" }}
            className="inline-block"
          >
            <div className="h-0.5 w-24 bg-gold-400 mx-auto" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
