import React, { useRef } from 'react'
import { motion, useInView } from 'motion/react'

export default function WordsPullUpMultiStyle({ segments, className = "", delayOffset = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Flatten segments into an array of individual word objects, keeping track of their class names
  const allWords = segments.flatMap((segment) => {
    // Split by space, keeping spaces in mind
    const words = segment.text.split(" ")
    return words.map((word) => ({
      word,
      className: segment.className || ""
    }))
  })

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
      className={`inline-flex flex-wrap justify-center ${className}`}
    >
      {allWords.map((item, index) => {
        // If it's a completely empty string (e.g. from extra spaces), render a space or skip
        if (item.word === "") {
          return <span key={index} className="inline-block mr-[0.25em]">&nbsp;</span>
        }
        return (
          <motion.span
            key={index}
            variants={wordVariants}
            className={`inline-block mr-[0.25em] ${item.className}`}
          >
            {item.word}
          </motion.span>
        )
      })}
    </motion.span>
  )
}
