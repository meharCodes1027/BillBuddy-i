import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

function AnimatedLetter({ char, index, totalChars, scrollYProgress }) {
  const charProgress = index / totalChars
  const start = Math.max(0, charProgress - 0.1)
  const end = Math.max(start + 0.01, Math.min(1, charProgress + 0.05))

  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])

  return (
    <motion.span style={{ opacity }} className="inline">
      {char}
    </motion.span>
  )
}

export default function About() {
  const paragraphRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ['start 0.8', 'end 0.2']
  })

  const headingSegments = [
    { text: "I am BillBuddy, ", className: "font-normal text-[#E1E0CC]" },
    { text: "your autonomous guardian. ", className: "italic font-serif text-[#E1E0CC]" },
    { text: "I protect senior citizens from predatory billing, hidden fees, and utility scams.", className: "font-normal text-[#E1E0CC]" }
  ]

  const bodyText = "Over the last seven years, we have protected thousands of families from unexpected billing disasters, working alongside utility providers, banks, and senior advocacy networks. Together, we have built a shield that guarantees continuous service and financial safety."
  const characters = bodyText.split("")

  return (
    <section className="bg-black py-20 sm:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto bg-[#101010] rounded-2xl md:rounded-[2.5rem] py-16 px-6 sm:px-12 md:py-24 md:px-20 text-center relative overflow-hidden border border-white/[0.03]">
        {/* Decorative corner highlights */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-tl-[2.5rem] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/5 to-transparent rounded-br-[2.5rem] pointer-events-none" />
        
        {/* Label */}
        <span className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium mb-6 md:mb-8 block">
          Autonomous protection
        </span>

        {/* Heading */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[1.05] sm:leading-[0.95] tracking-tight mb-10 md:mb-14">
          <WordsPullUpMultiStyle segments={headingSegments} />
        </div>

        {/* Scroll-Linked Reveal Body Paragraph */}
        <div 
          ref={paragraphRef} 
          className="text-[#DEDBC8] text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-[1.6] sm:leading-[1.7]"
        >
          {characters.map((char, index) => (
            <AnimatedLetter 
              key={index} 
              char={char} 
              index={index} 
              totalChars={characters.length} 
              scrollYProgress={scrollYProgress} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}
