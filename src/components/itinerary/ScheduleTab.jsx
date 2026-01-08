
import React from 'react';
import { itinerary, CITY_COLORS } from '../../data';

const ScheduleTab = () => {
  return (
    <div style={{ paddingBottom: '20px' }}>
      <h3 style={{ 
        color: '#f1f5f9', 
        margin: '0 0 20px 0', 
        fontSize: '18px', 
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        📋 Complete 16-Day Itinerary
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {itinerary.map((day, i) => {
          // Si el día es de transporte, usamos el color de 'Travel', si no el de la ciudad
          const color = CITY_COLORS[day.city] || CITY_COLORS['Travel'] || '#94a3b8';

          return (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '16px',
              overflow: 'hidden',
              borderLeft: `6px solid ${color}`,
              display: 'flex',
              alignItems: 'stretch',
              transition: 'transform 0.2s ease, background 0.2s ease',
              border: '1px solid rgba(255,255,255,0.05)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}>
              
              {/* Image Section con Overlay */}
              <div style={{ width: '130px', flexShrink: 0, position: 'relative' }}>
                <img 
                  src={day.image} 
                  alt={day.title} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                  }} 
                />
                {/* Overlay degradado para integrar la foto con el contenido */}
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(90deg, rgba(15,23,42,0) 0%, rgba(15,23,42,0.4) 100%)' 
                }} />
              </div>

              {/* Details Section */}
              <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                
                {/* Header: Day Number + Title + City */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                  <div style={{
                    background: color,
                    color: 'white',
                    width: '32px', 
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '13px', 
                    fontWeight: '700',
                    boxShadow: `0 0 10px ${color}44`
                  }}>
                    {day.day}
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ 
                      fontSize: '15px', 
                      fontWeight: '700', 
                      color: '#f8fafc',
                      lineHeight: '1.2'
                    }}>
                      {day.title}
                    </div>
                    <div style={{ 
                      fontSize: '11px', 
                      color: color, 
                      fontWeight: '600', 
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginTop: '2px'
                    }}>
                      {day.city}
                    </div>
                  </div>
                </div>

                {/* Activities Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {day.activities.map((act, j) => (
                    <span key={j} style={{
                      background: 'rgba(255,255,255,0.06)',
                      padding: '5px 10px',
                      borderRadius: '8px',
                      fontSize: '11px',
                      color: '#cbd5e1',
                      border: '1px solid rgba(255,255,255,0.03)',
                      display: 'flex',
                      alignItems: 'center'
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
