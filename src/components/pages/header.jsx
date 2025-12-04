import { useState, useRef, useEffect } from "react";
import "../../assets/styles/pages/header.css";
import logo from "../../assets/images/logo/blewm-spiral-word.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [learnMoreOpen, setLearnMoreOpen] = useState(false);
  const [bookNowOpen, setBookNowOpen] = useState(false);
  
  const dropdownRefs = useRef({});
  const learnMoreRef = useRef(null);
  const bookNowRef = useRef(null);
  
  // Track if we're on mobile/tablet - using 1024px to include all iPads
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (for SSR)
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        // Include all iPads (1024px and below)
        setIsMobile(window.innerWidth <= 1024);
      };
      
      checkMobile(); 
      window.addEventListener('resize', checkMobile);
      
      return () => {
        window.removeEventListener('resize', checkMobile);
      };
    }
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setLearnMoreOpen(false);
    setBookNowOpen(false);
  };


  const handleDropdownMouseEnter = (index) => {
    if (!isMobile) {
      setOpenDropdown(index);
      setLearnMoreOpen(false);
      setBookNowOpen(false);
    }
  };

  const handleDropdownMouseLeave = (index) => {
    if (!isMobile) {
      setOpenDropdown(null);
    }
  };

  const handleLearnMoreMouseEnter = () => {
    if (!isMobile) {
      setLearnMoreOpen(true);
      setOpenDropdown(null);
      setBookNowOpen(false);
    }
  };

  const handleLearnMoreMouseLeave = () => {
    if (!isMobile) {
      setLearnMoreOpen(false);
    }
  };

  const handleBookNowMouseEnter = () => {
    if (!isMobile) {
      setBookNowOpen(true);
      setOpenDropdown(null);
      setLearnMoreOpen(false);
    }
  };

  const handleBookNowMouseLeave = () => {
    if (!isMobile) {
      setBookNowOpen(false);
    }
  };


  const toggleDropdown = (index) => {
    if (isMobile) {
      if (openDropdown === index) {
        setOpenDropdown(null);
      } else {
        setOpenDropdown(index);
        setLearnMoreOpen(false);
        setBookNowOpen(false);
      }
    }
  };

  const toggleLearnMore = () => {
    if (isMobile) {
      if (learnMoreOpen) {
        setLearnMoreOpen(false);
      } else {
        setLearnMoreOpen(true);
        setOpenDropdown(null);
        setBookNowOpen(false);
      }
    }
  };

  const toggleBookNow = () => {
    if (isMobile) {
      if (bookNowOpen) {
        setBookNowOpen(false);
      } else {
        setBookNowOpen(true);
        setOpenDropdown(null);
        setLearnMoreOpen(false);
      }
    }
  };

 
  const handleMobileClick = (dropdownType, index = null) => {
    if (!isMobile) return;
    
    switch (dropdownType) {
      case 'service':
        toggleDropdown(index);
        break;
      case 'learnMore':
        toggleLearnMore();
        break;
      case 'bookNow':
        toggleBookNow();
        break;
      default:
        break;
    }
  };

 
  useEffect(() => {
    const handleClickOutsideMobile = (event) => {
    
      if (!isMobile) return;
      
      
      const navElement = document.querySelector('.nav-links');
      const menuButton = document.querySelector('.menu-btn');
      
      if (
        menuOpen && 
        navElement && 
        menuButton && 
        !navElement.contains(event.target) && 
        !menuButton.contains(event.target)
      ) {
        setMenuOpen(false);
        setOpenDropdown(null);
        setLearnMoreOpen(false);
        setBookNowOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutsideMobile);
    document.addEventListener('touchstart', handleClickOutsideMobile);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMobile);
      document.removeEventListener('touchstart', handleClickOutsideMobile);
    };
  }, [isMobile, menuOpen]);


  useEffect(() => {
    if (menuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen, isMobile]);

  const services = [
    {
      name: "IV Therapy",
      items: ["Coming Soon"]
    },
    {
      name: "IM Therapy",
      items: ["Coming Soon"]
    },
    {
      name: "Test Kits",
      items: ["Coming Soon"]
    },
    {
      name: "Lifestyle Medications",
      items: ["Peptiside", "Vitamins", "Weightloss"]
    }
  ];

  const learnMoreItems = [
    { text: "Contact", href: "#contact" },
    { text: "FAQs", href: "#faqs" },
    { text: "Gift Cards", href: "#giftcards" },
    { text: "Packages", href: "#packages" },

 
  ];

  const bookNowOptions = [
      {
      text: "LifeStyle Medication",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
   
    
    
  ];


  useEffect(() => {
    const handleClickOutside = (event) => {
      
      if (!isMobile) {
        
        Object.values(dropdownRefs.current).forEach(ref => {
          if (ref && !ref.contains(event.target)) {
            setOpenDropdown(null);
          }
        });
        
     
        if (learnMoreRef.current && !learnMoreRef.current.contains(event.target)) {
          setLearnMoreOpen(false);
        }
        
       
        if (bookNowRef.current && !bookNowRef.current.contains(event.target)) {
          setBookNowOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobile]);

  return (
    <header className="header">
      <div className="container">
        <a href="#home" className="logo" onClick={handleNavClick}>
          <div className="logo-container">
            <img src={logo} alt="Blewm Logo" className="logo-icon" />
          </div>
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
      
          {services.map((service, index) => (
            <div 
              key={index} 
              className="dropdown-container"
              ref={el => dropdownRefs.current[index] = el}
              onMouseEnter={() => handleDropdownMouseEnter(index)}
              onMouseLeave={() => handleDropdownMouseLeave(index)}
            >
              <button 
                className={`dropdown-btn ${openDropdown === index ? 'active' : ''}`}
                onClick={() => handleMobileClick('service', index)}
                onMouseEnter={() => !isMobile && handleDropdownMouseEnter(index)}
              >
                {service.name}
                <svg 
                  className={`dropdown-icon ${openDropdown === index ? 'open' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 9l-7 7-7-7" 
                  />
                </svg>
              </button>
              
              <div className={`dropdown-menu ${openDropdown === index ? 'open' : ''}`}>
                {service.items.map((item, itemIndex) => (
                  <a 
                    key={itemIndex} 
                    href={`#${service.name.toLowerCase().replace(' ', '-')}-${itemIndex}`}
                    onClick={handleNavClick}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}

      
          <div 
            className="dropdown-container"
            ref={learnMoreRef}
            onMouseEnter={handleLearnMoreMouseEnter}
            onMouseLeave={handleLearnMoreMouseLeave}
          >
            <button 
              className={`dropdown-btn ${learnMoreOpen ? 'active' : ''}`}
              onClick={() => handleMobileClick('learnMore')}
              onMouseEnter={() => !isMobile && handleLearnMoreMouseEnter()}
            >
              Learn More
              <svg 
                className={`dropdown-icon ${learnMoreOpen ? 'open' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
            </button>
            
            <div className={`dropdown-menu ${learnMoreOpen ? 'open' : ''}`}>
              {learnMoreItems.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href}
                  onClick={handleNavClick}
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
            
          <a 
            href="#concierge" 
            onClick={handleNavClick}
            className="nav-link-item"
          >
            Concierge
          </a>
          <a 
            href="#about" 
            onClick={handleNavClick}
            className="nav-link-item"
          >
            About
          </a>


      
          <div 
            className="book-now-dropdown"
            ref={bookNowRef}
            onMouseEnter={handleBookNowMouseEnter}
            onMouseLeave={handleBookNowMouseLeave}
          >
            <button 
              className={`book-now-btn ${bookNowOpen ? 'active' : ''}`}
              onClick={() => handleMobileClick('bookNow')}
              onMouseEnter={() => !isMobile && handleBookNowMouseEnter()}
            >
              Book Now
              <svg 
                className={`dropdown-icon ${bookNowOpen ? 'open' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
            </button>
            
            <div className={`book-now-dropdown-menu ${bookNowOpen ? 'open' : ''}`}>
              {bookNowOptions.map((option, index) => (
                <button 
                  key={index}
                  onClick={() => {
                    handleNavClick();
                    console.log(`Selected: ${option.text}`);
                  }}
                >
                  {option.icon}
                  {option.text}
                </button>
              ))}
              <div className="divider"></div>
              <button onClick={handleNavClick}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call: (555) 123-4567
              </button>
            </div>
          </div>
        </nav>

        <button 
          className={`menu-btn ${menuOpen ? "open" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="hamburger"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;