import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Subtle parallax effect
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const fadeOut = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div 
      ref={ref}
      className="relative overflow-hidden h-screen flex items-center justify-center"
    >
      {/* Base layer */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 z-10 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Main content with parallax effect */}
      <motion.div
        style={{ y: textY, opacity: fadeOut }}
        className="relative z-30 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Arjan Suri
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 font-light text-gray-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Computer Science & Applied Math
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            1x Acq | AI & Robotics Researcher
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#timeline"
              className="px-8 py-3 bg-white text-black font-medium hover:bg-gray-200 transition-colors duration-200"
            >
              View My Journey
            </a>
            <a
              href="#connect"
              className="px-8 py-3 border border-white text-white font-medium hover:bg-white hover:text-black transition-colors duration-200"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-40" />
    </div>
  );
};

export default Hero; 