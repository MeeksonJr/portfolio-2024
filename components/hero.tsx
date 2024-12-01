"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { GlowingStars } from "./ui/glowing-stars";
import { Meteors } from "./ui/meteors";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden bg-space">
      <Meteors number={20} className="absolute inset-0 z-10">
        <div className="relative z-20 w-full h-full flex flex-col justify-center items-center">
          <GlowingStars />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative"
          >
            <Meteors number={20} />
            <Image
              src="/assets/Photo.JPG"
              alt="Mohamed Datt"
              width={200}
              height={200}
              className="rounded-full border-4 border-primary cosmic-border"
            />
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-2xl">👨‍🚀</span>
            </div>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 glow text-text-primary"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span className="text-primary">Mohamed Datt</span>
          </motion.h1>
          <motion.div
            className="text-2xl md:text-4xl mb-8 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <TypeAnimation
              sequence={[
                "Software Developer",
                2000,
                "Space Explorer",
                2000,
                "Full-stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-text-secondary"
            />
          </motion.div>
          <Meteors number={20} />
          <motion.p
            className="max-w-2xl mb-8 text-lg text-text-muted"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Embarking on a cosmic journey through the digital universe. Passionate
            about crafting innovative solutions and exploring the frontiers of
            technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="space-x-4"
          >
            <Button
              size="lg"
              asChild
              className="cosmic-border bg-primary text-primary-foreground hover:bg-primary/80"
            >
              <Link href="#projects">Explore My Work</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="cosmic-border border-primary text-primary hover:bg-primary/20"
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>
          <Meteors number={20} />
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.5,
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <ChevronDown className="w-8 h-8 text-primary" />
          </motion.div>
        </div>
      </Meteors>
    </section>
  );
}

