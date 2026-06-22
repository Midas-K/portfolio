import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { SectionHeader } from './SectionHeader'

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label="About"
          title={
            <>
              Engineering AI with <span className="text-gradient">Purpose</span>
            </>
          }
        />

        <div className="grid gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card card-hover overflow-hidden lg:col-span-3"
          >
            <img
              src={profile.image}
              alt={profile.imageAlt}
              width={480}
              height={600}
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="card card-hover lg:col-span-9 p-8 sm:p-10"
          >
            <p className="text-lg leading-[1.8] t-body sm:text-xl sm:leading-[1.85]">
              {profile.summary}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
