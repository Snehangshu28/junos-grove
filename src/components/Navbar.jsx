import React from 'react';
import { FaCog } from 'react-icons/fa'; // FontAwesome settings icon
import { FaUserCircle } from 'react-icons/fa'; // Profile/Notification icon
import logoIcon from '../assets/icon/favicon.ico'; 
import groupIcon from '../assets/icon/Group.png'; 
import navIcon from '../assets/icon/Icon.png'; 

export default function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.25rem 5rem',
        color: 'white',
        background: 'transparent',
        // backdropFilter: 'blur(10px)',
        position: 'relative',
        zIndex: 30,
      }}
    >
      {/* Logo Section */}
       <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          fontWeight: 'bold',
          fontSize: '1.2rem',
        }}
      >
        <img
          src={logoIcon}
          alt="Logo"
          style={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            objectFit: 'cover',
            background: '#4ade80',
          }}
        />
        <span style={{ fontFamily: "'Roboto',  'sans-serif'" }}>
          Juno’s
        </span>
      </div>

      {/* Navigation Links */}
      <div style={{ display: 'flex', alignItems:'center', gap: '1.5rem', fontSize: '0.8rem' }}>
        {['Watchtower', 'Juno’s Grove', 'Treasure Map', 'Pricing'].map((item) => (
          <a
            key={item}
            href="#"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontWeight: '500',
            }}
          >
            {item}
          </a>
        ))}
         <img
              src={navIcon}
              alt="nav icon"
              style={{ width: 16, height: 16, objectFit: 'contain', opacity: 0.8 }}
            />
      </div>

      {/* Right Side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <input
          type="text"
          placeholder="Assets, Wallets, Domains"
          style={{
            padding: '0.5rem 0.75rem',
            borderRadius: '9999px',
            background: 'rgba(0,0,0,0.6)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: 'white',
            fontSize: '0.9rem',
            outline: 'none',
          }}
        />
        <FaCog style={{ cursor: 'pointer', fontSize: '1.1rem' }} />
        <button
          style={{
            background: 'transparent',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontWeight: '500',
          }}
        >
          Login
        </button>
        <button
          style={{
            background: 'rgba(153, 227, 158, 1)',
            color: '#1a1a1a',
            padding: '0.5rem 1.25rem',
            borderRadius: '9999px',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = '#86efac')}
          onMouseOut={(e) => (e.currentTarget.style.background = '#4ade80')}
        >
          Get Started
        </button>
 <img
          src={groupIcon}
          alt="groupIcon"
          style={{
            width: 28,
            height: 28,
            objectFit: 'cover',
            background: 'transparent',
          }}
        />
              </div>
    </nav>
  );
}
