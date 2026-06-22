import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Seo } from './components/Seo'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Seo />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--btn-primary-bg)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--btn-primary-text)]"
      >
        Skip to main content
      </a>
      <div className="pointer-events-none fixed inset-0 mesh-bg" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 grid-bg" aria-hidden="true" />
      <Navbar />
      <main id="main-content" className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
