import React from 'react';

const TabNavigation = ({ tabs, activeTab, onTabChange, activeColor = 'rgba(245, 158, 11, 0.9)' }) => {
  return (
    <div style={{
      display: 'flex',
      gap: '4px',
      marginBottom: '20px',
      flexWrap: 'wrap',
      background: 'rgba(0,0,0,0.2)',
      padding: '6px',
      borderRadius: '12px',
    }}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          style={{
            flex: '1 1 auto',
            minWidth: '100px',
            padding: '10px 12px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '13px',
            fontWeight: activeTab === tab.id ? '600' : '400',
            background: activeTab === tab.id ? activeColor : 'transparent',
            color: activeTab === tab.id ? (activeColor.includes('ef4444') ? 'white' : '#1e1b4b') : '#e0e7ff',
            transition: 'all 0.2s ease',
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
