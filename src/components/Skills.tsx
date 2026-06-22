import { motion } from 'framer-motion'
import { skills } from '../data/profile'
import { SectionHeader } from './SectionHeader'

export function Skills() {
  return (
    <section id="skills" className="section-pad relative section-divider border-y">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label="Expertise"
          title={
            <>
              Skills & <span className="text-gradient">Stack</span>
            </>
          }
          description="Machine learning, data engineering, cloud infrastructure, and enterprise AI — the full stack for shipping production systems."
          align="center"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card card-hover card-shine group p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-8 w-1 rounded-full bg-gradient-to-b from-indigo-400 to-violet-500" />
                <h3 className="font-display text-base font-semibold t-heading">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-[var(--border)] bg-[var(--pill-bg)] px-3 py-1.5 text-xs font-medium t-muted transition-colors group-hover:t-body"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
