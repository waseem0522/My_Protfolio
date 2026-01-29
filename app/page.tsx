import dynamic from 'next/dynamic'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Footer } from '@/components/Footer'

// Lazy load components below the fold for better performance
const About = dynamic(() => import('@/components/About').then((mod) => ({ default: mod.About })), {
  loading: () => <div className="min-h-screen" />,
  ssr: true,
})
const Skills = dynamic(() => import('@/components/Skills').then((mod) => ({ default: mod.Skills })), {
  loading: () => <div className="min-h-screen" />,
  ssr: true,
})
const Projects = dynamic(() => import('@/components/Projects').then((mod) => ({ default: mod.Projects })), {
  loading: () => <div className="min-h-screen" />,
  ssr: true,
})
const Experience = dynamic(
  () => import('@/components/Experience').then((mod) => ({ default: mod.Experience })),
  {
    loading: () => <div className="min-h-screen" />,
    ssr: true,
  }
)
const AIExpertise = dynamic(
  () => import('@/components/AIExpertise').then((mod) => ({ default: mod.AIExpertise })),
  {
    loading: () => <div className="min-h-screen" />,
    ssr: true,
  }
)
const Testimonials = dynamic(
  () => import('@/components/Testimonials').then((mod) => ({ default: mod.Testimonials })),
  {
    loading: () => <div className="min-h-screen" />,
    ssr: true,
  }
)
const Documents = dynamic(
  () => import('@/components/Documents').then((mod) => ({ default: mod.Documents })),
  {
    loading: () => <div className="min-h-screen" />,
    ssr: true,
  }
)
const Contact = dynamic(() => import('@/components/Contact').then((mod) => ({ default: mod.Contact })), {
  loading: () => <div className="min-h-screen" />,
  ssr: true,
})

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background-light dark:bg-background-dark">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Documents Section */}
        <Documents />

        {/* Experience Section */}
        <Experience />

        {/* AI Expertise Section */}
        <AIExpertise />

        {/* Projects Section */}
        <Projects />

        {/* Skills Section */}
        <Skills />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Section */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}

