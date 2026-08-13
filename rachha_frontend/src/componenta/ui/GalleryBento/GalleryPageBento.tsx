import { useState, useEffect, useCallback } from "react";
import { Gallery_Data as DEMO_ITEMS } from "../../../data/GalleryData";
import type { GalleryData as GalleryItem } from "../../../data/GalleryData";
import GalleryPageBentoMobile from "./GalleryPageBentoMobile";

const GRID_CELLS = [
  { col: "1 / 2", row: "1 / 3", cols: [1],    rows: [1, 2]       },
  { col: "2 / 3", row: "1 / 2", cols: [2],    rows: [1]          },
  { col: "3 / 4", row: "1 / 2", cols: [3],    rows: [1]          },
  { col: "4 / 5", row: "1 / 4", cols: [4],    rows: [1, 2, 3]    },
  { col: "2 / 4", row: "2 / 4", cols: [2, 3], rows: [2, 3]       },
  { col: "1 / 2", row: "3 / 5", cols: [1],    rows: [3, 4]       },
  { col: "2 / 3", row: "4 / 5", cols: [2],    rows: [4]          },
  { col: "3 / 4", row: "4 / 5", cols: [3],    rows: [4]          },
  { col: "4 / 5", row: "4 / 7", cols: [4],    rows: [4, 5, 6]    },
  { col: "2 / 3", row: "5 / 6", cols: [2],    rows: [5]          },
  { col: "1 / 2", row: "5 / 7", cols: [1],    rows: [5, 6]       },
  { col: "3 / 4", row: "5 / 6", cols: [3],    rows: [5]          },
  { col: "2 / 4", row: "6 / 7", cols: [2, 3], rows: [6]          },
  { col: "1 / 2", row: "7 / 9", cols: [1],    rows: [7, 8]       },
  { col: "2 / 3", row: "7 / 8", cols: [2],    rows: [7]          },
  { col: "3 / 4", row: "7 / 8", cols: [3],    rows: [7]          },
  { col: "4 / 5", row: "7 / 9", cols: [4],    rows: [7, 8]       },
  { col: "2 / 4", row: "8 / 9", cols: [2, 3], rows: [8]          },
];

const EXPAND_FR = 1.45;

function computeTrackFrs(hoveredCell: (typeof GRID_CELLS)[number] | null) {
  const DEFAULT = { cols: "1fr 1fr 1fr 1fr", rows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr" };
  if (!hoveredCell) return DEFAULT;

  const { cols: expandedCols, rows: expandedRows } = hoveredCell;

  const colFrs = [1, 2, 3, 4].map((c) => {
    if (expandedCols.includes(c)) return EXPAND_FR;
    const shrink = (4 - EXPAND_FR * expandedCols.length) / (4 - expandedCols.length);
    return Math.max(0.55, shrink);
  });

  const rowFrs = [1, 2, 3, 4, 5, 6, 7, 8].map((r) => {
    if (expandedRows.includes(r)) return EXPAND_FR;
    const shrink = (8 - EXPAND_FR * expandedRows.length) / (8 - expandedRows.length);
    return Math.max(0.55, shrink);
  });

  return {
    cols: colFrs.map((f) => `${f}fr`).join(" "),
    rows: rowFrs.map((f) => `${f}fr`).join(" "),
  };
}

interface BentoCellProps {
  item: GalleryItem;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  gridArea: (typeof GRID_CELLS)[number];
}

function BentoCell({ item, isHovered, onHover, onLeave, gridArea }: BentoCellProps) {
  const [currentImg, setCurrentImg] = useState<string | undefined>(item.imageUrl);
  const [nextImg, setNextImg] = useState<string | undefined>(item.imageUrl);
  const [fading, setFading] = useState(false);
  const isVideo = Boolean(item.videoUrl);

  useEffect(() => {
    if (item.imageUrl === currentImg) return;
    setNextImg(item.imageUrl);
    setFading(true);
    const t = setTimeout(() => {
      setCurrentImg(item.imageUrl);
      setFading(false);
    }, 700);
    return () => clearTimeout(t);
  }, [item.imageUrl]);

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        gridColumn: gridArea.col,
        gridRow: gridArea.row,
        borderRadius: isHovered ? "20px" : "16px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        zIndex: isHovered ? 2 : 1,
        transition: "border-radius 0.4s ease",
      }}
    >
      {/* Media wrapper with brightness transition */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transition: "filter 0.5s ease",
          filter: isHovered ? "brightness(0.65)" : "brightness(1)",
        }}
      >
        {isVideo ? (
          <video
            src={item.videoUrl}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <>
            <img
              src={currentImg}
              alt={item.title}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <img
              src={nextImg}
              alt=""
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: fading ? 1 : 0,
                transition: fading ? "opacity 0.7s ease" : "none",
                pointerEvents: "none",
              }}
            />
          </>
        )}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "14px 16px 16px",
          transform: isHovered ? "translateY(0)" : "translateY(4px)",
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(10px, 1.2vw, 17px)",
            fontWeight: 400,
            color: "#D4AF37",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            textShadow: "0 2px 8px rgba(0,0,0,0.7), 0 0 4px rgba(0,0,0,0.5)",
          }}
        >
          {item.title}
        </p>
        <p
          style={{
            margin: "3px 0 0",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(8px, 0.75vw, 11px)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.45,
            maxWidth: "28ch",
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateY(0)" : "translateY(6px)",
            transition: isHovered
              ? "opacity 0.35s ease 0.08s, transform 0.35s ease 0.08s"
              : "opacity 0.2s ease, transform 0.2s ease",
          }}
        >
          {item.description}
        </p>
      </div>

    </div>
  );
}

