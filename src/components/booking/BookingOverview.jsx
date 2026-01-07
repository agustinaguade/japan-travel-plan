import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TRANSPORT_COST, costScenarios } from '../../data';

const BookingOverview = () => {
  return (
    <div>
      {/* Hero savings banner */}
      <div style={{
        background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '24px',
        textAlign: 'center',
        boxShadow: '0 8px 32px rgba(5, 150, 105, 0.3)',
      }}>
        <div style={{ fontSize: '14px', color: '#a7f3d0', marginBottom: '8px' }}>
          💡 RECOMMENDED: Fly from Buenos Aires
        </div>
        <div style={{ fontSize: '42px', fontWeight: '700', color: 'white' }}>
          Save $351
        </div>
        <div style={{ fontSize: '16px', color: '#d1fae5', marginTop: '8px' }}>
          vs flying direct from Montevideo (even with ferry costs!)
        </div>
      </div>

      {/* Quick comparison cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
          borderRadius: '12px',
          padding: '20px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '12px', color: '#fecaca', marginBottom: '4px' }}>MVD Direct</div>
          <div style={{ fontSize: '28px', fontWeight: '700', color: 'white' }}>$1,768</div>
          <div style={{ fontSize: '11px', color: '#fca5a5', marginTop: '4px' }}>2+ stops, longer routes</div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
          borderRadius: '12px',
          padding: '20px',
          textAlign: 'center',
          border: '2px solid #4ade80',
        }}>
          <div style={{ fontSize: '12px', color: '#bbf7d0', marginBottom: '4px' }}>Via Buenos Aires ✓</div>
          <div style={{ fontSize: '28px', fontWeight: '700', color: 'white' }}>$1,417</div>
          <div style={{ fontSize: '11px', color: '#86efac', marginTop: '4px' }}>Flight $1,327 + Ferry ${TRANSPORT_COST}</div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
          borderRadius: '12px',
          padding: '20px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '12px', color: '#ddd6fe', marginBottom: '4px' }}>Best Flight</div>
          <div style={{ fontSize: '28px', fontWeight: '700', color: 'white' }}>Copa</div>
          <div style={{ fontSize: '11px', color: '#c4b5fd', marginTop: '4px' }}>$1,327 • 1 stop • bag incl.</div>
        </div>
      </div>

      {/* Cost comparison chart */}
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '24px',
      }}>
        <h3 style={{ color: '#f1f5f9', margin: '0 0 16px 0', fontSize: '16px' }}>
          💵 Total Cost Comparison (Round-trip with bags)
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={costScenarios} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis type="number" tick={{ fill: '#94a3b8', fontSize: 12 }} domain={[0, 2000]} />
            <YAxis dataKey="name" type="category" tick={{ fill: '#e2e8f0', fontSize: 12 }} width={100} />
            <Tooltip 
              contentStyle={{ background: '#1e293b', border: 'none', borderRadius: '8px' }}
              formatter={(value) => [`$${value}`, '']}
            />
            <Bar dataKey="total" radius={[0, 4, 4, 0]}>
              {costScenarios.map((entry, index) => (
                <Cell key={index} fill={entry.savings > 300 ? '#22c55e' : entry.savings > 0 ? '#3b82f6' : '#ef4444'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div style={{ marginTop: '12px', fontSize: '12px', color: '#94a3b8', textAlign: 'center' }}>
          Ferry cost (~${TRANSPORT_COST} RT via Colonia Express) included in calculations
        </div>
      </div>

      {/* Best dates summary */}
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '12px',
        padding: '20px',
      }}>
        <h3 style={{ color: '#f1f5f9', margin: '0 0 16px 0', fontSize: '16px' }}>
          📅 Quick Date Guide
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px' }}>
          <div style={{
            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
            borderRadius: '8px',
            padding: '12px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '11px', color: '#bbf7d0' }}>✓ BEST</div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>Apr 21-28</div>
            <div style={{ fontSize: '12px', color: '#dcfce7' }}>~$1,450</div>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
            borderRadius: '8px',
            padding: '12px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '11px', color: '#bbf7d0' }}>✓ BEST</div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>May 7-15</div>
            <div style={{ fontSize: '12px', color: '#dcfce7' }}>~$1,400</div>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
            borderRadius: '8px',
            padding: '12px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '11px', color: '#fecaca' }}>✗ AVOID</div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>Apr 29-May 6</div>
            <div style={{ fontSize: '12px', color: '#fee2e2' }}>Golden Week +50%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingOverview;
