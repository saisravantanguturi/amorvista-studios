import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import AlbumPage from './views/AlbumPage';
import HeroIntro from './components/HeroIntro';
import NavMenu from './components/NavMenu';

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    // Check session storage to see if intro has played this session
    const hasPlayed = sessionStorage.getItem('amorvista_intro_played');
    if (!hasPlayed) {
      setShowIntro(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem('amorvista_intro_played', 'true');
  };

  return (
    <Router>
      <div className="font-sans text-black selection:bg-black selection:text-white">
        {/* Intro Animation Overlay */}
        {showIntro && <HeroIntro onComplete={handleIntroComplete} />}
        
        {/* Global Navigation Menu */}
        <NavMenu />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums/:slug" element={<AlbumPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;