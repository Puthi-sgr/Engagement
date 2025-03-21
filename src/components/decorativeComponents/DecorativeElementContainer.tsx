import React from "react";

import { motion } from "framer-motion";

interface DecorativeElement {
  img: string;
  size?: number;
}
const DecorativeElementContainer = ({ img, size = 64 }: DecorativeElement) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: false }}
      className={`mt-0 w-${size} h-${size}`}
    >
      <img src={img} alt="line" />
    </motion.div>
  );
};

export default DecorativeElementContainer;
