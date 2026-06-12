import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'How It Works', href: '#how' },
    { label: 'Security', href: '#security' },
    { label: 'Pricing', href: '#pricing' }
  ]

  // ArrowUpRight SVG icon
  const ArrowUpRight = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
    </svg>
  )

  return (
    <>
      <nav className="fixed top-4 left-0 w-full z-50 px-8 lg:px-16 flex items-center justify-between">
        
        {/* Left: 48x48 liquid-glass circle with italic serif lowercase "b" */}
        <div className="w-12 h-12 rounded-full flex items-center justify-center liquid-glass font-heading italic text-2xl text-white select-none">
          b
        </div>

        {/* Center: liquid-glass pill with links (Desktop only) */}
        <div className="hidden md:flex items-center gap-1.5 liquid-glass rounded-full p-1.5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-xs font-medium text-white/90 font-body hover:text-white transition-colors tracking-wide lowercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#get-started"
            className="bg-white text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-white/90 transition-colors flex items-center gap-1 shrink-0 whitespace-nowrap ml-2"
          >
            <span>Protect Now</span>
            <ArrowUpRight />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden w-12 h-12 rounded-full items-center justify-center liquid-glass text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="flex flex-col space-y-1">
            <span className={`w-5 h-[1.5px] bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
            <span className={`w-5 h-[1.5px] bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-[1.5px] bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
          </div>
        </button>

        {/* Right: 48x48 invisible spacer */}
        <div className="w-12 h-12 opacity-0 pointer-events-none hidden md:block" />

      </nav>

      {/* Mobile Drawer (Slides down) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[4.5rem] left-8 right-8 z-40 liquid-glass rounded-2xl p-6 md:hidden flex flex-col items-center space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-started"
              onClick={() => setIsOpen(false)}
              className="w-full bg-white text-black text-xs font-semibold py-2.5 rounded-full hover:bg-white/90 transition-colors flex items-center justify-center gap-1"
            >
              <span>Protect Now</span>
              <ArrowUpRight />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
