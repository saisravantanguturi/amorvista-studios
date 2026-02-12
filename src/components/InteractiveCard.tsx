import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface InteractiveCardProps {
  title: string;
  category: string;
  imageUrl: string;
  slug: string;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
  title,
  category,
  imageUrl,
  slug,
}) => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["9.5deg", "-9.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-9.5deg", "9.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate(`/albums/${slug}`)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-[500px] w-full rounded-2xl bg-transparent cursor-pointer group"
    >
      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid h-[calc(100%-2rem)] w-[calc(100%-2rem)] rounded-xl shadow-2xl bg-black border border-white/10"
      >
        {/* Background Image Layer */}
        <div className="absolute inset-0 h-full w-full rounded-xl overflow-hidden">
            <img
                src={imageUrl}
                alt={title}
                className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
            />
            {/* Gradient Overlay for Text Visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        </div>

        {/* Content Layer floating above */}
        <div className="relative flex flex-col justify-end p-6 z-10 h-full">
          <motion.div 
            style={{ transform: "translateZ(50px)" }}
            className="flex flex-col gap-1"
          >
             <p className="text-xs uppercase tracking-[0.2em] text-beige/80">{category}</p>
             <h3 className="text-3xl font-serif text-white">{title}</h3>
          </motion.div>
          
          <motion.div 
             style={{ transform: "translateZ(30px)" }}
             className="mt-6 flex items-center justify-between border-t border-white/20 pt-4"
          >
             <span className="text-sm text-white/90 font-light tracking-wide group-hover:underline decoration-1 underline-offset-4">View Gallery</span>
             <div className="bg-white/10 p-2.5 rounded-full backdrop-blur-md group-hover:bg-white group-hover:text-black transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
             </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default InteractiveCard;