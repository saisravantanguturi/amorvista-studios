import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";

const NavMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | HTMLButtonElement)[]>([]);
  const navigate = useNavigate();

  // Reset refs array on render
  linksRef.current = [];

  const addToRefs = (el: HTMLAnchorElement | HTMLButtonElement | null) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling when menu is open
      document.body.style.overflow = "hidden";
      
      const tl = gsap.timeline();
      
      tl.to(menuRef.current, {
        x: "0%",
        duration: 0.8,
        ease: "power3.inOut",
      });
      
      tl.fromTo(
        linksRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" },
        "-=0.4"
      );
    } else {
      document.body.style.overflow = "";
      
      const tl = gsap.timeline();
      
      tl.to(linksRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        stagger: 0.05,
      });

      tl.to(menuRef.current, {
        x: "100%",
        duration: 0.6,
        ease: "power3.inOut",
      }, "-=0.2");
    }
  }, [isOpen]);

  const handleNavClick = (hash: string) => {
    setIsOpen(false);
    if (hash === 'home') {
        navigate('/');
        window.scrollTo(0,0);
        return;
    }
    
    // Navigate to home then scroll if we are not on home
    if (window.location.hash !== '#/') {
        navigate('/');
        setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
        const element = document.getElementById(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-8 right-8 z-40 flex flex-col gap-1.5 group mix-blend-difference"
        aria-label="Open Menu"
      >
        <span className="w-8 h-[2px] bg-black transition-transform duration-300 group-hover:translate-x-1"></span>
        <span className="w-8 h-[2px] bg-black transition-transform duration-300 group-hover:-translate-x-1"></span>
        <span className="w-8 h-[2px] bg-black transition-transform duration-300 group-hover:translate-x-1"></span>
      </button>

      <div
        ref={menuRef}
        className="fixed inset-0 bg-black text-beige z-50 flex flex-col items-center justify-center translate-x-full"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
        >
          Close
        </button>

        <nav className="flex flex-col items-center space-y-8 text-center">
          {[
            { label: "Home", id: "home" },
            { label: "About", id: "about" },
            { label: "Work", id: "work" },
            { label: "Team", id: "team" },
            { label: "Services", id: "services" },
            { label: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={item.id}
              ref={addToRefs}
              onClick={() => handleNavClick(item.id)}
              className="text-4xl md:text-6xl font-serif hover:text-white/70 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default NavMenu;