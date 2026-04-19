import { useMemo, useState } from 'react';
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
  const [currentVideo, setCurrentVideo] = useState(0);
  const currentSource = useMemo(() => videoSources[currentVideo], [currentVideo]);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videoSources.length);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-roseMist">
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
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gbrown to-transparent z-5" />


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
      <div className="relative z-20 flex min-h-screen items-center justify-center text-center flex-col "> 


          <div>
            <img
                src="https://res.cloudinary.com/dfr5w7ayr/image/upload/v1776364081/logo_gemeni_golden-removebg-preview_1_blfena.svg"
                alt="Rachha logo"
                className={`h-48 pb-10`}
              />
          </div>
          
          <div className='flex-col'>
              <div className='gold-text-shine font-serif font-thin tracking-[0.1em] text-6xl uppercase'>We  Create  Your  Memories</div>
              <div className='text-roseMist/90 font-sans font-thin tracking-[0.2em] text-1xl italic uppercase'>From ideas to celebration, we handel it all</div>
          
          </div>
         

          <div className='mt-10 flex gap-8'>
            <Button text='SERVICES' variant='primary' ></Button>
            <Button text='CONTACT' variant='secondary' ></Button>
          </div>
      </div>
    </section>
  );
}
