import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img 
              src="/assets/logo.svg" 
              alt="Klutch Moments Logo" 
              className="logo-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <h2 className="logo-text" style={{display: 'none'}}>Klutch Moments</h2>
          </div>
=======
          <div className="header-cta">
            <a href="#login" className="login-link">Login</a>
            <a href="#start-free" className="btn btn-primary">Start Free</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
