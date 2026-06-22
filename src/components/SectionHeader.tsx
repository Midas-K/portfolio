import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type SectionHeaderProps = {
  label: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'left',
}: SectionHeaderProps) {
  const centered = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className={`mb-14 ${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'}`}
    >
      <div
        className={`mb-4 flex items-center gap-3 ${centered ? 'justify-center' : ''}`}
      >
        <span className="h-px w-8 bg-gradient-to-r from-indigo-500 to-transparent" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] t-accent">
          {label}
        </p>
        {!centered && (
          <span className="h-px flex-1 max-w-16 bg-gradient-to-r from-transparent to-[var(--border)]" />
        )}
      </div>
      <h2 className="font-display text-3xl font-bold tracking-tight t-heading sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed t-muted ${centered ? '' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
