import { Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '../data/profile'

export function ContactDetails() {
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
    <div className="border-t border-[var(--border)] bg-[var(--bg-muted)] p-5 sm:p-6">
      <h3 className="font-display text-lg font-semibold t-heading">{profile.name}</h3>
      <p className="mt-1 text-sm t-muted">{profile.title}</p>

      <dl className="mt-5 space-y-4">
        {info.map((item, idx) => (
          <div key={idx} className="flex gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--pill-bg)] accent-icon">
              <item.icon size={15} />
            </span>
            <div className="min-w-0">
              <dt className="text-[11px] font-semibold uppercase tracking-wider t-faint">
                {item.label}
              </dt>
              <dd className="mt-0.5 text-sm t-body">
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
    </div>
  )
}
