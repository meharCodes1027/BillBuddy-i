import React, { useRef, useState } from 'react'
import { motion, useSpring, useMotionValue, useTransform } from 'motion/react'
import { Shield } from 'lucide-react'

export default function CreditCard3D() {
  const cardRef = useRef(null)
  
  // Motion values for 3D tilt
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring settings for smooth movement
  const springConfig = { damping: 25, elasticity: 0.5, mass: 0.5 }
  const rotateX = useSpring(useTransform(y, [-100, 100], [15, -15]), springConfig)
  const rotateY = useSpring(useTransform(x, [-150, 150], [-15, 15]), springConfig)

  // Motion values for glare effect
  const glareX = useMotionValue(50)
  const glareY = useMotionValue(50)
  const glareOpacity = useSpring(0, springConfig)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left - width / 2
    const mouseY = e.clientY - rect.top - height / 2

    x.set(mouseX)
    y.set(mouseY)

    // Calculate glare percentage position
    const px = ((e.clientX - rect.left) / width) * 100
    const py = ((e.clientY - rect.top) / height) * 100
    glareX.set(px)
    glareY.set(py)
    glareOpacity.set(0.6)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    glareOpacity.set(0)
  }

  return (
    <div className="w-full flex justify-center py-4 z-20">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          perspective: 1000
        }}
        className="w-full max-w-[340px] h-[200px] rounded-[1.25rem] p-6 relative overflow-hidden flex flex-col justify-between shadow-2xl cursor-pointer liquid-glass transition-shadow duration-300 hover:shadow-white/[0.03]"
      >
        
        {/* Dynamic Glare Overlay */}
        <motion.div
          style={{
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) => `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.12) 0%, transparent 60%)`
            ),
            opacity: glareOpacity
          }}
          className="absolute inset-0 pointer-events-none z-10"
        />

        {/* Card Content (Uses transformZ for 3D depth) */}
        <div style={{ transform: 'translateZ(40px)' }} className="flex justify-between items-start z-10">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-white shrink-0">
              <Shield className="w-3.5 h-3.5 fill-white/80" strokeWidth={2} />
            </div>
            <span className="text-[10px] font-semibold tracking-widest text-white/60 uppercase font-body">MANDATE SECURE</span>
          </div>
          {/* Holographic Chip */}
          <div className="w-9 h-7 bg-white/10 rounded-lg border border-white/20 relative overflow-hidden flex items-center justify-center">
            <div className="absolute w-[80%] h-[1px] bg-white/20 top-[30%]" />
            <div className="absolute w-[80%] h-[1px] bg-white/20 top-[70%]" />
            <div className="absolute h-[80%] w-[1px] bg-white/20 left-[30%]" />
            <div className="absolute h-[80%] w-[1px] bg-white/20 left-[70%]" />
          </div>
        </div>

        <div style={{ transform: 'translateZ(20px)' }} className="z-10">
          <p className="text-lg font-mono font-light tracking-[0.2em] text-white/90">4591 2026 **** ****</p>
        </div>

        <div style={{ transform: 'translateZ(30px)' }} className="flex justify-between items-end z-10">
          <div>
            <p className="text-[8px] text-white/40 uppercase tracking-wider font-body">Authorized Cap</p>
            <p className="text-base font-semibold text-white font-body">₹5,000 / month</p>
          </div>
          <div className="text-right">
            <span className="text-[8px] font-bold text-[#22C55E] uppercase tracking-wider flex items-center space-x-1 justify-end font-body">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              <span>ACTIVE</span>
            </span>
          </div>
        </div>

      </motion.div>
    </div>
  )
}
