import { useState } from 'react'
import { companyInitials } from '../lib/categoryColors'
import { logoUrl, logoUrlHd } from '../lib/projectAssets'

type CompanyLogoProps = {
  company: string
  domain?: string
  logoSrc?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = {
  sm: 'h-9 w-9 p-1',
  md: 'h-11 w-11 p-1.5',
  lg: 'h-14 w-14 p-2',
}

const imgSizes = {
  sm: 'h-full w-full',
  md: 'h-full w-full',
  lg: 'h-full w-full',
}

type Stage = 'brand' | 'hd' | 'favicon' | 'initials'

export function CompanyLogo({
  company,
  domain,
  logoSrc,
  size = 'md',
  className = '',
}: CompanyLogoProps) {
  const [stage, setStage] = useState<Stage>(
    logoSrc ? 'brand' : domain ? 'hd' : 'initials',
  )

  const initials = companyInitials(company)

  if (stage === 'initials' || (!domain && !logoSrc)) {
    return (
      <div
        className={`logo-initials ${sizes[size]} ${className}`}
      >
        {initials.slice(0, 2)}
      </div>
    )
  }

  const src =
    stage === 'brand'
      ? logoSrc!
      : stage === 'hd'
        ? logoUrlHd(domain!)
        : logoUrl(domain!)

  return (
    <div
      className={`logo-frame flex shrink-0 items-center justify-center ${sizes[size]} ${className}`}
    >
      <img
        src={src}
        alt={`${company} logo`}
        className={`${imgSizes[size]} object-contain`}
        onError={() => {
          if (stage === 'brand') setStage(domain ? 'hd' : 'initials')
          else if (stage === 'hd') setStage('favicon')
          else setStage('initials')
        }}
      />
    </div>
  )
}
