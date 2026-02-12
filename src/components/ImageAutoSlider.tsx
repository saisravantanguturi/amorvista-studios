import React from 'react';

const IMAGES = [
  'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=2072&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531297461136-82lw8a9277c0?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop',
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