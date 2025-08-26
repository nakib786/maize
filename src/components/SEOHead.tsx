'use client'

import { useEffect } from 'react'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  structuredData?: any
}

export default function SEOHead({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = '/images/maize.png',
  structuredData
}: SEOHeadProps) {
  useEffect(() => {
    // Update page title if provided
    if (title) {
      document.title = title
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description)
    }

    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink && canonical) {
      canonicalLink.setAttribute('href', canonical)
    }

    // Add structured data if provided
    if (structuredData) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(structuredData)
      document.head.appendChild(script)

      return () => {
        document.head.removeChild(script)
      }
    }
  }, [title, description, canonical, structuredData])

  return null
}

// SEO-friendly semantic components
export const SEOArticle = ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <article itemScope itemType="https://schema.org/Article" {...props}>
    {children}
  </article>
)

export const SEOSection = ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <section itemScope itemType="https://schema.org/WebPageElement" {...props}>
    {children}
  </section>
)

export const SEOHeading = ({ 
  level = 1, 
  children, 
  ...props 
}: { level?: 1 | 2 | 3 | 4 | 5 | 6 } & React.HTMLAttributes<HTMLElement>) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  return <Tag itemProp="headline" {...props}>{children}</Tag>
}

export const SEOImage = ({ 
  src, 
  alt, 
  ...props 
}: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img 
    itemProp="image" 
    src={src} 
    alt={alt}
    loading="lazy"
    {...props}
  />
)

export const SEOLink = ({ 
  href, 
  children, 
  ...props 
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a 
    itemProp="url" 
    href={href}
    {...props}
  >
    {children}
  </a>
)

export const SEOAddress = ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <address itemScope itemType="https://schema.org/PostalAddress" {...props}>
    {children}
  </address>
)

export const SEOContactPoint = ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <div itemScope itemType="https://schema.org/ContactPoint" {...props}>
    {children}
  </div>
)

export const SEOService = ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <div itemScope itemType="https://schema.org/Service" {...props}>
    {children}
  </div>
)

export const SEOOrganization = ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <div itemScope itemType="https://schema.org/Organization" {...props}>
    {children}
  </div>
)
