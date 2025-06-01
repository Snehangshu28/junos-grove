import React from 'react';

export default function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 2rem',
        color: 'white',
        backdropFilter: 'blur(8px)',
        background: 'rgba(0,0,0,0.3)',
        zIndex: 30,
        position: 'relative',
      }}
    >
      <div
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <div
          style={{
            background: '#4ade80',
            width: 24,
            height: 24,
            borderRadius: '50%',
          }}
        ></div>
        Juno’s
      </div>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          Watchtower
        </a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          Juno’s Grove
        </a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          Treasure Map
        </a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          Pricing
        </a>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <input
          type="text"
          placeholder="Assets, Wallets, Domains"
          style={{
            padding: '0.25rem 0.75rem',
            borderRadius: '0.375rem',
            background: 'rgba(0,0,0,0.7)',
            color: 'white',
            border: 'none',
            outline: 'none',
          }}
        />
        <button
          style={{
            color: 'white',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            transition: 'color 0.2s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = '#4ade80')}
          onMouseOut={(e) => (e.currentTarget.style.color = 'white')}
        >
          Login
        </button>
        <button
          style={{
            background: '#4ade80',
            color: 'black',
            fontWeight: '600',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            border: 'none',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = '#86efac')}
          onMouseOut={(e) => (e.currentTarget.style.background = '#4ade80')}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}
