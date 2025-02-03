"use client"

import React from "react"
import { cn } from "@/lib/utils"

// Define a type for the meteor styles
type MeteorStyle = {
  left: string;
  animationDelay: string;
  animationDuration: string;
};

export const Meteors = ({
  number,
  children,
  className,
}: {
  number?: number
  children?: React.ReactNode
  className?: string
}) => {
  // Initialize the meteors array with the correct type
  const meteors: MeteorStyle[] = new Array(number || 20).fill(true).map(() => ({
    left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
    animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
    animationDuration: Math.floor(Math.random() * (30 - 2) + 2) + "s",
  }));
  
  // Use the defined type for the state
  const [meteorStyles, setMeteorStyles] = React.useState<MeteorStyle[]>([]);
  
  React.useEffect(() => {
    const generatedStyles: MeteorStyle[] = meteors.map(() => ({
      left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
      animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * (30 - 2) + 2) + "s",
    }));
    setMeteorStyles(generatedStyles);
  }, []);
  
  return (
    <div className="relative w-full h-full">
      {children}
      {meteorStyles.map((style, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: 0,
            left: style.left,
            animationDelay: style.animationDelay,
            animationDuration: style.animationDuration,
          }}
        ></span>
      ))}
    </div>
  )
}

