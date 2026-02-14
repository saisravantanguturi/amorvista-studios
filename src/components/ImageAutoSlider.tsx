import React from 'react';

// I replaced the broken Unsplash links with your actual portfolio images!
// You can change these file names later if you want different photos here.
const IMAGES = [
  '/s1.jpeg',
  '/s2.jpeg',
  '/s3.jpeg',
  '/s4.png',
  '/s5.jpeg',
  '/s6.JPG',
];

const ImageAutoSlider: React.FC = () => {
  return (
    <section className="py-12 bg-black overflow-hidden border-y border-white/10 relative z-10">
       <div className="flex w-full group">
          {/* First Loop */}
          <div className="flex animate-scroll-fast gap-6 pr-6 shrink-0 group-hover:[animation-play-state:paused]">
              {IMAGES.map((src, i) => (
                  <div key={i} className="w-[280px] h-[180px] md:w-[400px] md:h-[260px] relative rounded-md overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 shrink-0 cursor-pointer group/image">
                      <img
                          src={src}
                          alt={`Portfolio ${i}`}
                          className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover/image:bg-transparent transition-colors duration-500" />
                  </div>
              ))}
          </div>
          {/* Second Loop (Duplicate for seamless effect) */}
          <div className="flex animate-scroll-fast gap-6 pr-6 shrink-0 group-hover:[animation-play-state:paused]" aria-hidden="true">
              {IMAGES.map((src, i) => (
                  <div key={i} className="w-[280px] h-[180px] md:w-[400px] md:h-[260px] relative rounded-md overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 shrink-0 cursor-pointer group/image">
                      <img
                          src={src}
                          alt={`Portfolio ${i}`}
                          className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover/image:bg-transparent transition-colors duration-500" />
                  </div>
              ))}
          </div>
       </div>
    </section>
  );
};

export default ImageAutoSlider;