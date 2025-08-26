'use client'

import { SEOService, SEOHeading, SEOImage, SEOLink } from './SEOHead'

interface ServiceData {
  id: number
  title: string
  description: string
  image: string
  imageAlt: string
  features: string[]
  benefits: string[]
  process: string[]
  pricing: string
  duration: string
  area: string
}

interface AIFriendlyContentProps {
  services: ServiceData[]
}

export default function AIFriendlyContent({ services }: AIFriendlyContentProps) {
  return (
    <div className="hidden" aria-hidden="true">
      {/* AI-friendly structured content for better crawling */}
      <div itemScope itemType="https://schema.org/Organization">
        <h1 itemProp="name">Maize Developments</h1>
        <p itemProp="description">
          Professional construction company specializing in custom homes, renovations, rezoning, and subdivisions in British Columbia, Canada. 
          We provide comprehensive construction services from initial planning to final completion.
        </p>
        
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="addressRegion">British Columbia</span>
          <span itemProp="addressCountry">Canada</span>
        </div>
        
        <div itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
          <span itemProp="contactType">customer service</span>
          <span itemProp="availableLanguage">English</span>
        </div>
        
        <div itemProp="areaServed" itemScope itemType="https://schema.org/State">
          <span itemProp="name">British Columbia</span>
        </div>
      </div>

      {/* Services with detailed structured data */}
      <div itemScope itemType="https://schema.org/ItemList">
        <h2 itemProp="name">Construction Services</h2>
        <meta itemProp="numberOfItems" content={services.length.toString()} />
        
        {services.map((service, index) => (
          <SEOService key={service.id} className="service-item">
            <SEOHeading level={3} itemProp="name">{service.title}</SEOHeading>
            <p itemProp="description">{service.description}</p>
            
            <SEOImage 
              src={service.image} 
              alt={service.imageAlt}
              itemProp="image"
            />
            
            <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
              <meta itemProp="price" content={service.pricing} />
              <meta itemProp="priceCurrency" content="CAD" />
              <span itemProp="availability" itemScope itemType="https://schema.org/ItemAvailability">
                <meta itemProp="name" content="InStock" />
              </span>
            </div>
            
            <div itemProp="serviceType">{service.title}</div>
            <meta itemProp="areaServed" content={service.area} />
            <meta itemProp="timeRequired" content={service.duration} />
            
            {/* Service features */}
            <div itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog">
              <h4>Features:</h4>
              <ul>
                {service.features.map((feature, idx) => (
                  <li key={idx} itemProp="description">{feature}</li>
                ))}
              </ul>
            </div>
            
            {/* Service benefits */}
            <div>
              <h4>Benefits:</h4>
              <ul>
                {service.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>
            
            {/* Service process */}
            <div>
              <h4>Process:</h4>
              <ol>
                {service.process.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
            
            <meta itemProp="position" content={(index + 1).toString()} />
          </SEOService>
        ))}
      </div>

      {/* FAQ Section for AI models */}
      <div itemScope itemType="https://schema.org/FAQPage">
        <h2>Frequently Asked Questions</h2>
        
        <div itemScope itemType="https://schema.org/Question">
          <h3 itemProp="name">What services does Maize Developments offer?</h3>
          <div itemScope itemType="https://schema.org/Answer">
            <div itemProp="text">
              Maize Developments offers comprehensive construction services including new builds, home renovations, property rezoning, and land subdivisions in British Columbia, Canada.
            </div>
          </div>
        </div>
        
        <div itemScope itemType="https://schema.org/Question">
          <h3 itemProp="name">Where does Maize Developments operate?</h3>
          <div itemScope itemType="https://schema.org/Answer">
            <div itemProp="text">
              We operate throughout British Columbia, Canada, providing construction and development services to residential and commercial clients.
            </div>
          </div>
        </div>
        
        <div itemScope itemType="https://schema.org/Question">
          <h3 itemProp="name">How long does a typical new build project take?</h3>
          <div itemScope itemType="https://schema.org/Answer">
            <div itemProp="text">
              New build projects typically take 6-12 months depending on the size and complexity of the project. We provide detailed timelines during the planning phase.
            </div>
          </div>
        </div>
        
        <div itemScope itemType="https://schema.org/Question">
          <h3 itemProp="name">Do you provide free consultations?</h3>
          <div itemScope itemType="https://schema.org/Answer">
            <div itemProp="text">
              Yes, we offer free initial consultations to discuss your project requirements and provide expert advice on the best approach for your construction needs.
            </div>
          </div>
        </div>
        
        <div itemScope itemType="https://schema.org/Question">
          <h3 itemProp="name">What makes Maize Developments different from other construction companies?</h3>
          <div itemScope itemType="https://schema.org/Answer">
            <div itemProp="text">
              We specialize in custom homes with exceptional craftsmanship, offer comprehensive services from blueprints to keys, and provide personalized attention throughout the entire construction process.
            </div>
          </div>
        </div>
      </div>

      {/* Business information for AI models */}
      <div itemScope itemType="https://schema.org/LocalBusiness">
        <h2 itemProp="name">Maize Developments</h2>
        <p itemProp="description">
          Professional construction company specializing in custom homes, renovations, rezoning, and subdivisions in British Columbia.
        </p>
        
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="addressRegion">British Columbia</span>
          <span itemProp="addressCountry">Canada</span>
        </div>
        
        <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
          <meta itemProp="latitude" content="49.2827" />
          <meta itemProp="longitude" content="-123.1207" />
        </div>
        
        <div itemProp="openingHours" content="Mo-Fr 08:00-18:00" />
        <div itemProp="priceRange" content="$$" />
        
        <div itemProp="areaServed" itemScope itemType="https://schema.org/State">
          <span itemProp="name">British Columbia</span>
        </div>
      </div>
    </div>
  )
}
