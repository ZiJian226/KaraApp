'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-accent">
              KaraApp
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/queue" className="text-white hover:text-accent px-3 py-2 rounded-md">
              Queue
            </Link>
            <Link href="/submit" className="text-white hover:text-accent px-3 py-2 rounded-md">
              Submit Song
            </Link>
            <Link href="/history" className="text-white hover:text-accent px-3 py-2 rounded-md">
              History
            </Link>
            <Link href="/admin" className="text-white hover:text-accent px-3 py-2 rounded-md">
              Admin
            </Link>
            <div className="relative group">
              <button className="text-white hover:text-accent px-3 py-2 rounded-md">
                More
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-primary rounded-md shadow-lg py-1 hidden group-hover:block z-50">
                <Link href="/rules" className="block px-4 py-2 text-white hover:bg-secondary">
                  Rules
                </Link>
                <Link href="/faq" className="block px-4 py-2 text-white hover:bg-secondary">
                  FAQ
                </Link>
                <Link href="/about" className="block px-4 py-2 text-white hover:bg-secondary">
                  About
                </Link>
                <Link href="/contact" className="block px-4 py-2 text-white hover:bg-secondary">
                  Contact
                </Link>
                <Link href="/privacy" className="block px-4 py-2 text-white hover:bg-secondary">
                  Privacy
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/queue" className="block text-white hover:text-accent px-3 py-2 rounded-md">
              Queue
            </Link>
            <Link href="/submit" className="block text-white hover:text-accent px-3 py-2 rounded-md">
              Submit Song
            </Link>
            <Link href="/history" className="block text-white hover:text-accent px-3 py-2 rounded-md">
              History
            </Link>
            <Link href="/admin" className="block text-white hover:text-accent px-3 py-2 rounded-md">
              Admin
            </Link>
            <Link href="/rules" className="block text-white hover:text-accent px-3 py-2 rounded-md">
              Rules
            </Link>
            <Link href="/faq" className="block text-white hover:text-accent px-3 py-2 rounded-md">
              FAQ
            </Link>
            <Link href="/about" className="block text-white hover:text-accent px-3 py-2 rounded-md">
              About
            </Link>
            <Link href="/contact" className="block text-white hover:text-accent px-3 py-2 rounded-md">
              Contact
            </Link>
            <Link href="/privacy" className="block text-white hover:text-accent px-3 py-2 rounded-md">
              Privacy
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
