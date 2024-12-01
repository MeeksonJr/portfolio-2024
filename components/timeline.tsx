"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from 'lucide-react'

const timelineItems = [
  {
    title: "Computer Science Student",
    company: "Tidewater Community College",
    date: "2022 - Present",
    description: "Pursuing an Associate's degree in Computer Science, focusing on software development and web technologies.",
    tags: ["Computer Science", "Software Development", "Web Technologies", "Python", "Java", "OOP", "Data Structures"],
    type: "education"
  },
  {
    title: "Customer Service Representative",
    company: "Family Dollar",
    date: "Jul 2023 - Mar 2024",
    description: "Managed dual responsibilities as a cashier and freight handler, developing strong multitasking and customer service skills.",
    tags: ["Customer Service", "Inventory Management", "Team Collaboration", "CSR"],
    type: "work"
  },
  {
    title: "Self-Taught Developer",
    company: "Personal Projects",
    date: "2019 - Present",
    description: "Continuously learning and applying new technologies through personal projects and online courses.",
    tags: ["Self-Learning", "Web Development", "Responsive Design"],
    type: "education"
  },
  {
    title: "Engineering Student",
    company: "Previous Institution",
    date: "2022 - 2023",
    description: "Started in Engineering before transitioning to Computer Science, gaining valuable problem-solving and analytical skills.",
    tags: ["Engineering", "Problem Solving", "Analytical Thinking", "CAD", "Arduino"],
    type: "education"
  }
]

export function Timeline() {
  return (
    <section id="timeline" className="py-20 px-4 bg-space section-scroll">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 glow font-orbitron"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Cosmic Journey
        </motion.h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary" />
          
          {timelineItems.map((item, index) => (
            <motion.div
              key={item.title}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="w-5/12" />
              <div className="z-20">
                <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full">
                  {item.type === "work" ? (
                    <Briefcase className="w-5 h-5 text-primary-foreground" />
                  ) : (
                    <GraduationCap className="w-5 h-5 text-primary-foreground" />
                  )}
                </div>
              </div>
              <Card className="w-5/12 bg-card/80 backdrop-blur-sm border-primary/30 cosmic-border">
                <CardHeader>
                  <CardTitle className="text-foreground font-semibold">{item.title}</CardTitle>
                  <CardDescription className="text-muted-foreground font-medium">{item.company} | {item.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-foreground">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-primary/20 text-primary font-medium">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}