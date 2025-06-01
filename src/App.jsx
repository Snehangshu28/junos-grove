import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import CryptoUpdates from './components/CryptoUpdates'
import PortfolioSection from './components/PortfolioSection'
import AppPreview from './components/AppPreview'
import FeaturesSection from './components/FeaturesSection'
import Leaderboard from './components/Leaderboard'
import NewsletterSignup from './components/NewsletterSignup'
import FAQAccordion from './components/FAQAccordion'
import Footer from './components/Footer'
import jungleBg from './assets/Background2.svg' // Import your background image

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        background:"rgba(5, 23, 20, 1)",
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <HeroSection />
      <CryptoUpdates />
      <PortfolioSection />
      <AppPreview />
      <FeaturesSection />
      <Leaderboard />
      <NewsletterSignup />
      <FAQAccordion />
      <Footer />
    </div>
  )
}

export default App