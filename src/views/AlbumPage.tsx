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

  // LOGIC: Use your real images if they exist, otherwise use random placeholders
  const sourceImages = (album.images && album.images.length > 0) 
    ? album.images 
    : Array.from({ length: 9 }).map((_, i) => `https://picsum.photos/800/1200?random=${i + 100}`);

  // Create the grid layout (making every 3rd image wider for a cool style)
  const galleryItems = sourceImages.map((url, i) => ({
    url: url,
    span: i % 3 === 0 ? 'md:col-span-2 col-span-1' : 'col-span-1'
  }));

  return (
    <div className="bg-beige min-h-screen pb-24">
      {/* Sticky Header */}
      <div className="sticky top-0 z-30 flex justify-between items-center p-6 text-black bg-beige/80 backdrop-blur-md">
         <Link to="/" className="text-xl font-serif">AmorVista</Link>
         <Link to="/" className="text-xs uppercase tracking-widest border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
            Close
         </Link>
      </div>

      <header className="pt-12 pb-16 px-6 md:px-20 text-center">
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
            {galleryItems.map((img, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className={`relative group overflow-hidden ${img.span} aspect-[3/4]`}
                >
                    <img 
                        src={img.url} 
                        alt={`Gallery Item ${idx}`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
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