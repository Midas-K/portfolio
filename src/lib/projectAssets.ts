const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`

const si = (slug: string) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${slug}.svg`

export type ProjectAsset = {
  logoDomain?: string
  logoSrc?: string
  cover: string
}

export const projectAssets: Record<string, ProjectAsset> = {
  'smarsh-ai-surveillance': {
    logoDomain: 'smarsh.com',
    logoSrc: '/logos/smarsh.png',
    cover: unsplash('photo-1550751827-4bd374c3f58b'),
  },
  'multimodal-llm-platform': {
    logoDomain: 'meta.com',
    logoSrc: si('meta'),
    cover: unsplash('photo-1677442136019-21780ecad995'),
  },
  'fraud-detection-ensemble': {
    logoDomain: 'meta.com',
    logoSrc: si('meta'),
    cover: unsplash('photo-1563986768609-322da13575f3'),
  },
  'creator-recommendation-engine': {
    logoDomain: 'meta.com',
    logoSrc: si('meta'),
    cover: unsplash('photo-1460925895917-afdab827c52f'),
  },
  'insurance-entity-resolution': {
    logoDomain: 'meta.com',
    logoSrc: si('meta'),
    cover: unsplash('photo-1551288049-bebda4e38f71'),
  },
  'llm-evaluation-harness': {
    logoDomain: 'meta.com',
    logoSrc: si('meta'),
    cover: unsplash('photo-1620712943543-bcc4688e7485'),
  },
  'gpu-eks-migration': {
    logoDomain: 'meta.com',
    logoSrc: si('meta'),
    cover: unsplash('photo-1451187580459-43490279c0fa'),
  },
  'amazon-fresh-forecasting': {
    logoDomain: 'amazon.com',
    logoSrc: si('amazon'),
    cover: unsplash('photo-1542838132-92c53300491e'),
  },
  'payment-fraud-ensemble': {
    logoDomain: 'amazon.com',
    logoSrc: si('amazon'),
    cover: unsplash('photo-1563013544-824ae1b704d3'),
  },
  'nlp-review-insights': {
    logoDomain: 'amazon.com',
    logoSrc: si('amazon'),
    cover: unsplash('photo-1516321318423-f06f85e504b3'),
  },
  'federated-recommendations': {
    logoDomain: 'amazon.com',
    logoSrc: si('amazon'),
    cover: unsplash('photo-1633265486064-086b219458ec'),
  },
  'credit-scoring-api': {
    logoDomain: 'perforce.com',
    logoSrc: si('perforce'),
    cover: unsplash('photo-1554224155-6726b3ff858f'),
  },
  'kyc-aml-xai': {
    logoDomain: 'perforce.com',
    logoSrc: si('perforce'),
    cover: unsplash('photo-1450101499163-c8848c66ca85'),
  },
  'mlops-cicd-platform': {
    cover: unsplash('photo-1667372393119-3d32ccec1a28'),
  },
  'capital-one-credit-risk': {
    logoDomain: 'capitalone.com',
    logoSrc: si('capitalone'),
    cover: unsplash('photo-1554224154-26032ffc0d07'),
  },
  'teladoc-llm-routing': {
    logoDomain: 'teladoc.com',
    logoSrc: '/logos/teladoc.png',
    cover: unsplash('photo-1576091160550-2173dba999ef'),
  },
  'goldman-trade-surveillance': {
    logoDomain: 'goldmansachs.com',
    logoSrc: si('goldmansachs'),
    cover: unsplash('photo-1611974789855-9c2a0a7236a3'),
  },
  'unitedhealth-clinical-nlp': {
    logoDomain: 'uhc.com',
    logoSrc: '/logos/unitedhealth.png',
    cover: unsplash('photo-1579684385127-1ef15d508118'),
  },
  'lemonade-claims-triage': {
    logoDomain: 'lemonade.com',
    logoSrc: si('lemonade'),
    cover: unsplash('photo-1454165804606-c3d57bc86b40'),
  },
  'snowflake-data-quality-ml': {
    logoDomain: 'snowflake.com',
    logoSrc: si('snowflake'),
    cover: unsplash('photo-1558494949-ef010cbdcc31'),
  },
  'novartis-pharmacovigilance': {
    logoDomain: 'novartis.com',
    logoSrc: '/logos/novartis.png',
    cover: unsplash('photo-1587854697902-39f01f99a2ec'),
  },
  'stripe-merchant-fraud-graph': {
    logoDomain: 'stripe.com',
    logoSrc: si('stripe'),
    cover: unsplash('photo-1556740742-1feda2f3e685'),
  },
  'shopify-churn-prediction': {
    logoDomain: 'shopify.com',
    logoSrc: si('shopify'),
    cover: unsplash('photo-1472851294608-062f824d29cc'),
  },
}

export function getProjectAsset(projectId: string): ProjectAsset {
  return (
    projectAssets[projectId] ?? {
      cover: unsplash('photo-1451187580459-43490279c0fa'),
    }
  )
}

export type CompanyLogoAsset = {
  logoDomain?: string
  logoSrc?: string
}

export const companyLogos: Record<string, CompanyLogoAsset> = {
  Meta: { logoDomain: 'meta.com', logoSrc: si('meta') },
  Amazon: { logoDomain: 'amazon.com', logoSrc: si('amazon') },
  'Perforce Software': { logoDomain: 'perforce.com', logoSrc: si('perforce') },
  'Smarsh Inc.': { logoDomain: 'smarsh.com', logoSrc: '/logos/smarsh.png' },
  'Capital One': { logoDomain: 'capitalone.com', logoSrc: si('capitalone') },
  'Teladoc Health': { logoDomain: 'teladoc.com', logoSrc: '/logos/teladoc.png' },
  'Goldman Sachs': { logoDomain: 'goldmansachs.com', logoSrc: si('goldmansachs') },
  'UnitedHealth Group': { logoDomain: 'uhc.com', logoSrc: '/logos/unitedhealth.png' },
  Lemonade: { logoDomain: 'lemonade.com', logoSrc: si('lemonade') },
  Snowflake: { logoDomain: 'snowflake.com', logoSrc: si('snowflake') },
  Novartis: { logoDomain: 'novartis.com', logoSrc: '/logos/novartis.png' },
  Stripe: { logoDomain: 'stripe.com', logoSrc: si('stripe') },
  Shopify: { logoDomain: 'shopify.com', logoSrc: si('shopify') },
  'Cross-Enterprise': {},
}

export function getCompanyLogo(company: string): CompanyLogoAsset {
  return companyLogos[company] ?? {}
}

export function logoUrl(domain: string, size = 128) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

export function logoUrlHd(domain: string) {
  return `https://logo.clearbit.com/${domain}`
}
