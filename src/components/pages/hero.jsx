import React, { useState, useEffect, useCallback } from 'react';
import '../../assets/styles/pages/hero.css';

import festivalHero from '../../assets/images/hero/blewm-g.webp';
import athleticHero from '../../assets/images/hero/bay.webp';
import wellbessHero from '../../assets/images/hero/stretch.webp';

// Preload images
const preloadImages = () => {
  const images = [festivalHero, athleticHero, wellbessHero];
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

const BlewmHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const images = [
    { id: 'festivals', src: festivalHero },
    { id: 'athletic', src: athleticHero },
    { id: 'wellness', src: wellbessHero }
  ];

  // Detect mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Preload images
    preloadImages();
    setImagesLoaded(true);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Optimized transition function
  const transitionToNext = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Faster transition on mobile
    const transitionTime = isMobile ? 300 : 500;
    
    setTimeout(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, transitionTime);
    }, transitionTime);
  }, [isTransitioning, isMobile, images.length]);

  // Auto-rotate with different timing for mobile
  useEffect(() => {
    if (!imagesLoaded) return;

    const intervalTime = isMobile ? 10000 : 8000; // Slower on mobile (10s vs 8s)
    const interval = setInterval(transitionToNext, intervalTime);
    
    return () => clearInterval(interval);
  }, [transitionToNext, imagesLoaded, isMobile]);

  // Pause slideshow when user interacts (optional)
  const [isPaused, setIsPaused] = useState(false);
  
  const handleUserInteraction = useCallback(() => {
    if (!isMobile) return;
    
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 15000); // Resume after 15 seconds
  }, [isMobile]);

  // Manual navigation dots
  const goToSlide = (index) => {
    setCurrentIndex(index);
    handleUserInteraction();
  };

  return (
    <div className="blewm-hero" onClick={handleUserInteraction}>
      <div className="hero-image-container">
        {/* Render all images for smooth transitions */}
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`hero-image-layer ${index === currentIndex ? 'active' : ''} ${isTransitioning ? 'transitioning' : ''}`}
            style={{
              backgroundImage: `url(${image.src})`,
            }}
            data-image-type={image.id}
            data-mobile={isMobile}
          />
        ))}
        
        <div className="hero-overlay" />
        
        <div className="hero-logo-container">
          <div className="hero-logo">BLEWM</div>
          <div className="hero-tagline">empowering wellness</div>
        </div>
        
      
        
        
             </div>
    </div>
  );
};

export default BlewmHero;