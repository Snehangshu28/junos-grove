import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      background: 'rgba(10, 30, 25, 1)',
      color: '#a7f3d0',
      padding: '2rem 0 1rem 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: '1rem',
      borderTop: '1px solid #222',
      marginTop: 32,
    }}>
      <div style={{ display: 'flex', gap: '2rem', marginBottom: 16 }}>
        <a href="#" style={{ color: '#a7f3d0', textDecoration: 'none' }}>Home</a>
        <a href="#" style={{ color: '#a7f3d0', textDecoration: 'none' }}>Features</a>
        <a href="#" style={{ color: '#a7f3d0', textDecoration: 'none' }}>Pricing</a>
        <a href="#" style={{ color: '#a7f3d0', textDecoration: 'none' }}>Contact</a>
      </div>
      <div style={{ color: '#4ade80', fontWeight: 600, marginBottom: 8 }}>Juno's</div>
      <div style={{ fontSize: '0.95rem', color: '#a7f3d0' }}>© {new Date().getFullYear()} Juno's. All rights reserved.</div>
    </footer>
  );
} 