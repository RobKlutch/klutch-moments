import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import HowItWorks from './components/HowItWorks'
import ShowcaseCarousel from './components/ShowcaseCarousel'
import PricingPlans from './components/PricingPlans'
import SocialProof from './components/SocialProof'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <HowItWorks />
      <ShowcaseCarousel />
      <PricingPlans />
      <SocialProof />
      <Footer />
    </div>
  )
}

export default App
