import React, { useEffect, useState } from 'react';
import BlewmLogo from "../../assets/images/logo/arp-bg-none.png";
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

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at center, #f0f4ff 0%, #e6ecff 30%, #d9e2ff 100%)',
      fontFamily: "'LT Museum', 'Segoe UI', 'Arial', sans-serif",
      overflow: 'hidden',
      position: 'relative',
      padding: isMobile ? '10px' : '20px',
      boxSizing: 'border-box',
    },
    content: {
      textAlign: 'center',
      padding: isMobile ? '20px 15px' : '40px 30px',
      position: 'relative',
      zIndex: 2,
      maxWidth: '700px',
      width: '100%',
      animation: 'fadeIn 1s ease-out',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: isMobile ? '15px' : '20px', // Reduced gaps for better hierarchy
    },
    swirlLogoWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      animation: 'float 4s ease-in-out infinite',
      position: 'relative',
      zIndex: 1,
      marginBottom: isMobile ? '5px' : '10px', 
    },
    swirlLogo: {
      width: isSmallMobile ? '126px' : isMobile ? '162px' : windowWidth <= 1248 ? '198px' : '400px', 
      height: isSmallMobile ? '126px' : isMobile ? '162px' : windowWidth <= 1248 ? '198px' : '400px',
      objectFit: 'contain',
      display: 'block',
      animation: 'spinSlow 8s linear infinite',
    },
    textLogoWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: isMobile ? '25px' : '35px',
    },
    textLogo: {
      width: isSmallMobile ? '180px' : isMobile ? '220px' : windowWidth <= 1248 ? '280px' : '250px',
      height: 'auto',
      objectFit: 'contain',
      filter: 'drop-shadow(0 2px 6px rgba(34, 72, 136, 0.25))',
    },
    comingSoonText: {
      fontFamily: "'LT Museum', 'Segoe UI', sans-serif",
      fontSize: isSmallMobile ? '32px' : isMobile ? '40px' : windowWidth <= 1024 ? '48px' : '80px',
      color: '#1F4F4F4',
      margin: '0',
      textShadow: '0 1px 4px rgba(34, 72, 136, 0.15), 0 0 0.5px rgba(34, 72, 136, 0.1)', 
      letterSpacing: isMobile ? '1.2px' : '1.8px', 
      fontWeight: '800', 
      lineHeight: '1.1',
      animation: 'textPulse 3s infinite',
      position: 'relative',
      transform: 'translateY(5%)', 
    },
    blinkingCursor: {
      display: 'inline-block',
      marginLeft: isMobile ? '6px' : '8px',
      animation: 'blink 1s infinite',
      fontWeight: '300',
      opacity: 1,
      fontSize: '0.9em',
    },
    fallbackSwirlLogo: {
      width: isSmallMobile ? '126px' : isMobile ? '162px' : windowWidth <= 1248 ? '198px' : '234px',
      height: isSmallMobile ? '126px' : isMobile ? '162px' : windowWidth <= 1248 ? '198px' : '234px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      animation: 'float 4s ease-in-out infinite',
    },
    fallbackSwirlText: {
      fontFamily: "'Avenir Medium', 'Segoe UI', 'Arial', sans-serif",
      color: '#224888',
      fontSize: isMobile ? '43px' : '58px', // Reduced to match 10% smaller
      fontWeight: '500',
      letterSpacing: isMobile ? '2px' : '3px',
      animation: 'spinSlow 8s linear infinite',
    },
    fallbackTextLogo: {
      width: isSmallMobile ? '180px' : isMobile ? '220px' : windowWidth <= 1248 ? '280px' : '340px',
      height: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    fallbackTextLogoText: {
      fontFamily: "'Avenir Medium', 'Segoe UI', 'Arial', sans-serif",
      fontSize: isSmallMobile ? '28px' : isMobile ? '36px' : windowWidth <= 1248 ? '44px' : '52px',
      fontWeight: '700',
      color: '#224888',
      textShadow: '0 1px 4px rgba(34, 72, 136, 0.15), 0 0 0.5px rgba(34, 72, 136, 0.1)',
      letterSpacing: isMobile ? '1.5px' : '2px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Enhanced Background with Spotlight Effect */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        background: `
          radial-gradient(circle at 50% 40%, rgba(255, 255, 255, 0.4) 0%, transparent 60%),
          radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.12) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.25) 0%, transparent 50%),
          linear-gradient(135deg, #f8faff 0%, #eef2ff 40%, #e6ecff 100%)
        `,
        zIndex: 1,
      }} />
      
      {/* Subtle Radial Gradient Behind Logo */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: isMobile ? '300px' : '500px',
        height: isMobile ? '300px' : '500px',
        background: 'radial-gradient(circle, rgba(240, 245, 255, 0.7) 0%, transparent 70%)',
        zIndex: 1,
        opacity: 0.6,
      }} />
      
      <div style={styles.content}>
        {/* Swirl Logo - Top */}
        <div style={styles.swirlLogoWrapper}>
          <img 
            src={BlewmLogo} 
            alt="Blewm Swirl Logo"
            style={styles.swirlLogo}
            onError={(e) => {
              e.target.style.display = 'none';
              const fallback = document.createElement('div');
              Object.assign(fallback.style, styles.fallbackSwirlLogo);
              const text = document.createElement('span');
              Object.assign(text.style, styles.fallbackSwirlText);
              text.textContent = '🌀';
              fallback.appendChild(text)
              e.target.parentNode.appendChild(fallback);
            }}
          />
        </div>
        
        {/* Company Name - Below Logo */}
        <div style={styles.textLogoWrapper}>
          <img 
            src={BlewmTextLogo} 
            alt="Blewm"
            style={styles.textLogo}
            onError={(e) => {
              e.target.style.display = 'none';
              const fallback = document.createElement('div');
              Object.assign(fallback.style, styles.fallbackTextLogo);
              const text = document.createElement('span');
              Object.assign(text.style, styles.fallbackTextLogoText);
              text.textContent = 'BLEWM';
              fallback.appendChild(text);
              e.target.parentNode.appendChild(fallback);
            }}
          />
        </div>
        
        {/* Coming Soon Text - Bottom */}
        <h1 style={styles.comingSoonText}>
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