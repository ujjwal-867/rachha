
// HOW TO USE THIS UI COMPONEN

//       const sampleBubbles: BubbleData[] = [
//   {
//     image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NjM4NTI3MXww&ixlib=rb-4.1.0&q=80&w=1080',
//     text: 'Professional Excellence',
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1622626426572-c268eb006092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc3NjM5NDg3OXww&ixlib=rb-4.1.0&q=80&w=1080',
//     text: 'Business Innovation',
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1598439473183-42c9301db5dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBsYW5kc2NhcGUlMjBtb3VudGFpbnxlbnwxfHx8fDE3NzYzNTI1MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
//     text: 'Mountain Adventures',
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1598399929533-847def01aa41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMGJlYWNoJTIwc3Vuc2V0fGVufDF8fHx8MTc3NjM3MDYyOHww&ixlib=rb-4.1.0&q=80&w=1080',
//     text: 'Ocean Serenity',
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1616130007484-24a2c05fdfbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc2MzgyMjc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
//     text: 'Coffee & Creativity',
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1652876256405-3902cc201b22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBtb2Rlcm4lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzYzMTE3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
//     text: 'Modern Architecture',
//   },
// ];


//                     <FloatingBubbles bubbles={sampleBubbles} smallSize={80} largeSize={220} />


// smallSize: The default diameter of the bubbles when they're just floating around (not hovered). Currently set to 80px in your App.tsx

// largeSize: The diameter the bubble grows to when you hover over it. Currently set to 220px in your App.tsx




import { motion } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { easeInOut } from 'motion/react';

export interface BubbleData {
  image: string;
  text: string;
}

interface FloatingBubblesProps {
  bubbles: BubbleData[];
  smallSize?: number;
  largeSize?: number;
}

