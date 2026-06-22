import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { profile } from '../data/profile'
import { SectionHeader } from './SectionHeader'

export function Contact() {
  const fullAddress = `${profile.address.line1}\n${profile.address.city}, ${profile.address.postalCode}\n${profile.address.country}`

  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label="Contact"
          title={
            <>
              Let&apos;s build something <span className="text-gradient">remarkable</span>
            </>
          }
          description="Open to AI engineering roles, consulting engagements, and ambitious machine learning projects."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card mx-auto max-w-4xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-5">
            <div className="surface-accent border-b border-[var(--border)] p-8 lg:col-span-2 lg:border-b-0 lg:border-r">
              <h3 className="font-display text-lg font-semibold t-heading">Direct Contact</h3>
              <p className="mt-2 text-sm t-muted">Reach out anytime — I typically respond within 24 hours.</p>

              <div className="mt-8 space-y-6">
                <a href={`mailto:${profile.email}`} className="group flex gap-4 transition-colors">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--pill-bg)] accent-icon">
                    <Mail size={18} />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider t-faint">Email</p>
                    <p className="mt-1 text-sm t-body group-hover:t-heading">{profile.email}</p>
                  </div>
                </a>

                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--pill-bg)] accent-icon">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider t-faint">Phone</p>
                    <div className="mt-1 space-y-1">
                      {profile.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\D/g, '')}`}
                          className="block text-sm t-body transition-colors hover:t-heading"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--pill-bg)] accent-icon">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider t-faint">Address</p>
                    <p className="mt-1 whitespace-pre-line text-sm t-body">{fullAddress}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 lg:col-span-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.target as HTMLFormElement
                  const data = new FormData(form)
                  const subject = encodeURIComponent(`Portfolio Contact: ${data.get('name')}`)
                  const body = encodeURIComponent(
                    `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`,
                  )
                  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
                }}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-xs font-medium t-muted">
                      Name
                    </label>
                    <input id="name" name="name" required className="input-field" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-xs font-medium t-muted">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="input-field"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-xs font-medium t-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
