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
    title: "Weather App",
    description: "A weather app using a free API to get forecasts for desired locations, built with a sleek modern design.",
    tags: ["TypeScript", "OpenWeather API", "React"],
    category: "Full-stack",
    image: "/assets/WeatherApp.png?height=300&width=400",
    github: "https://github.com/MeeksonJr/weather-app",
    live: "https://getyourweather.mohameddatt.com/",
  },
  {
    title: "PlanSmart AI",
    description: "Plan efficiently with smart AI features integrated into this application.",
    tags: ["TypeScript", "Next.js", "OpenAI"],
    category: "Full-stack",
    image: "/assets/PlanSmart-AI.png?height=300&width=400",
    github: "https://github.com/MeeksonJr/plan-smart-ai",
    live: "https://lty0nnjlammmdvgrgdroexnyon5ixk8g.vercel.app/",
  },
  {
    title: "Shampoo",
    description: "Check the shampoo you know! A React app for managing and reviewing hair care products.",
    tags: ["React", "Mongoose", "API", "TypeScript", "Local-Storage"],
    category: "Front-end",
    image: "/assets/Shampoo-Page.png?height=300&width=400",
    github: "https://github.com/MeeksonJr/next-shampoo",
    live: "https://next-shampoo.vercel.app/",
  },
  {
    title: "Contact List Manager",
    description: "A web project based on a school Java programming assignment about managing a contact list.",
    tags: ["JavaScript"],
    category: "Front-end",
    image: "/assets/n-a-image.jpg?height=300&width=400",
    github: "https://github.com/MeeksonJr/ContactListManager",
    live: "https://contact-list-manager-demo.com",
  },
  {
    title: "Dungeon & Dragons",
    description: "Dungeon and Dragon site with a backend database and ChatGPT chat API integrated.",
    tags: ["TypeScript", "React", "MongoDB", "OpenAI"],
    category: "Front-end",
    image: "/assets/n-a-image.jpg?height=300&width=400",
    github: "https://github.com/MeeksonJr/app-dnd",
    live: "https://dnd-app-demo.com",
  },
  {
    title: "Story Time",
    description: "A StoryTime app that allows users to upload stories, select reading styles, and listen to them.",
    tags: ["TypeScript", "Next.js", "Shadcn", "Lucid-react"],
    category: "Front-end",
    image: "/assets/Story-Time.png?height=300&width=400",
    github: "https://github.com/MeeksonJr/story-time",
    live: "https://story-time-six.vercel.app/",
  },
];

const categories = ["All", "Full-stack", "Front-end", "Back-end"];


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

