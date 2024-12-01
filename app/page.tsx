import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { SkillTree } from '@/components/skill-tree'
import { Timeline } from '@/components/timeline'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-space">
      <Hero />
      <About />
      <SkillTree />
      <Timeline />
      <Projects />
      <Contact />
    </main>
  )
}

