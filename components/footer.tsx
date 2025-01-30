import { Github, Linkedin, Globe } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by Mohamed Datt. Powered by the{" "}
            <a
              href="https://vercel.com"
              target="_blank noopener"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              Future
            </a>
            .
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/MeeksonJr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/mohamed-datt-b60907296/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://mohameddatt.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Globe className="h-5 w-5" />
            <span className="sr-only">Portfolio</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

