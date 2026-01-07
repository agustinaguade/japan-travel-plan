import React from 'react';

const Header = () => (
  <div style={{ textAlign: 'center', marginBottom: '24px' }}>
    <div style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '4px' }}>🎌 April-May 2026</div>
    <h1 style={{ 
      fontSize: '28px', 
      fontWeight: '700', 
      margin: '0',
      background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #8b5cf6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}>
      Japan Trip Planner
    </h1>
    <div style={{ fontSize: '13px', color: '#64748b', marginTop: '8px' }}>
      Anime • Samurai • Nintendo • 16 Days
    </div>
  </div>
);

export default Header;
