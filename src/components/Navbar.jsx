import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa'; // FontAwesome settings icon
import { FaUserCircle } from 'react-icons/fa'; // Profile/Notification icon
import logoIcon from '../assets/icon/favicon.ico';
import groupIcon from '../assets/icon/Group.png';
import navIcon from '../assets/icon/Icon.png';

export default function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  return (
    <>
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
          <span style={{ fontFamily: "'Roboto',  'sans-serif'" }}>Juno’s</span>
        </div>

        {/* Navigation Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            fontSize: '0.8rem',
          }}
        >
          {['Watchtower', 'Juno’s Grove', 'Treasure Map', 'Pricing'].map(
            (item) => (
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
            )
          )}
          <img
            src={navIcon}
            alt="nav icon"
            style={{
              width: 16,
              height: 16,
              objectFit: 'contain',
              opacity: 0.8,
            }}
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
            onClick={() => setModalOpen(true)}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = 'rgba(153, 227, 158, 1)')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = 'rgba(153, 227, 158, 1)')
            }
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
      {modalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.7)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => setModalOpen(false)}
        >
          <div
            style={{
              background: '#181f1b',
              borderRadius: 18,
              padding: '2.5rem 2.5rem 2rem',
              minWidth: 340,
              boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
              position: 'relative',
              zIndex: 101,
              color: '#fff',
              width: 370,
              maxWidth: '90vw',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                background: 'transparent',
                border: 'none',
                fontSize: 22,
                color: '#fff',
                cursor: 'pointer',
              }}
              aria-label="Close"
            >
              ×
            </button>

            {/* Tab Toggle */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: 24,
              }}
            >
              <button
                onClick={() => setIsSignup(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: 16,
                  color: isSignup ? '#666' : '#fff',
                  borderBottom: !isSignup ? '2px solid #4ade80' : 'none',
                  marginRight: 24,
                  paddingBottom: 4,
                  cursor: 'pointer',
                  fontWeight: 600,
                  transition: 'color 0.2s',
                }}
              >
                Log In
              </button>
              <button
                onClick={() => setIsSignup(true)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: 16,
                  color: isSignup ? '#fff' : '#666',
                  borderBottom: isSignup ? '2px solid #4ade80' : 'none',
                  paddingBottom: 4,
                  cursor: 'pointer',
                  fontWeight: 600,
                  transition: 'color 0.2s',
                }}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <form>
              {/* {isSignup && (
                <input type="text" placeholder="Name" style={inputStyle} />
              )} */}
              <input
                type="email"
                placeholder="user@mail.com"
                style={inputStyle}
              />
              {/* <input
                type="password"
                placeholder="Password"
                style={inputStyle}
              /> */}

              <button type="submit" style={greenButton}>
                Continue
              </button>

              <div style={divider}>OR</div>
              <button type="button" style={socialBtn}>
                Continue with Wallet
              </button>
              <button
                type="button"
                style={{
                  ...socialBtn,
                  border: '1px solid #3b82f6',
                  color: '#3b82f6',
                }}
              >
                Continue with Coinbase
              </button>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 12,
                  marginTop: 16,
                }}
              >
                {['X', 'facebook', 'apple', 'google'].map((provider) => (
                  <div
                    key={provider}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: '#222',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 18,
                      color: '#fff',
                      textTransform: 'capitalize',
                    }}
                  >
                    {provider[0].toUpperCase()}
                  </div>
                ))}
              </div>

              <p
                style={{
                  fontSize: 12,
                  color: '#888',
                  marginTop: 16,
                  textAlign: 'center',
                }}
              >
                When you create a CoinStats account, you agree to the{' '}
                <span style={{ color: '#ccc', textDecoration: 'underline' }}>
                  Terms
                </span>{' '}
                and{' '}
                <span style={{ color: '#ccc', textDecoration: 'underline' }}>
                  Privacy Policy
                </span>
                .
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
const inputStyle = {
  width: '100%',
  padding: '0.7rem 1rem',
  margin: '0.5rem 0',
  borderRadius: 8,
  border: '1px solid #333',
  background: '#232d28',
  color: '#fff',
  fontSize: '1rem',
  outline: 'none',
  boxSizing: 'border-box',
};

const greenButton = {
  width: '100%',
  padding: '0.7rem 1rem',
  borderRadius: 8,
  border: 'none',
  background: 'rgba(153, 227, 158, 1)',
  color: '#222',
  fontWeight: 600,
  fontSize: '1rem',
  marginTop: '1rem',
  cursor: 'pointer',
};

const divider = {
  textAlign: 'center',
  color: '#888',
  margin: '1.2rem 0 1rem',
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: 1,
  position: 'relative',
};

const socialBtn = {
  width: '100%',
  padding: '0.7rem 1rem',
  borderRadius: 8,
  border: '1px solid #444',
  background: '#181f1b',
  color: '#fff',
  fontWeight: 600,
  fontSize: '1rem',
  marginTop: '0.7rem',
  cursor: 'pointer',
};
