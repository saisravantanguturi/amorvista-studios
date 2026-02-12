import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ALBUMS } from '../constants';
import { motion } from 'framer-motion';

const AlbumPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const album = ALBUMS.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!album) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-beige">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Album Not Found</h1>
          <Link to="/" className="text-sm border-b border-black pb-1 uppercase tracking-widest">Return Home</Link>
        </div>
      </div>
    );
  }

  // Generate placeholder images for the gallery
  const galleryImages = Array.from({ length: 9 }).map((_, i) => ({
    url: `https://picsum.photos/800/1200?random=${i + 100}`,
    span: i % 3 === 0 ? 'col-span-1 md:col-span-2' : 'col-span-1'
  }));

  return (
    <div className="bg-beige min-h-screen pb-24">
      {/* Sticky Header */}
      <div className="sticky top-0 z-30 flex justify-between items-center p-6 mix-blend-difference text-white bg-transparent pointer-events-none">
         <Link to="/" className="text-xl font-serif pointer-events-auto">AmorVista</Link>
         {/* Navigation is handled by the global NavMenu component */}
      </div>

      <header className="pt-24 pb-16 px-6 md:px-20 text-center">
        <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.3em] text-gray-500"
        >
            {album.category}
        </motion.span>
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif mt-4 mb-8"
        >
            {album.title}
        </motion.h1>
      </header>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {galleryImages.map((img, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative group overflow-hidden ${img.span} aspect-[3/4]`}
                >
                    <img 
                        src={img.url} 
                        alt="Gallery Item" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </motion.div>
            ))}
        </div>
        
        <div className="text-center mt-20">
            <Link to="/#work" className="inline-block border border-black px-8 py-3 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                View Other Albums
            </Link>
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;