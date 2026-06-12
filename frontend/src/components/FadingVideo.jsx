import React, { useRef, useEffect } from 'react'

export default function FadingVideo({ src, className, style }) {
  const videoRef = useRef(null)
  const rafIdRef = useRef(null)
  const fadingOutRef = useRef(false)

  const fadeTo = (target, duration) => {
    const video = videoRef.current
    if (!video) return

    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current)
    }

    const startOpacity = parseFloat(video.style.opacity) || 0
    const change = target - startOpacity
    const startTime = performance.now()

    const animate = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const currentOpacity = startOpacity + change * progress
      video.style.opacity = currentOpacity

      if (progress < 1) {
        rafIdRef.current = requestAnimationFrame(animate)
      }
    }

    rafIdRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.style.opacity = '0'

    const handleLoadedData = () => {
      video.style.opacity = '0'
      video.play().catch(() => {})
      fadeTo(1, 500)
    }

    const handleTimeUpdate = () => {
      if (!fadingOutRef.current && video.duration && video.duration - video.currentTime <= 0.55 && video.duration - video.currentTime > 0) {
        fadingOutRef.current = true
        fadeTo(0, 500)
      }
    }

    const handleEnded = () => {
      video.style.opacity = '0'
      setTimeout(() => {
        if (!video) return
        video.currentTime = 0
        video.play().catch(() => {})
        fadingOutRef.current = false
        fadeTo(1, 500)
      }, 100)
    }

    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('ended', handleEnded)

    if (video.readyState >= 2) {
      handleLoadedData()
    }

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
      }
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('ended', handleEnded)
    }
  }, [src])

  return (
    <video
      ref={videoRef}
      muted
      playsInline
      preload="auto"
      className={className}
      style={{ ...style, transition: 'none' }} // Avoid CSS transitions on opacity
      src={src}
    />
  )
}
