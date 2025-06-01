import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import jungleBg from '../assets/Background3.svg';
import leftImage from '../assets/left.png';
import rightImage from '../assets/Right.png';
import footerImage from '../assets/footer.png';

export default function HeroSection() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
            className={`hero-bg${animate ? ' hero-animate' : ''}`}

      style={{ backgroundImage: `url(${jungleBg})` }}
    >
      {/* Left overlay image */}
      <img src={leftImage} alt="Left Decoration" className="hero-img-left" />
      {/* Right overlay image */}
      <img src={rightImage} alt="Right Decoration" className="hero-img-right" />
      {/* Footer overlay image */}
      <img src={footerImage} alt="Footer Decoration" className="hero-img-footer" />

      {/* Navbar */}
      <nav className="hero-navbar">
        <div className="hero-navbar-logo">
          <div className="hero-navbar-icon"></div>
          Juno's
        </div>
        <div className="hero-navbar-links">
          <a href="#">Watchtower</a>
          <a href="#">Juno's Grove</a>
          <a href="#">Treasure Map</a>
          <a href="#">Pricing</a>
          <span style={{fontSize:'1.5rem', cursor:'pointer'}}>⋮</span>
        </div>
        <div className="hero-navbar-actions">
          <input
            type="text"
            placeholder="Assets, Wallets, Domains"
            className="hero-navbar-search"
          />
          <span style={{fontSize:'1.3rem',marginLeft:'-2.2rem',marginRight:'0.5rem',cursor:'pointer'}}>⚙️</span>
          <button className="hero-navbar-btn">Login</button>
          <button className="hero-navbar-cta">Get Started</button>
          <span style={{background:'#b9fbc0',borderRadius:'50%',width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',marginLeft:8}}>
            <span role="img" aria-label="device" style={{fontSize:'1.3rem'}}>🖥️</span>
          </span>
        </div>
      </nav>

      {/* Hero Content */}
      <div style={{zIndex:30,position:'relative',width:'100%'}}>
        <h1 className="hero-heading">Conquer the Jungle</h1>
        <div className="hero-subheading">
          A tour or cruise of the Amazon Rainforest is a sublime journey into the heart of the most biodiverse place on the planet. Amazon lodges, such as La Selva Lodge in Ecuador.
        </div>
        <div className="hero-btn-row">
           <div className="hero-btn-row">
            <div className="hero-btn-row-item">
          <div className="hero-btn-outline">
            <span className="hero-btn-label">Treasure Map</span>
            <span className="hero-btn-arrow">→</span>
          </div>
          </div>
          <div className="hero-btn-row-item">
          <div className="hero-btn-outline">
            <span className="hero-btn-label">Juno's Grove</span>
            <span className="hero-btn-arrow">→</span>
          </div>
          </div>
        </div>
        </div>
        <button className="hero-connect-btn">Connect Portfolio</button>
      </div>
    </div>
  );
}