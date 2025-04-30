import { motion } from "framer-motion";
import { DecorativeLine } from "../decorativeComponents/DecorativeLine";

import {
  Clock,
  Utensils,
  Heart,
  MessageCircleHeart,
  Camera,
} from "lucide-react";

export function EventTimeline() {
  const timelineEvents = [
    {
      time: "8:40 AM",
      title: "ជួបជុំភ្ញៀវកិត្តយស",
      description: "",
      icon: <MessageCircleHeart w-6 h-6 />,
    },
    {
      time: "9:00 AM",
      title:
        "ចាស់ទុំលោកមេបា ចាប់ផ្តើមពិធីចែចូវ បំពាក់ចញ្ចៀន និង គួចដៃបង្កក់សិរី",

      icon: <Heart className="w-6 h-6" />,
    },
    {
      time: "10:00 AM",
      title: "ថតរូបអនុស្សាវរីយ៍",
      description: "",
      icon: <Camera className="w-6 h-6" />,
    },
    {
      time: "11:00 AM",
      title: "អញ្ជើញភ្ញៀវកិត្តិយសពិសារអារហារថ្ងៃត្រង់",
      description: "",
      icon: <Utensils className="w-6 h-6" />,
    },
  ];
  return (
    <motion.section
      className="pt-12  bg-gradient-to-b from-white/0 via-white/30 to-white/0 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 "
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gold-800 animate-glow drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              របៀបវារៈកម្មវិធី
            </h2>
            <div className="flex justify-center">
              <Clock className="h-10 w-10 text-gold-700" />
            </div>
          </motion.div>
          {/* Timeline Ruler */}
          <div className="relative">
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-500 via-gold-800 to-gold-500"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />

            {/* Timeline Events */}
            <div className="relative">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className={`relative mb-16 flex ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: false }}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-serif text-gold-600 mb-2">
                        {event.time}
                      </h3>
                      <h4 className="text-xl font-medium text-gold-800 mb-2">
                        {event.title}
                      </h4>
                      <p className="text-gold-500">{event.description}</p>
                    </motion.div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <motion.div
                      className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center text-white z-10 animate-glow drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      {event.icon}
                    </motion.div>
                  </div>

                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative Bottom Element */}
          <div className="flex justify-center">
            <DecorativeLine />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
