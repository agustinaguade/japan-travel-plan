import React from 'react';
import { animeLocations } from '../../data';

const AnimeTab = () => {
  return (
    <div>
      <h3 style={{ color: '#f1f5f9', margin: '0 0 16px 0', fontSize: '16px' }}>🎌 Anime & Gaming Pilgrimage Guide</h3>

      {animeLocations.map((anime, i) => (
        <div key={i} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '16px', marginBottom: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ fontSize: '16px', fontWeight: '600', color: '#f59e0b' }}>{anime.anime}</div>
            <div style={{ fontSize: '11px', color: '#94a3b8', background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '4px' }}>{anime.city}</div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {anime.locations.map((loc, j) => (
              <div key={j} style={{
                background: 'rgba(245, 158, 11, 0.2)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '12px',
                color: '#fde68a',
              }}>
                📍 {loc}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div style={{
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(109, 40, 217, 0.2) 100%)',
        border: '2px solid rgba(139, 92, 246, 0.5)',
        borderRadius: '12px',
        padding: '16px',
        marginTop: '16px',
      }}>
        <div style={{ fontSize: '14px', fontWeight: '600', color: '#a78bfa', marginBottom: '8px' }}>🎮 Super Nintendo World - Must Do!</div>
        <div style={{ fontSize: '12px', color: '#c4b5fd', lineHeight: '1.6' }}>
          Located at Universal Studios Japan, Osaka. Includes Mario Kart ride, Yoshi's Adventure, and new Donkey Kong area.
          <strong style={{ color: '#a78bfa' }}> Book USJ tickets 1-2 months ahead!</strong>
        </div>
      </div>
    </div>
  );
};

export default AnimeTab;
