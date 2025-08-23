import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  // To enable video background, set useVideo to true and provide a video source
  // Example: <HeroSection useVideo={true} videoSrc="/videos/hero-background.mp4" />
  
  return (
    <div id="home">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
