import React from 'react';
import { TESTIMONIALS } from '../constants';

const TestimonialScroll: React.FC = () => {
  return (
    <section className="py-24 bg-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
         <h2 className="text-4xl md:text-5xl font-serif">Kind Words</h2>
         <p className="mt-4 text-gray-500 uppercase tracking-widest text-xs">What people say about us</p>
      </div>

      <div className="flex w-full overflow-hidden mask-linear-gradient relative">
         {/* We duplicate the list to create an infinite loop effect */}
         <div className="flex animate-scroll-slow gap-6 pr-6 w-max hover:[animation-play-state:paused]">
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                <div key={i} className="w-[350px] md:w-[450px] bg-white p-8 shadow-sm flex-shrink-0 border border-gray-100/50">
                    <div className="text-4xl font-serif text-gray-300 mb-4">"</div>
                    <p className="text-gray-800 font-sans italic leading-relaxed mb-6 h-24 overflow-hidden">
                        {t.text}
                    </p>
                    <div className="border-t pt-4 border-gray-100">
                        <h4 className="font-serif font-bold text-lg">{t.name}</h4>
                        <p className="text-xs uppercase tracking-wide text-gray-500">{t.role}</p>
                    </div>
                </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default TestimonialScroll;