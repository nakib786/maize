"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Local interior design images
const interiorDesignImages = [
  "/images/carousel/interior-template.jpg",
  "/images/carousel/3d-rendering-interior-design-minimal-concept.jpg",
  "/images/carousel/3d-modern-lamp-design.jpg",
  "/images/carousel/minimalist-bathroom.jpg",
  "/images/carousel/modern-living-room.jpg",
  "/images/carousel/contemporary-kitchen.jpg",
  "/images/carousel/luxury-bedroom.jpg",
  "/images/carousel/scandinavian-interior.jpg",
  "/images/carousel/industrial-loft.jpg",
  "/images/carousel/elegant-office.jpg",
]

function ModernSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(new Array(interiorDesignImages.length).fill(false))

  // Preload images
  useEffect(() => {
    interiorDesignImages.forEach((src, index) => {
      const img = new Image()
      img.onload = () => {
        setImagesLoaded(prev => {
          const newState = [...prev]
          newState[index] = true
          return newState
        })
      }
      img.src = src
    })
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % interiorDesignImages.length)
    }, 5000) // Change slide every 5 seconds for smoother experience

    return () => clearInterval(interval)
  }, [isAutoPlaying, interiorDesignImages.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % interiorDesignImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? interiorDesignImages.length - 1 : prev - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main Slider */}
      <div className="relative h-[600px] md:h-[700px] overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={interiorDesignImages[currentIndex]}
              alt={`Interior design ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Counter */}
        <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
          {currentIndex + 1} / {interiorDesignImages.length}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
        >
          {isAutoPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>

             {/* Thumbnail Navigation */}
       <div className="mt-6 flex justify-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {interiorDesignImages.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
              index === currentIndex
                ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-900"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-4 w-full bg-gray-200 rounded-full h-1">
        <motion.div
          className="bg-blue-500 h-1 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / interiorDesignImages.length) * 100}%` }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </div>
    </div>
  )
}

export { ModernSlider as ThreeDPhotoCarousel }
