import React, { useEffect, useState } from 'react';
import '../../assets/styles/pages/comingSoon.css';
import BlewmLogo from "../../assets/images/logo/blewmswirl.png";
import BlewmTextLogo from "../../assets/images/logo/blewm-word.png";
import AvenirMediumTTF from "../../../font/AvenirMedium/avenirMedium.ttf";
import LT from "../../../font/AvenirMedium/ltMuseum.ttf";

const ComingSoon = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    handleResize();

    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'LT Museum';
        src: url(${LT}) format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
      }
    `;
    document.head.appendChild(style);

    const keyframes = document.createElement('style');
    keyframes.textContent = getKeyframes();
    keyframes.id = 'coming-soon-keyframes';
    document.head.appendChild(keyframes);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.head.removeChild(style);
      document.head.removeChild(keyframes);
    };
  }, []);

  const isMobile = windowWidth <= 768;
  const isSmallMobile = windowWidth <= 480;

  return (
    <div className="coming-soon-page">
      {/* Enhanced Background with Spotlight Effect */}
      <div className="coming-soon-background-effect" />
      
      {/* Subtle Radial Gradient Behind Logo */}
      <div className="coming-soon-radial-gradient" 
           style={{
             width: isMobile ? '300px' : '500px',
             height: isMobile ? '300px' : '500px'
           }} />
      
      <div className="coming-soon-content">
        {/* Swirl Logo - Top */}
        <div className="coming-soon-swirl-wrapper">
          <img 
            src={BlewmLogo} 
            alt="Blewm Swirl Logo"
            className="coming-soon-swirl-logo"
            onError={(e) => {
              e.target.style.display = 'none';
              const fallback = document.createElement('div');
              fallback.className = 'coming-soon-fallback-swirl';
              const text = document.createElement('span');
              text.className = 'coming-soon-fallback-swirl-text';
              text.textContent = '🌀';
              fallback.appendChild(text);
              e.target.parentNode.appendChild(fallback);
            }}
          />
        </div>
        
        {/* Company Name - Below Logo */}
        <div className="coming-soon-textlogo-wrapper">
          <img 
            src={BlewmTextLogo} 
            alt="Blewm"
            className="coming-soon-text-logo"
            onError={(e) => {
              e.target.style.display = 'none';
              const fallback = document.createElement('div');
              fallback.className = 'coming-soon-fallback-textlogo';
              const text = document.createElement('span');
              text.className = 'coming-soon-fallback-textlogo-text';
              text.textContent = 'BLEWM';
              fallback.appendChild(text);
              e.target.parentNode.appendChild(fallback);
            }}
          />
        </div>
        
        {/* Coming Soon Text - Bottom */}
        <h1 className="coming-soon-text">
          COMING SOON!
        </h1>
      </div>
    </div>
  );
};

const getKeyframes = () => `
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes spinSlow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes textPulse {
  0%, 100% { 
    transform: scale(1) translateY(5%);
    text-shadow: 0 1px 4px rgba(34, 72, 136, 0.15), 0 0 0.5px rgba(34, 72, 136, 0.1);
  }
  50% { 
    transform: scale(1.02) translateY(5%);
    text-shadow: 0 2px 8px rgba(34, 72, 136, 0.2), 0 0 1px rgba(34, 72, 136, 0.15);
  }
}
`;

export default ComingSoon;