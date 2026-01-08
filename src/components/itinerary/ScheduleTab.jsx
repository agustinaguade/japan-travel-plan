import React from 'react';
import { itinerary, CITY_COLORS } from '../../data';

const ScheduleTab = () => {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      <h3 style={{ color: '#f1f5f9', margin: '0 0 20px 0', fontSize: '18px', fontWeight: '600' }}>
        📋 Full Itinerary Details
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {itinerary.map((day, i) => {
          const color = CITY_COLORS[day.city] || '#94a3b8';
          return (
            <div key={i} style={{
              background: 'rgba(30, 41, 59, 0.5)', // Un azul muy oscuro y traslúcido
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              minHeight: '100px',
              transition: 'all 0.3s ease'
            }}>
              {/* Image Section - Estilo "Table Thumbnail" */}
              <div style={{ width: '120px', flexShrink: 0, position: 'relative', borderRight: `4px solid ${color}` }}>
                <img 
                  src={day.image} 
                  alt={day.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/120x100?text=Japan'; }}
                />
              </div>

              {/* Info Section */}
              <div style={{ padding: '12px 16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ 
                        background: color, 
                        color: 'white', 
                        padding: '2px 8px', 
                        borderRadius: '6px', 
                        fontSize: '12px', 
                        fontWeight: 'bold' 
                      }}>
                        Day {day.day}
                      </span>
                      <span style={{ fontSize: '15px', fontWeight: '600', color: '#f8fafc' }}>{day.title}</span>
                    </div>
                    <span style={{ fontSize: '11px', color: color, fontWeight: '700', textTransform: 'uppercase' }}>
                      {day.city}
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {day.activities.map((act, j) => (
                      <span key={j} style={{
                        background: 'rgba(255,255,255,0.05)',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        fontSize: '11px',
                        color: '#94a3b8',
                        border: '1px solid rgba(255,255,255,0.05)'
                      }}>
                        {act}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer del card: Link a Google Maps */}
                <div style={{ marginTop: '12px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '8px' }}>
                  <a 
                    href={day.mapUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    style={{ 
                      fontSize: '11px', 
                      color: '#60a5fa', 
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    📍 Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScheduleTab;
