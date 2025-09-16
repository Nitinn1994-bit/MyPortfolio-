import React, { useEffect } from 'react'
import SEO from './components/SEO'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    // Enable smooth scrolling site-wide
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="min-h-screen bg-dark-bg">
      <SEO
        title="Nitin Narayanaswamy | FP&A, Financial Modeling & Analytics"
        description="Finance professional specializing in FP&A, financial reporting, and data-driven modeling."
        image="/Portfolio-picture.jpeg"                           // must be in /public
        url="https://Nitinn1994-bit.github.io/portfolio/"        // update if your live URL changes
        type="website"
        twitterHandle=""                                         // add your @handle if you have one
      />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
