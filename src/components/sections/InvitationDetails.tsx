import React from "react";
import { motion } from "framer-motion";
import groomFrame from "../../assets/images/groom.png";
import brideFrame from "../../assets/images/bride.png";
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
    <section ref={ref} className="pt-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-7xl mx-auto">
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
              <Heart
                size={150}
                strokeWidth={0.5}
                className="text-gold-500 mt-2"
              />
              <p className="text-3xl md:text-xl text-gold-800 font-serif absolute z-10">
                ជាគូ​នឺង
              </p>
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
    </section>
  );
}
