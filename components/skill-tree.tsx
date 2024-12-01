"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Github } from 'lucide-react'

type Skill = {
  name: string
  proficiency: number
  category: string
}

const skills: Skill[] = [
  // Front-end
  { name: "React", proficiency: 85, category: "Front-end" },
  { name: "HTML/CSS", proficiency: 90, category: "Front-end" },
  { name: "TypeScript", proficiency: 78, category: "Front-end" },
  { name: "JavaScript", proficiency: 88, category: "Front-end" },
  { name: "TailwindCSS", proficiency: 90, category: "Front-end" },
  { name: "CSS", proficiency: 90, category: "Front-end" },
  { name: "Responsive Design", proficiency: 85, category: "Front-end" },
  { name: "UI/UX Principles", proficiency: 80, category: "Front-end" },

  // Back-end
  { name: "Node.js", proficiency: 65, category: "Back-end" },
  { name: "Python", proficiency: 82, category: "Back-end" },
  { name: "Java", proficiency: 84, category: "Back-end" },
  { name: "RESTful APIs", proficiency: 70, category: "Back-end" },
  { name: "Database Management", proficiency: 60, category: "Back-end" },

  // Tools & Technologies
  { name: "Git", proficiency: 75, category: "Tools & Technologies" },
  { name: "VS Code", proficiency: 90, category: "Tools & Technologies" },
  { name: "npm/yarn", proficiency: 60, category: "Tools & Technologies" },
  { name: "Webpack", proficiency: 40, category: "Tools & Technologies" },

  // Other
  { name: "Problem Solving", proficiency: 88, category: "Other" },
  { name: "Agile Methodologies", proficiency: 75, category: "Other" },
  { name: "Technical Writing", proficiency: 80, category: "Other" },
  { name: "Team Collaboration", proficiency: 85, category: "Other" },
]

const categories = ["All", "Front-end", "Back-end", "Tools & Technologies", "Other"]

export function SkillTree() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [showAll, setShowAll] = useState(false)

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  const visibleSkills = activeCategory === "All" && !showAll
    ? filteredSkills.slice(0, 9)
    : filteredSkills

  return (
    <section id="skills" className="py-20 px-4 section-scroll bg-space">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 glow font-orbitron"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skill Constellation
        </motion.h2>
        <Tabs defaultValue="All" className="mb-8">
          <TabsList className="flex justify-center flex-wrap mb-8">
            {categories.map(category => (
              <TabsTrigger 
                key={category} 
                value={category}
                onClick={() => {
                  setActiveCategory(category)
                  setShowAll(false)
                }}
                className="px-4 py-2 rounded-full text-text-muted hover:text-text-secondary hover-glow"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {visibleSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg bg-card/50 backdrop-blur-sm border-primary/30 cosmic-border">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex justify-between items-center text-text-primary">
                      {skill.name}
                      <Badge variant="secondary" className="ml-2 bg-secondary/20 text-secondary">
                        {skill.category}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-text-primary">{skill.proficiency}%</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className={`w-4 h-4 ${
                              star <= Math.round(skill.proficiency / 20)
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        {activeCategory === "All" && filteredSkills.length > 9 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mt-8"
          >
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="group border-primary text-text-secondary hover:bg-primary/20 cosmic-border"
            >
              {showAll ? (
                <>
                  Collapse Constellation
                  <ChevronUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                </>
              ) : (
                <>
                  Expand Constellation
                  <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </>
              )}
            </Button>
          </motion.div>
        )}
      </div>
      <div className="flex justify-center mt-12">
        <Button
          asChild
          size="lg"
          className="cosmic-border bg-primary text-primary-foreground hover:bg-primary/80"
        >
          <a
            href="https://github.com/MeeksonJr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </a>
        </Button>
      </div>
    </section>
  )
}

