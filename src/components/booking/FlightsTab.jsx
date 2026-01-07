import React from 'react';
import { ezeFlights, mvdFlights } from '../../data';

const FlightTable = ({ flights, type }) => {
  const isEze = type === 'eze';
  const color = isEze ? '#4ade80' : '#f87171';
  const bgColor = isEze ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)';
  const borderColor = isEze ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)';

  return (
    <div style={{
      background: bgColor,
      border: `1px solid ${borderColor}`,
      borderRadius: '12px',
      padding: '20px',
      marginBottom: '20px',
    }}>
      <h3 style={{ color, margin: '0 0 16px 0', fontSize: '16px' }}>
        {isEze ? '🇦🇷 From Buenos Aires (EZE) → Tokyo — RECOMMENDED' : '🇺🇾 From Montevideo (MVD) → Tokyo — More Expensive'}
      </h3>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
          <thead>
            <tr style={{ borderBottom: `2px solid ${borderColor}` }}>
              {['Airline', 'Dates', 'Days', 'Stops', 'Via', 'Duration', 'Price', 'Rating', 'Notes'].map((header) => (
                <th key={header} style={{ 
                  textAlign: header === 'Price' ? 'right' : header === 'Airline' || header === 'Via' || header === 'Notes' ? 'left' : 'center',
                  padding: '10px 8px', 
                  color 
                }}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {flights.map((flight, i) => (
              <tr key={i} style={{ 
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                background: flight.best ? 'rgba(34, 197, 94, 0.15)' : 'transparent',
              }}>
                <td style={{ padding: '10px 8px', color: '#e2e8f0' }}>
                  <div style={{ fontWeight: '500' }}>{flight.airline}</div>
                  <div style={{ fontSize: '10px', color: '#94a3b8' }}>{flight.fareType}</div>
                </td>
                <td style={{ padding: '10px 8px', color: '#e2e8f0', textAlign: 'center', fontSize: '11px' }}>
                  {flight.departure} → {flight.return}
                </td>
                <td style={{ padding: '10px 8px', color: '#94a3b8', textAlign: 'center' }}>{flight.days}</td>
                <td style={{ padding: '10px 8px', textAlign: 'center' }}>
                  <span style={{
                    background: flight.stops === 1 ? 'rgba(34, 197, 94, 0.3)' : 'rgba(245, 158, 11, 0.3)',
                    color: flight.stops === 1 ? '#4ade80' : '#fbbf24',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '11px',
                  }}>
                    {flight.stops}
                  </span>
                </td>
                <td style={{ padding: '10px 8px', color: '#94a3b8', fontSize: '11px' }}>{flight.via}</td>
                <td style={{ padding: '10px 8px', color: '#94a3b8', textAlign: 'center', fontSize: '11px' }}>{flight.duration}</td>
                <td style={{ padding: '10px 8px', color, textAlign: 'right', fontWeight: '600', fontSize: '14px' }}>${flight.price}</td>
                <td style={{ padding: '10px 8px', textAlign: 'center', fontSize: '11px' }}>{flight.rating}</td>
                <td style={{ padding: '10px 8px', color: '#94a3b8', fontSize: '11px', maxWidth: '150px' }}>{flight.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!isEze && (
        <div style={{ marginTop: '12px', padding: '12px', background: 'rgba(239, 68, 68, 0.2)', borderRadius: '8px', fontSize: '12px', color: '#fca5a5' }}>
          ⚠️ All MVD flights have 2+ stops and cost $300-500 more than Buenos Aires. Take the ferry and save!
        </div>
      )}
    </div>
  );
};

const FlightsTab = () => {
  return (
    <div>
      <FlightTable flights={ezeFlights} type="eze" />
      <FlightTable flights={mvdFlights} type="mvd" />
    </div>
  );
};

export default FlightsTab;
