"use client"

import { motion } from "framer-motion"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { FileText, GraduationCap, Briefcase } from 'lucide-react'
import Link from 'next/link'

export function About() {
  return (
    <section id="about" className="py-20 px-4 section-scroll bg-space">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 glow font-orbitron"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mission Profile
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* C:\Users\Mo\Next\portfolio-2024\public\assets\sitting-shot.JPG */}
            <Image
              src="/assets/sitting-shot.JPG"
              alt="Mohamed Datt"
              width={250}
              height={300}
              objectFit="cover"
              className="rounded-lg mx-auto cosmic-border"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg mb-6 text-text-muted">
              Wellcome, fellow space traveler to my station! I'm Mohamed Datt, a Computer Science student and a software developer. My journey began in the planet of Engineering, but my true calling led me to the vast universe of coding and web development.
            </p>
            <p className="text-lg mb-6 text-text-muted">
              I am armed with knowledge in CAD, and Arduino from my old planet, But also gained new knowledge along the way like Python, HTML, CSS, and JavaScript to create a new world. I&apos;m on a mission to create efficient and user-friendly applications that push the boundaries of what&apos;s possible in the digital frontier.
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center text-text-secondary">
                <GraduationCap className="mr-2" /> Space Exploration
              </h3>
              <p className="text-text-muted">
                Bacholers of Science (Jan 2025 - Present)<br />
                Old Dominion University, Norfolk
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center text-text-secondary">
                <GraduationCap className="mr-2" /> Space Academy
              </h3>
              <p className="text-text-muted">
                Associates of Science (Sep 2022 - Dec 2024)<br />
                Tidewater Community College, Norfolk
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center text-text-secondary">
                <Briefcase className="mr-2" /> Mission Experience
              </h3>
              <p className="text-text-muted">
                CSR at Family Dollar, Norfolk (Jul 2023 - Mar 2024)<br />
                Dual-role position as both a cashier and freight handler
              </p>
              <br />
              <p className="text-text-muted">
                Software Engineer, Intern (Sept 2024 - Dec 2024)<br />
                Worked with a great team to create a brand boosting app called 
                <Link href="https://www.linkedin.com/company/brandboostrai/" className=" text-blue-900" target="_blank" rel="noopener noreferrer">
                  , BrandBoost-ai
                </Link> 
                <br />
                Won 1st place out of 13 teams.
              </p>
            </div>
            <Button size="lg" asChild className="cosmic-border">
              {/* C:\Users\Mo\Next\portfolio-2024\public\assets\Mohamed-Datt-Software Developer - resume.pdf */}
              <Link href="/assets/Mohamed-Datt-Software Developer - resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" /> View Mission Log
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

