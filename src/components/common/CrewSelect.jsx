// src/components/common/CrewSelect.jsx
import React from 'react';
import { BASE_FIGHTERS } from '../../data/fighters';
import PaywallModal from './PaywallModal';

const CrewSelect = ({ selectedId, onSelect }) => {
  const [isUnknownUnlocked, setIsUnknownUnlocked] = React.useState(false);
  const [paywallOpen, setPaywallOpen] = React.useState(false);

  const fighters = React.useMemo(() => {
    return BASE_FIGHTERS.map((f) => {
      if (f.id !== 'unknown') return f;

      const locked = f.locked && !isUnknownUnlocked;

      return {
        ...f,
        locked,
        img: locked ? f.lockedImg : f.unlockedImg,
        name: locked ? f.nameLocked : f.nameUnlocked,
        desc: locked ? '' : f.descUnlocked,
      };
    });
  }, [isUnknownUnlocked]);

  const onCardClick = (fighter) => {
    if (fighter.id === 'unknown' && fighter.locked) {
      setPaywallOpen(true);
      return;
    }
    onSelect?.(fighter);
  };

  const closePaywall = () => setPaywallOpen(false);

  // Called ONLY after the final success OK
  const confirmPaywall = () => {
    setIsUnknownUnlocked(true);
    setPaywallOpen(false);

    onSelect?.({
      id: 'unknown',
      name: 'Dieguin El Malin',
      img: '/images/fighters/unknown_unlocked.jpg',
      tag: 'Main DPS',
      desc: 'Legendary queue skipper • Merch sniffer • Secret boss energy',
      locked: false,
    });
  };

  return (
    <div style={{ marginTop: '18px' }}>
      <div
        style={{
          fontSize: '22px',
          fontWeight: 900,
          letterSpacing: '1px',
          color: '#f8fafc',
          marginBottom: '4px',
          textTransform: 'uppercase',
          textShadow: '0 10px 30px rgba(0,0,0,0.45)',
        }}
      >
        The Crew
      </div>

      <div
        style={{
          fontSize: '13px',
          color: '#94a3b8',
          fontWeight: 700,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '14px',
        }}
      >
        Choose your fighter
      </div>

      <div
        style={{
          maxWidth: '980px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: '12px',
          padding: '0 6px',
        }}
      >
        {fighters.map((f) => {
          const isSelected = selectedId === f.id;

          return (
            <div
              key={f.id}
              role="button"
              tabIndex={0}
              onClick={() => onCardClick(f)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') onCardClick(f);
              }}
              style={{
                background: isSelected ? 'rgba(30, 41, 59, 0.88)' : 'rgba(15, 23, 42, 0.70)',
                border: isSelected
                  ? '1px solid rgba(96, 165, 250, 0.55)'
                  : '1px solid rgba(255,255,255,0.10)',
                borderRadius: '999px',
                overflow: 'hidden',
                boxShadow: isSelected
                  ? '0 18px 50px rgba(37,99,235,0.22)'
                  : '0 14px 40px rgba(0,0,0,0.30)',
                cursor: 'pointer',
                transition: 'transform 120ms ease',
                display: 'flex',
                alignItems: 'center',
                minHeight: '92px',
                outline: 'none',
                opacity: f.locked ? 0.92 : 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
              }}
              title={f.locked ? 'Locked character' : 'Select character'}
            >
              {/* Left portrait */}
              <div
                style={{
                  width: '92px',
                  height: '92px',
                  flex: '0 0 92px',
                  borderRadius: '999px',
                  overflow: 'hidden',
                  position: 'relative',
                  borderRight: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <img
                  src={f.img}
                  alt={f.name}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: '50% 25%', // ✅ favor faces
                    display: 'block',
                    transform: 'scale(1.04)',
                    filter: f.locked ? 'grayscale(1) blur(0.6px)' : 'none',
                    opacity: f.locked ? 0.7 : 1,
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(90deg, rgba(2,6,23,0.00) 20%, rgba(2,6,23,0.35) 100%)',
                  }}
                />
              </div>

              {/* Right info */}
              <div
                style={{
                  padding: '12px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  flex: 1,
                  minWidth: 0,
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    color: '#f8fafc',
                    fontWeight: 900,
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.9px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                  title={f.name}
                >
                  {f.name}
                </div>

                <div
                  style={{
                    color: '#cbd5e1',
                    fontSize: '11px',
                    fontWeight: 700,
                    lineHeight: 1.25,
                    opacity: f.locked ? 0 : 0.9,
                    height: '28px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    transition: 'opacity 120ms ease',
                  }}
                  title={f.desc}
                >
                  {f.desc}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      color: '#e2e8f0',
                      fontSize: '10px',
                      fontWeight: 800,
                      padding: '5px 10px',
                      borderRadius: '999px',
                      background: 'rgba(2,6,23,0.55)',
                      border: '1px solid rgba(255,255,255,0.10)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {f.tag}
                  </div>

                  <div
                    style={{
                      color: f.locked ? '#fb7185' : '#94a3b8',
                      fontSize: '10px',
                      fontWeight: 800,
                      letterSpacing: '1.2px',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {f.locked ? 'Locked' : 'Ready'}
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: '34px',
                  height: '100%',
                  background:
                    'linear-gradient(180deg, rgba(245,158,11,0.10) 0%, rgba(239,68,68,0.08) 50%, rgba(139,92,246,0.10) 100%)',
                  opacity: f.locked ? 0.45 : 0.75,
                }}
              />
            </div>
          );
        })}
      </div>

      <PaywallModal open={paywallOpen} onClose={closePaywall} onConfirm={confirmPaywall} />
    </div>
  );
};

export default CrewSelect;
