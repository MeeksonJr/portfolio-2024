import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { GlowingStars } from '@/components/ui/glowing-stars'
import { FloatingNavDemo } from '@/components/ui/floating-navbar'
import { Meteors } from '@/components/ui/meteors'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mohamed Datt - Software Developer Portfolio',
  description: 'A showcase of Mohamed Datt\'s software development projects and skills',
}

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-space text-text-primary flex flex-col min-h-screen relative`}>
        <GlowingStars />
         <Meteors number={20} />
        <FloatingNavDemo navItems={navItems} />
        <div className="relative z-10">
          <Header />
          <main className="flex-grow">
          <Meteors number={20} />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

