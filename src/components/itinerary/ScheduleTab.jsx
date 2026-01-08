// src/components/itinerary/ScheduleTab.jsx
import React from 'react';
import { itinerary, CITY_COLORS } from '../../data';

const AutoImage = ({ src, alt }) => {
  const fallback = "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80"; // Arashiyama como fallback
  
  return (
    <img
      src={src || fallback}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      style={{ 
        width: '100%', 
        height: '100%', 
        objectFit: 'cover', 
        color: 'transparent',
        display: 'block'
      }}
      onError={(e) => {
        e.target.onerror = null; // Prevenir loop infinito
        e.target.src = fallback;
      }}
    />
  );
};

const ScheduleTab = () => {
  return (
    <div style={{ paddingBottom: '60px' }}>
      {itinerary.map((day, i) => {
        const color = CITY_COLORS[day.city] || '#94a3b8';
        const isNewCity = i === 0 || day.city !== itinerary[i - 1].city;

        return (
          <React.Fragment key={`${day.day}-${day.city}`}>
            {isNewCity && (
              <div style={{
                margin: '50px 0 25px 0',
                padding: '12px 0',
                borderBottom: `3px solid ${color}`,
                display: 'flex',
                alignItems: 'baseline', gap: '15px',
              }}>
                <h2 style={{ color: '#f8fafc', margin: 0, fontSize: '28px' }}>{day.city}</h2>
                <span style={{ color, fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '3px' }}>
                  Base Station
                </span>
              </div>
            )}

            <div style={{
              background: 'rgba(30, 41, 59, 0.45)',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.1)',
              marginBottom: '24px',
              overflow: 'hidden',
            }}>
              <div style={{ padding: '20px 24px', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ background: color, color: 'white', padding: '6px 16px', borderRadius: '30px', fontSize: '13px', fontWeight: '800' }}>
                    DAY {day.day}
                  </div>
                  <h3 style={{ margin: 0, color: '#f8fafc', fontSize: '18px' }}>{day.title}</h3>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px', padding: '24px' }}>
                {day.activities.map((poi, j) => (
                  <div key={j} style={{ background: 'rgba(15, 23, 42, 0.8)', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ height: '110px', background: '#1e293b' }}>
                      <AutoImage src={poi.imgUrl} alt={poi.name} />
                    </div>
                    <div style={{ padding: '12px', fontSize: '12px', color: '#e2e8f0', textAlign: 'center', fontWeight: '600' }}>
                      {poi.name}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ padding: '16px 24px', background: 'rgba(0,0,0,0.15)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <a href={day.mapUrl} target="_blank" rel="noreferrer" style={{ fontSize: '12px', color: '#60a5fa', textDecoration: 'none', fontWeight: '700' }}>
                  📍 Open Day Destinations in Google Maps →
                </a>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ScheduleTab;
