import React from 'react';

export default function AppPreview() {
  return (
    <section style={{
      width: '100%',
      background: 'rgba(10, 30, 25, 0.95)',
      padding: '3rem 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h3 style={{ color: 'white', fontSize: '1.3rem', fontWeight: 700, marginBottom: 24 }}>One application with multiple options to give you freedom of buying & selling</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Left features */}
        <ul style={{ color: '#a7f3d0', fontWeight: 500, listStyle: 'none', padding: 0, margin: 0, textAlign: 'right' }}>
          <li>• Multiple exchanges</li>
          <li>• Real-time analytics</li>
        </ul>
        {/* Mobile mockup */}
        <div style={{
          width: 220,
          height: 420,
          background: '#181f1b',
          borderRadius: '2rem',
          boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          <div style={{ width: 180, height: 120, background: '#222', borderRadius: 12, margin: '1.5rem 0', color: '#4ade80', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
            [Chart]
          </div>
          <div style={{ display: 'flex', gap: '1rem', margin: '1rem 0' }}>
            <button style={{ background: '#4ade80', color: 'black', border: 'none', borderRadius: '0.75rem', padding: '0.5rem 1.2rem', fontWeight: 600, cursor: 'pointer' }}>Buy</button>
            <button style={{ background: '#f87171', color: 'white', border: 'none', borderRadius: '0.75rem', padding: '0.5rem 1.2rem', fontWeight: 600, cursor: 'pointer' }}>Sell</button>
          </div>
        </div>
        {/* Right features */}
        <ul style={{ color: '#a7f3d0', fontWeight: 500, listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
          <li>• Advanced security</li>
          <li>• Instant notifications</li>
        </ul>
      </div>
    </section>
  );
} 