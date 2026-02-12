import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import InteractiveCard from '../components/InteractiveCard';
import ImageAutoSlider from '../components/ImageAutoSlider';
import { TEAM_MEMBERS, SERVICES, TESTIMONIALS, ALBUMS } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-beige min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <ImageSlider />
        <div className="relative z-20 px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-6xl md:text-9xl font-serif tracking-tight"
          >
            AmorVista
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-6 text-xl md:text-2xl font-light tracking-[0.2em] uppercase"
          >
            Making Memories into MB's
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
             <img src="https://img.sanishtech.com/u/3c90a00fcd7510fc1c5e676db48260ad.png" alt="Studio Life" className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-serif mb-8">The Story</h2>
            <p className="text-lg text-gray-800 leading-relaxed font-sans font-light">
              AmorVista started in 2024 with a singular vision: storytelling through the lens. 
              With over 8 years of collective experience, our team creates timeless visual narratives.
            </p>
            <p className="mt-6 text-lg text-gray-800 leading-relaxed font-sans font-light">
              We have had the privilege of covering prestigious events including NAADH, TEDx, VITOPIA 2024, 2025, 2026, 
              and over 50 college events across Andhra Pradesh. We don't just take photos; we preserve emotions.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio / Album Categories */}
      <section id="work" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">Selected Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {ALBUMS.map((album) => (
              <InteractiveCard
                key={album.slug}
                title={album.title}
                category={album.category}
                imageUrl={album.coverImage}
                slug={album.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Scrolling Showcase */}
      <ImageAutoSlider />

      {/* Team Section (The Creatives) - Dark Rider Style 3D Cards */}
      <section id="team" className="py-24 bg-beige px-6 md:px-20 overflow-visible team-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-20 text-center">The Creatives</h2>
          
          <div className="flex flex-wrap justify-center gap-16">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="creative-card">
                <div className="creative-wrapper">
                  <img src={member.image} className="cover-image" alt="background" />
                </div>
                
                {/* The "Character" image that pops out - Uses cutout if available, else standard image */}
                <img 
                  src={member.characterImage || member.image} 
                  className="character" 
                  alt={member.name} 
                />
                
                <div className="title text-center">
                   <h3 className="text-3xl font-serif text-white drop-shadow-lg">{member.name}</h3>
                   <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-white/80 mt-2">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <style>{`
          .team-section {
            --card-height: 400px;
            --card-width: calc(var(--card-height) / 1.5);
          }
          
          .creative-card {
            width: var(--card-width);
            height: var(--card-height);
            position: relative;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            padding: 0 20px;
            perspective: 2500px;
            cursor: pointer;
          }

          .cover-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .creative-wrapper {
            transition: all 0.5s;
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: -1;
            top: 0;
            left: 0;
            overflow: hidden; /* Ensures gradient doesn't spill */
          }

          .creative-card:hover .creative-wrapper {
            transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0);
            box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
          }

          /* Gradients for cinematic look */
          .creative-wrapper::before,
          .creative-wrapper::after {
            content: "";
            opacity: 0;
            width: 100%;
            height: 80px;
            transition: all 0.5s;
            position: absolute;
            left: 0;
            z-index: 10;
          }
          
          .creative-wrapper::before {
            top: 0;
            height: 100%;
            background-image: linear-gradient(
              to top,
              transparent 46%,
              rgba(0, 0, 0, 0.5) 68%,
              rgba(0, 0, 0) 97%
            );
          }
          
          .creative-wrapper::after {
            bottom: 0;
            opacity: 1;
            background-image: linear-gradient(
              to bottom,
              transparent 46%,
              rgba(0, 0, 0, 0.5) 68%,
              rgba(0, 0, 0) 97%
            );
          }

          .creative-card:hover .creative-wrapper::before,
          .creative-card:hover .creative-wrapper::after {
            opacity: 1;
          }

          .creative-card:hover .creative-wrapper::after {
            height: 120px;
          }

          /* The Title */
          .title {
            width: 100%;
            transition: transform 0.5s;
            z-index: 20; /* Above everything */
            margin-bottom: 30px;
            pointer-events: none;
          }
          
          .creative-card:hover .title {
            transform: translate3d(0%, -50px, 100px);
          }

          /* The Character (Pop-out Layer) */
          .character {
            width: 100%;
            height: 100%;
            opacity: 0; /* Hidden by default to show wrapper */
            transition: all 0.5s;
            position: absolute;
            z-index: -1; /* Behind title, but will pop in front of wrapper */
            top: 0;
            left: 0;
            object-fit: cover;
            pointer-events: none;
          }

          .creative-card:hover .character {
            opacity: 1;
            transform: translate3d(0%, -15%, 100px); /* Adjusted pop-up height for portrait photos */
          }
        `}</style>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-black text-beige px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center text-white">Our Services</h2>
          <div className="space-y-12">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="flex flex-col md:flex-row justify-between md:items-end border-b border-white/20 pb-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 font-light max-w-lg">{service.description}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="text-xs uppercase tracking-widest border border-white/30 px-3 py-1 rounded-full text-white/70">
                    Available
                  </span>
                </div>
              </div>
            ))}
            <p className="text-center text-gray-500 italic mt-12 pt-12">
              * Detailed pricing packages available upon direct inquiry.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-beige px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white p-8 shadow-sm">
                <div className="text-4xl text-serif text-gray-300 mb-4">"</div>
                <p className="text-gray-800 font-sans italic leading-relaxed mb-6">
                  {t.text}
                </p>
                <div>
                  <h4 className="font-serif font-bold text-lg">{t.name}</h4>
                  <p className="text-xs uppercase tracking-wide text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-20 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-serif mb-8">Let's Create</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 font-light max-w-2xl mx-auto">
          Ready to turn your memories into timeless digital masterpieces? Reach out to us directly to discuss your vision.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            {/* Instagram Button */}
            <a 
              href="https://www.instagram.com/amorvista_studios/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative px-10 py-4 bg-gradient-to-tr from-purple-600 to-pink-500 text-white overflow-hidden rounded-full w-full md:w-auto min-w-[220px] shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center justify-center gap-3">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                 <span className="font-medium tracking-wide">Instagram</span>
              </div>
            </a>

            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/916304949828" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative px-10 py-4 bg-[#25D366] text-white overflow-hidden rounded-full w-full md:w-auto min-w-[220px] shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center justify-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                <span className="font-medium tracking-wide">WhatsApp</span>
              </div>
            </a>

            {/* Email Button */}
            <a 
              href="mailto:amorvistastudios@gmail.com"
              className="group relative px-10 py-4 bg-black text-white border border-black overflow-hidden rounded-full w-full md:w-auto min-w-[220px] shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center justify-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span className="font-medium tracking-wide">Email Us</span>
              </div>
            </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white/40 py-12 px-6 text-center text-xs uppercase tracking-widest">
        <p>© 2024 AmorVista Studios. All rights reserved.</p>
        <p className="mt-2">All images and videos are property of AmorVista Studios.</p>
      </footer>
    </div>
  );
};

export default Home;