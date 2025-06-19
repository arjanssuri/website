"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export const WobbleCard = ({
  children,
  containerClassName,
  className,
  image,
  link,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  image?: string;
  link?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 10;
    const y = (clientY - (rect.top + rect.height / 2)) / 10;
    setMousePosition({ x, y });
  };
  
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener noreferrer");
    }
  };
  
  return (
    <motion.div
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `perspective(1000px) rotateX(${-mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg) translate3d(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px, 0)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)",
        transition: "transform 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67)",
      }}
      className={cn(
        "mx-auto w-full relative rounded-2xl overflow-hidden cursor-pointer h-64 md:h-80",
        containerClassName
      )}
    >
      {/* Background Image */}
      {image && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center pointer-events-none" 
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-black/40 to-black/80 pointer-events-none" />
      
      {/* Hover Glow Effect */}
      {isHovering && (
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x + 50}% ${mousePosition.y + 50}%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%)`,
            opacity: 1,
            transition: 'opacity 0.3s ease'
          }}
        />
      )}
      
      {/* Noise Texture */}
      <div
        className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url(/noise.webp)",
          backgroundSize: "30%",
          maskImage: "radial-gradient(#fff, transparent, 75%)",
          WebkitMaskImage: "radial-gradient(#fff, transparent, 75%)"
        }}
      />
      
      {/* Content */}
      <motion.div
        style={{
          transform: isHovering
            ? `translate3d(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px, 20px)`
            : "translate3d(0, 0, 0)",
          transition: "transform 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67)",
        }}
        className={cn("h-full px-6 py-6 relative z-10 flex flex-col justify-end", className)}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}; 