// src/components/common/PaywallModal.jsx
import React from 'react';
import { PAYWALL_FLOW, PAYWALL_COPY, SUCCESS_SCREEN } from '../../data/fighters';

/**
 * SmartImage supports:
 * - cover: fills box (cinematic), may crop
 * - contain: shows full image (no crop), with blurred backdrop for nice bars
 */
const SmartImage = ({
  src,
  alt,
  height,
  fit = 'cover', // 'cover' | 'contain'
  scale = 1.03,  // cover only
  position = '50% 30%',
}) => {
  if (fit === 'contain') {
    return (
      <div
        style={{
          height,
          position: 'relative',
          overflow: 'hidden',
          background: 'rgba(0,0,0,0.25)',
        }}
      >
        {/* blurred backdrop */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(18px) saturate(1.05)',
            transform: 'scale(1.18)',
            opacity: 0.55,
          }}
        />

        {/* dark overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(2,6,23,0.10) 0%, rgba(2,6,23,0.65) 100%)',
          }}
        />

        {/* real image - NO CROP */}
        <img
          src={src}
          alt={alt}
          loading="eager"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            display: 'block',
            objectFit: 'contain',
            objectPosition: 'center',
            padding: '0px', // ✅ remove padding so it looks bigger
            filter:
              'drop-shadow(0 18px 35px rgba(0,0,0,0.45)) saturate(1.03) contrast(1.03)',
          }}
        />

        {/* subtle frame */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            border: '1px solid rgba(255,255,255,0.10)',
            pointerEvents: 'none',
          }}
        />
      </div>
    );
  }

  // cover mode (your former cinematic approach)
  return (
    <div
      style={{
        height,
        background: 'rgba(0,0,0,0.25)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="eager"
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          objectFit: 'cover',
          objectPosition: position,
          transform: `scale(${scale})`,
          filter: 'saturate(1.03) contrast(1.03)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.25) 70%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

const PaywallModal = ({ open, onClose, onConfirm }) => {
  const [idx, setIdx] = React.useState(0);
  const [showSuccess, setShowSuccess] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      setIdx(0);
      setShowSuccess(false);
    }
  }, [open]);

  if (!open) return null;

  const step = PAYWALL_FLOW[idx];
  const isPlain = step.kind === 'plain';

  // default height for “cover” steps (confirm-4 + success)
  const DEFAULT_IMAGE_H = 'clamp(220px, 32vw, 320px)';

  // ✅ allow per-step height override (for portrait contain steps)
  const stepImageHeight = step.imgHeight ?? DEFAULT_IMAGE_H;

  const next = () => {
    if (idx >= PAYWALL_FLOW.length - 1) {
      setShowSuccess(true);
      return;
    }
    setIdx((i) => i + 1);
  };

  const okSuccess = () => {
    onConfirm?.();
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.55)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '18px',
        zIndex: 9999,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '560px',
          borderRadius: '18px',
          border: '1px solid rgba(255,255,255,0.12)',
          background: 'rgba(15, 23, 42, 0.95)',
          boxShadow: '0 30px 90px rgba(0,0,0,0.50)',
          overflow: 'hidden',
          textAlign: 'left',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '14px 16px',
            background: 'rgba(255,255,255,0.03)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
          }}
        >
          <div style={{ color: '#f8fafc', fontWeight: 900, letterSpacing: '1px' }}>
            {PAYWALL_COPY.title}
          </div>

          <button
            onClick={onClose}
            style={{
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(2,6,23,0.55)',
              color: '#e2e8f0',
              borderRadius: '10px',
              padding: '6px 10px',
              fontWeight: 800,
              cursor: 'pointer',
            }}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '16px' }}>
          {showSuccess ? (
            <div
              style={{
                borderRadius: '14px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.10)',
                background: 'rgba(2,6,23,0.55)',
                boxShadow: '0 18px 50px rgba(0,0,0,0.35)',
              }}
            >
              <SmartImage
                src={SUCCESS_SCREEN.img}
                alt={SUCCESS_SCREEN.title}
                height={SUCCESS_SCREEN.imgHeight ?? DEFAULT_IMAGE_H}
                fit={SUCCESS_SCREEN.fit ?? 'cover'}
                scale={SUCCESS_SCREEN.scale ?? 1.03}
                position={SUCCESS_SCREEN.position ?? '50% 30%'}
              />

              <div style={{ padding: '12px 14px' }}>
                <div
                  style={{
                    color: '#f8fafc',
                    fontWeight: 1000,
                    fontSize: '14px',
                    letterSpacing: '0.8px',
                    textTransform: 'uppercase',
                    marginBottom: '6px',
                  }}
                >
                  {SUCCESS_SCREEN.title}
                </div>

                <div style={{ color: '#cbd5e1', fontSize: '13px', lineHeight: 1.45, fontWeight: 700 }}>
                  {SUCCESS_SCREEN.body}
                </div>
              </div>
            </div>
          ) : (
            <>
              {isPlain ? (
                <div
                  style={{
                    borderRadius: '14px',
                    border: '1px solid rgba(255,255,255,0.10)',
                    background: 'rgba(2,6,23,0.55)',
                    padding: '14px',
                    boxShadow: '0 18px 50px rgba(0,0,0,0.35)',
                  }}
                >
                  <div
                    style={{
                      color: '#f8fafc',
                      fontWeight: 1000,
                      fontSize: '14px',
                      letterSpacing: '0.8px',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                    }}
                  >
                    {step.title}
                  </div>
                  <div style={{ color: '#cbd5e1', fontSize: '13px', lineHeight: 1.55, fontWeight: 700 }}>
                    {step.body}
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    borderRadius: '14px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.10)',
                    background: 'rgba(2,6,23,0.55)',
                    boxShadow: '0 18px 50px rgba(0,0,0,0.35)',
                  }}
                >
                  <SmartImage
                    src={step.img}
                    alt={step.title}
                    height={stepImageHeight}      // ✅ taller for first 3
                    fit={step.fit ?? 'cover'}     // ✅ contain for first 3
                    scale={step.scale ?? 1.03}
                    position={step.position ?? '50% 30%'}
                  />

                  <div style={{ padding: '12px 14px' }}>
                    <div
                      style={{
                        color: '#f8fafc',
                        fontWeight: 1000,
                        fontSize: '14px',
                        letterSpacing: '0.8px',
                        textTransform: 'uppercase',
                        marginBottom: '6px',
                      }}
                    >
                      {step.title}
                    </div>
                    <div style={{ color: '#cbd5e1', fontSize: '13px', lineHeight: 1.45, fontWeight: 700 }}>
                      {step.body}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          <div style={{ height: '14px' }} />

          <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
            {showSuccess ? (
              <button
                onClick={okSuccess}
                style={{
                  border: '1px solid rgba(34, 197, 94, 0.55)',
                  background: 'rgba(34, 197, 94, 0.18)',
                  color: '#e2e8f0',
                  borderRadius: '12px',
                  padding: '10px 12px',
                  fontWeight: 900,
                  cursor: 'pointer',
                }}
              >
                {SUCCESS_SCREEN.ok}
              </button>
            ) : (
              <>
                <button
                  onClick={next}
                  style={{
                    border: '1px solid rgba(96, 165, 250, 0.55)',
                    background: 'rgba(37, 99, 235, 0.25)',
                    color: '#e2e8f0',
                    borderRadius: '12px',
                    padding: '10px 12px',
                    fontWeight: 900,
                    cursor: 'pointer',
                  }}
                >
                  {step.cta}
                </button>

                <button
                  onClick={onClose}
                  style={{
                    border: '1px solid rgba(255,255,255,0.12)',
                    background: 'rgba(2,6,23,0.55)',
                    color: '#e2e8f0',
                    borderRadius: '12px',
                    padding: '10px 12px',
                    fontWeight: 900,
                    cursor: 'pointer',
                  }}
                >
                  {PAYWALL_COPY.cancelCta}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaywallModal;
