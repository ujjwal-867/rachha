import { useEffect, useRef, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { ServiceItem, ServiceIncluded } from '../../../data/servicesData';

interface ServiceFeatureReelProps {
  topItems: ServiceItem[];
  bottomItems: ServiceIncluded[];
}

const TILE = 6;

// ─── Color palette ─────────────────────────────────────────────────────────────────
//
// Cinematic dark theme — near-black reel body, gold sprockets + border accents,
// dark card frames so images read clearly against the reel.
//
// To change the accent color just update GOLD below.
// Everything else derives from it or from pure near-blacks.
//
const GOLD = '#c19a2e';
const GOLD_DIM  = 'rgba(193,154,46,0.30)';
const GOLD_MID  = 'rgba(193,154,46,0.55)';
const GOLD_FULL = 'rgba(193,154,46,0.90)';

const P = {
  // Film strip body
  reelBg:          '#111111',
  reelBorderColor: GOLD,
  reelBorderWidth: '3px',

  // Sprocket rail rows
  railBg:          '#090909',
  railDivider:     `1px solid ${GOLD_DIM}`,

  // Sprocket holes — gold fills, dark stroke so they look punched-out
  sprocketBg:      GOLD,
  sprocketBorder:  '1px solid rgba(0,0,0,0.5)',

  // Card
  cardBg:          '#0d0d0d',
  cardBorderIdle:  `1.5px solid ${GOLD_DIM}`,
  cardBorderHover: `1.5px solid ${GOLD_FULL}`,
  cardShadowHover: `0 0 0 2px ${GOLD_MID}, 0 8px 28px rgba(0,0,0,0.70)`,

  // Image overlay
  overlayGrad: 'linear-gradient(to top, rgba(0,0,0,0.86) 0%, rgba(0,0,0,0.26) 52%, transparent 100%)',

  // Title
  titleColor:  '#ffffff',
  titleShadow: '0 1px 6px rgba(0,0,0,0.95)',
};

// ─── ServiceCard ───────────────────────────────────────────────────────────────────
function ServiceCard({
  item,
  onClick,
  isService = true,
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
      style={{
        position: 'relative',
        flexShrink: 0,
        width: 184,
        height: 136,
        border: isService && hovered ? P.cardBorderHover : P.cardBorderIdle,
        borderRadius: 4,
        overflow: 'hidden',
        background: P.cardBg,
        padding: 0,
        cursor: isService ? 'pointer' : 'default',
        transform: isService && hovered ? 'scale(1.07)' : 'scale(1)',
        boxShadow: isService && hovered ? P.cardShadowHover : 'none',
        transition: 'transform 0.18s, box-shadow 0.18s, border-color 0.18s',
      }}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none',
          display: 'block',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: P.overlayGrad,
          pointerEvents: 'none',
        }}
      />

      <p
        style={{
          position: 'absolute',
          bottom: 8,
          left: 8,
          right: 8,
          color: P.titleColor,
          fontSize: 13,
          fontWeight: 700,
          fontFamily: 'Georgia, serif',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          textShadow: P.titleShadow,
          margin: 0,
          pointerEvents: 'none',
        }}
      >
        {item.title}
      </p>
    </button>
  );
}

