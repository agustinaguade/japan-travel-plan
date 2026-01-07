import React from 'react';
import { cities } from '../../data';

const RouteTab = () => {
  return (
    <div>
      <div style={{
        background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '24px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '14px', color: '#fecaca', marginBottom: '4px' }}>Your Japan Adventure</div>
        <div style={{ fontSize: '36px', fontWeight: '700', color: 'white' }}>16 Days</div>
        <div style={{ fontSize: '14px', color: '#fca5a5', marginTop: '4px' }}>Tokyo → Kyoto → Hiroshima → Osaka</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        {cities.map((city, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '12px',
            overflow: 'hidden',
            border: `1px solid ${city.color}40`,
          }}>
            <div style={{ position: 'relative', height: '120px' }}>
              <img 
                src={city.image} 
                alt={city.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div style={{ 
                position: 'absolute', 
                bottom: 0, left: 0, right: 0, 
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', 
                padding: '12px' 
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '18px', fontWeight: '600', color: 'white' }}>{city.name}</div>
                  <div style={{ background: city.color, color: 'white', padding: '2px 8px', borderRadius: '12px', fontSize: '10px', fontWeight: '600' }}>
                    {city.nights} nights
                  </div>
                </div>
              </div>
            </div>
            <div style={{ padding: '12px', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {city.highlights.map((h, j) => (
                <span key={j} style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', color: '#cbd5e1' }}>{h}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '20px' }}>
        <h4 style={{ color: '#f1f5f9', margin: '0 0 16px 0', fontSize: '14px' }}>🗾 Route Flow</h4>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          {cities.map((city, i) => (
            <React.Fragment key={i}>
              <div style={{ background: city.color, color: 'white', padding: '12px 20px', borderRadius: '8px', textAlign: 'center', minWidth: '80px' }}>
                <div style={{ fontWeight: '600' }}>{city.name}</div>
                <div style={{ fontSize: '11px', opacity: 0.8 }}>{city.nights}N</div>
              </div>
              {i < cities.length - 1 && <div style={{ color: '#94a3b8', fontSize: '20px' }}>→</div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RouteTab;
