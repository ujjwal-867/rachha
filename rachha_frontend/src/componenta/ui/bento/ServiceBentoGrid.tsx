import { useState, useEffect } from 'react';
import { FloatingBubbles, type BubbleData } from '../button/FloatingBubbles';

interface ServiceBentoGridProps {
  title: string;
  description: string;
  mediaItems: string[]; // URLs for images/videos
  servicesImages: BubbleData[]; // For the floating bubbles component
}

export function ServiceBentoGrid({
  title,
  description,
  mediaItems,
  servicesImages,
}: ServiceBentoGridProps) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    if (mediaItems.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [mediaItems.length]);

  return (
    <section className="relative z-10 bg-roseMist text-charcoal">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[2fr_1fr] md:grid-rows-[auto_auto] md:gap-6 mb-6">
          {/* Left Box - Title and Description */}
          <div className="rounded-[32px] bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-md border border-white/40 p-6 md:p-10 flex flex-col justify-center hover:shadow-2xl hover:shadow-royalGold/10 transition-shadow duration-300">
            <h1 className="gold-title-shine font-serif text-4xl md:text-5xl font-thin tracking-[0.1em] text-charcoal mb-4 uppercase ">
              {title}
            </h1>
            <p className="font-sans text-base md:text-lg tracking-[0.1em] leading-relaxed text-charcoal/80 transform transition-all duration-700 delay-200">
              {description}
            </p>
          </div>

          {/* Right Box - Image/Video Carousel spanning both rows */}
          <div className="md:row-span-2 rounded-[32px] bg-gradient-to-br from-royalGold/10 to-royalGold/5 backdrop-blur-md border border-royalGold/20 overflow-hidden min-h-[420px] md:min-h-[660px] hover:shadow-2xl hover:shadow-royalGold/20 transition-all duration-500 group">
            <div className="relative w-full h-full">
              <img
                src={mediaItems[currentMediaIndex]}
                alt={`Media ${currentMediaIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />

              {/* Enhanced overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {mediaItems.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {mediaItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMediaIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentMediaIndex
                          ? 'bg-royalGold w-6 shadow-lg shadow-royalGold/50'
                          : 'bg-white/50 hover:bg-white/70 hover:scale-110'
                      }`}
                      aria-label={`Show image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Bottom Section: Services Box with Floating Bubbles, aligned under left content */}
          <div className="rounded-[32px] bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-md border border-white/40 p-4 md:p-8 overflow-visible">
            <h2 className="gold-title-shine font-serif text-xl md:text-2xl font-thin tracking-[0.1em] text-charcoal mb-6 uppercase text-center ">
              Services Included
            </h2>

            <div className="relative w-full h-[480px] md:h-[540px] overflow-visible">
              <FloatingBubbles
                bubbles={servicesImages}
                smallSize={100}
                largeSize={220}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
