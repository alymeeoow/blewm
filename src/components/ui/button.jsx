import React from 'react';
import { ChevronDown } from 'lucide-react';

const Button = ({ 
  isMobile = false,
  isTablet = false,
  mobileView = false,
  activeDropdown = null,
  setActiveDropdown = () => {},
  dropdownRefs = {},
  setIsMenuOpen = () => {},
  mobileDropdowns = {},
  toggleMobileDropdown = () => {}
}) => {
  
  const dropdownItems = {
    'book-now': [
      { id: 1, label: 'New Patient Consultation', href: '#new-patient' },
      { id: 2, label: 'Existing Patient', href: '#existing-patient' },
      { id: 3, label: 'Urgent Care', href: '#urgent-care' },
      { id: 4, label: 'Virtual Visit', href: '#virtual-visit' },
      { id: 5, label: 'Package Deals', href: '#package-deals' },
    ],
  };

  const styles = {
    primaryButton: {
      backgroundColor: '#224888',
      color: 'white',
      border: 'none',
      padding: isTablet ? '0.75rem 1.5rem' : '0.875rem 1.75rem',
      borderRadius: '50px',
      fontSize: isTablet ? '0.875rem' : '0.95rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      fontFamily: "'Avenir Medium', 'Segoe UI', system-ui, sans-serif",
      letterSpacing: '0.01em',
      whiteSpace: 'nowrap',
      backgroundImage: 'linear-gradient(135deg, #224888 0%, #3a5cb0 100%)',
      boxShadow: '0 2px 8px rgba(34, 72, 136, 0.2)',
      position: 'relative',
      overflow: 'hidden',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px',
      textDecoration: 'none',
      '&:hover': {
        backgroundColor: '#4a6fc1',
        backgroundImage: 'linear-gradient(135deg, #2a52a0 0%, #4a6fc1 100%)',
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 20px rgba(34, 72, 136, 0.3)',
      },
      '&:active': {
        transform: 'translateY(0)',
        boxShadow: '0 2px 8px rgba(34, 72, 136, 0.2)',
      },
    },
    dropdownIcon: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '16px',
      height: '16px',
      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      color: 'inherit',
      opacity: 0.7,
      flexShrink: 0,
    },
    dropdownMenu: {
      position: 'absolute',
      top: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%) translateY(5px)',
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      minWidth: '220px',
      borderRadius: '12px',
      boxShadow: '0 10px 40px rgba(34, 72, 136, 0.15), 0 2px 8px rgba(34, 72, 136, 0.1)',
      padding: '0.75rem 0',
      opacity: 0,
      visibility: 'hidden',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '1px solid rgba(34, 72, 136, 0.08)',
      zIndex: 1001,
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '-6px',
        left: '50%',
        width: '12px',
        height: '12px',
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        borderTop: '1px solid rgba(34, 72, 136, 0.08)',
        borderLeft: '1px solid rgba(34, 72, 136, 0.08)',
        transform: 'translateX(-50%) rotate(45deg)',
      },
    },
    dropdownMenuActive: {
      opacity: 1,
      visibility: 'visible',
      transform: 'translateX(-50%) translateY(0)',
    },
    dropdownItem: {
      display: 'block',
      padding: '0.625rem 1.5rem',
      color: '#224888',
      textDecoration: 'none',
      fontSize: '0.9rem',
      fontWeight: '500',
      transition: 'all 0.2s ease',
      fontFamily: "'Avenir Medium', 'Segoe UI', system-ui, sans-serif",
      whiteSpace: 'nowrap',
      '&:hover': {
        backgroundColor: 'rgba(34, 72, 136, 0.05)',
        color: '#4a6fc1',
        paddingLeft: '1.75rem',
      },
    },
    mobileDropdownIcon: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '20px',
      height: '20px',
      color: 'inherit',
      opacity: 0.8,
      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      flexShrink: 0,
    },
    mobileDropdownMenu: {
      maxHeight: '0',
      overflow: 'hidden',
      transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      marginLeft: '0.75rem',
      borderLeft: '2px solid rgba(34, 72, 136, 0.1)',
    },
    mobileDropdownMenuOpen: {
      maxHeight: '500px',
    },
    mobileDropdownItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '0.75rem 1rem 0.75rem 1.5rem',
      color: '#224888',
      textDecoration: 'none',
      fontSize: '1rem',
      fontWeight: '500',
      fontFamily: "'Avenir Medium', 'Segoe UI', sans-serif",
      borderBottom: '1px solid rgba(34, 72, 136, 0.03)',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      position: 'relative',
      '&:hover': {
        color: '#4a6fc1',
      },
      '&::before': {
        content: '"•"',
        position: 'absolute',
        left: '0.5rem',
        opacity: 0.5,
      },
    },
  };

  if (mobileView) {
    return (
      <div>
        <button
          style={{
            ...styles.primaryButton,
            padding: '1rem 1.75rem',
            fontSize: '1rem',
            width: '100%',
          }}
          onClick={() => toggleMobileDropdown('book-now-mobile')}
          aria-expanded={mobileDropdowns['book-now-mobile']}
          aria-label="Toggle Book Now dropdown"
        >
          BOOK NOW
          <div
            style={{
              ...styles.mobileDropdownIcon,
              transform: mobileDropdowns['book-now-mobile'] ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            <ChevronDown size={16} />
          </div>
        </button>
        <div
          style={{
            ...styles.mobileDropdownMenu,
            ...(mobileDropdowns['book-now-mobile'] ? styles.mobileDropdownMenuOpen : {})
          }}
          aria-hidden={!mobileDropdowns['book-now-mobile']}
        >
          {dropdownItems['book-now']?.map((subItem) => (
            <a
              key={subItem.id}
              href={subItem.href}
              style={styles.mobileDropdownItem}
              onClick={() => setIsMenuOpen(false)}
              aria-label={`Navigate to ${subItem.label}`}
            >
              {subItem.label}
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => setActiveDropdown('book-now')}
      onMouseLeave={() => setActiveDropdown(null)}
      ref={el => dropdownRefs['book-now'] = el}
    >
      <button
        style={styles.primaryButton}
        onClick={() => window.location.href = '#book-now'}
        aria-label="Book an appointment now"
        aria-expanded={activeDropdown === 'book-now'}
        aria-haspopup="true"
      >
        BOOK NOW
        <div
          style={{
            ...styles.dropdownIcon,
            transform: activeDropdown === 'book-now' ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <ChevronDown size={14} />
        </div>
      </button>
      <div
        style={{
          ...styles.dropdownMenu,
          left: '50%',
          ...(activeDropdown === 'book-now' ? styles.dropdownMenuActive : {})
        }}
        aria-hidden={activeDropdown !== 'book-now'}
      >
        {dropdownItems['book-now']?.map((subItem) => (
          <a
            key={subItem.id}
            href={subItem.href}
            style={styles.dropdownItem}
            onClick={() => setActiveDropdown(null)}
            aria-label={`Navigate to ${subItem.label}`}
          >
            {subItem.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Button;