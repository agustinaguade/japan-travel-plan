import React from 'react';

const HeaderTitle = () => (
  <div style={{ textAlign: 'center', marginBottom: '16px' }}>
    <h1
      style={{
        fontSize: '28px',
        fontWeight: '700',
        margin: '0',
        background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #8b5cf6 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      La Fila de Mariela To
      <span
        style={{
          textDecoration: 'line-through',
          textDecorationColor: 'black',
          textDecorationThickness: '4px',
          margin: '0 8px',
        }}
      >
        The Moon
      </span>
      Japan
    </h1>

    <div style={{ fontSize: '13px', color: '#64748b', marginTop: '8px' }}>
      Anime • Samurai • Nintendo • 16 Days
    </div>
  </div>
);

export default HeaderTitle;
