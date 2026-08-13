import type { Testimonial } from "../../data/TestonomialData";
import { TESTIMONIALS } from "../../data/TestonomialData";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="relative p-6 md:p-8 max-sm:p-3 rounded-2xl md:rounded-3xl max-sm:rounded-xl bg-white border border-royalGold/10 shadow-sm hover:scale-[1.02] hover:bg-white/90 transition-all duration-300 ease-out">
      <p className="text-sm md:text-base max-sm:text-[11px] text-charcoal/80 font-normal leading-relaxed mb-6 max-sm:mb-3 font-sans">
        {testimonial.message}
      </p>
      <div className="flex items-center gap-3 mt-auto">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-10 w-10 max-sm:h-7 max-sm:w-7 rounded-full object-cover border border-royalGold/20"
        />
        <div>
          <p className="text-sm max-sm:text-xs font-semibold text-charcoal tracking-tight font-sans">
            {testimonial.name}
          </p>
          <p className="text-xs text-charcoal/50 mt-0.5 font-sans">
            {testimonial.designation}
          </p>
        </div>
      </div>
    </div>
  );
}

function Column({
  testimonials,
  className,
}: {
  testimonials: Testimonial[];
  className: string;
}) {
  return (
    <div className="overflow-hidden h-[400px] md:h-[500px] max-sm:h-[300px]">
      <div className={`flex flex-col gap-4 md:gap-6 max-sm:gap-3 ${className}`}>
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
        ))}
      </div>
    </div>
  );
}

export default function TestonomialSection() {
  const col1 = TESTIMONIALS.filter((_, i) => i % 3 === 0);
  const col2 = TESTIMONIALS.filter((_, i) => i % 3 === 1);
  const col3 = TESTIMONIALS.filter((_, i) => i % 3 === 2);

  return (
    <section className="relative w-full overflow-hidden bg-roseMist py-16 md:py-24 max-sm:py-10">
      <div className="absolute top-0 left-0 right-0 z-10 h-40 md:h-56 max-sm:h-28 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #FFF0F3 0%, #FFF0F3 45%, rgba(255,240,243,0.75) 65%, rgba(255,240,243,0.3) 80%, transparent 100%)' }} />
      <div className="absolute bottom-0 left-0 right-0 z-10 h-40 md:h-56 max-sm:h-28 pointer-events-none" style={{ background: 'linear-gradient(to top, #FFF0F3 0%, #FFF0F3 45%, rgba(255,240,243,0.75) 65%, rgba(255,240,243,0.3) 80%, transparent 100%)' }} />

      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-6">
        <Column testimonials={col1} className="marquee-col-1" />
        <Column testimonials={col2} className="marquee-col-2" />
        <div className="hidden lg:block">
          <Column testimonials={col3} className="marquee-col-3" />
        </div>
      </div>

      <style>{`
        @keyframes marquee-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes marquee-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .marquee-col-1 { animation: marquee-up 30s linear infinite; }
        .marquee-col-2 { animation: marquee-down 25s linear infinite; }
        .marquee-col-3 { animation: marquee-up 35s linear infinite; }
      `}</style>
    </section>
  );
}