function DesktopBento({
  items = DEMO_ITEMS as GalleryItem[],
  cycleInterval = 3500,
}: {
  items?: GalleryItem[];
  cycleInterval?: number;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [offsets, setOffsets] = useState(
    () => Array.from({ length: 18 }, (_, i) => i % (items?.length || DEMO_ITEMS.length))
  );

  const source = (items && items.length > 0) ? items : (DEMO_ITEMS as GalleryItem[]);
  const pool = source.length < 18
    ? [...Array(Math.ceil(18 / source.length))].flatMap(() => source).slice(0, 40)
    : source;

  const advance = useCallback(() => {
    setOffsets((prev) => {
      const next = [...prev];
      const idx = Math.floor(Math.random() * 18);
      next[idx] = (next[idx] + 1) % pool.length;
      return next;
    });
  }, [pool.length]);

  useEffect(() => {
    const id = setInterval(advance, cycleInterval);
    return () => clearInterval(id);
  }, [advance, cycleInterval]);

  const hoveredCell = hoveredIndex !== null ? GRID_CELLS[hoveredIndex] : null;
  const { cols: gridCols, rows: gridRows } = computeTrackFrs(hoveredCell);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <section
        style={{
          width: "100%",
          minHeight: "180svh",
          padding: "clamp(7px, 1.2vw, 14px)",
          boxSizing: "border-box",
          display: "grid",
          gridTemplateColumns: gridCols,
          gridTemplateRows: gridRows,
          gap: "clamp(5px, 0.8vw, 10px)",
          transition:
            "grid-template-columns 0.42s cubic-bezier(0.4, 0, 0.2, 1), grid-template-rows 0.42s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {GRID_CELLS.map((area, i) => (
          <BentoCell
            key={i}
            item={pool[offsets[i] % pool.length]}
            isHovered={hoveredIndex === i}
            onHover={() => setHoveredIndex(i)}
            onLeave={() => setHoveredIndex(null)}
            gridArea={area}
          />
        ))}
      </section>
    </>
  );
}

export default function GalleryPageBento({
  items = DEMO_ITEMS as GalleryItem[],
  cycleInterval = 3500,
}: {
  items?: GalleryItem[];
  cycleInterval?: number;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 430);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      {isMobile ? (
        <GalleryPageBentoMobile items={items} />
      ) : (
        <DesktopBento items={items} cycleInterval={cycleInterval} />
      )}
    </>
  );
}
