import { useMemo, useState } from 'react';

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


      {/* royalGold gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gbrown to-transparent z-5" />


      {/* curved svg at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-10">
        <img
          src="https://res.cloudinary.com/dfr5w7ayr/image/upload/v1776284910/Subtract_3_zeceex.svg"
          alt="Decorative bottom wave"
          className="pointer-events-none w-full h-auto object-cover"
        />
      </div>


      {/* texts over the herosection */}
      <div className="relative z-20 flex min-h-screen items-center justify-center px-6 text-center">
       
      </div>
    </section>
  );
}
