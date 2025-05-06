import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { SparkleArea } from "../Sparkle";
import { Mail } from "lucide-react";
import { Calendar, Share2 } from "lucide-react";
import { MP } from "../MP";
import DecorativeElementContainer from "../decorativeComponents/DecorativeElementContainer";
import img from "../../assets/decorator/20.png";
interface DateAndVenueProps {
  onShare: () => void;
}
export function FormalRequest({ onShare }: DateAndVenueProps) {
  return (
    <motion.section
      className="pt-32  bg-gradient-to-b from-white/0 via-white/40 to-white/50 relative overflow-hidden "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0, ease: "backOut" }}
      viewport={{ margin: "0px" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0, ease: "backOut" }}
            viewport={{ margin: "100px" }}
            className="mb-12"
          >
            <Mail className="w-12 h-12 text-gold-600 mx-auto" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
            viewport={{ margin: "0px" }}
            className="mb-12"
          >
            <h2 className="text-4xl font-moul md:text-5xl  mb-3 text-gold-900 ">
              សូមគោរពអញ្ជើញ
            </h2>
            <div className="w-32 h-1 bg-gold-600 mx-auto my-6 rounded-full" />
            <p className="text-xl font-odar-mean-chey text-gold-900 leading-relaxed">
              ខ្ញុំបាទ និង នាងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញវត្តមាន
              <br />
              ដ៏ថ្លៃថ្លារបស់លោក លោកស្រីជាទីស្រលាញ់
              ចូលរួមក្នុងកម្មវិធីភ្ជាប់ពាក្យរបស់ពួកយើងទាំងពីរ នៅ
            </p>
            <motion.div
              className="flex items-center justify-center mt-10 mb-8"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse",
              }}
            >
              <MP />
            </motion.div>
            <h3 className="text-2xl font-moul text-gold-600 mt-8">
              ថ្ងៃទី៣១ <span className="mx-2 font-sans">||</span> ខែឧសភា
              <span className="mx-2 font-sans">||</span> ឆ្នាំ២០២៥
            </h3>
            <div className="flex items-center justify-center gap-8 mt-8 mb-8"></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
