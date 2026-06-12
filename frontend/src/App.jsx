import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-[#E1E0CC] antialiased selection:bg-primary selection:text-black relative overflow-x-hidden">
      <main>
        <Hero />
        <About />
        <Features />
      </main>
    </div>
  )
}
