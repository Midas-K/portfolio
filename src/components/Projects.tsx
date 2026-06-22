import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, TrendingUp } from 'lucide-react'
import { projects } from '../data/profile'
import { SectionHeader } from './SectionHeader'
import { CompanyLogo } from './CompanyLogo'
import { getCategoryAccent } from '../lib/categoryColors'
import { getProjectAsset } from '../lib/projectAssets'

const MONTH_INDEX: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
}

function projectDateValue(period?: string, year?: string) {
  if (period && !period.includes('–')) {
    const [month, yr] = period.split(' ')
    return Number(yr) * 12 + (MONTH_INDEX[month] ?? 0)
  }
  return Number(year) * 12
}

const sortedProjects = [...projects].sort((a, b) => {
  const dateDiff = projectDateValue(b.period, b.year) - projectDateValue(a.period, a.year)
  if (dateDiff !== 0) return dateDiff
  return (b.isLatest ? 1 : 0) - (a.isLatest ? 1 : 0)
})

const categories = ['All', ...Array.from(new Set(sortedProjects.map((p) => p.category)))]

export function Projects() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () =>
      active === 'All'
        ? sortedProjects
        : sortedProjects.filter((p) => p.category === active),
    [active],
  )

  return (
    <section id="projects" className="section-pad relative">
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          label="Selected Work"
          title={
            <>
              Production <span className="text-gradient">AI Projects</span>
            </>
          }
          description={`${projects.length} enterprise-grade systems delivered for Fortune 500 clients, regulated industries, and high-growth startups — each with measurable business outcomes.`}
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`pill ${active === cat ? 'pill-active' : 'hover:t-body'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

type Project = (typeof projects)[number]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accent = getCategoryAccent(project.category)
  const asset = getProjectAsset(project.id)
  const spanLatest = project.isLatest && index === 0
  const [coverError, setCoverError] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: Math.min(index * 0.04, 0.24), duration: 0.45 }}
      className={`card card-hover card-shine group flex h-full flex-col overflow-hidden ${spanLatest ? 'sm:col-span-2 xl:col-span-2' : ''}`}
    >
      <div className={`relative overflow-hidden ${spanLatest ? 'h-52 sm:h-56' : 'h-44'}`}>
        {!coverError ? (
          <img
            src={asset.cover}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setCoverError(true)}
          />
        ) : (
          <div className="project-cover-fallback" />
        )}
        <div className="absolute inset-0 project-overlay" />
        <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent.bar}`} />

        <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
          <CompanyLogo
            company={project.company}
            domain={asset.logoDomain}
            logoSrc={asset.logoSrc}
            size={spanLatest ? 'lg' : 'md'}
          />
          <div className="flex flex-col items-end gap-1.5">
            {project.isLatest && (
              <span className="status-badge">
                <Sparkles size={10} />
                Latest
              </span>
            )}
            <time className="image-chip">
              {project.period ?? project.year}
            </time>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <span
            className={`inline-block rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm ${accent.badge}`}
          >
            {project.category}
          </span>
          <p className="mt-2 text-sm font-medium text-white/90">{project.company}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-lg font-semibold leading-snug t-heading transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400 sm:text-xl">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed t-muted line-clamp-3">
          {project.description}
        </p>

        <div className="impact-box mt-5 flex items-start gap-2 px-3 py-2.5">
          <TrendingUp size={14} className="mt-0.5 shrink-0 text-emerald-500" />
          <p className="text-xs font-medium leading-relaxed text-emerald-700 dark:text-emerald-300/90 sm:text-sm">
            {project.impact}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5 border-t border-[var(--border)] pt-5">
          {project.tech.slice(0, spanLatest ? 8 : 5).map((t) => (
            <span
              key={t}
              className="rounded-md bg-[var(--pill-bg)] px-2.5 py-1 text-[11px] font-medium t-muted ring-1 ring-[var(--border)] transition-colors group-hover:t-body"
            >
              {t}
            </span>
          ))}
          {project.tech.length > (spanLatest ? 8 : 5) && (
            <span className="rounded-md px-2 py-1 text-[11px] t-faint">
              +{project.tech.length - (spanLatest ? 8 : 5)}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}
