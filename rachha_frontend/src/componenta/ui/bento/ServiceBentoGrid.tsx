import { useState, useEffect } from 'react';
import VerticalGallery from './VerticalGallery';

interface GalleryItem {
  title: string;
  url: string;
}

interface ServiceBentoGridProps {
  title: string;
  description: string;
  mediaItems: string[];
  servicesImages: GalleryItem[];
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
    }, 5000);

    return () => clearInterval(interval);
  }, [mediaItems.length]);

  return (
    <section className="relative z-10 bg-roseMist text-charcoal">
      <style>{`
        @media (orientation: landscape) and (max-height: 420px) {
          .bento-title { font-size: 18px !important; }
          .bento-desc { font-size: 11px !important; }
          .bento-box { padding-top: 4px !important; padding-bottom: 4px !important; min-height: 120px !important; }
        }
      `}</style>
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-[2fr_1fr] md:grid-rows-[auto_auto] md:gap-4">
          {/* Left Box - Title and Description */}
          <div className="bento-box h-auto min-h-[180px] px-6 py-4 lg:p-10 rounded-[32px] bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-md border border-white/40 flex flex-col justify-center hover:shadow-2xl hover:shadow-royalGold/10 transition-shadow duration-300 overflow-hidden">
            <h1 className="bento-title gold-title-shine font-serif text-2xl mb-2 lg:text-5xl lg:mb-4 font-thin tracking-[0.1em] text-charcoal uppercase ">
              {title}
            </h1>
            <p className="bento-desc font-sans text-sm lg:text-lg tracking-[0.1em] leading-relaxed text-charcoal/80 transform transition-all duration-700 delay-200">
              {description}
            </p>
          </div>

          {/* Right Box - Services Included spanning both rows */}
          <div className="md:row-span-2 rounded-[32px] bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-md border border-white/40 p-4 md:p-8 overflow-hidden hover:shadow-2xl hover:shadow-royalGold/10 transition-shadow duration-300">
            <h2 className="gold-title-shine font-serif text-xl md:text-2xl font-thin tracking-[0.1em] text-charcoal mb-6 uppercase text-center ">
              Services Included
            </h2>

            <div className="flex justify-center">
              <VerticalGallery items={servicesImages} />
            </div>
          </div>

          {/* Bottom Section: Image/Video Carousel under description */}
          <div className="h-[260px] md:h-[340px] rounded-[32px] bg-gradient-to-br from-royalGold/10 to-royalGold/5 backdrop-blur-md border border-royalGold/20 overflow-hidden hover:shadow-2xl hover:shadow-royalGold/20 transition-all duration-500 group">
            <div className="relative w-full h-full">
              <img
                src={mediaItems[currentMediaIndex]}
                alt={`Media ${currentMediaIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />

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
        </div>
      </div>
    </section>
  );
}
