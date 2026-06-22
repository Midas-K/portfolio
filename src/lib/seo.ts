import { experience, profile, projects, skills } from '../data/profile'

const DEFAULT_SITE_URL = 'https://vikeshpatel.dev'

export const siteConfig = {
  siteName: 'Vikesh Patel Portfolio',
  siteUrl:
    (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') ||
    DEFAULT_SITE_URL,
  title: 'Vikesh Patel | Staff AI & Machine Learning Engineer',
  description:
    'Portfolio of Vikesh Patel — Staff AI & Machine Learning Engineer with 8+ years building production LLM, NLP, MLOps, and enterprise AI systems for Fortune 500 clients including Smarsh, Capital One, Goldman Sachs, and Stripe.',
  keywords: [
    'Vikesh Patel',
    'AI engineer',
    'machine learning engineer',
    'staff ML engineer',
    'LLM engineer',
    'MLOps',
    'NLP',
    'fraud detection',
    'enterprise AI',
    'data scientist',
    'AI consultant',
    'Dhaka',
    'Bangladesh',
    'FinTech AI',
    'healthcare AI',
    'RegTech',
    'explainable AI',
  ],
  author: profile.name,
  email: profile.email,
  locale: 'en_US',
  twitterHandle: '',
  ogImagePath: '/og-image.svg',
  ogImageAlt: 'Vikesh Patel — Staff AI & Machine Learning Engineer portfolio',
}

export function getCanonicalUrl(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${siteConfig.siteUrl}${normalizedPath}`
}

export function getOgImageUrl() {
  return `${siteConfig.siteUrl}${siteConfig.ogImagePath}`
}

function skillKeywords() {
  return skills.flatMap((group) => group.items).slice(0, 24)
}

function projectKeywords() {
  return projects.slice(0, 12).map((project) => project.category)
}

export function getKeywords() {
  return Array.from(
    new Set([...siteConfig.keywords, ...skillKeywords(), ...projectKeywords()]),
  ).join(', ')
}

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteConfig.siteUrl}/#person`,
    name: profile.name,
    givenName: 'Vikesh',
    familyName: 'Patel',
    jobTitle: profile.title,
    description: profile.summary,
    email: profile.email,
    telephone: profile.phones,
    url: siteConfig.siteUrl,
    image: getOgImageUrl(),
    address: {
      '@type': 'PostalAddress',
      streetAddress: profile.address.line1,
      addressLocality: profile.address.city,
      postalCode: profile.address.postalCode,
      addressCountry: profile.address.country,
    },
    worksFor: experience.map((job) => ({
      '@type': 'Organization',
      name: job.company,
    })),
    knowsAbout: skillKeywords(),
    sameAs: [],
  }
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.siteUrl}/#website`,
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    inLanguage: 'en-US',
    author: {
      '@id': `${siteConfig.siteUrl}/#person`,
    },
  }
}

export function getProfilePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${siteConfig.siteUrl}/#profilepage`,
    url: siteConfig.siteUrl,
    name: siteConfig.title,
    description: siteConfig.description,
    inLanguage: 'en-US',
    mainEntity: {
      '@id': `${siteConfig.siteUrl}/#person`,
    },
    about: {
      '@id': `${siteConfig.siteUrl}/#person`,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: getOgImageUrl(),
    },
  }
}

export function getProfessionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteConfig.siteUrl}/#service`,
    name: `${profile.name} — AI Engineering & Consulting`,
    description: profile.tagline,
    url: siteConfig.siteUrl,
    email: profile.email,
    telephone: profile.phones[0],
    areaServed: ['Worldwide', profile.address.country],
    serviceType: [
      'AI Engineering',
      'Machine Learning Consulting',
      'LLM Development',
      'MLOps',
      'NLP Systems',
      'Fraud Detection',
    ],
    provider: {
      '@id': `${siteConfig.siteUrl}/#person`,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: profile.address.line1,
      addressLocality: profile.address.city,
      postalCode: profile.address.postalCode,
      addressCountry: profile.address.country,
    },
  }
}

export function getBreadcrumbSchema() {
  const sections = [
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Experience', path: '#experience' },
    { name: 'Feedback', path: '#testimonials' },
    { name: 'Contact', path: '#contact' },
  ]

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.siteUrl,
      },
      ...sections.map((section, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: section.name,
        item: `${siteConfig.siteUrl}/${section.path}`,
      })),
    ],
  }
}

export function getStructuredData() {
  return [
    getPersonSchema(),
    getWebSiteSchema(),
    getProfilePageSchema(),
    getProfessionalServiceSchema(),
    getBreadcrumbSchema(),
  ]
}
