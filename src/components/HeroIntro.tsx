import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroIntroProps {
  onComplete: () => void;
}

const HeroIntro: React.FC<HeroIntroProps> = ({ onComplete }) => {
  const text = "AmorVista";
  const characters = text.split("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Total animation duration coordination
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Allow exit animation to play before calling onComplete
      setTimeout(onComplete, 800); 
    }, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-beige"
        >
          <div className="flex overflow-hidden">
            {characters.map((char, i) => (
              <div key={i} className="relative overflow-hidden px-1 md:px-2">
                <motion.span
                  initial={{ y: "100%", filter: "blur(10px)", opacity: 0 }}
                  animate={{ y: "0%", filter: "blur(0px)", opacity: 1 }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.8,
                    ease: [0.33, 1, 0.68, 1], // Cubic bezier for "shutter" feel
                  }}
                  className="block text-[12vw] md:text-[8vw] font-serif font-bold text-black leading-none"
                >
                  {char}
                </motion.span>
                {/* Shutter slice overlay effect */}
                <motion.div
                  initial={{ height: "100%" }}
                  animate={{ height: "0%" }}
                  transition={{
                    delay: i * 0.1 + 0.2,
                    duration: 0.6,
                    ease: "easeInOut"
                  }}
                  className="absolute bottom-0 left-0 w-full bg-black/10 z-10"
                />
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeroIntro;