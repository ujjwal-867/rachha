
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
import { useState } from 'react';
import { easeInOut } from 'motion/react';
import { Component } from 'lucide-react'

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

  // Generate random positions for each bubble
  const getRandomPosition = (index: number) => {
    // Hexagonal packing for even spacing
    // This creates a honeycomb pattern with equal gaps
    
    const gap = smallSize * 0.15; // Gap between bubbles
    const spacing = smallSize + gap;
    
    // Hexagonal grid arrangement
    const positions = [];
    let currentIndex = 0;
    
    // Center bubble
    positions.push({ x: 0, y: 0 });
    
    // Create rings around center
    for (let ring = 1; ring <= 3; ring++) {
      const bubblesInRing = ring * 6;
      const radius = ring * spacing;
      
      for (let i = 0; i < bubblesInRing; i++) {
        const angle = (i / bubblesInRing) * Math.PI * 2;
        positions.push({
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
        });
      }
    }
    
    // Get position for this bubble
    const pos = positions[index] || positions[positions.length - 1];
    
    return {
      top: `calc(50% + ${pos.y}px)`,
      left: `calc(50% + ${pos.x}px)`,
    };
  };

  // Floating animation variants
  const floatingAnimation = (index: number) => ({
    y: [0, -20, 0],
    x: [0, index % 2 === 0 ? 10 : -10, 0],
    transition: {
      duration: 3 + (index % 3),
      repeat: Infinity,
      ease: easeInOut,
    },
  });

  return (
    <div className="inset-0 pointer-events-none">
      {bubbles.map((bubble, index) => {
        const position = getRandomPosition(index);
        const isHovered = hoveredIndex === index;

        return (
          <motion.div
            key={index}
            className="absolute pointer-events-auto cursor-pointer"
            style={{
              top: position.top,
              left: position.left,
              zIndex: isHovered ? 50 : 10,
            }}
            animate={floatingAnimation(index)}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <motion.div
              className="relative rounded-full overflow-hidden shadow-lg"
              animate={{
                width: isHovered ? largeSize : smallSize,
                height: isHovered ? largeSize : smallSize,
                scale: isHovered ? 1 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
            >
              {/* Image Container */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: isHovered ? 1 : 1.2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
              >
                <img
                  src={bubble.image}
                  alt={bubble.text} 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Overlay with gradient and text */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center p-6"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-white text-center font-medium text-xs leading-tight break-words">

                  {bubble.text}
                </p>
              </motion.div>

              {/* Glowing border on hover */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/50"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}