"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const GlowingStars = () => {
  const [stars, setStars] = useState<{ x: number; y: number; scale: number }[]>([]);

  useEffect(() => {
    const newStars = new Array(50).fill(null).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      scale: Math.random() * 0.5 + 0.5,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-black rounded-full"
          initial={{
            x: star.x,
            y: star.y,
            scale: star.scale,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};