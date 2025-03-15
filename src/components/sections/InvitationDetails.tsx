import React from "react";
import { motion } from "framer-motion";
import groomFrame from "../../assets/groom.png";
import brideFrame from "../../assets/bride.png";
import { SparkleArea } from "../Sparkle";
interface InvitationDetailsProps {
  leftColumnY: any;
  rightColumnY: any;
}

export function InvitationDetails() {
  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
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
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-gray-800">
              The Groom
            </h3>
            <div className="relative w-96 h-96 md:w-80 md:h-80 mx-auto mb-6 bg-transparent rounded-t-[100%] p-4">
              <img
                src={groomFrame}
                alt="Manith"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[200%] h-[200%]  md:w-[200%] md:h-[200%] object-contain"
              />
            </div>
            <p
              className="text-lg md:text-xl mb-2 text-gray-700 font-serif"
              style={{ color: "#FFF9C4" }}
            >
              Oum Manith
            </p>
            <SparkleArea
              density={25}
              colors={["#FFD700", "#FDB931", "#F7A54B", "#DAA520", "#B8860B"]}
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
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-gray-800">
              The Bride
            </h3>
            <div className="relative w-96 h-96 md:w-80 md:h-80 mx-auto mb-6 bg-transparent rounded-t-[100%] p-4">
              <img
                src={brideFrame}
                alt="Pichta"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] md:w-[200%] md:h-[200%] object-contain"
              />
            </div>
            <p
              className="text-lg md:text-xl mb-2 text-gray-700 font-serif"
              style={{ color: "#FFF9C4" }}
            >
              Mey Srey Pichta
            </p>
            <SparkleArea
              density={25}
              colors={["#FFC0CB", "#FFB6C1", "#FF69B4", "#FFE4E1", "#FFA07A"]}
              minSize={5}
              maxSize={15}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
