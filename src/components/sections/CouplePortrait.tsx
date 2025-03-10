import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function CouplePortrait() {
  const { scrollYProgress } = useScroll();
  
  const scale = useTransform(scrollYProgress, [0.5, 0.8], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0.5, 0.8], [1, 0.8]);
  
  return (
    <section className="relative h-screen overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        style={{ scale, opacity }}
      >
        <div className="absolute inset-0 bg-black/30 z-10" />
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')`,
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      {/* Decorative Frame */}
      <div className="absolute inset-8 border-4 border-white/20 z-20" />
      <div className="absolute inset-7 border border-white/10 z-20" />

      {/* Content */}
      <div className="relative z-30 h-full flex items-center justify-center text-white">
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-serif mb-6">Sarah & James</h2>
          <p className="text-xl md:text-2xl font-light tracking-wide">
            Forever Begins September 14th, 2024
          </p>
        </motion.div>
      </div>

      {/* Overlay Animations */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-20"
        animate={{
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
}