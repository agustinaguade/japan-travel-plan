import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { bestDates } from '../../data';

const DateCard = ({ date }) => {
  const statusStyles = {
    best: { bg: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(22, 163, 74, 0.15) 100%)', border: '2px solid rgba(34, 197, 94, 0.5)', badgeBg: '#22c55e', label: '✓ BEST' },
    avoid: { bg: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(220, 38, 38, 0.15) 100%)', border: '2px solid rgba(239, 68, 68, 0.5)', badgeBg: '#ef4444', label: '✗ AVOID' },
    default: { bg: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', badgeBg: '#6b7280', label: 'OK' },
  };
  const style = statusStyles[date.status] || statusStyles.default;

  return (
    <div style={{ background: style.bg, border: style.border, borderRadius: '12px', padding: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <div>
          <div style={{ fontSize: '16px', fontWeight: '600', color: '#e2e8f0' }}>{date.week}</div>
          <div style={{ fontSize: '11px', color: '#94a3b8' }}>{date.reason}</div>
        </div>
        <div style={{ padding: '4px 10px', borderRadius: '6px', fontSize: '10px', fontWeight: '600', background: style.badgeBg, color: 'white' }}>{style.label}</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '12px' }}>
        <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
          <div style={{ fontSize: '10px', color: '#94a3b8' }}>Avg Price</div>
          <div style={{ fontSize: '20px', fontWeight: '700', color: date.status === 'avoid' ? '#f87171' : '#4ade80' }}>${date.price}</div>
        </div>
        <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
          <div style={{ fontSize: '10px', color: '#94a3b8' }}>Crowds</div>
          <div style={{ fontSize: '14px', fontWeight: '500', color: '#e2e8f0' }}>{date.crowdLevel}</div>
        </div>
      </div>
      <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '12px' }}>
        <div style={{ fontSize: '11px', fontWeight: '600', color: '#94a3b8', marginBottom: '8px' }}>🌡️ Weather in Japan</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '11px' }}>
          <div style={{ color: '#cbd5e1' }}><span style={{ color: '#94a3b8' }}>High/Low: </span>{date.tempHigh}°/{date.tempLow}°C</div>
          <div style={{ color: '#cbd5e1' }}><span style={{ color: '#94a3b8' }}>Rain days: </span>{date.rainDays}</div>
          <div style={{ color: '#cbd5e1' }}><span style={{ color: '#94a3b8' }}>Humidity: </span>{date.humidity}</div>
          <div style={{ color: '#cbd5e1' }}>{date.weather}</div>
        </div>
      </div>
    </div>
  );
};

const DatesTab = () => {
  const recommendations = [
    { medal: '🥇', title: 'Best Overall', dates: 'May 7 → May 22', reason: 'Post-Golden Week, lowest crowds', price: '~$1,365 (Copa)' },
    { medal: '🥈', title: 'Best Value', dates: 'Apr 28 → May 14', reason: 'Cheapest flight found', price: '~$1,327 (Copa)' },
    { medal: '🥉', title: 'Late Spring', dates: 'May 13 → May 29', reason: 'Warm weather, wisteria', price: '~$1,487 (LATAM)' },
  ];

  return (
    <div>
      <h3 style={{ color: '#f1f5f9', margin: '0 0 16px 0', fontSize: '16px' }}>📅 April-May 2026 Price, Weather & Crowd Analysis</h3>

      <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '20px', marginBottom: '20px' }}>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={bestDates}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="week" tick={{ fill: '#94a3b8', fontSize: 11 }} />
            <YAxis tick={{ fill: '#94a3b8', fontSize: 11 }} domain={[1000, 3000]} />
            <Tooltip contentStyle={{ background: '#1e293b', border: 'none', borderRadius: '8px' }} formatter={(value, name) => [name === 'price' ? `$${value}` : `${value}%`, name === 'price' ? 'Price' : 'Crowds']} />
            <Area type="monotone" dataKey="price" stroke="#f59e0b" fill="rgba(245, 158, 11, 0.3)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
        {bestDates.map((date, i) => <DateCard key={i} date={date} />)}
      </div>

      <div style={{ background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(22, 163, 74, 0.2) 100%)', border: '2px solid rgba(34, 197, 94, 0.5)', borderRadius: '12px', padding: '16px', marginTop: '20px' }}>
        <h4 style={{ color: '#4ade80', margin: '0 0 12px 0', fontSize: '14px' }}>🎯 Top 3 Date Recommendations (15-17 days)</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
          {recommendations.map((rec, i) => (
            <div key={i} style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '12px' }}>
              <div style={{ fontSize: '10px', color: '#86efac' }}>{rec.medal} {rec.title}</div>
              <div style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>{rec.dates}</div>
              <div style={{ fontSize: '11px', color: '#a7f3d0', marginTop: '4px' }}>{rec.reason}</div>
              <div style={{ fontSize: '13px', fontWeight: '600', color: '#4ade80', marginTop: '4px' }}>{rec.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DatesTab;
