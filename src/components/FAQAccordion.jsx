import React, { useState } from 'react';

const faqs = [
  { q: "What is Juno's?", a: "Juno's is a crypto portfolio and trading platform with advanced features." },
  { q: "How do I create an account?", a: "Click Get Started and follow the registration steps." },
  { q: "Is my data secure?", a: "Yes, we use bank-level encryption and security best practices." },
  { q: "Can I use Juno's on mobile?", a: "Yes, our app is fully mobile responsive." },
  { q: "Does Juno's support multiple wallets?", a: "Yes, you can connect and manage multiple wallets." },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState(null);
  return (
    <section style={{
      width: '100%',
      background: 'rgba(10, 30, 25, 0.95)',
      padding: '3rem 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h3 style={{ color: 'white', fontSize: '1.3rem', fontWeight: 700, marginBottom: 24 }}>Learn more about Juno's</h3>
      <div style={{ width: '100%', maxWidth: 700 }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{ marginBottom: 12, background: 'rgba(20, 40, 35, 1)', borderRadius: 10, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                color: 'white',
                fontWeight: 600,
                fontSize: '1.1rem',
                padding: '1rem 1.5rem',
                cursor: 'pointer',
                outline: 'none',
                borderBottom: open === i ? '1px solid #4ade80' : '1px solid #222',
                transition: 'border 0.2s',
              }}
            >
              {faq.q}
            </button>
            {open === i && (
              <div style={{ padding: '1rem 1.5rem', color: '#a7f3d0', background: '#1a2a23' }}>{faq.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 