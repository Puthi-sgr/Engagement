import React from "react";
import { motion } from "framer-motion";
import groomFrame from "../../assets/images/frame/Manith.png";
import brideFrame from "../../assets/images/frame/Pichta.png";
import couple from "../../assets/decorator/CoupleRemove.png";
import { SparkleArea } from "../Sparkle";
import { Heart } from "lucide-react";
import { useInView } from "react-intersection-observer";
interface InvitationDetailsProps {
  leftColumnY: any;
  rightColumnY: any;
}
export function InvitationDetails() {
  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: false,
  });

  return (
    <section
      ref={ref}
      className="relative pt-12 md:py-24 overflow-hidden bg-gradient-to-b from-white/0 via-white to-white/0"
    >
      <div className="container mx-auto px-4">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-1 max-w-7xl mx-auto">
          {/* Groom's Column */}
          <motion.div
            className="text-center relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ margin: "-100px" }}
          >
            <div className="relative w-96 h-96 md:w-80 md:h-80 mx-auto mb-6 bg-transparent rounded-t-[100%] p-4">
              <img
                src={groomFrame}
                alt="Manith"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[200%] h-[200%]  md:w-[200%] md:h-[200%] object-contain"
              />
            </div>
            <h3 className="text-3xl md:text-3xl font-serif mb-4 text-gold-600">
              អ៊ុំ ម៉ាណិត
            </h3>
            <div className="relative flex items-center justify-center my-4">
              <img
                src={couple}
                alt="Couple"
                className="w-32 h-32 md:w-48 md:h-48"
              />
            </div>
            {inView && (
              <SparkleArea
                density={10}
                colors={["#0000FF", "#4169E1", "#1E90FF", "#00BFFF", "#87CEEB"]}
                minSize={5}
                maxSize={10}
              />
            )}
          </motion.div>
          {/* Bride's Column */}
          <motion.div
            className="text-center relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ margin: "-100px" }}
          >
            <h3 className="text-[1.75rem] md:text-3xl font-serif mb-4  text-gold-600">
              មុី ស្រីពេជ្ជតា
            </h3>{" "}
            <div className="relative w-96 h-96 md:w-80 md:h-80 mx-auto mb-6 bg-transparent rounded-t-[100%] p-4">
              <img
                src={brideFrame}
                alt="Pichta"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] md:w-[200%] md:h-[200%] object-contain"
              />
            </div>
            {inView && (
              <SparkleArea
                density={10}
                colors={["#FF1493", "#FF69B4", "#FF007F", "#FFB6C1", "#FF4D6B"]}
                minSize={5}
                maxSize={10}
              />
            )}
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute inset-8 border-2 border-gold-600/30 z-20"
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-6 border border-gold-400/40 z-20"
        animate={{
          scale: [1, 1.01, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </section>
  );
}
