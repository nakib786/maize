'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="#home" className="flex items-center space-x-3 header-logo" onClick={closeMenu}>
              <div className="relative w-10 h-10">
                <Image
                  src="/images/Maize Logo.svg"
                  alt="Maize Developments Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-white logo-text">Maize Developments</span>
            </Link>

            {/* Desktop Navigation */}
            <nav>
              <ul className="flex space-x-8">
                <li>
                  <Link href="#home" className="text-white hover:text-green-400 transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-white hover:text-green-400 transition-colors duration-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-white hover:text-green-400 transition-colors duration-300">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.instagram.com/maizedevelopments" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-500 hover:via-purple-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/maizehomes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="flex items-center justify-between p-4">
          {/* Logo */}
          <Link href="#home" className="flex items-center space-x-3" onClick={closeMenu}>
            <div className="relative w-12 h-12">
              <Image
                src="/images/Maize Logo.svg"
                alt="Maize Developments Logo"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold text-white">Maize Developments</span>
          </Link>

          {/* Modern Hamburger Menu Button */}
          <button
            className="relative w-8 h-8 flex flex-col justify-center items-center group"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {/* Hamburger Lines */}
            <span 
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                isMenuOpen 
                  ? 'rotate-45 translate-y-1.5' 
                  : 'group-hover:bg-green-400'
              }`}
            />
            <span 
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out mt-1.5 ${
                isMenuOpen 
                  ? 'opacity-0' 
                  : 'group-hover:bg-green-400'
              }`}
            />
            <span 
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out mt-1.5 ${
                isMenuOpen 
                  ? '-rotate-45 -translate-y-1.5' 
                  : 'group-hover:bg-green-400'
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={closeMenu}
        >
          {/* Mobile Menu Content */}
          <div 
            className={`absolute top-0 right-0 w-80 h-full bg-gray-900/95 backdrop-blur-sm border-l border-gray-700 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h2 className="text-xl font-bold text-white">Menu</h2>
              <button
                className="text-white hover:text-green-400 transition-colors duration-300"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-6">
              <ul className="space-y-6">
                <li>
                  <Link 
                    href="#home" 
                    className="flex items-center text-white hover:text-green-400 transition-colors duration-300 text-lg font-medium group"
                    onClick={closeMenu}
                  >
                    <span className="mr-3 text-green-400 group-hover:scale-110 transition-transform duration-300">01</span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#about" 
                    className="flex items-center text-white hover:text-green-400 transition-colors duration-300 text-lg font-medium group"
                    onClick={closeMenu}
                  >
                    <span className="mr-3 text-green-400 group-hover:scale-110 transition-transform duration-300">02</span>
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#contact" 
                    className="flex items-center text-white hover:text-green-400 transition-colors duration-300 text-lg font-medium group"
                    onClick={closeMenu}
                  >
                    <span className="mr-3 text-green-400 group-hover:scale-110 transition-transform duration-300">03</span>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Social Links */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-white/70 text-sm font-medium mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/maizedevelopments" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-500 hover:via-purple-500 hover:to-orange-500 transition-all duration-300 group transform hover:scale-110"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.facebook.com/maizehomes" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 transition-all duration-300 group transform hover:scale-110"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}