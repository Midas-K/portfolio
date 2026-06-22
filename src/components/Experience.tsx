import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { experience } from '../data/profile'
import { SectionHeader } from './SectionHeader'
import { CompanyLogo } from './CompanyLogo'
import { getCompanyLogo } from '../lib/projectAssets'

export function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label="Career"
          title={
            <>
              Professional <span className="text-gradient">Experience</span>
            </>
          }
        />

        <div className="space-y-6">
          {experience.map((job, i) => {
            const logo = getCompanyLogo(job.company)

            return (
              <motion.article
                key={job.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08 }}
                className="card card-hover overflow-hidden"
              >
                <div className="flex flex-col gap-6 border-b border-[var(--border)] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                  <div className="flex items-start gap-4">
                    <CompanyLogo
                      company={job.company}
                      domain={logo.logoDomain}
                      logoSrc={logo.logoSrc}
                      size="lg"
                    />
                    <div>
                      <h3 className="font-display text-xl font-semibold t-heading sm:text-2xl">
                        {job.company}
                      </h3>
                      <p className="mt-1 role-accent">{job.role}</p>
                      <p className="mt-2 flex items-center gap-1.5 text-sm t-muted">
                        <MapPin size={13} />
                        {job.location}
                      </p>
                    </div>
                  </div>
                  <span className="w-fit rounded-full border border-[var(--border)] bg-[var(--pill-bg)] px-4 py-2 text-sm font-medium t-muted">
                    {job.period}
                  </span>
                </div>

                <ul className="grid gap-3 p-6 sm:grid-cols-2 sm:p-8">
                  {job.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed t-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
