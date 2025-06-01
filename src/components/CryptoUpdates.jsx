import React from 'react';

const coins = [
  { name: 'BTC', price: '$67,000', change: '+2.1%', icon: '🟠' },
  { name: 'ETH', price: '$3,100', change: '+1.5%', icon: '⚪' },
  { name: 'SOL', price: '$150', change: '+3.2%', icon: '🟣' },
  { name: 'DOGE', price: '$0.15', change: '-0.5%', icon: '🟡' },
  { name: 'ADA', price: '$0.45', change: '+0.8%', icon: '🔵' },
];

export default function CryptoUpdates() {
  return (
    <section style={{
      width: '100%',
      background: 'rgba(10, 30, 25, 0.95)',
      padding: '2rem 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.5rem',
    }}>
      <h2 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700 }}>Top crypto coins updates</h2>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {coins.map((coin) => (
          <div key={coin.name} style={{
            background: 'rgba(20, 40, 35, 1)',
            borderRadius: '1rem',
            padding: '1rem 2rem',
            minWidth: 120,
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
          }}>
            <span style={{ fontSize: '2rem' }}>{coin.icon}</span>
            <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{coin.name}</span>
            <span style={{ fontSize: '1rem', margin: '0.25rem 0' }}>{coin.price}</span>
            <span style={{ color: coin.change.startsWith('+') ? '#4ade80' : '#f87171', fontWeight: 500 }}>{coin.change}</span>
          </div>
        ))}
      </div>
    </section>
  );
} 