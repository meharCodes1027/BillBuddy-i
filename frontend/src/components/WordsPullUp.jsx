import React, { useRef } from 'react'
import { motion, useInView } from 'motion/react'

export default function WordsPullUp({ text, showAsterisk = false, className = "", delayOffset = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const words = text.split(" ")

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: delayOffset
      }
    }
  }

  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <motion.span
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, index) => {
        const isLastWord = index === words.length - 1
        return (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block relative mr-[0.25em]"
          >
            {isLastWord && showAsterisk ? (
              <span className="relative inline-block">
                {word}
                <span 
                  className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] select-none"
                  style={{ color: '#E1E0CC' }}
                >
                  *
                </span>
              </span>
            ) : (
              word
            )}
          </motion.span>
        )
      })}
    </motion.span>
  )
}
