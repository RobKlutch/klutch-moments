import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './ShowcaseCarousel.css'

const ShowcaseCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const demos = [
    {
      sport: "Soccer",
      thumbnail: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop&crop=center",
      caption: "Perfect goal spotlight"
    },
    {
      sport: "Basketball",
      thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop&crop=center",
      caption: "Game-winning shot"
    },
    {
      sport: "Hockey",
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
      caption: "Amazing save"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % demos.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + demos.length) % demos.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="showcase section">
      <div className="container">
        <h2 className="section-title">See It In Action</h2>
        
        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous slide">
            <ChevronLeft size={24} />
          </button>
          
          <div className="carousel-content">
            <div className="demo-video">
              <img src={demos[currentSlide].thumbnail} alt={demos[currentSlide].sport} />
              <div className="spotlight-overlay">
                <div className="spotlight-beam"></div>
              </div>
            </div>
            <div className="demo-caption">
              <h3>One Player. One Moment. Your Spotlight.</h3>
              <p>{demos[currentSlide].caption}</p>
            </div>
          </div>
          
          <button className="carousel-btn next" onClick={nextSlide} aria-label="Next slide">
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="carousel-indicators">
          {demos.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="showcase-cta">
          <a href="#more-highlights" className="btn btn-secondary">See More Highlights</a>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseCarousel
