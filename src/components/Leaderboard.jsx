import React from 'react';

const users = [
  { name: 'Alice', value: '$120,000', avatar: '🧑‍💼' },
  { name: 'Bob', value: '$98,500', avatar: '🧑‍💻' },
  { name: 'Charlie', value: '$87,200', avatar: '🧑‍🔬' },
  { name: 'Diana', value: '$75,900', avatar: '🧑‍🚀' },
  { name: 'Eve', value: '$65,300', avatar: '🧑‍🎨' },
];

export default function Leaderboard() {
  return (
    <section style={{
      width: '100%',
      background: 'rgba(10, 30, 25, 0.95)',
      padding: '3rem 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h3 style={{ color: 'white', fontSize: '1.3rem', fontWeight: 700, marginBottom: 24 }}>Top Users</h3>
      <ul style={{ background: 'rgba(20, 40, 35, 1)', borderRadius: '1.5rem', padding: '2rem 2.5rem', boxShadow: '0 2px 16px rgba(0,0,0,0.13)', listStyle: 'none', margin: 0, minWidth: 320 }}>
        {users.map((user, i) => (
          <li key={user.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'white', padding: '0.75rem 0', borderBottom: i < users.length - 1 ? '1px solid #333' : 'none' }}>
            <span style={{ fontSize: '1.5rem', marginRight: 12 }}>{user.avatar}</span>
            <span style={{ flex: 1, fontWeight: 500 }}>{user.name}</span>
            <span style={{ color: '#4ade80', fontWeight: 700 }}>{user.value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
} 