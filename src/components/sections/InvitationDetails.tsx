import React from "react";
import { motion } from "framer-motion";
import groomFrame from "../../assets/images/groom.png";
import brideFrame from "../../assets/images/bride.png";
import { SparkleArea } from "../Sparkle";
import { Heart } from "lucide-react";
interface InvitationDetailsProps {
  leftColumnY: any;
  rightColumnY: any;
}

export function InvitationDetails() {
  return (
    <section className="pt-12 md:py-24 bg-white overflow-hidden">
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
            <Heart className="bg-transparent flex items-center justify-center">
              <p className="text-lg md:text-xl mb-2 text-gold-800 font-serif absolute">
                ជាគូ​នឺង
              </p>
            </Heart>

            <SparkleArea
              density={25}
              colors={["#FFD700", "#FDB931", "#DAA520", "#B8860B", "#996515"]}
              minSize={5}
              maxSize={15}
            />
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
            <SparkleArea
              density={25}
              colors={["#FF1493", "#FF69B4", "#FF007F", "#FFB6C1", "#FF4D6B"]}
              minSize={5}
              maxSize={15}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
