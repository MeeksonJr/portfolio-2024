"use client";

import React from "react";
import { motion } from "framer-motion";

export const GlowingStars = () => {
  const stars = new Array(50).fill(null);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent dark:bg-accent rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
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

