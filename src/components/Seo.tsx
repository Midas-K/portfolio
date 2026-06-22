import { useEffect } from 'react'
import {
  getCanonicalUrl,
  getKeywords,
  getOgImageUrl,
  getStructuredData,
  siteConfig,
} from '../lib/seo'

function upsertMeta(
  attribute: 'name' | 'property',
  key: string,
  content: string,
) {
  if (!content) return

  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  )

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  if (!href) return

  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

export function Seo() {
  useEffect(() => {
    const canonicalUrl = getCanonicalUrl()
    const ogImageUrl = getOgImageUrl()
    const keywords = getKeywords()

    document.title = siteConfig.title
    document.documentElement.lang = 'en'

    upsertMeta('name', 'description', siteConfig.description)
    upsertMeta('name', 'keywords', keywords)
    upsertMeta('name', 'author', siteConfig.author)
    upsertMeta('name', 'robots', 'index, follow, max-image-preview:large')
    upsertMeta('name', 'googlebot', 'index, follow')
    upsertMeta('name', 'application-name', siteConfig.siteName)
    upsertMeta('name', 'theme-color', '#030305')

    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', siteConfig.siteName)
    upsertMeta('property', 'og:title', siteConfig.title)
    upsertMeta('property', 'og:description', siteConfig.description)
    upsertMeta('property', 'og:url', canonicalUrl)
    upsertMeta('property', 'og:image', ogImageUrl)
    upsertMeta('property', 'og:image:alt', siteConfig.ogImageAlt)
    upsertMeta('property', 'og:locale', siteConfig.locale)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', siteConfig.title)
    upsertMeta('name', 'twitter:description', siteConfig.description)
    upsertMeta('name', 'twitter:image', ogImageUrl)
    upsertMeta('name', 'twitter:image:alt', siteConfig.ogImageAlt)

    if (siteConfig.twitterHandle) {
      upsertMeta('name', 'twitter:site', siteConfig.twitterHandle)
      upsertMeta('name', 'twitter:creator', siteConfig.twitterHandle)
    }

    upsertLink('canonical', canonicalUrl)

    const scriptId = 'portfolio-structured-data'
    let script = document.getElementById(scriptId) as HTMLScriptElement | null

    if (!script) {
      script = document.createElement('script')
      script.id = scriptId
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }

    script.textContent = JSON.stringify(getStructuredData())
  }, [])

  return null
}
