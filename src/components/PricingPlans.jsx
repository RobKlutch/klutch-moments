import React from 'react'
import './PricingPlans.css'

const PricingPlans = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      highlights: "1 Highlight Video",
      features: [],
      popular: false
    },
    {
      name: "Single Video",
      price: "$6.99",
      highlights: "1 Highlight Video",
      features: [],
      popular: false
    },
    {
      name: "5 Videos",
      price: "$24.99",
      highlights: "5 Highlight Videos",
      features: [],
      popular: false
    },
    {
      name: "15 Videos",
      price: "$59.99",
      highlights: "15 Highlight Videos",
      features: [],
      popular: true
    }
  ]

  return (
    <section className="pricing section">
      <div className="container">
        <h2 className="section-title">Choose Your Plan</h2>
        
        <div className="pricing-grid grid grid-4">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">{plan.price}</div>
                <p className="plan-highlights">{plan.highlights}</p>
              </div>
              
              <div className="plan-features">
                <ul>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="plan-cta">
                <a href="#get-started" className="btn btn-primary">Get Started</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingPlans
