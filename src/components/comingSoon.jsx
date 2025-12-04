import React, { useEffect, useState } from 'react';
import BlewmLogo from "../assets/images/logo/blewmswirl.png";
import BlewmTextLogo from "../assets/images/logo/blewm-word.png";
import AvenirMediumTTF from "../../font/AvenirMedium/avenirMedium.ttf";

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
        font-family: 'Avenir Medium';
        src: url(${AvenirMediumTTF}) format('truetype');
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
 
      background: 'linear-gradient(135deg, #f8faff 0%, #eef2ff 50%, #e6ecff 100%)',
      fontFamily: "'Avenir Medium', 'Segoe UI', 'Arial', sans-serif",
      overflow: 'hidden',
      position: 'relative',
      padding: isMobile ? '10px' : '20px',
      boxSizing: 'border-box',
    },
    content: {
      textAlign: 'center',
      padding: isMobile ? '20px 15px' : '60px 40px',
      position: 'relative',
      zIndex: 2,
      maxWidth: '1000px',
      width: '100%',
      animation: 'fadeIn 1s ease-out',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    
   
 
  

     
    },
    logoContainer: {
      marginBottom: isMobile ? '30px' : '50px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
    logosRow: {
      display: 'flex',
      flexDirection: isSmallMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: isSmallMobile ? '5px' : isMobile ? '10px' : '20px',
      flexWrap: 'wrap',
    },
    imageWrapper: {
      padding: isMobile ? '10px' : '25px',
      borderRadius: isMobile ? '15px' : '30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      animation: 'float 4s ease-in-out infinite',
      position: 'relative',
      zIndex: 1,
      
    
 
 
    },
    logoImage: {
      width: isSmallMobile ? '100px' : isMobile ? '120px' : windowWidth <= 1248 ? '180px' : '220px',
      height: isSmallMobile ? '100px' : isMobile ? '120px' : windowWidth <= 1248 ? '180px' : '220px',
      objectFit: 'contain',
      display: 'block',
      animation: 'spinSlow 8s linear infinite',
    },
    textLogoWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: isSmallMobile ? '5px' : '0',
   
    
      padding: isMobile ? '10px 20px' : '15px 30px',
 
     
    },
    textLogo: {
      width: isSmallMobile ? '150px' : isMobile ? '180px' : windowWidth <= 1248 ? '250px' : '320px',
      height: 'auto',
      objectFit: 'contain',
      filter: 'drop-shadow(0 2px 8px rgba(34, 72, 136, 0.3))',
    },
    textContainer: {
      marginBottom: isMobile ? '30px' : '60px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    comingSoonText: {
      fontFamily: "'LTMesuem', 'Segoe UI', 'Arial', sans-serif",
      fontSize: isSmallMobile ? '36px' : isMobile ? '48px' : windowWidth <= 1024 ? '72px' : '96px',
      fontWeight: 'bold',
      color: '#224888',
      margin: '0',
      textShadow: '0 2px 8px rgba(34, 72, 136, 0.2)',
      letterSpacing: isMobile ? '1px' : '2px',
      lineHeight: '1.1',
      animation: 'textPulse 3s infinite',
      position: 'relative',
      padding: isMobile ? '5px 10px' : '15px 30px',
      borderRadius: '15px',

 
    
    },
    blinkingCursor: {
      display: 'inline-block',
      marginLeft: isMobile ? '8px' : '12px',
      animation: 'blink 1s infinite',
      fontWeight: '300',
      opacity: 1,
      fontSize: '0.9em',
    },
    progressDots: {
      display: 'flex',
      gap: isMobile ? '12px' : '20px',
      justifyContent: 'center',
      marginTop: '30px',
    },
    progressDot: {
      width: isMobile ? '12px' : '18px',
      height: isMobile ? '12px' : '18px',
      borderRadius: '50%',
      backgroundColor: '#224888',
      animation: 'pulse 2s infinite',
      
      boxShadow: '0 0 10px rgba(34, 72, 136, 0.3)',
    },
    fallbackLogo: {
      width: isSmallMobile ? '100px' : isMobile ? '120px' : windowWidth <= 1248 ? '180px' : '220px',
      height: isSmallMobile ? '100px' : isMobile ? '120px' : windowWidth <= 1248 ? '180px' : '220px',
      backgroundColor: '#224888',
      borderRadius: isMobile ? '15px' : '30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 8px 20px rgba(34, 72, 136, 0.3)',
      animation: 'float 4s ease-in-out infinite',
    },
    fallbackText: {
      fontFamily: "'Avenir Medium', 'Segoe UI', 'Arial', sans-serif",
      color: 'white',
      fontSize: isMobile ? '36px' : '48px',
      fontWeight: '500',
      letterSpacing: isMobile ? '2px' : '3px',
      animation: 'spinSlow 8s linear infinite',
    },
    fallbackTextLogo: {
      width: isSmallMobile ? '150px' : isMobile ? '180px' : windowWidth <= 1248 ? '250px' : '320px',
      height: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    fallbackTextLogoText: {
      fontFamily: "'Avenir Medium', 'Segoe UI', 'Arial', sans-serif",
      fontSize: isSmallMobile ? '28px' : isMobile ? '36px' : windowWidth <= 1248 ? '48px' : '64px',
      fontWeight: '700',
      color: '#224888',
      textShadow: '0 2px 8px rgba(34, 72, 136, 0.2)',
      letterSpacing: isMobile ? '2px' : '3px',
    },
  };

  return (
    <div style={styles.container}>
   
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        background: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
        zIndex: 1,
      }} />
      
      <div style={styles.content}>
      
        <div style={styles.logoContainer}>
    
          <div style={styles.logosRow}>
        
            <div style={styles.imageWrapper}>
              <img 
                src={BlewmLogo} 
                alt="Blewm Swirl Logo"
                style={styles.logoImage}
                onError={(e) => {
                  e.target.style.display = 'none';
                  const fallback = document.createElement('div');
                  Object.assign(fallback.style, styles.fallbackLogo);
                  const text = document.createElement('span');
                  Object.assign(text.style, styles.fallbackText);
                  text.textContent = '🌀';
                  fallback.appendChild(text);
                  e.target.parentNode.appendChild(fallback);
                }}
              />
            </div>
            
        
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
          </div>
        </div>
   
        <div style={styles.textContainer}>
          <h1 style={styles.comingSoonText}>
           COMING SOON!
          </h1>
        </div>
        
    
        
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

@keyframes pulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes textPulse {
  0%, 100% { 
    transform: scale(1);
    text-shadow: 0 2px 6px rgba(34, 72, 136, 0.2);
  }
  50% { 
    transform: ${typeof window !== 'undefined' && window.innerWidth <= 768 ? 'scale(1.01)' : 'scale(1.02)'};
    text-shadow: 0 3px 10px rgba(34, 72, 136, 0.3);
  }
}

@media (max-width: 768px) {
  .coming-soon-container {
    padding: 10px;
  }
  
  .coming-soon-content {
    padding: 20px 10px;
  }
}

@media (max-width: 480px) {
  .logos-row {
    flex-direction: column;
    gap: 5px;
  }
}
`;

export default ComingSoon;