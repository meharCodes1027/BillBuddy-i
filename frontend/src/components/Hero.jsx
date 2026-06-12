import React from 'react'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import WordsPullUp from './WordsPullUp'

export default function Hero() {
  const navItems = ["Protection", "Autonomy", "For Parents", "Security", "Inquiries"]

  return (
    <section className="h-screen w-full p-4 md:p-6 bg-black flex flex-col relative z-20">
      {/* Inner Rounded Container */}
      <div className="w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden relative bg-neutral-900">
        
        {/* Background Video */}
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full absolute inset-0 z-0 select-none pointer-events-none"
        />

        {/* Noise Overlay */}
        <div className="noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none absolute inset-0 z-10" />

        {/* Gradient Overlay */}
        <div className="bg-gradient-to-b from-black/30 via-transparent to-black/60 absolute inset-0 z-10 pointer-events-none" />

        {/* Navbar - Absolutely Positioned at Top Center */}
        <div className="absolute top-0 left-0 right-0 z-30 flex justify-center">
          <nav className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2.5 md:px-8 flex items-center justify-center gap-3 sm:gap-6 md:gap-12 lg:gap-14 border-x border-b border-white/[0.03]">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-[10px] sm:text-xs md:text-sm font-medium tracking-wide transition-colors duration-200"
                style={{ 
                  color: 'rgba(225, 224, 204, 0.8)',
                  textUnderlineOffset: '4px'
                }}
                onMouseEnter={(e) => e.target.style.color = '#E1E0CC'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(225, 224, 204, 0.8)'}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Hero Content - Bottom Aligned */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12 lg:p-16 z-20 flex flex-col justify-end">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end w-full">
            
            {/* Left Column: Giant Title "BillBuddy*" (8 cols) */}
            <div className="col-span-1 lg:col-span-8 flex flex-col">
              <h1 
                className="font-medium leading-[0.85] tracking-[-0.07em] select-none text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
                style={{ color: '#E1E0CC' }}
              >
                <WordsPullUp text="BillBuddy" showAsterisk={true} />
              </h1>
            </div>

            {/* Right Column: Description + Button (4 cols) */}
            <div className="col-span-1 lg:col-span-4 flex flex-col items-start gap-6 lg:gap-8 pb-3 md:pb-5 max-w-md lg:max-w-none">
              
              {/* Description */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="text-xs sm:text-sm md:text-base leading-[1.2]"
                style={{ 
                  color: 'rgba(225, 224, 204, 0.7)',
                  lineHeight: '1.2' 
                }}
              >
                BillBuddy is a silent, autonomous shield for senior utility bills. We monitor, verify, and protect parent accounts against unexpected charges, shutoffs, and fraud, securing their peace of mind.
              </motion.p>

              {/* CTA Button */}
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="group flex items-center gap-2 bg-primary text-black rounded-full pl-5 pr-1.5 py-1.5 font-medium text-xs sm:text-sm md:text-base transition-all duration-300 hover:gap-3 w-fit"
              >
                <span>Secure account</span>
                <div className="bg-black rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </motion.button>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  )
}
