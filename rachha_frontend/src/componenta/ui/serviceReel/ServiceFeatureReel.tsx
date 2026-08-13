import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { ServiceItem, ServiceIncluded } from '../../../data/servicesData';

interface ServiceFeatureReelProps {
  topItems: ServiceItem[];
  bottomItems: ServiceIncluded[];
}

const TILE = 8;

const ROSE_MIST = '#FFF0F3';
const GOLD_1    = '#aa771c';
const GOLD_2    = '#bf953f';
const GOLD_3    = '#d4af37';
const GOLD_4    = '#f5e27a';
const GOLD_5    = '#fcf6ba';
const GOLD_RAIL = '#8a5e0e';
const DARK_TEXT = '#0e0a06';

const REEL_GRADIENT = `linear-gradient(
  180deg,
  ${GOLD_1}  0%,
  ${GOLD_2} 18%,
  ${GOLD_4} 38%,
  ${GOLD_5} 50%,
  ${GOLD_4} 62%,
  ${GOLD_2} 80%,
  ${GOLD_1} 100%
)`;

const RAIL_GRADIENT = `linear-gradient(
  180deg,
  #5a3a08 0%,
  ${GOLD_RAIL} 40%,
  ${GOLD_RAIL} 60%,
  #5a3a08 100%
)`;



// ServiceCard 
function ServiceCard({
  item, onClick, isService = true,
}: {
  item: ServiceItem | ServiceIncluded;
  onClick?: () => void;
  isService?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      disabled={!isService}
      aria-label={item.title}
      className="sfr-card"
      style={{
        position: 'relative', flexShrink: 0,
        width: 200, height: 148,
        border: isService && hovered
          ? `1.5px solid ${GOLD_4}`
          : `1.5px solid rgba(170,119,28,0.35)`,
        borderRadius: 4, overflow: 'hidden',
        background: '#0e0904', padding: 0,
        cursor: isService ? 'pointer' : 'default',
        transform: isService && hovered ? 'scale(1.055)' : 'scale(1)',
        boxShadow: isService && hovered
          ? `0 0 0 2px rgba(212,175,55,0.50), 0 0 18px rgba(212,175,55,0.22), 0 10px 36px rgba(0,0,0,0.55)`
          : '0 2px 10px rgba(0,0,0,0.35)',
        transition: 'transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease',
      }}
    >
      <img src={item.imageUrl} alt={item.title} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        objectFit: 'cover', pointerEvents: 'none', display: 'block',
      }} />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(8,5,1,0.92) 0%, rgba(8,5,1,0.25) 55%, transparent 100%)',
      }} />
      {isService && hovered && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 2, pointerEvents: 'none',
          background: `linear-gradient(90deg, transparent 0%, ${GOLD_4} 35%, ${GOLD_5} 50%, ${GOLD_4} 65%, transparent 100%)`,
        }} />
      )}
      <p style={{
        position: 'absolute', bottom: 9, left: 9, right: 9, margin: 0,
        color: '#f7ecd2', fontSize: 12.5, fontWeight: 600,
        fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif',
        letterSpacing: '0.08em', textTransform: 'uppercase',
        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        textShadow: '0 1px 8px rgba(0,0,0,1)', pointerEvents: 'none',
      }}>
        {item.title}
      </p>
    </button>
  );
}

// SprocketRow 
function SprocketRow({ direction, pos }: { direction: 'L' | 'R'; pos: 'top' | 'bottom' }) {
  const cls = direction === 'L' ? 'sfr-sp-l' : 'sfr-sp-r';
  const holes = Array.from({ length: 32 * TILE });
  return (
    <div className="sfr-sp-row" style={{
      height: 20, background: RAIL_GRADIENT,
      display: 'flex', alignItems: 'center', overflow: 'hidden',
      borderTop:    pos === 'bottom' ? '1px solid rgba(0,0,0,0.45)' : undefined,
      borderBottom: pos === 'top'    ? '1px solid rgba(0,0,0,0.45)' : undefined,
      boxShadow: pos === 'top' ? 'inset 0 2px 4px rgba(0,0,0,0.4)' : 'inset 0 -2px 4px rgba(0,0,0,0.4)',
    }}>
      <div className={cls} style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '0 14px', width: 'max-content' }}>
        {holes.map((_, i) => (
          <div key={i} style={{
            width: 13, height: 9, borderRadius: 2,
            background: '#1a0e02', border: '1px solid rgba(90,58,8,0.8)',
            flexShrink: 0, boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.8)',
          }} />
        ))}
      </div>
    </div>
  );
}

