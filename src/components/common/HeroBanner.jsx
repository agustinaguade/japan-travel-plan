import React from 'react';

const HeroBanner = () => (
  <div
    style={{
      width: '100%',
      maxWidth: '980px',
      margin: '0 auto 16px auto',
      position: 'relative',
    }}
  >
    {/* Gradient glow behind the image */}
    <div
      style={{
        position: 'absolute',
        inset: '-10px',
        borderRadius: '28px',
        background:
          'radial-gradient(60% 120% at 15% 0%, rgba(245,158,11,0.35) 0%, rgba(245,158,11,0.00) 60%),' +
          'radial-gradient(70% 120% at 50% 30%, rgba(239,68,68,0.28) 0%, rgba(239,68,68,0.00) 65%),' +
          'radial-gradient(70% 120% at 95% 10%, rgba(139,92,246,0.30) 0%, rgba(139,92,246,0.00) 60%)',
        filter: 'blur(14px)',
        opacity: 0.9,
        pointerEvents: 'none',
      }}
    />

    {/* Actual hero container (same as yours) */}
    <div
      style={{
        width: '100%',
        borderRadius: '22px',
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid rgba(255,255,255,0.10)',
        boxShadow: '0 18px 60px rgba(0,0,0,0.35)',
        background: 'rgba(15, 23, 42, 0.6)',
      }}
    >
      <img
        src="/images/japan-hero.jpg"
        alt="Japan trip banner"
        style={{
          width: '100%',
          height: '240px',
          objectFit: 'cover',
          display: 'block',
          transform: 'scale(1.02)',
        }}
        loading="eager"
      />

      {/* overlay for readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(2,6,23,0.35) 0%, rgba(2,6,23,0.70) 85%)',
        }}
      />

      {/* small badge on image */}
      <div
        style={{
          position: 'absolute',
          left: '14px',
          top: '14px',
          padding: '8px 12px',
          borderRadius: '999px',
          background: 'rgba(2,6,23,0.55)',
          border: '1px solid rgba(255,255,255,0.10)',
          color: '#e2e8f0',
          fontSize: '12px',
          fontWeight: 800,
          letterSpacing: '0.6px',
          backdropFilter: 'blur(8px)',
        }}
      >
        🎌 April–May 2026
      </div>
    </div>
  </div>
);

export default HeroBanner;
