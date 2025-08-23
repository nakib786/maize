'use client'

import Link from 'next/link'

export default function HeroSection() {

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gray-900">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/hero video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero Content - Responsive for all screen sizes */}
      <div className="relative z-20 h-full flex flex-col justify-center pt-20">
        <div className="container mx-auto px-4">
          {/* Main Hero Title - Centered */}
          <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
            <h1 className="hero-main-title mb-4 md:mb-6">
              <span className="text-white">FROM</span> <span className="hero-accent-text">BLUEPRINTS</span> <span className="text-white">TO</span> <span className="hero-accent-text">KEYS</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-up animation-delay-200 px-4">
              Building dreams, one project at a time
            </p>
          </div>

          {/* Content Grid - Better Spacing for all screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl mx-auto">
            {/* Left Content - Welcome Message */}
            <div className="text-white space-y-4 md:space-y-6 animate-fade-in-up animation-delay-300">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 shadow-2xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 hero-subtitle">
                  Welcome to Maize Developments
                </h2>
                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                  Your trusted partner in creating exceptional custom homes across British Columbia.
                </p>
              </div>
            </div>

            {/* Right Content - Description & CTA */}
            <div className="text-white space-y-6 md:space-y-8 animate-fade-in-up animation-delay-400">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 shadow-2xl">
                <p className="text-base md:text-lg leading-relaxed hero-description mb-6">
                  At Maize Developments in British Columbia, we specialize in custom homes and offer 
                  comprehensive services from blueprints to framing. Our craftsmanship transforms 
                  your home into a place for lasting memories. Whether building your dream home 
                  or providing expert advice, we&apos;re here to help every step of the way.
                </p>
                
                <div className="flex justify-center lg:justify-start">
                  <Link 
                    href="#about" 
                    className="discover-more-button group"
                  >
                    <span>Discover More</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Simple CTA Section */}
          <div className="mt-8 md:mt-10 text-center animate-fade-in-up animation-delay-500 px-4">
            <Link 
              href="#contact" 
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Start Your Project</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Desktop only */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="hero-scroll-indicator">
          <div className="hero-scroll-arrow"></div>
        </div>
      </div>
    </section>
  )
}