import React, { useEffect, useState } from "react";
import { HERO_IMAGES } from "../constants";

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {HERO_IMAGES.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
            <div className="absolute inset-0 bg-black/30 z-10" /> {/* Overlay for text readability */}
            <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transform scale-105 animate-[kenburns_20s_infinite_alternate]"
                style={{
                    animationPlayState: index === currentIndex ? 'running' : 'paused'
                }}
            />
        </div>
      ))}
      <style>{`
        @keyframes kenburns {
            0% { transform: scale(1.05); }
            100% { transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;