export function FloatingBubbles({ 
  bubbles, 
  smallSize = 64, 
  largeSize = 200 
}: FloatingBubblesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [containerDimensions, setContainerDimensions] = useState({ width: 400, height: 300 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const measureContainer = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerDimensions({
          width: Math.max(rect.width, 300),
          height: Math.max(rect.height, 200),
        });
      }
    };

    const timer = setTimeout(measureContainer, 100);
    window.addEventListener('resize', measureContainer);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', measureContainer);
    };
  }, []);

  const calculateBubbleLayout = () => {
    const bubbleCount = bubbles.length;
    const { width, height } = containerDimensions;

    let cols = Math.ceil(Math.sqrt(bubbleCount));
    let rows = Math.ceil(bubbleCount / cols);

    if (bubbleCount === 6) {
      cols = 3;
      rows = 2;
    } else if (bubbleCount <= 5) {
      cols = bubbleCount;
      rows = 1;
    } else if (bubbleCount <= 9) {
      cols = 3;
      rows = 3;
    } else {
      cols = Math.ceil(Math.sqrt(bubbleCount));
      rows = Math.ceil(bubbleCount / cols);
    }

    const marginX = width * 0.05;
    const marginY = height * 0.1;
    const usableWidth = width - marginX * 2;
    const usableHeight = height - marginY * 2;

    let calculatedSmallSize, calculatedLargeSize;
    
    if (bubbleCount <= 5) {
      const maxBubbleWidth = usableWidth / cols;
      const maxSize = maxBubbleWidth * 0.9;
      calculatedSmallSize = Math.max(50, Math.min(smallSize, maxSize));
      calculatedLargeSize = Math.min(largeSize, maxSize * 1.2);
    } else {
      const maxBubbleWidth = usableWidth / cols;
      const maxBubbleHeight = usableHeight / rows;
      const maxSize = Math.min(maxBubbleWidth, maxBubbleHeight) * 0.75;
      
      calculatedSmallSize = Math.max(50, Math.min(smallSize, maxSize * 0.95));
      calculatedLargeSize = Math.min(largeSize, maxSize * 1.3);
    }

    return {
      cols,
      rows,
      calculatedSmallSize,
      calculatedLargeSize,
      marginX,
      marginY,
      usableWidth,
      usableHeight,
    };
  };

  const layout = calculateBubbleLayout();

  const getBubblePosition = (index: number) => {
    const col = index % layout.cols;
    const row = Math.floor(index / layout.cols);

    const cellWidth = layout.usableWidth / layout.cols;
    const cellHeight = layout.usableHeight / layout.rows;

    const gridStartX = -layout.usableWidth / 2;
    const gridStartY = -layout.usableHeight / 2;
    
    const x = gridStartX + cellWidth * col + cellWidth / 2;
    const y = gridStartY + cellHeight * row + cellHeight / 2;

    return {
      top: `calc(50% + ${y}px)`,
      left: `calc(50% + ${x}px)`,
    };
  };

  const floatingAnimation = (index: number) => ({
    y: [0, -15, 0],
    x: [0, index % 2 === 0 ? 10 : -10, 0],
    rotate: [0, index % 2 === 0 ? 3 : -3, 0],
    transition: {
      duration: 4 + (index % 2),
      repeat: Infinity,
      ease: easeInOut,
      delay: index * 0.15,
    },
  });

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div 
        ref={containerRef} 
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: 'translate(-50px, -50px)',
        }}
      >
        {bubbles.map((bubble, index) => {
          const position = getBubblePosition(index);
          const isHovered = hoveredIndex === index;

          return (
            <motion.div
              key={index}
              className="absolute pointer-events-auto cursor-pointer"
              style={{
                top: position.top,
                left: position.left,
                zIndex: isHovered ? 50 : 10,
                transform: 'translate(-80%, -80%)',
                // Flex column: bubble on top, label below — always perfectly centred
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              animate={floatingAnimation(index)}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* ── Bubble ── */}
              <motion.div
                className="relative rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 flex-shrink-0"
                animate={{
                  width: isHovered ? layout.calculatedLargeSize : layout.calculatedSmallSize,
                  height: isHovered ? layout.calculatedLargeSize : layout.calculatedSmallSize,
                  boxShadow: isHovered
                    ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                    : '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                {/* Image */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: isHovered ? 1.1 : 1.3,
                    filter: isHovered ? 'brightness(1.1) contrast(1.1)' : 'brightness(1) contrast(1)',
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  <img
                    src={bubble.image}
                    alt={bubble.text}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </motion.div>

                {/* Watermark overlay on small bubble */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end justify-center p-2 md:p-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 0 : 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-serif text-white text-center font-medium text-xs leading-tight tracking-[0.05em] uppercase drop-shadow-lg">
                    {bubble.text}
                  </p>
                </motion.div>

                {/* Gold glowing border */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2"
                  style={{
                    borderColor: isHovered ? 'rgba(184, 134, 11, 0.8)' : 'rgba(255, 255, 255, 0.3)',
                    boxShadow: isHovered ? '0 0 30px rgba(184, 134, 11, 0.4)' : 'none',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Inner glow */}
                <motion.div
                  className="absolute inset-2 rounded-full"
                  style={{
                    background: isHovered
                      ? 'radial-gradient(circle, rgba(184, 134, 11, 0.1) 0%, transparent 70%)'
                      : 'none',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>

              {/* ── Title label ──
                  Sits in normal flex flow directly below the bubble, so it is
                  always perfectly centred under the image with zero extra math.
                  - whiteSpace: nowrap  → always single line, no wrapping
                  - width: fit-content  → pill shrinks/grows to text length exactly
                  - maxWidth: 340px     → safety cap for extremely long titles
              */}
              <motion.div
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  borderRadius: '6px',
                  width: 'fit-content',
                  maxWidth: '340px',
                  whiteSpace: 'nowrap',
                  alignSelf: 'center',
                  pointerEvents: 'none',
                  overflow: 'hidden',
                }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0.8,
                  marginTop: isHovered ? 10 : 0,
                  paddingTop: isHovered ? 4 : 0,
                  paddingBottom: isHovered ? 4 : 0,
                  paddingLeft: isHovered ? 12 : 0,
                  paddingRight: isHovered ? 12 : 0,
                  maxHeight: isHovered ? 48 : 0,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <p className="gold-title-shine font-serif text-sm md:text-base font-medium tracking-[0.05em] uppercase m-0 leading-normal">
                  {bubble.text}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
