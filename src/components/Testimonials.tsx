import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { testimonials } from '../data/profile'
import { getCompanyLogo } from '../lib/projectAssets'
import { CompanyLogo } from './CompanyLogo'
import { SectionHeader } from './SectionHeader'

function TestimonialAttribution({
  name,
  role,
  company,
  logoSize = 'lg',
}: {
  name: string
  role: string
  company: string
  logoSize?: 'md' | 'lg'
}) {
  const logo = getCompanyLogo(company)

  return (
    <div className="flex items-center gap-4">
      <CompanyLogo
        company={company}
        domain={logo.logoDomain}
        logoSrc={logo.logoSrc}
        size={logoSize}
      />
      <cite className="not-italic">
        <p className="font-display font-semibold t-heading">{name}</p>
        <p className="mt-1 text-sm t-muted">
          {role} · {company}
        </p>
      </cite>
    </div>
  )
}

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const go = (next: number) => {
    setDirection(next > current ? 1 : -1)
    setCurrent((next + testimonials.length) % testimonials.length)
  }

  const t = testimonials[current]

  return (
    <section id="testimonials" className="section-pad relative section-divider border-y">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label="Testimonials"
          title={
            <>
              Client <span className="text-gradient">Feedback</span>
            </>
          }
          description="What leaders and stakeholders say about delivering high-impact AI at scale."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <div className="card relative overflow-hidden p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 testimonial-glow" />

            {t.isLatest && (
              <span className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                <Star size={10} className="fill-emerald-500 text-emerald-500" />
                Most Recent
              </span>
            )}

            <Quote className="quote-icon mb-6" size={36} />

            <div className="relative min-h-[200px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.blockquote
                  key={t.id}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 32 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -32 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="font-display text-xl leading-relaxed t-body sm:text-2xl sm:leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <div className="mb-4 flex gap-1">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <TestimonialAttribution
                        name={t.name}
                        role={t.role}
                        company={t.company}
                      />
                    </div>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center justify-between border-t border-[var(--border)] pt-6">
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === current ? 'w-8 bg-indigo-500' : 'w-1.5 bg-[var(--border)] hover:bg-indigo-400 dark:hover:bg-indigo-300'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => go(current - 1)}
                  aria-label="Previous"
                  className="theme-toggle"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => go(current + 1)}
                  aria-label="Next"
                  className="theme-toggle"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials
            .filter((item) => item.isLatest)
            .concat(testimonials.filter((item) => !item.isLatest).slice(0, 3))
            .map((item) => {
              const logo = getCompanyLogo(item.company)

              return (
                <div
                  key={item.id}
                  className={`card card-hover p-5 ${item.isLatest ? 'border-emerald-500/20' : ''}`}
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <CompanyLogo
                      company={item.company}
                      domain={logo.logoDomain}
                      logoSrc={logo.logoSrc}
                      size="md"
                    />
                    <div className="flex gap-1">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="line-clamp-4 text-sm leading-relaxed t-muted">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <p className="mt-4 text-xs font-medium t-faint">
                    {item.name} · {item.company}
                  </p>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}
