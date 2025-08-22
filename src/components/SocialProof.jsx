import React from 'react'
import './SocialProof.css'

const SocialProof = () => {
  const placeholders = Array(6).fill(null)

  return (
    <section className="social-proof section">
      <div className="container">
        <div className="social-proof-content">
          <div className="athlete-silhouette">
          </div>
          
          <div className="social-proof-text">
            <h2 className="section-title">Athletes everywhere are sharing their Klutch Moments</h2>
            <p className="social-platforms">on TikTok, IG, and Hudl.</p>
          </div>
        </div>
        
        <div className="coming-soon">
          <h3 className="coming-soon-title">Coming Soon</h3>
          <div className="showcase-grid">
            {placeholders.map((_, index) => (
              <div key={index} className="showcase-placeholder">
                <div className="placeholder-content">
                  <div className="placeholder-icon">📱</div>
                  <p>Highlight Reel</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
