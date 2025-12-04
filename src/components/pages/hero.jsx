import React, { useState, useEffect } from 'react';
import '../../assets/styles/pages/hero.css';


// import festivalHero from '../../assets/images/festival-hero.jpg';
import athleticHero from '../../assets/images/hero/bay.png';
import wellbessHero from '../../assets/images/hero/stretch.png';


const heroImages = {
  festivals: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  athletic:athleticHero,
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
        
        {/* Subtle overlay for readability if needed */}
        <div className="hero-overlay"></div>
        
        {/* Minimal watermark/logo */}
        <div className="hero-logo">BLEWM</div>
      </div>
    </div>
  );
};

export default BlewmHero;