import GalleryPageBento from "../ui/GalleryBento/GalleryPageBento";
import Seo from "../../seo/Seo";
import { SITE_URL, SITE_OG_IMAGE } from "../../seo/siteConfig";

const Gallery = () => {
  return (
    <main>
      <Seo
        title="Gallery | Rachha"
        description="Browse Rachha's event gallery — weddings, birthdays, corporate events, anniversaries, theme parties and more, captured beautifully."
        canonical={`${SITE_URL}/gallery`}
        ogImage={SITE_OG_IMAGE}
      />
      <section className="relative min-h-[60vh] md:min-h-[70vh] overflow-hidden bg-gbrown max-sm:min-h-[40vh]">
        <style>{`
          @media (orientation: landscape) and (max-height: 420px) {
            .hero-min { min-height: 100vh !important; }
            .flower-img { height: 32px !important; }
            .hero-title { font-size: 22px !important; margin-top: -20px !important; }
          }
        `}</style>
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 80% 60% at 20% 30%, #4a2e1a 0%, transparent 60%),
              radial-gradient(ellipse 60% 70% at 80% 70%, #3d2010 0%, transparent 50%),
              radial-gradient(ellipse 70% 50% at 50% 50%, #2a1508 0%, transparent 60%)
            `,
            backgroundSize: "200% 200%, 200% 200%, 200% 200%",
            animation: "fluid-gradient 12s ease-in-out infinite",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-royalGold/[0.04] via-transparent to-royalGold/[0.04] pointer-events-none z-[1]" />

        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gbrown/90 via-gbrown/50 to-transparent pointer-events-none z-[2]" />

        <div className="relative z-10 flex items-center justify-center min-h-[60vh] md:min-h-[70vh] max-sm:min-h-[40vh]">
          <div className="flex flex-col items-center justify-center pt-12 md:pt-20 max-sm:pt-6">
            <img
              src="https://res.cloudinary.com/dfr5w7ayr/image/upload/q_auto/f_auto/v1776503038/final-curve-garlend-nobackground_dzajh7.png"
              alt=""
              className="flower-img h-56 md:h-72 w-auto rotate-180 -translate-y-16 md:-translate-y-28 max-sm:h-32 max-sm:-translate-y-10 pointer-events-none select-none"
            />
            <div className="hero-title gold-text-shine font-serif font-thin tracking-[0.1em] text-4xl md:text-5xl uppercase -mt-28 md:-mt-36 max-sm:text-3xl max-sm:-mt-12">
              Gallery
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-20 -mb-px leading-none">
          <img
            src="https://res.cloudinary.com/dfr5w7ayr/image/upload/v1776284910/Subtract_3_zeceex.svg"
            alt=""
            className="pointer-events-none w-full h-auto object-cover block"
          />
        </div>
      </section>

      <section className="bg-roseMist pt-16 md:pt-24">
        <GalleryPageBento />
      </section>
    </main>
  );
};

export default Gallery;
