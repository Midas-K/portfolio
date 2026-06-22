import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { profile, stats } from '../data/profile'
import { ContactDetails } from './ContactDetails'

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center pt-36 pb-20"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full hero-glow blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="availability-badge">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for AI engineering & consulting
            </div>

            <h1
              id="hero-heading"
              className="font-display text-[2.75rem] font-bold leading-[1.05] tracking-tight t-heading sm:text-6xl lg:text-7xl"
            >
              Vikesh
              <br />
              <span className="text-gradient">Patel</span>
            </h1>

            <p className="mt-3 font-display text-xl font-medium t-body sm:text-2xl">
              {profile.title}
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed t-muted">
              {profile.tagline}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary group">
                Explore Projects
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a href="#contact" className="btn-secondary">
                <Mail size={16} />
                Get in Touch
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="card card-hover overflow-hidden">
              <img
                src={profile.image}
                alt={profile.imageAlt}
                width={640}
                height={800}
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <ContactDetails />
            </div>
          </motion.div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="card card-hover p-5 text-center sm:p-6"
            >
              <p className="font-display text-2xl font-bold sm:text-3xl">
                <span className="text-gradient">{stat.value}</span>
              </p>
              <p className="mt-1.5 text-sm t-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
