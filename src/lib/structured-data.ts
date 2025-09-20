export const generateStructuredData = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Maize Developments",
    "url": "https://maizedevelopments.com",
    "logo": "https://maizedevelopments.com/images/Maize Logo.svg",
    "description": "Professional construction services specializing in new builds, renovations, rezoning, and subdivisions in British Columbia, Canada. From blueprints to keys, we build dreams one project at a time.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "British Columbia",
      "addressCountry": "CA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.facebook.com/maizedevelopments",
      "https://www.instagram.com/maizedevelopments",
      "https://www.linkedin.com/company/maize-developments"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "New Build Construction",
            "description": "Building your dream home from the ground up with custom blueprints and exceptional craftsmanship"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Home Renovation",
            "description": "Comprehensive renovation services to transform your existing home"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Property Rezoning",
            "description": "Specialized rezoning services to unlock your property's full potential"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Land Subdivisions",
            "description": "Subdivision services to maximize the value and utility of your land"
          }
        }
      ]
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Maize Developments",
    "url": "https://maizedevelopments.com",
    "description": "Professional construction services in British Columbia - New builds, renovations, rezoning, and subdivisions",
    "publisher": {
      "@type": "Organization",
      "name": "Maize Developments"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://maizedevelopments.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Maize Developments",
    "description": "Professional construction company specializing in custom homes, renovations, rezoning, and subdivisions in British Columbia",
    "url": "https://maizedevelopments.com",
    "telephone": "+1-604-XXX-XXXX",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "British Columbia",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "49.2827",
      "longitude": "-123.1207"
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "$$",
    "areaServed": {
      "@type": "State",
      "name": "British Columbia"
    },
    "serviceArea": {
      "@type": "State",
      "name": "British Columbia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "New Build Construction",
            "description": "Custom home construction from blueprints to completion"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Home Renovation",
            "description": "Complete home renovation and remodeling services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Property Rezoning",
            "description": "Professional rezoning consultation and services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Land Subdivisions",
            "description": "Land subdivision and development services"
          }
        }
      ]
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://maizedevelopments.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://maizedevelopments.com/#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About",
        "item": "https://maizedevelopments.com/#about"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://maizedevelopments.com/#contact"
      }
    ]
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Maize Developments offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Maize Developments offers comprehensive construction services including new builds, home renovations, property rezoning, and land subdivisions in British Columbia."
        }
      },
      {
        "@type": "Question",
        "name": "Where does Maize Developments operate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We operate throughout British Columbia, Canada, providing construction and development services to residential and commercial clients."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a typical new build project take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "New build projects typically take 6-12 months depending on the size and complexity of the project. We provide detailed timelines during the planning phase."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide free consultations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer free initial consultations to discuss your project requirements and provide expert advice on the best approach for your construction needs."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Maize Developments different from other construction companies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in custom homes with exceptional craftsmanship, offer comprehensive services from blueprints to keys, and provide personalized attention throughout the entire construction process."
        }
      }
    ]
  };

  return {
    organization: organizationData,
    website: websiteData,
    localBusiness: localBusinessData,
    breadcrumb: breadcrumbData,
    faq: faqData
  };
};
