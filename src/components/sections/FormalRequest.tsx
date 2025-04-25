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
  onAddToCalendar: () => void;
  onShare: () => void;
}
export function FormalRequest({ onAddToCalendar, onShare }: DateAndVenueProps) {
  return (
    <motion.section
      className="pt-32 bg-transparent relative overflow-hidden "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0 }}
      viewport={{ margin: "0px" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0, ease: "backOut" }}
            viewport={{ margin: "100px" }}
            className="mb-0"
          >
            <Mail className="w-12 h-12 text-gold-600 mx-auto" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 1, ease: "backOut" }}
            viewport={{ margin: "-100px" }}
            className="inline-block flex"
          >
            <DecorativeElementContainer img={img} size={100} />
            <DecorativeElementContainer img={img} size={100} />
            <DecorativeElementContainer img={img} size={100} />
            <DecorativeElementContainer img={img} size={100} />
            <DecorativeElementContainer img={img} size={100} />
            <DecorativeElementContainer img={img} size={100} />
            <DecorativeElementContainer img={img} size={100} />
            <DecorativeElementContainer img={img} size={100} />
            <DecorativeElementContainer img={img} size={100} />
          </motion.div>{" "}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
            viewport={{ margin: "0px" }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gold-800">
              សូមគោរពអញ្ជើញ
            </h2>
            <p className="text-xl text-gold-700 leading-relaxed">
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
            <h3 className="text-2xl font-bold font-serif text-gold-600 mt-8">
              ថ្ងៃទី៣១ <span className="mx-2">||</span> ខែឧសភា
              <span className="mx-2 font-bold">||</span> ឆ្នាំ២០២៥
            </h3>
            <div className="flex items-center justify-center gap-8 mt-8 mb-8">
              <motion.button
                onClick={onAddToCalendar}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6, ease: "backOut" }}
                className="flex items-center gap-2 px-6 py-3 bg-gold-600 text-white rounded-full hover:bg-gold-700 transition-colors duration-300"
              >
                <Calendar className="w-5 h-5" />
                Add to Calendar
              </motion.button>
              <motion.button
                onClick={onShare}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8, ease: "backOut" }}
                className="flex items-center gap-2 px-6 py-3 border-2 border-gold-600 text-gold-600 rounded-full hover:bg-gold-600 hover:text-white transition-colors duration-300"
              >
                <Share2 className="w-5 h-5" />
                Share
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 1, ease: "backOut" }}
            viewport={{ margin: "100px" }}
            className="inline-block flex "
          >
            <DecorativeElementContainer img={img} size={100} />
            <DecorativeElementContainer img={img} size={100} />
            <DecorativeElementContainer img={img} size={100} />
            <DecorativeElementContainer img={img} size={100} />
            <DecorativeElementContainer img={img} size={100} />
            <DecorativeElementContainer img={img} size={100} />
            <DecorativeElementContainer img={img} size={100} />
            <DecorativeElementContainer img={img} size={100} />
            <DecorativeElementContainer img={img} size={100} />
          </motion.div>{" "}
        </div>
      </div>
    </motion.section>
  );
}
