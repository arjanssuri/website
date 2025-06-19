import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Intensify transform values for stronger parallax effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '150%']);
  const fadeOut = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  // More dramatic particle movement based on scroll
  const particleY1 = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);
  const particleY2 = useTransform(scrollYProgress, [0, 1], ['0%', '120%']);
  const particleY3 = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  return (
    <div 
      ref={ref}
      className="relative overflow-hidden h-screen flex items-center justify-center"
    >
      {/* Base layer */}
      <div className="absolute inset-0 bg-black z-0" />
      
      {/* Animated gradient background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-tr from-indigo-900/30 via-purple-900/20 to-blue-900/30 z-10" 
      />

      {/* Radial gradient for spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.3)_0%,transparent_70%)] z-10" />
      
      {/* Mesh gradient overlay */}
      <motion.div
        style={{ 
          y: backgroundY, 
          opacity: 0.4,
          rotate: useTransform(scrollYProgress, [0, 1], [0, 5])
        }}
        className="absolute inset-0 z-10"
      >
        <div className="absolute inset-0 bg-[url('/mesh-gradient.png')] bg-cover bg-center opacity-30" />
      </motion.div>
      
      {/* Code pattern background */}
      <motion.div
        style={{ y: backgroundY, opacity: 0.04 }}
        className="absolute inset-0 z-10"
      >
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={`code-${i}`}
              style={{
                position: 'absolute',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontFamily: 'monospace',
                fontSize: `${Math.random() * 12 + 8}px`,
                color: 'rgba(100, 149, 237, 0.4)',
                transform: `rotate(${Math.random() * 90 - 45}deg)`,
              }}
            >
              {`{code: ${Math.random().toString(36).substring(2, 8)}}`}
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Fast moving particles */}
      <motion.div className="absolute inset-0 z-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`fast-${i}`}
            className="absolute h-1 w-1 rounded-full bg-blue-400/50"
            style={{
              x: `${Math.random() * 100}%`,
              y: useTransform(
                scrollYProgress,
                [0, 1],
                [`${Math.random() * 100}%`, `${Math.random() * 100 + 60}%`]
              ),
              opacity: useTransform(
                scrollYProgress,
                [0, 0.2, 0.8, 1],
                [0.8, 1, 1, 0.8]
              ),
              boxShadow: '0 0 4px rgba(59, 130, 246, 0.6)'
            }}
          />
        ))}
      </motion.div>
      
      {/* Medium moving particles */}
      <motion.div className="absolute inset-0 z-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`medium-${i}`}
            className="absolute h-2 w-2 rounded-full bg-purple-400/40"
            style={{
              x: `${Math.random() * 100}%`,
              y: useTransform(
                scrollYProgress,
                [0, 1],
                [`${Math.random() * 100}%`, `${Math.random() * 100 + 40}%`]
              ),
              opacity: useTransform(
                scrollYProgress,
                [0, 0.3, 0.7, 1],
                [0.6, 0.8, 0.8, 0.6]
              ),
              boxShadow: '0 0 6px rgba(168, 85, 247, 0.5)'
            }}
          />
        ))}
      </motion.div>
      
      {/* Slow moving larger particles */}
      <motion.div className="absolute inset-0 z-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`slow-${i}`}
            className="absolute h-3 w-3 rounded-full bg-white/20"
            style={{
              x: `${Math.random() * 100}%`,
              y: useTransform(
                scrollYProgress,
                [0, 1],
                [`${Math.random() * 100}%`, `${Math.random() * 100 + 20}%`]
              ),
              opacity: useTransform(
                scrollYProgress,
                [0, 0.4, 0.6, 1],
                [0.4, 0.6, 0.6, 0.4]
              ),
              boxShadow: '0 0 8px rgba(255, 255, 255, 0.4)'
            }}
          />
        ))}
      </motion.div>
      
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
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              background: 'linear-gradient(to right, #fff, #93c5fd, #fff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Arjan Suri
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-3xl mb-8 font-light"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Computer Science & Applied Math
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Applied AI • Private Equity • FinTech
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a 
              href="#timeline" 
              className="relative px-8 py-3 rounded-lg overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:from-indigo-600 group-hover:to-blue-600 transition-all duration-500"></span>
              <span className="relative text-white font-medium">View My Journey</span>
            </a>
            <a 
              href="#connect" 
              className="relative px-8 py-3 rounded-lg overflow-hidden group"
            >
              <span className="absolute inset-0 border-2 border-transparent bg-black group-hover:border-indigo-500/50 transition-all duration-300"></span>
              <span className="relative bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent font-medium">Contact Me</span>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Bottom gradient */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '200%']) }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-40"
      />
    </div>
  );
};

export default Hero; 