import React from 'react';
import { TRANSPORT_COST, bookingLinks } from '../../data';

const LinkButton = ({ name, url, gradient }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" style={{
    background: gradient,
    color: 'white',
    padding: '10px 16px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: '500',
    transition: 'transform 0.2s',
  }}>
    {name} ↗
  </a>
);

const BookNowTab = () => {
  return (
    <div>
      <h3 style={{ color: '#f1f5f9', margin: '0 0 16px 0', fontSize: '16px' }}>🔗 Live Price Checker Links</h3>

      <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '20px', marginBottom: '16px' }}>
        <h4 style={{ color: '#4ade80', margin: '0 0 12px 0', fontSize: '14px' }}>✈️ Buenos Aires → Tokyo</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {bookingLinks.flights.map((link, i) => (
            <LinkButton key={i} {...link} gradient="linear-gradient(135deg, #22c55e 0%, #16a34a 100%)" />
          ))}
        </div>
      </div>

      <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '20px', marginBottom: '16px' }}>
        <h4 style={{ color: '#60a5fa', margin: '0 0 12px 0', fontSize: '14px' }}>🚢 Ferry MVD → Buenos Aires (~${TRANSPORT_COST} RT)</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {bookingLinks.ferry.map((link, i) => (
            <LinkButton key={i} {...link} gradient="linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)" />
          ))}
        </div>
      </div>

      <div style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '12px', padding: '16px' }}>
        <h4 style={{ color: '#fbbf24', margin: '0 0 8px 0', fontSize: '14px' }}>💡 Booking Tips</h4>
        <ul style={{ margin: 0, paddingLeft: '16px', color: '#fde68a', fontSize: '12px', lineHeight: '1.8' }}>
          <li>Book 60-90 days ahead for best prices</li>
          <li>Search on Tuesday/Wednesday for lowest fares</li>
          <li>Use incognito mode to avoid price tracking</li>
          <li>Set price alerts on Google Flights & Skyscanner</li>
          <li>Book ferry 1-2 weeks ahead, arrive night before flight</li>
        </ul>
      </div>
    </div>
  );
};

export default BookNowTab;
