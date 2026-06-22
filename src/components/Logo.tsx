type LogoProps = {
  className?: string
  size?: number
}

export function Logo({ className = '', size = 36 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logo-bg" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#818cf8" />
          <stop offset="1" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#logo-bg)" />
      <path
        d="M12 14 L20 28 L28 14"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <circle cx="12" cy="14" r="2.5" fill="white" />
      <circle cx="28" cy="14" r="2.5" fill="white" />
      <circle cx="20" cy="28" r="3" fill="white" />
    </svg>
  )
}
