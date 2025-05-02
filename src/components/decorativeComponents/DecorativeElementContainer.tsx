import React from "react";

import { motion } from "framer-motion";

interface DecorativeElement {
  img: string;
  size?: number;
  my?: number;
}
const DecorativeElementContainer = ({
  img,
  size = 64,
  my = 0,
}: DecorativeElement) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: false }}
      className={`-my-${my}`}
      style={{ width: size, height: size }}
    >
      <img src={img} alt="line" className="w-full h-full object-contain" />
    </motion.div>
  );
};
export default DecorativeElementContainer;
