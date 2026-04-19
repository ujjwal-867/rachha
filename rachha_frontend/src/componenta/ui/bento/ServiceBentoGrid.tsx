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
  const [viewportWidth, setViewportWidth] = useState<number>(typeof window === 'undefined' ? 1200 : window.innerWidth);

  useEffect(() => {
    if (mediaItems.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [mediaItems.length]);

  useEffect(() => {
    const updateWidth = () => setViewportWidth(window.innerWidth);
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const serviceColumns = viewportWidth < 640 ? 2 : 3;

  const getEstimatedColumns = () => {
    const count = servicesImages.length;
    if (count <= 1) return 1;
    if (count === 2) return 2;
    return Math.min(serviceColumns, count);
  };

  const estimatedColumns = getEstimatedColumns();
  const estimatedRows = Math.max(1, Math.ceil(servicesImages.length / Math.max(estimatedColumns, 1)));

  const bubbleHeightClass = (() => {
    if (estimatedRows <= 1) return 'min-h-[170px] md:min-h-[210px]';
    if (estimatedRows === 2) return 'min-h-[240px] md:min-h-[300px]';
    if (estimatedRows === 3) return 'min-h-[310px] md:min-h-[380px]';
    if (estimatedRows === 4) return 'min-h-[380px] md:min-h-[460px]';
    return 'min-h-[440px] md:min-h-[530px]';
  })();

  const imageHeightClass = (() => {
    if (estimatedRows <= 1) return 'h-[120px] md:h-[160px]';
    if (estimatedRows === 2) return 'h-[145px] md:h-[190px]';
    if (estimatedRows === 3) return 'h-[170px] md:h-[230px]';
    if (estimatedRows === 4) return 'h-[200px] md:h-[280px]';
    return 'h-[230px] md:h-[320px]';
  })();

  return (
    <section className="relative z-10 bg-roseMist text-charcoal">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        {/* Bento Grid */}
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-[2fr_1fr] md:grid-rows-[auto_auto] md:gap-4">
          {/* Left Box - Title and Description */}
          <div className="h-[260px] md:h-[300px] rounded-[32px] bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-md border border-white/40 p-6 md:p-10 flex flex-col justify-center hover:shadow-2xl hover:shadow-royalGold/10 transition-shadow duration-300 overflow-hidden">
            <h1 className="gold-title-shine font-serif text-4xl md:text-5xl font-thin tracking-[0.1em] text-charcoal mb-4 uppercase ">
              {title}
            </h1>
            <p className="font-sans text-base md:text-lg tracking-[0.1em] leading-relaxed text-charcoal/80 transform transition-all duration-700 delay-200">
              {description}
            </p>
          </div>

          {/* Right Box - Services Included spanning both rows */}
          <div className="md:row-span-2 rounded-[32px] bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-md border border-white/40 p-4 md:p-8 overflow-visible hover:shadow-2xl hover:shadow-royalGold/10 transition-shadow duration-300">
            <h2 className="gold-title-shine font-serif text-xl md:text-2xl font-thin tracking-[0.1em] text-charcoal mb-6 uppercase text-center ">
              Services Included
            </h2>

            <div className={`relative w-full overflow-visible ${bubbleHeightClass}`}>
              <FloatingBubbles
                bubbles={servicesImages}
                smallSize={120}
                largeSize={280}
                columnsPerRow={serviceColumns}
              />
            </div>
          </div>

          {/* Bottom Section: Image/Video Carousel under description */}
          <div className={`rounded-[32px] bg-gradient-to-br from-royalGold/10 to-royalGold/5 backdrop-blur-md border border-royalGold/20 overflow-hidden ${imageHeightClass} hover:shadow-2xl hover:shadow-royalGold/20 transition-all duration-500 group`}>
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
        </div>
      </div>
    </section>
  );
}