//ReelStrip 
function ReelStrip({
  items, direction, isService = true, onServiceClick, animClass,
}: {
  items: ServiceItem[] | ServiceIncluded[];
  direction: 'L' | 'R';
  isService?: boolean;
  onServiceClick?: (item: ServiceItem) => void;
  animClass: string;
}) {
  const tiled = Array.from({ length: TILE }, () => items).flat();
  return (
    <div style={{
      position: 'relative', background: REEL_GRADIENT,
      borderTop: `3px solid ${GOLD_1}`, borderBottom: `3px solid ${GOLD_1}`,
      overflow: 'hidden',
      boxShadow: 'inset 0 3px 10px rgba(0,0,0,0.30), inset 0 -3px 10px rgba(0,0,0,0.30), 0 4px 20px rgba(170,119,28,0.20)',
    }}>
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: `repeating-linear-gradient(
          180deg,
          transparent 0px, transparent 3px,
          rgba(255,255,255,0.035) 3px, rgba(255,255,255,0.035) 4px
        )`,
      }} />
      <SprocketRow direction={direction} pos="top" />
      <div className="sfr-strip-inner" style={{ position: 'relative', zIndex: 1, height: 176, overflow: 'hidden' }}>
        <div
          className={animClass}
          style={{
            position: 'absolute', top: 0, bottom: 0, left: 0,
            display: 'flex', alignItems: 'center',
            gap: 12, padding: '0 16px', width: 'max-content',
          }}
        >
          {tiled.map((item, i) => (
            <ServiceCard
              key={`${item.id}-${i}`}
              item={item}
              isService={isService}
              onClick={
                isService && onServiceClick && (item as ServiceItem).path
                  ? () => onServiceClick(item as ServiceItem)
                  : undefined
              }
            />
          ))}
        </div>
      </div>
      <SprocketRow direction={direction} pos="bottom" />
    </div>
  );
}

//  Divider 
function ReelDivider() {
  return (
    <div className="sfr-divider" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, padding: '14px 0' }}>
      <div style={{ flex: 1, maxWidth: 200, height: '0.5px', background: `linear-gradient(to right, transparent, rgba(26,18,8,0.18))` }} />
      <span style={{
        fontSize: 15, fontWeight: 600, letterSpacing: '0.26em',
        fontFamily: '"Cormorant Garamond", Georgia, serif',
        color: DARK_TEXT, textTransform: 'uppercase',
      }}>
        Also Included
      </span>
      <div style={{ flex: 1, maxWidth: 200, height: '0.5px', background: `linear-gradient(to left, transparent, rgba(26,18,8,0.18))` }} />
    </div>
  );
}

//  Main
export default function ServiceFeatureReel({ topItems, bottomItems }: ServiceFeatureReelProps) {
  const navigate = useNavigate();
  const handleServiceClick = (item: ServiceItem) => { if (item.path) navigate(item.path); };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap');

        @keyframes sfrLeft  { from { transform: translateX(0);    } to { transform: translateX(-50%); } }
        @keyframes sfrRight { from { transform: translateX(-50%); } to { transform: translateX(0);    } }
        @keyframes sfrSpL   { from { transform: translateX(0);    } to { transform: translateX(-50%); } }
        @keyframes sfrSpR   { from { transform: translateX(-50%); } to { transform: translateX(0);    } }

        .sfr-top  { animation: sfrLeft  70s  linear infinite; will-change: transform; }
        .sfr-bot  { animation: sfrRight 150s linear infinite; will-change: transform; }
        .sfr-sp-l { animation: sfrSpL   28s  linear infinite; }
        .sfr-sp-r { animation: sfrSpR   60s  linear infinite; }

        .sfr-reel-wrap:hover .sfr-top  { animation-duration: 340s; }
        .sfr-reel-wrap:hover .sfr-bot  { animation-duration: 600s; }
        .sfr-reel-wrap:hover .sfr-sp-l { animation-duration: 136s; }
        .sfr-reel-wrap:hover .sfr-sp-r { animation-duration: 240s; }

        @media (max-width: 640px) {
          .sfr-reel-wrap {
            mask-image: none !important;
            -webkit-mask-image: none !important;
          }
          .sfr-section {
            padding-top: 28px !important;
            padding-bottom: 32px !important;
          }
          .sfr-strip-inner {
            height: 126px !important;
          }
          .sfr-card {
            width: 150px !important;
            height: 110px !important;
          }
          .sfr-sp-row {
            height: 14px !important;
          }
          .sfr-sp-row > div {
            gap: 10px !important;
            padding: 0 8px !important;
          }
          .sfr-sp-row > div > div {
            width: 9px !important;
            height: 6px !important;
          }
          .sfr-divider {
            padding-top: 8px !important;
            padding-bottom: 8px !important;
          }
        }
      `}</style>

      <div className="sfr-section" style={{ background: ROSE_MIST, paddingTop: 52, paddingBottom: 56 }}>

        <div style={{ textAlign: 'center', marginBottom: 36, padding: '0 24px' }}>
          <p style={{
            margin: '0 0 12px', fontSize: 16, letterSpacing: '0.26em',
            textTransform: 'uppercase', color: DARK_TEXT,
            fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 600,
          }}>
            What We Offer
          </p>
          <h2 className="gold-title-shine" style={{
            margin: 0,
            fontSize: 'clamp(34px, 5.5vw, 52px)', fontWeight: 600,
            fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif',
            color: GOLD_3, letterSpacing: '0.10em',
            textTransform: 'uppercase', lineHeight: 1.12,
          }}>
            Our Services
          </h2>
        </div>

        <div style={{
          position: 'relative',
          maskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)',
        }} className="sfr-reel-wrap">
          <ReelStrip items={topItems} direction="L" isService onServiceClick={handleServiceClick} animClass="sfr-top" />
          <ReelDivider />
          <ReelStrip items={bottomItems} direction="R" isService={false} animClass="sfr-bot" />
        </div>

        <p style={{
          textAlign: 'center', margin: '22px 0 0',
          fontSize: 13, letterSpacing: '0.20em', textTransform: 'uppercase',
          color: DARK_TEXT, opacity: 0.70,
          fontFamily: '"Cormorant Garamond", Georgia, serif',
        }}>
          Hover to slow · Click any service to explore
        </p>
      </div>
    </>
  );
}
