import React, { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Check, ArrowRight } from 'lucide-react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

export default function Features() {
  const gridRef = useRef(null)
  const isGridInView = useInView(gridRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const firstLineSegment = [
    { text: "Autonomous utility protection for parents.", className: "text-[#E1E0CC] font-normal" }
  ]

  const secondLineSegment = [
    { text: "Built for safety. Powered by trust.", className: "text-gray-500 font-normal" }
  ]

  return (
    <section className="min-h-screen bg-black relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Noise background overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col justify-center h-full">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 space-y-2 md:space-y-4">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight">
            <WordsPullUpMultiStyle segments={firstLineSegment} />
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight">
            <WordsPullUpMultiStyle segments={secondLineSegment} />
          </div>
        </div>

        {/* 4-column Grid */}
        <motion.div 
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={isGridInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-3 md:gap-2 lg:h-[480px] w-full"
        >
          {/* Card 1: Video Card */}
          <motion.div 
            variants={cardVariants}
            className="relative overflow-hidden rounded-2xl md:rounded-3xl h-[350px] md:h-[400px] lg:h-full group border border-white/[0.03]"
          >
            <video 
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
              autoPlay 
              loop 
              muted 
              playsInline 
              className="object-cover w-full h-full absolute inset-0 z-0 select-none pointer-events-none"
            />
            {/* Dark vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 z-10 pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 z-20">
              <p className="text-[#E1E0CC] font-medium text-lg sm:text-xl tracking-tight">
                Your parents' shield.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Autonomous Defense */}
          <motion.div 
            variants={cardVariants}
            className="bg-[#212121] rounded-2xl md:rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-[350px] md:h-[400px] lg:h-full border border-white/[0.03]"
          >
            <div>
              {/* Icon */}
              <div className="mb-6">
                <img 
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85" 
                  alt="Storyboard Icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover select-none"
                />
              </div>
              
              {/* Title & Number */}
              <div className="flex justify-between items-start">
                <h3 className="text-[#E1E0CC] font-medium text-lg md:text-xl tracking-tight">Autonomous Defense.</h3>
                <span className="text-gray-500 font-mono text-xs mt-1">(01)</span>
              </div>

              {/* Checklist */}
              <ul className="mt-6 space-y-3.5">
                {[
                  "Real-time utility bill anomaly audits",
                  "Automated micro-payment verification",
                  "Direct service provider validation",
                  "Scam and utility fraud blocking"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-xs sm:text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learn More Button */}
            <div className="mt-6 flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors text-xs sm:text-sm font-medium cursor-pointer group/link w-fit">
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 -rotate-45 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </div>
          </motion.div>

          {/* Card 3: Guardian Alert */}
          <motion.div 
            variants={cardVariants}
            className="bg-[#212121] rounded-2xl md:rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-[350px] md:h-[400px] lg:h-full border border-white/[0.03]"
          >
            <div>
              {/* Icon */}
              <div className="mb-6">
                <img 
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85" 
                  alt="Critiques Icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover select-none"
                />
              </div>

              {/* Title & Number */}
              <div className="flex justify-between items-start">
                <h3 className="text-[#E1E0CC] font-medium text-lg md:text-xl tracking-tight">Guardian Alert.</h3>
                <span className="text-gray-500 font-mono text-xs mt-1">(02)</span>
              </div>

              {/* Checklist */}
              <ul className="mt-6 space-y-3.5">
                {[
                  "AI-driven bill spike detection",
                  "Dedicated family dashboard views",
                  "Instant SMS escalation warnings"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-xs sm:text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learn More Button */}
            <div className="mt-6 flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors text-xs sm:text-sm font-medium cursor-pointer group/link w-fit">
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 -rotate-45 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </div>
          </motion.div>

          {/* Card 4: Secure Custody */}
          <motion.div 
            variants={cardVariants}
            className="bg-[#212121] rounded-2xl md:rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-[350px] md:h-[400px] lg:h-full border border-white/[0.03]"
          >
            <div>
              {/* Icon */}
              <div className="mb-6">
                <img 
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85" 
                  alt="Capsule Icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover select-none"
                />
              </div>

              {/* Title & Number */}
              <div className="flex justify-between items-start">
                <h3 className="text-[#E1E0CC] font-medium text-lg md:text-xl tracking-tight">Secure Custody.</h3>
                <span className="text-gray-500 font-mono text-xs mt-1">(03)</span>
              </div>

              {/* Checklist */}
              <ul className="mt-6 space-y-3.5">
                {[
                  "End-to-end bank security links",
                  "Automated backup funding locks",
                  "Zero-knowledge encryption protocol"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-xs sm:text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learn More Button */}
            <div className="mt-6 flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors text-xs sm:text-sm font-medium cursor-pointer group/link w-fit">
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 -rotate-45 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
