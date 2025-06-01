import React from 'react';

export default function PortfolioSection() {
  return (
    <section style={{
      width: '100%',
      background: 'rgba(10, 30, 25, 0.95)',
      padding: '3rem 0',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div style={{
        background: 'rgba(20, 40, 35, 1)',
        borderRadius: '1.5rem',
        padding: '2rem 3rem',
        color: 'white',
        maxWidth: 700,
        boxShadow: '0 2px 16px rgba(0,0,0,0.18)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
      }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Create your cryptocurrency portfolio today</h3>
        <div style={{ width: 320, height: 180, background: '#222', borderRadius: 12, marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4ade80', fontWeight: 700, fontSize: 18 }}>
          [Chart Preview]
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left', width: '100%' }}>
          <li>✔️ Track your assets in real time</li>
          <li>✔️ Secure and private</li>
          <li>✔️ Easy to use, intuitive interface</li>
        </ul>
        <button style={{ background: '#4ade80', color: 'black', fontWeight: 600, padding: '0.75rem 2rem', borderRadius: '0.75rem', border: 'none', cursor: 'pointer', fontSize: '1rem', marginTop: 16 }}>Get Started</button>
      </div>
    </section>
  );
} 