import React from 'react'
import { Upload, MousePointer, Zap } from 'lucide-react'
import './HowItWorks.css'

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload size={48} />,
      title: "Upload Video",
      description: "Upload your sports clip in any format",
      thumbnail: "https://via.placeholder.com/200x200/333333/ffffff?text=Upload"
    },
    {
      icon: <MousePointer size={48} />,
      title: "Select Player",
      description: "Click on the player you want to highlight",
      thumbnail: "https://via.placeholder.com/200x200/333333/ffffff?text=Select"
    },
    {
      icon: <Zap size={48} />,
      title: "Get Highlight",
      description: "Download your spotlight highlight video",
      thumbnail: "https://via.placeholder.com/200x200/333333/ffffff?text=Highlight"
    }
  ]

  return (
    <section className="how-it-works section">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        
        <div className="steps-grid grid grid-3">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-icon">
                {step.icon}
              </div>
              <h3 className="step-title">Step {index + 1}: {step.title}</h3>
              <div className="step-thumbnail">
                <img src={step.thumbnail} alt={step.title} />
              </div>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="how-it-works-cta">
          <a href="#try-free" className="btn btn-primary">Try It Free</a>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
