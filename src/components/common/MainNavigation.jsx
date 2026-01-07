import React from 'react';

const MainNavigation = ({ activeSection, onSectionChange }) => {
  const sections = [
    {
      id: 'booking',
      label: '✈️ Getting There',
      sublabel: 'Flights • Dates • Costs',
      activeGradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      activeColor: '#1e1b4b',
      shadowColor: 'rgba(245, 158, 11, 0.4)',
    },
    {
      id: 'itinerary',
      label: '🇯🇵 In Japan',
      sublabel: 'Itinerary • Anime • Costs',
      activeGradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
      activeColor: 'white',
      shadowColor: 'rgba(239, 68, 68, 0.4)',
    },
  ];

  return (
    <div style={{
      display: 'flex',
      gap: '8px',
      marginBottom: '24px',
      background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
      padding: '8px',
      borderRadius: '16px',
    }}>
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            style={{
              flex: 1,
              padding: '16px 24px',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'all 0.2s ease',
              background: isActive ? section.activeGradient : 'rgba(255,255,255,0.1)',
              color: isActive ? section.activeColor : '#e0e7ff',
              boxShadow: isActive ? `0 4px 15px ${section.shadowColor}` : 'none',
            }}
          >
            {section.label}
            <div style={{ fontSize: '11px', fontWeight: '400', marginTop: '4px', opacity: 0.8 }}>
              {section.sublabel}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default MainNavigation;
