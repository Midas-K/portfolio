export const categoryAccent: Record<string, { bar: string; badge: string; glow: string }> = {
  'RegTech & Compliance': {
    bar: 'from-sky-400 to-blue-500',
    badge: 'bg-sky-500/15 text-sky-300 border-sky-500/25',
    glow: 'group-hover:shadow-sky-500/10',
  },
  'LLM & NLP': {
    bar: 'from-violet-400 to-purple-500',
    badge: 'bg-violet-500/15 text-violet-300 border-violet-500/25',
    glow: 'group-hover:shadow-violet-500/10',
  },
  FinTech: {
    bar: 'from-amber-400 to-orange-500',
    badge: 'bg-amber-500/15 text-amber-300 border-amber-500/25',
    glow: 'group-hover:shadow-amber-500/10',
  },
  'Recommendation Systems': {
    bar: 'from-pink-400 to-rose-500',
    badge: 'bg-pink-500/15 text-pink-300 border-pink-500/25',
    glow: 'group-hover:shadow-pink-500/10',
  },
  Insurance: {
    bar: 'from-teal-400 to-emerald-500',
    badge: 'bg-teal-500/15 text-teal-300 border-teal-500/25',
    glow: 'group-hover:shadow-teal-500/10',
  },
  'Responsible AI': {
    bar: 'from-indigo-400 to-violet-500',
    badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/25',
    glow: 'group-hover:shadow-indigo-500/10',
  },
  MLOps: {
    bar: 'from-cyan-400 to-sky-500',
    badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/25',
    glow: 'group-hover:shadow-cyan-500/10',
  },
  'Retail AI': {
    bar: 'from-lime-400 to-green-500',
    badge: 'bg-lime-500/15 text-lime-300 border-lime-500/25',
    glow: 'group-hover:shadow-lime-500/10',
  },
  NLP: {
    bar: 'from-fuchsia-400 to-purple-500',
    badge: 'bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/25',
    glow: 'group-hover:shadow-fuchsia-500/10',
  },
  'Privacy AI': {
    bar: 'from-slate-300 to-zinc-400',
    badge: 'bg-zinc-500/15 text-zinc-300 border-zinc-500/25',
    glow: 'group-hover:shadow-zinc-500/10',
  },
  Compliance: {
    bar: 'from-blue-400 to-indigo-500',
    badge: 'bg-blue-500/15 text-blue-300 border-blue-500/25',
    glow: 'group-hover:shadow-blue-500/10',
  },
  'Healthcare AI': {
    bar: 'from-emerald-400 to-teal-500',
    badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/25',
    glow: 'group-hover:shadow-emerald-500/10',
  },
  'Enterprise SaaS': {
    bar: 'from-indigo-400 to-blue-500',
    badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/25',
    glow: 'group-hover:shadow-indigo-500/10',
  },
}

export function getCategoryAccent(category: string) {
  return (
    categoryAccent[category] ?? {
      bar: 'from-indigo-400 to-violet-500',
      badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/25',
      glow: 'group-hover:shadow-indigo-500/10',
    }
  )
}

export function companyInitials(company: string) {
  return company
    .replace(/[^a-zA-Z\s]/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}
