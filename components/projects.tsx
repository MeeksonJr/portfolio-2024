"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    // TO-DO
    title: "Cosmic Task Tracker",
    description: "A space-themed task management application with real-time updates and collaborative features.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    category: "Full-stack",
    image: "/placeholder.svg?height=300&width=400",
    github: "https://github.com/yourusername/cosmic-task-tracker",
    live: "https://cosmic-task-tracker-demo.com"
  },
  {
    title: "Weather App",
    description: "An api weather application that display's weather data with a sleek modern design.",
    tags: ["Vite", "OpenWeather API", "TypeScript"],
    category: "Front-end",
    image: "/assets/Weather App, Weather Page.png?height=300&width=400",
    github: "https://github.com/MeeksonJr/weather-app",
    live: "https://getyourweather.mohameddatt.com/"
  },
  {
    title: "Interstellar PlanSmart AI",
    description: "A full-stack blog platform with a space exploration theme, featuring user authentication and markdown support.",
    tags: ["Next.js", "TypeScript", "Clerk", "PostgreSQL", "OpenAI"],
    category: "Front-End",
    image: "/assets/PlanSmart-ai.png?height=300&width=400",
    github: "https://github.com/MeeksonJr/plan-smart-ai",
    live: "https://lty0nnjlammmdvgrgdroexnyon5ixk8g.vercel.app/"
  },
  {
    title: "Story Time",
    description: " StoryTime app built using Next.js. It allows users to upload stories, select reading styles, and listen to them.",
    tags: ["JavaScript", "Next.js", "Clerk", "Drizzle", "Shadcn", "Lucid-react"],
    category: "Front-end",
    image: "/assets/Story-Time.png?height=300&width=400",
    github: "https://github.com/MeeksonJr/story-time",
    live: "https://story-time-six.vercel.app/"
  },
  {
    // To-DO
    title: "Space Station API",
    description: "A RESTful API service providing data about various space stations and their current positions.",
    tags: ["Express.js", "MongoDB", "JWT Authentication"],
    category: "Back-end",
    image: "/placeholder.svg?height=300&width=400",
    github: "https://github.com/yourusername/space-station-api",
    live: "https://space-station-api-docs.com"
  },
  {
    title: "Shampoo",
    description: "True Shampoo TrueShampoo is a React.js application designed for managing and reviewing hair care products",
    tags: ["React", "Mongoose", "api", "TypeScript", "Local-Storage"],
    category: "Front-End",
    image: "/assets/Shampoo-Page.png?height=300&width=400",
    github: "https://github.com/MeeksonJr/Shampoo",
    live: "https://github.com/MeeksonJr/Shampoo"
  }
]

const categories = ["All", "Full-stack", "Front-end", "Back-end"]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 px-4 section-scroll bg-space">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 glow font-orbitron"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Project Galaxy
        </motion.h2>
        <Tabs defaultValue="All" className="mb-12">
          <TabsList className="flex justify-center flex-wrap">
            {categories.map(category => (
              <TabsTrigger 
                key={category} 
                value={category}
                onClick={() => setActiveCategory(category)}
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full flex flex-col bg-card/50 backdrop-blur-sm border-primary/30 cosmic-border">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-background/80 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="text-text-primary text-center p-4">
                        <h3 className="text-xl font-bold mb-2 text-text-secondary">{project.title}</h3>
                        <p className="mb-4">{project.description}</p>
                        <div className="flex justify-center space-x-4">
                          <Button size="sm" variant="secondary" asChild className="bg-secondary/20 text-primary hover:bg-secondary/40">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              GitHub
                            </a>
                          </Button>
                          <Button size="sm" variant="secondary" asChild className="bg-secondary/20 text-primary hover:bg-secondary/40">
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="flex-grow">
                    <CardTitle className="mb-2 text-text-primary">{project.title}</CardTitle>
                    <CardDescription className="mb-4 text-text-muted">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-secondary/20 text-primary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

