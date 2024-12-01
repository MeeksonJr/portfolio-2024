"use client"

import { motion } from "framer-motion"
import { Code, Server, Palette, Zap, Database, Cloud, Lock, Smartphone } from 'lucide-react'
import { Progress } from "@/components/ui/progress"

const skills = [
  { name: "Front-end", icon: Code, proficiency: 90 },
  { name: "Back-end", icon: Server, proficiency: 85 },
  { name: "UI/UX", icon: Palette, proficiency: 80 },
  { name: "Performance", icon: Zap, proficiency: 85 },
  { name: "Databases", icon: Database, proficiency: 75 },
  { name: "Cloud Services", icon: Cloud, proficiency: 70 },
  { name: "Security", icon: Lock, proficiency: 75 },
  { name: "Mobile Development", icon: Smartphone, proficiency: 65 },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <skill.icon className="w-12 h-12 text-primary" />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <Progress value={skill.proficiency} className="w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