// ─── SprocketRow ───────────────────────────────────────────────────────────────────
function SprocketRow({ direction, border }: { direction: 'L' | 'R'; border: 'top' | 'bottom' }) {
  const cls = direction === 'L' ? 'svc-go-left-sp' : 'svc-go-right-sp';
  const holes = Array.from({ length: 20 * TILE });

  return (
    <div
      style={{
        height: 22,
        background: P.railBg,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        borderTop:    border === 'bottom' ? P.railDivider : undefined,
        borderBottom: border === 'top'    ? P.railDivider : undefined,
      }}
    >
      <div
        className={cls}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          padding: '0 18px',
          width: 'max-content',
        }}
      >
        {holes.map((_, i) => (
          <div
            key={i}
            style={{
              width: 14,
              height: 10,
              borderRadius: 2,
              background: P.sprocketBg,
              border: P.sprocketBorder,
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── ReelStrip ─────────────────────────────────────────────────────────────────────
function ReelStrip({
  items,
  direction,
  isService = true,
  onServiceClick,
}: {
  items: ServiceItem[] | ServiceIncluded[];
  direction: 'L' | 'R';
  isService?: boolean;
  onServiceClick?: (item: ServiceItem) => void;
}) {
  const STRIP_HEIGHT = 212;
  const trackCls = direction === 'L' ? 'svc-reel-left' : 'svc-reel-right';
  const tiled = Array.from({ length: TILE }, () => items).flat();

  return (
    <div
      style={{
        position: 'relative',
        height: STRIP_HEIGHT,
        background: P.reelBg,
        borderTop:    `${P.reelBorderWidth} solid ${P.reelBorderColor}`,
        borderBottom: `${P.reelBorderWidth} solid ${P.reelBorderColor}`,
        overflow: 'hidden',
      }}
    >
      <SprocketRow direction={direction} border="top" />

      <div
        className={trackCls}
        style={{
          position: 'absolute',
          top: 24,
          bottom: 24,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          padding: '0 18px',
          width: 'max-content',
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

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <SprocketRow direction={direction} border="bottom" />
      </div>
    </div>
  );
}


export default function ServiceFeatureReel({
  topItems,
  bottomItems,
}: ServiceFeatureReelProps) {
  const SCENE_HEIGHT = 560;
  const STRIP_HEIGHT = 212;
  const ANGLE_DEG   = 11;
  const ANGLE_RAD   = (ANGLE_DEG * Math.PI) / 180;

  const sceneRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [clip, setClip] = useState({ left: 40, right: 60 });

  const cy_A = SCENE_HEIGHT / 2 - STRIP_HEIGHT / 2 - 10;
  const cy_B = SCENE_HEIGHT / 2 - STRIP_HEIGHT / 2 + 10;

  const computeClip = useCallback(() => {
    if (!sceneRef.current) return;
    const W = sceneRef.current.offsetWidth;
    const totalH = STRIP_HEIGHT + 4;
    const aCy = cy_A + STRIP_HEIGHT / 2;
    const bCy = cy_B + STRIP_HEIGHT / 2;
    const dy   = aCy - bCy;
    const dtan = Math.tan(-ANGLE_RAD) - Math.tan(ANGLE_RAD);
    if (Math.abs(dtan) < 0.0001) return;
    const dx1  = (-totalH - dy) / dtan;
    const dx2  = ( totalH - dy) / dtan;
    const xL   = Math.min(dx1, dx2) + W / 2;
    const xR   = Math.max(dx1, dx2) + W / 2;
    const rW   = 1.68 * W;
    const rLeft = -0.34 * W;
    setClip({
      left:  ((xL - rLeft) / rW) * 100,
      right: ((xR - rLeft) / rW) * 100,
    });
  }, [cy_A, cy_B, ANGLE_RAD, STRIP_HEIGHT]);

  useEffect(() => {
    computeClip();
    const ro = new ResizeObserver(computeClip);
    if (sceneRef.current) ro.observe(sceneRef.current);
    return () => ro.disconnect();
  }, [computeClip]);

  const reelBase: React.CSSProperties = {
    position: 'absolute',
    left: '-34%',
    width: '168%',
    transformOrigin: 'center center',
  };

  const handleServiceClick = (item: ServiceItem) => {
    if (item.path) navigate(item.path);
  };

  return (
    <>
      <style>{`
        @keyframes svcReelLeft  { from { transform: translateX(0);    } to { transform: translateX(-50%); } }
        @keyframes svcReelRight { from { transform: translateX(-50%); } to { transform: translateX(0);    } }
        @keyframes svcSpLeft    { from { transform: translateX(0);    } to { transform: translateX(-50%); } }
        @keyframes svcSpRight   { from { transform: translateX(-50%); } to { transform: translateX(0);    } }

        .svc-reel-left    { animation: svcReelLeft  40s linear infinite; will-change: transform; }
        .svc-reel-right   { animation: svcReelRight 40s linear infinite; will-change: transform; }
        .svc-go-left-sp   { animation: svcSpLeft    18s linear infinite; }
        .svc-go-right-sp  { animation: svcSpRight   18s linear infinite; }
      `}</style>

      <div
        ref={sceneRef}
        style={{
          position: 'relative',
          width: '100vw',
          height: SCENE_HEIGHT,
          overflow: 'hidden',
          background: 'transparent',
        }}
      >
        {/* Reel A — top strip, clickable services, z=6 */}
        <div style={{ ...reelBase, top: cy_A, transform: `rotate(${-ANGLE_DEG}deg)`, zIndex: 6 }}>
          <ReelStrip items={topItems} direction="L" isService onServiceClick={handleServiceClick} />
        </div>

        {/* Reel B — bottom strip, decorative, z=1 */}
        <div style={{ ...reelBase, top: cy_B, transform: `rotate(${ANGLE_DEG}deg)`, zIndex: 1 }}>
          <ReelStrip items={bottomItems} direction="R" isService={false} />
        </div>

        {/* Reel A clone — clipped to crossing zone, weaves over B at center, z=8 */}
        <div
          style={{
            ...reelBase,
            top: cy_A,
            transform: `rotate(${-ANGLE_DEG}deg)`,
            zIndex: 8,
            clipPath: `polygon(${clip.left.toFixed(2)}% 0%, ${clip.right.toFixed(2)}% 0%, ${clip.right.toFixed(2)}% 100%, ${clip.left.toFixed(2)}% 100%)`,
          }}
        >
          <ReelStrip items={topItems} direction="L" isService onServiceClick={handleServiceClick} />
        </div>
      </div>
    </>
  );
}
