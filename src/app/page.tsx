import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import AIFriendlyContent from '@/components/AIFriendlyContent'
import SEOAnalytics from '@/components/SEOAnalytics'

export default function Home() {
  // Enhanced service data for AI crawling
  const enhancedServices = [
    {
      id: 1,
      title: "New Build Construction",
      description: "Building your dream home from the ground up is our passion. Our new build services encompass everything from initial design and custom blueprints to construction and finishing touches. We work closely with you to understand your vision and bring it to life with exceptional craftsmanship and attention to detail. With Maize Developments, you can expect a seamless and enjoyable building experience, resulting in a home that perfectly reflects your style and needs.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
      imageAlt: "Residential New Build Construction in British Columbia",
      features: [
        "Custom home design and blueprints",
        "Site preparation and foundation work",
        "Framing and structural construction",
        "Electrical and plumbing installation",
        "Interior and exterior finishing",
        "Quality inspection and final walkthrough"
      ],
      benefits: [
        "Customized to your exact specifications",
        "High-quality materials and craftsmanship",
        "Energy-efficient construction methods",
        "Comprehensive warranty coverage",
        "Professional project management",
        "Timely completion within budget"
      ],
      process: [
        "Initial consultation and design phase",
        "Permit acquisition and site preparation",
        "Foundation and structural construction",
        "Mechanical systems installation",
        "Interior and exterior finishing",
        "Final inspection and handover"
      ],
      pricing: "Contact for quote",
      duration: "6-12 months",
      area: "British Columbia, Canada"
    },
    {
      id: 2,
      title: "Home Renovation",
      description: "Transform your existing home with our comprehensive renovation services. Whether you're looking to update a single room or undertake a complete home makeover, Maize Developments is here to help. Our team of skilled professionals will work with you to design and execute renovations that enhance the beauty, functionality, and value of your home. With a focus on quality and attention to detail, we ensure that your renovation project exceeds your expectations.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      imageAlt: "Home Renovation Services in British Columbia",
      features: [
        "Kitchen and bathroom renovations",
        "Basement finishing and development",
        "Room additions and extensions",
        "Exterior siding and roofing",
        "Interior remodeling and updates",
        "Accessibility modifications"
      ],
      benefits: [
        "Increased home value and equity",
        "Improved functionality and comfort",
        "Modern design and aesthetics",
        "Energy efficiency improvements",
        "Professional quality workmanship",
        "Minimal disruption to daily life"
      ],
      process: [
        "Assessment and planning consultation",
        "Design and material selection",
        "Permit acquisition if required",
        "Construction and renovation work",
        "Quality control and finishing",
        "Final inspection and completion"
      ],
      pricing: "Contact for quote",
      duration: "2-8 weeks",
      area: "British Columbia, Canada"
    },
    {
      id: 3,
      title: "Property Rezoning",
      description: "At Maize Developments, we specialize in rezoning properties to unlock their full potential. Whether you're looking to change the zoning designation to accommodate a new type of development or increase the value of your property, our team of experts will guide you through the process. We handle all aspects of rezoning, including planning, applications, and negotiations with local authorities, ensuring a smooth and successful transition.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      imageAlt: "Property Rezoning Services in British Columbia",
      features: [
        "Zoning analysis and assessment",
        "Application preparation and submission",
        "Municipal consultation and negotiation",
        "Public hearing representation",
        "Legal documentation support",
        "Follow-up and compliance monitoring"
      ],
      benefits: [
        "Increased property value potential",
        "Expanded development opportunities",
        "Professional guidance throughout process",
        "Reduced risk and uncertainty",
        "Time and cost efficiency",
        "Compliance with local regulations"
      ],
      process: [
        "Initial property assessment",
        "Zoning analysis and strategy development",
        "Application preparation and submission",
        "Municipal consultation and public hearings",
        "Approval and documentation",
        "Implementation and compliance"
      ],
      pricing: "Contact for quote",
      duration: "3-12 months",
      area: "British Columbia, Canada"
    },
    {
      id: 4,
      title: "Land Subdivisions",
      description: "Our subdivision services are designed to help you maximize the value and utility of your land. Whether you're looking to divide a large property into smaller lots for development or create a new residential community, we have the expertise to manage the entire process. From planning and surveying to obtaining necessary approvals and overseeing construction, Maize Developments ensures that your subdivision project is executed efficiently and effectively.",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
      imageAlt: "Land Subdivision Services in British Columbia",
      features: [
        "Land surveying and assessment",
        "Subdivision planning and design",
        "Municipal approval processes",
        "Infrastructure planning and development",
        "Lot creation and preparation",
        "Legal documentation and registration"
      ],
      benefits: [
        "Maximized land value and returns",
        "Increased development potential",
        "Professional project management",
        "Compliance with regulations",
        "Efficient approval processes",
        "Long-term investment value"
      ],
      process: [
        "Site assessment and feasibility study",
        "Subdivision planning and design",
        "Municipal application and approval",
        "Infrastructure development",
        "Lot creation and preparation",
        "Final registration and handover"
      ],
      pricing: "Contact for quote",
      duration: "6-18 months",
      area: "British Columbia, Canada"
    }
  ];
  
  return (
    <div id="home">
      <SEOAnalytics 
        pageTitle="Maize Developments - Professional Construction Services in British Columbia"
        pageUrl="https://maizedevelopments.com"
        contentType="construction-services"
        businessType="construction-company"
      />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
        {/* Hidden AI-friendly content for better crawling */}
        <AIFriendlyContent services={enhancedServices} />
      </main>
      <Footer />
    </div>
  )
}
