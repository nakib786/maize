'use client'

import { useEffect } from 'react'

interface SEOAnalyticsProps {
  pageTitle?: string
  pageUrl?: string
  contentType?: string
  businessType?: string
}

export default function SEOAnalytics({
  pageTitle = 'Maize Developments',
  pageUrl = 'https://maizedevelopments.com',
  contentType = 'construction-services',
  businessType = 'construction-company'
}: SEOAnalyticsProps) {
  useEffect(() => {
    // Track page views for SEO analytics
    const trackPageView = () => {
      // Google Analytics 4 tracking
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: pageTitle,
          page_location: pageUrl,
          custom_map: {
            'content_type': contentType,
            'business_type': businessType
          }
        })
      }

      // Send custom event for AI crawler detection
      if (typeof window !== 'undefined') {
        const userAgent = navigator.userAgent.toLowerCase()
        const isAICrawler = userAgent.includes('gptbot') || 
                           userAgent.includes('chatgpt') || 
                           userAgent.includes('anthropic') || 
                           userAgent.includes('claude') ||
                           userAgent.includes('ccbot') ||
                           userAgent.includes('omgilibot')

        if (isAICrawler) {
          // Track AI crawler visits
          console.log('AI crawler detected:', userAgent)
          
          // Send analytics event for AI crawler
          if (window.gtag) {
            window.gtag('event', 'ai_crawler_visit', {
              event_category: 'seo',
              event_label: userAgent,
              value: 1
            })
          }
        }
      }
    }

    // Track Core Web Vitals
    const trackCoreWebVitals = () => {
      if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
        // Track Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          
          if (window.gtag) {
            window.gtag('event', 'LCP', {
              event_category: 'Web Vitals',
              value: Math.round(lastEntry.startTime),
              event_label: pageUrl
            })
          }
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        // Track First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry) => {
            if (window.gtag) {
              window.gtag('event', 'FID', {
                event_category: 'Web Vitals',
                value: Math.round(entry.processingStart - entry.startTime),
                event_label: pageUrl
              })
            }
          })
        })
        fidObserver.observe({ entryTypes: ['first-input'] })

        // Track Cumulative Layout Shift (CLS)
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0
          const entries = list.getEntries()
          
          entries.forEach((entry) => {
            if (!entry.hadRecentInput) {
              clsValue += (entry as any).value
            }
          })

          if (window.gtag) {
            window.gtag('event', 'CLS', {
              event_category: 'Web Vitals',
              value: Math.round(clsValue * 1000) / 1000,
              event_label: pageUrl
            })
          }
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })
      }
    }

    // Track SEO-specific metrics
    const trackSEOMetrics = () => {
      // Track structured data presence
      const structuredData = document.querySelectorAll('script[type="application/ld+json"]')
      if (window.gtag) {
        window.gtag('event', 'structured_data_present', {
          event_category: 'SEO',
          value: structuredData.length,
          event_label: pageUrl
        })
      }

      // Track meta tags
      const metaTags = {
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.getAttribute('content'),
        keywords: document.querySelector('meta[name="keywords"]')?.getAttribute('content'),
        robots: document.querySelector('meta[name="robots"]')?.getAttribute('content'),
        canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href')
      }

      if (window.gtag) {
        window.gtag('event', 'meta_tags_analysis', {
          event_category: 'SEO',
          custom_map: {
            'meta_title_length': metaTags.title?.length || 0,
            'meta_description_length': metaTags.description?.length || 0,
            'meta_keywords_count': metaTags.keywords?.split(',').length || 0
          },
          event_label: pageUrl
        })
      }

      // Track heading structure
      const headings = {
        h1: document.querySelectorAll('h1').length,
        h2: document.querySelectorAll('h2').length,
        h3: document.querySelectorAll('h3').length,
        h4: document.querySelectorAll('h4').length,
        h5: document.querySelectorAll('h5').length,
        h6: document.querySelectorAll('h6').length
      }

      if (window.gtag) {
        window.gtag('event', 'heading_structure', {
          event_category: 'SEO',
          custom_map: {
            'h1_count': headings.h1,
            'h2_count': headings.h2,
            'h3_count': headings.h3,
            'h4_count': headings.h4,
            'h5_count': headings.h5,
            'h6_count': headings.h6
          },
          event_label: pageUrl
        })
      }

      // Track images with alt text
      const images = document.querySelectorAll('img')
      const imagesWithAlt = Array.from(images).filter(img => img.alt && img.alt.trim() !== '').length
      const imagesWithoutAlt = images.length - imagesWithAlt

      if (window.gtag) {
        window.gtag('event', 'image_alt_text', {
          event_category: 'SEO',
          custom_map: {
            'total_images': images.length,
            'images_with_alt': imagesWithAlt,
            'images_without_alt': imagesWithoutAlt
          },
          event_label: pageUrl
        })
      }
    }

    // Initialize tracking
    trackPageView()
    trackCoreWebVitals()
    
    // Delay SEO metrics tracking to ensure page is fully loaded
    setTimeout(trackSEOMetrics, 2000)

    // Cleanup observers on unmount
    return () => {
      // Performance observers are automatically cleaned up
    }
  }, [pageTitle, pageUrl, contentType, businessType])

  return null
}

// Declare global gtag function
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}
