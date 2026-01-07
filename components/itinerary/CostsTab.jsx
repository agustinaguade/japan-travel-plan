import React from 'react';
import { dailyCosts, attractions } from '../../data';

const BudgetCard = ({ type, data, gradient, borderColor, textColor, accentColor }) => (
  <div style={{
    background: gradient,
    border: `2px solid ${borderColor}`,
    borderRadius: '12px',
    padding: '20px',
  }}>
    <div style={{ fontSize: '12px', color: textColor, marginBottom: '4px' }}>{type === 'budget' ? '💰 Budget' : '✨ Mid-Range'}</div>
    <div style={{ fontSize: '32px', fontWeight: '700', color: accentColor }}>${data.total}</div>
    <div style={{ fontSize: '12px', color: textColor }}>/day</div>
    <div style={{ marginTop: '16px', fontSize: '12px', color: textColor }}>
      <div>🏨 {type === 'budget' ? 'Hostels' : 'Business hotels'}: ${data.accommodation}</div>
      <div>🍜 {type === 'budget' ? 'Konbini/cheap eats' : 'Restaurants'}: ${data.food}</div>
      <div>🚃 {type === 'budget' ? 'Transit' : 'Transit + taxi'}: ${data.transport}</div>
      <div>🎌 {type === 'budget' ? 'Attractions' : 'More attractions'}: ${data.attractions}</div>
    </div>
    <div style={{ marginTop: '16px', padding: '12px', background: `${borderColor}33`, borderRadius: '8px' }}>
      <div style={{ fontSize: '11px', color: textColor }}>16 days total:</div>
      <div style={{ fontSize: '18px', fontWeight: '600', color: accentColor }}>~${data.total * 16} + transport</div>
    </div>
  </div>
);

const CostsTab = () => {
  return (
    <div>
      {/* Budget comparison */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <BudgetCard 
          type="budget"
          data={dailyCosts.budget}
          gradient="linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(22, 163, 74, 0.2) 100%)"
          borderColor="rgba(34, 197, 94, 0.5)"
          textColor="#a7f3d0"
          accentColor="#4ade80"
        />
        <BudgetCard 
          type="midRange"
          data={dailyCosts.midRange}
          gradient="linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(109, 40, 217, 0.2) 100%)"
          borderColor="rgba(139, 92, 246, 0.5)"
          textColor="#ddd6fe"
          accentColor="#a78bfa"
        />
      </div>

      {/* Key attractions costs */}
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '12px',
        padding: '20px',
      }}>
        <h4 style={{ color: '#f1f5f9', margin: '0 0 16px 0', fontSize: '14px' }}>🎟️ Key Attraction Prices (USD)</h4>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: '#94a3b8' }}>Attraction</th>
                <th style={{ textAlign: 'right', padding: '8px', color: '#94a3b8' }}>Base</th>
                <th style={{ textAlign: 'right', padding: '8px', color: '#94a3b8' }}>Express/Add-on</th>
                <th style={{ textAlign: 'left', padding: '8px', color: '#94a3b8' }}>Note</th>
              </tr>
            </thead>
            <tbody>
              {attractions.map((att, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '10px 8px', color: '#e2e8f0' }}>{att.name}</td>
                  <td style={{ padding: '10px 8px', color: '#4ade80', textAlign: 'right', fontWeight: '600' }}>${att.price}</td>
                  <td style={{ padding: '10px 8px', color: '#fbbf24', textAlign: 'right' }}>{att.express > 0 ? `+$${att.express}` : '-'}</td>
                  <td style={{ padding: '10px 8px', color: '#94a3b8', fontSize: '11px' }}>{att.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CostsTab;
