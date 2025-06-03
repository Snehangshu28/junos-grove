import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import WatchTowerHeroSection from '../components/WatchTowerHeroSection';

function WatchtowerPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        maxWidth: '100%',
        background: 'rgba(5, 23, 20, 1)',
        overflow: 'hidden',
        position: 'relative',
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <WatchTowerHeroSection />
    </div>
  );
}

export default WatchtowerPage;
