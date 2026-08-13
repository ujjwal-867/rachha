import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/button/Button';

const videoSources = [
    'https://res.cloudinary.com/dfr5w7ayr/video/upload/q_auto/f_auto/v1776280570/12796347_3840_2160_60fps_ozhh48.mp4',
    'https://res.cloudinary.com/dfr5w7ayr/video/upload/q_auto/f_auto/v1776280534/14921650_1920_1080_50fps_ud3vud.mp4',
    'https://res.cloudinary.com/dfr5w7ayr/video/upload/q_auto/f_auto/v1776280523/14612597_1920_1080_24fps_zvazuo.mp4',
    'https://res.cloudinary.com/dfr5w7ayr/video/upload/q_auto/f_auto/v1776280522/15496436_1920_1080_50fps_x2jclj.mp4',
  'https://res.cloudinary.com/dfr5w7ayr/video/upload/q_auto/f_auto/v1776275895/14921620_1920_1080_100fps_npoj6y.mp4',
  'https://res.cloudinary.com/dfr5w7ayr/video/upload/q_auto/f_auto/v1776275893/fps_f0q1xw.mp4',
];

export default function HeroSection() {
  const navigate = useNavigate();
  const [currentVideo, setCurrentVideo] = useState(0);
  const currentSource = useMemo(() => videoSources[currentVideo], [currentVideo]);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videoSources.length);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-roseMist">
      <style>{`
        @media (orientation: landscape) and (max-height: 420px) {
          .hero-section { overflow: visible; }
          .hero-logo { height: 48px !important; padding-bottom: 4px !important; }
          .hero-title { font-size: 22px !important; }
          .hero-subtitle { font-size: 9px !important; }
          .hero-buttons { margin-top: 4px !important; gap: 6px !important; }
          .hero-btn { padding: 8px 16px !important; font-size: 11px !important; }
        }
      `}</style>

      <video
        key={currentSource}
        src={currentSource}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute inset-0 h-full w-full object-cover"
      />



      {/* black filter overlay */}
      <div className="absolute inset-0 bg-black/50" />  


      {/* brown gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gbrown to-transparent z-10" />


      {/* curved svg at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-10 leading-none -mb-px">
        <svg
          width="29914"
          height="896"
          viewBox="0 0 29914 896"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="none"
          className="pointer-events-none w-full h-auto object-cover block"
        >
          <path
            d="M14956.9 0C20490.3 0 25634.2 329.992 29913.9 896H0C4279.74 329.992 9423.61 0 14956.9 0Z"
            fill="#FFF0F3"
          />
        </svg>
      </div>


      {/* texts over the herosection */}
      <div className="hero-section relative z-20 flex min-h-screen items-center justify-center text-center flex-col max-sm:px-4">

          <div>
            <img
                src="https://res.cloudinary.com/dfr5w7ayr/image/upload/v1776364081/logo_gemeni_golden-removebg-preview_1_blfena.svg"
                alt="Rachha logo"
                className="hero-logo h-48 pb-10 max-sm:h-16 max-sm:pb-3"
              />
          </div>
          
          <div className='flex-col'>
              <div className='hero-title gold-text-shine font-serif font-thin tracking-[0.1em] text-6xl uppercase max-sm:text-3xl max-sm:tracking-[0.06em]'>We Create Your Memories</div>
              <div className='hero-subtitle text-roseMist/90 font-sans font-thin tracking-[0.2em] text-xl italic uppercase max-sm:text-xs max-sm:tracking-[0.12em]'>From ideas to celebration, we handle it all</div>
          
          </div>
         

          <div className='hero-buttons mt-10 flex gap-8 max-sm:mt-5 max-sm:gap-3'>
            <Button
              text='SERVICES'
              variant='primary'
              className='hero-btn'
              onClick={() => {
                const el = document.getElementById('services');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
            <Button
              text='CONTACT'
              variant='secondary'
              className='hero-btn'
              onClick={() => navigate('/contact')}
            />
          </div>
      </div>
    </section>
  );
}
