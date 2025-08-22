import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Moments Matter.</h1>
          <p className="hero-subtitle">
            Turn any sports clip into a spotlight highlight in seconds.
          </p>
          
          <div className="hero-cta">
            <a href="#upload" className="btn btn-primary">Upload Your Clip</a>
            <a href="#examples" className="btn btn-secondary">See Examples</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
