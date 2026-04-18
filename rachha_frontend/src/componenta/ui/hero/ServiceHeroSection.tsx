import { useState, useEffect } from 'react';

interface ServiceHeroSectionProps {
  title: string;
  subtitle?: string;
  mediaItems: string[];
}

export function ServiceHeroSection({
  title,
  subtitle = 'Create unforgettable moments with our premium celebration services',
  mediaItems,
}: ServiceHeroSectionProps) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    if (mediaItems.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [mediaItems.length]);

  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      {/* Hero Media Background */}
      <div className="absolute inset-0">
        <img
          src={mediaItems[currentMediaIndex]}
          alt={`Hero ${currentMediaIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-110"
        />
        {/* Enhanced overlay with multiple gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

        {/* Enhanced brown gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gbrown/80 via-gbrown/40 to-transparent z-5" />

        {/* Subtle animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-royalGold/10 via-transparent to-royalGold/5 animate-pulse opacity-50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[70vh]">
        <div className="text-center text-pureWhite px-6">
          <h1 className="gold-title-shine font-serif text-5xl md:text-6xl font-light tracking-[0.1em] mb-4 uppercase">
            {title}
          </h1>
          <p className="font-sans text-lg md:text-xl font-light tracking-wider max-w-3xl mx-auto text-white/90">
            {subtitle}
          </p>

          {/* Decorative elements */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-royalGold to-transparent transform transition-all duration-500 hover:w-24" />
            <div className="w-2 h-2 bg-royalGold rounded-full animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-royalGold to-transparent transform transition-all duration-500 hover:w-24" />
          </div>
        </div>
      </div>

      {/* Enhanced Hero Media Indicators */}
      {mediaItems.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {mediaItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentMediaIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 transform hover:scale-125 ${
                index === currentMediaIndex
                  ? 'bg-royalGold w-6 shadow-lg shadow-royalGold/50 animate-pulse'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Show hero media ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Enhanced Curved SVG at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-20">
        <img
          src="https://res.cloudinary.com/dfr5w7ayr/image/upload/v1776284910/Subtract_3_zeceex.svg"
          alt="Decorative bottom wave"
          className="pointer-events-none w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
        />
      </div>
    </section>
  );
}
