import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '../data/profile'
import { SectionHeader } from './SectionHeader'

export function About() {
  const fullAddress = `${profile.address.line1}, ${profile.address.city} ${profile.address.postalCode}, ${profile.address.country}`

  const info = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    ...profile.phones.map((phone) => ({
      icon: Phone,
      label: 'Phone',
      value: phone,
      href: `tel:${phone.replace(/\D/g, '')}`,
    })),
    { icon: MapPin, label: 'Location', value: fullAddress },
  ]

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
            className="card card-hover lg:col-span-5 p-8 sm:p-10"
          >
            <p className="text-lg leading-[1.8] t-body sm:text-xl sm:leading-[1.85]">
              {profile.summary}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card lg:col-span-4 p-8"
          >
            <h3 className="font-display text-lg font-semibold t-heading">Contact Details</h3>
            <p className="mt-1 text-sm t-muted">{profile.title}</p>

            <dl className="mt-8 space-y-5">
              {info.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--pill-bg)] accent-icon">
                    <item.icon size={16} />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-[11px] font-semibold uppercase tracking-wider t-faint">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-sm t-body">
                      {'href' in item && item.href ? (
                        <a href={item.href} className="transition-colors hover:t-heading">
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
