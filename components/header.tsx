"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Code, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4 ml-4">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex flex-1 items-center justify-between ">
          <Link href="/" className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">
              Mohamed Datt
            </span>
          </Link>
          <Button asChild className="hidden md:inline-flex items-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
            <Link href="/assets/Mohamed-Datt-Software Developer - resume.pdf" target="_blank" rel="noopener noreferrer">
              View Resume
            </Link>
          </Button>
        </div>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Button
            variant="ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <button onClick={() => scrollToSection('about')} className="transition-colors hover:text-primary text-muted-foreground py-2">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="transition-colors hover:text-primary text-muted-foreground py-2">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="transition-colors hover:text-primary text-muted-foreground py-2">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="transition-colors hover:text-primary text-muted-foreground py-2">
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

