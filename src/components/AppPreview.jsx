import React from 'react';
import mobileVideo from '../assets/mobilePreview.mp4';
import rightImg from '../assets/Right.png';

export default function AppPreview() {
  return (
    <section
      style={{
        width: '100%',
        background: 'rgba(10, 30, 25, 0.95)',
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          background: 'rgb(0 0 0 / 62%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Headings */}
      <h5
        style={{
          color: 'white',
          fontSize: '1rem',
          marginBottom: '1rem',
          textAlign: 'center',
          zIndex: 2,
          fontFamily: '"DM Sans", sans-serif',
        }}
      >
        We Deliver <span style={{ color: 'rgba(153, 227, 158, 1)' }}>Best Solution</span>
      </h5>
      <h2
        style={{
          color: 'white',
          fontSize: '2.5rem',
          fontWeight: 500,
          marginBottom: '3rem',
          textAlign: 'center',
          maxWidth: '800px',
          zIndex: 2,
          fontFamily: '"DM Sans", sans-serif',
        }}
      >
        One application with multiple options to give you freedom of buying & selling
      </h2>

      {/* App Preview Content */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 520,
          marginTop: '2rem',
          marginBottom: '2rem',
        }}
      >
        {/* Decorative Rings */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            pointerEvents: 'none',
            width: 700,
            height: 700,
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: 700,
              height: 700,
              borderRadius: '50%',
              border: '4px solid rgba(74, 222, 128, 0.1)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: 600,
              height: 600,
              borderRadius: '50%',
              border: '4px solid rgba(74, 222, 128, 0.2)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: 500,
              height: 500,
              borderRadius: '50%',
              border: '4px solid rgba(74, 222, 128, 0.3)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>

        {/* Mobile Preview Video (Center) */}
        <div
          style={{
            position: 'relative',
            width: 300,
            height: 600,
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <video
            src={mobileVideo}
            autoPlay
            muted
            loop
            style={{
              width: '100%',
              height: '105vh',
              borderRadius: '2rem',
              objectFit: 'cover',
              boxShadow: '0 0 20px rgba(0,0,0,0.5)',
            }}
          />
        </div>
      </div>
      {/* Bottom Features Section */}
<div
  style={{
    position: 'relative',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '2rem',
    padding: '4rem 2rem',
    zIndex: 2,
  }}
>
  {/* Left Text Column */}
  <div style={{ flex: 1, zIndex: 2 , textAlign:'start'}}>
    <h3
      style={{
        color: 'white',
        fontSize: '1.5rem',
        fontWeight: 600,
        marginBottom: '1rem',
        fontFamily: '"DM Sans", sans-serif',
      }}
    >
      Why choose Junol
    </h3>
    <h2
      style={{
        color: 'white',
        fontSize: '2rem',
        fontWeight: 700,
        marginBottom: '2rem',
        fontFamily: '"DM Sans", sans-serif',
      }}
    >
      Features of the crypto framer mobile application
    </h2>
    <ul
      style={{
        color: '#a7f3d0',
        fontSize: '1.1rem',
        fontWeight: 500,
        listStyle: 'disc',
        paddingLeft: '1.5rem',
        lineHeight: 2,
      }}
    >
      <li>Designed for crypto trading platforms</li>
      <li>Kickstart your crypto website today</li>
      <li>Launch your blockchain platform today</li>
    </ul>
  </div>

  {/* Right Portfolio Card */}
  <div
    style={{
      flex: 1,
      maxWidth: 320,
      backgroundColor: 'rgb(52 52 52 / 76%)',
      borderRadius: '1rem',
      padding: '2rem',
      color: 'white',
      boxShadow: '0 0 20px rgba(0,0,0,0.3)',
      zIndex: 2,
    }}
  >
    <h4
      style={{
        fontSize: '1rem',
        color: '#a7f3d0',
        marginBottom: '0.5rem',
        fontWeight: 500,
      }}
    >
      Your portfolio is up 2.37%
    </h4>
    <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
      <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <span>🟠 Bitcoin</span>
        <span>100%</span>
      </li>
      <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <span>🔵 Ethereum</span>
        <span>100%</span>
      </li>
      <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <span>🟣 Uniswap</span>
        <span>100%</span>
      </li>
      <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <span>🟢 Polkadot</span>
        <span>100%</span>
      </li>
    </ul>
  </div>

  {/* Background Right PNG */}
  <img
    src={rightImg}
    alt="right decor"
    style={{
      position: 'absolute',
      right: 0,
      top: 0,
      height: '100%',
      objectFit: 'cover',
      zIndex: 1,
      pointerEvents: 'none',
      opacity: 0.8,
    }}
  />
</div>

    </section>
  );
}
