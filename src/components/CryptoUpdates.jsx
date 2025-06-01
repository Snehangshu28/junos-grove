import React from 'react';
import chartVideo from '../assets/chartPreview.mp4';
import jungleBg from '../assets/Left.png';

const coins = [
  { title: 'Highest volume', name: 'Bitcoin', price: '693475 USD', icon: 'bitcoin.png' },
  { title: 'Top gainer', name: 'Ethereum', price: '333729 USD', icon: 'bitcoin.png' },
  { title: 'New listing', name: 'Litecoin', price: '105000 USD', icon: 'bitcoin.png' },
  { title: 'Most traded', name: 'Polkadot', price: '68423 USD', icon: 'bitcoin.png' },
  { title: 'Biggest gainers', name: 'Solana', price: '19863 USD', icon: 'bitcoin.png' },
  { title: 'Trending', name: 'Chainlink', price: '11291 USD', icon: 'bitcoin.png' },
];

export default function CryptoLandingPage() {
  return (
    <section style={{ width: '100%', background: '#0a1e19', position: 'relative', overflow: 'hidden' }}>
        <div
    style={{
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      background: 'rgb(0 0 0 / 62%)', // Adjust opacity as needed
      zIndex: 1,
      pointerEvents: 'none',
    }}
  />
      {/* Left decorative jungle PNG */}
      <img
        src={jungleBg}
        alt="Decorative background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '72%',
          zIndex: 0,
          objectFit: 'cover',
        }}
      />

      {/* Top Crypto Section */}
      <div style={{
        position: 'relative',
        padding: '3rem 1rem',
        textAlign: 'center',
        zIndex: 1,
      }}>
        <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 500 }}>
          Featured <span style={{ color: '#34d399' }}>crypto coins</span>
        </p>
        <h2 style={{ color: '#fff', fontSize: '2rem', fontWeight: 'bold', margin: '0.5rem 0 2rem', fontFamily:'"DM Sans", sans-serif' }}>
          Top crypto coins updates
        </h2>

        <div style={{
          display: 'flex',
          // flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1.5rem',
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          {coins.map((coin, idx) => (
            <div key={idx} style={{
              background: '#b9b9b92e',
              borderRadius: '1rem',
              padding: '1rem 1.5rem',
              color: '#fff',
              minWidth: '150px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
              textAlign: 'left',
            }}>
              <p style={{ fontSize: '0.9rem', color: '#9ca3af' }}>{coin.title}</p>
              <img
                src={`../assets/icon/bitcoin.png`}
                alt={coin.name}
                style={{ width: '20px', height: '20px' }}
              />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{coin.name}</h3>
              <p style={{ fontSize: '1rem', color: '#e5e7eb' }}>{coin.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div style={{
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        padding: '4rem 1rem',
        alignItems: 'center',
        gap: '2rem',
        zIndex: 1,
        // maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Left - Chart Video */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <video src={chartVideo} autoPlay muted loop style={{
            width: '100%',
            borderRadius: '1rem',
            boxShadow: '0 0 20px rgba(0,0,0,0.5)',
          }} />
        </div>

        {/* Right - Text Content */}
        <div style={{ flex: 1, color: '#fff', textAlign:'left', display: 'flex', justifyContent:'space-between', flexDirection: 'column', gap: '0.2rem' }}>
          <p style={{ color: 'white', fontSize: '1.2rem' }}>Crypto landing page <span style={{ color: '#10b981' }}>template</span></p>
          <h2 style={{ fontSize: '3.0rem', fontWeight: 'bold' }}>
            Create your cryptocurrency portfolio today
          </h2>
          <p style={{ fontSize: '1rem', color: '#d1d5db' }}>
            Coinbase has a variety of features that make it the best place to start trading.
          </p>

          <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {['Manage your portfolio', 'Vault protection', 'Mobile apps'].map((text, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{
                  background: '#1f2937',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '2rem',
                  height: '2rem',
                }}>
                  ✅
                </span>
                <span style={{ fontSize: '1rem' }}>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
