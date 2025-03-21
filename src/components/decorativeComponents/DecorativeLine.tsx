import React from "react";
import { motion } from "framer-motion";
import DecorativeLineImage from "../../assets/images/HorizontalDecorativeElement.png";

export const DecorativeLine = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: false }}
      className="mt-0 w-64 h-64 "
    >
      <img src={DecorativeLineImage} alt="line" />
    </motion.div>
  );
};
