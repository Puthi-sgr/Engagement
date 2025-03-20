import React from "react";
import { motion } from "framer-motion";
import DecorativeLineImage from "../assets/HorizontalDecorativeElement.png";

export const DecorativeLine = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: false }}
      className="flex justify-center items-center mt-0 w-64 h-64 mx-auto"
    >
      <img src={DecorativeLineImage} alt="line" />
    </motion.div>
  );
};
