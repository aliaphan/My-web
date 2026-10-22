import { About } from './components/About'
import { Competitions } from './components/Competitions'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { useFlowerTrail } from './hooks/useFlowerTrail'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()
  useFlowerTrail()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Competitions />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
