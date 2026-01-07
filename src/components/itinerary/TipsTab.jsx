import React from 'react';
import { advanceBooking } from '../../data';

const TipsTab = () => {
  const getPriorityStyles = (priority) => {
    switch (priority) {
      case 'critical':
        return { bg: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', badgeBg: 'rgba(239, 68, 68, 0.2)', badgeColor: '#fca5a5', iconBg: '#ef4444', icon: '🚨' };
      case 'high':
        return { bg: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)', badgeBg: 'rgba(245, 158, 11, 0.2)', badgeColor: '#fcd34d', iconBg: '#f59e0b', icon: '⚠️' };
      default:
        return { bg: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', badgeBg: 'rgba(255,255,255,0.1)', badgeColor: '#9ca3af', iconBg: '#6b7280', icon: '📌' };
    }
  };

  return (
    <div>
      <h3 style={{ color: '#f1f5f9', margin: '0 0 16px 0', fontSize: '16px' }}>📝 Advance Booking Checklist</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {advanceBooking.map((item, i) => {
          const styles = getPriorityStyles(item.priority);
          return (
            <div key={i} style={{
              background: styles.bg,
              border: styles.border,
              borderRadius: '10px',
              padding: '14px 16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '6px',
                  background: styles.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                }}>
                  {styles.icon}
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '500', color: '#e2e8f0' }}>{item.item}</div>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>Book {item.when} ahead</div>
                </div>
              </div>
              <div style={{
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '11px',
                fontWeight: '600',
                textTransform: 'uppercase',
                background: styles.badgeBg,
                color: styles.badgeColor,
              }}>
                {item.priority}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.2) 100%)',
        border: '2px solid rgba(239, 68, 68, 0.5)',
        borderRadius: '12px',
        padding: '16px',
        marginTop: '24px',
      }}>
        <div style={{ fontSize: '14px', fontWeight: '600', color: '#f87171', marginBottom: '8px' }}>⚠️ Golden Week Alert (Apr 29 - May 6, 2026)</div>
        <ul style={{ margin: 0, paddingLeft: '16px', color: '#fca5a5', fontSize: '12px', lineHeight: '1.8' }}>
          <li>Hotels cost 20-50% more — book by January 2026</li>
          <li>Shinkansen sells out — reserve seats 2+ weeks ahead</li>
          <li>Major attractions have 2-3x longer lines</li>
          <li>Pro tip: Stay in Tokyo/Osaka (locals leave for countryside)</li>
        </ul>
      </div>
    </div>
  );
};

export default TipsTab;
