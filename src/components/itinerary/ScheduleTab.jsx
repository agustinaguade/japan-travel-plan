import React from 'react';
import { itinerary, CITY_COLORS } from '../../data';

const ScheduleTab = () => {
  return (
    <div>
      <h3 style={{ color: '#f1f5f9', margin: '0 0 16px 0', fontSize: '16px' }}>📋 Complete 16-Day Itinerary</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {itinerary.map((day, i) => {
          const color = CITY_COLORS[day.city] || '#94a3b8';
          return (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '12px',
              overflow: 'hidden',
              borderLeft: `6px solid ${color}`,
              display: 'flex',
              flexWrap: 'wrap'
            }}>
              {/* Image side */}
              <div style={{ width: '120px', height: 'auto', minHeight: '100px', flexShrink: 0 }}>
                <img 
                  src={day.image} 
                  alt={day.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>

              {/* Content side */}
              <div style={{ padding: '12px 16px', flex: 1, minWidth: '250px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      background: color,
                      color: 'white',
                      width: '24px', height: '24px',
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '11px', fontWeight: '600',
                    }}>
                      {day.day}
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#e2e8f0' }}>{day.title}</div>
                      <div style={{ fontSize: '11px', color: color, fontWeight: '500' }}>{day.city}</div>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {day.activities.map((act, j) => (
                    <span key={j} style={{
                      background: 'rgba(255,255,255,0.08)',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      color: '#cbd5e1',
                    }}>
                      {act}
                    </span>
                  ))}
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
