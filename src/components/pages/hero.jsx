import React, { useState, useEffect } from 'react';
import '../../assets/styles/pages/hero.css';

import festivalHero from '../../assets/images/hero/blewm-g.webp';
import athleticHero from '../../assets/images/hero/bay.webp';
import wellbessHero from '../../assets/images/hero/stretch.webp';

const heroImages = {
  festivals: festivalHero,
  athletic: athleticHero,
  wellness: wellbessHero
};

const BlewmHero = () => {
  const [currentImage, setCurrentImage] = useState('festivals');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    { id: 'festivals', src: heroImages.festivals },
    { id: 'athletic', src: heroImages.athletic },
    { id: 'wellness', src: heroImages.wellness }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        const currentIndex = images.findIndex(img => img.id === currentImage);
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentImage(images[nextIndex].id);
        
        setTimeout(() => {
          setIsTransitioning(false);
        }, 300);
      }, 500);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [currentImage]);

  const currentImageData = images.find(img => img.id === currentImage);

  return (
    <div className="blewm-hero">
      {/* Full Screen Hero Images */}
      <div className="hero-image-container">
        {images.map((image) => (
          <div
            key={image.id}
            className={`hero-image-layer ${image.id === currentImage ? 'active' : ''} ${isTransitioning ? 'transitioning' : ''}`}
            style={{
              backgroundImage: `url(${image.src})`
            }}
          />
        ))}
        
  
        <div className="hero-overlay"></div>
        
  
        <div className="hero-logo-container">
          <div className="hero-logo">BLEWM</div>
          <div className="hero-tagline">empowering wellness</div>
        </div>
      </div>
    </div>
  );
};

export default BlewmHero;