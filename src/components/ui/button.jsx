import React from 'react';
import '../../assets/styles/buttons/button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  color,
  className = '',
  style = {},
  type = 'button'
}) => {
  const buttonClasses = [
    'custom-button',
    `custom-button--${variant}`,
    `custom-button--${size}`,
    fullWidth ? 'custom-button--full-width' : '',
    disabled ? 'custom-button--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  // Calculate hover color automatically if not provided
  const getHoverColor = (color) => {
    if (!color) return '';
    
    // If color is in CSS custom property format
    if (color.startsWith('var(--')) return '';
    
    // For hex colors, calculate darker version
    if (color.startsWith('#')) {
      // Simple darkening for hover effect
      const hex = color.replace('#', '');
      const r = Math.max(0, parseInt(hex.substr(0, 2), 16) - 30);
      const g = Math.max(0, parseInt(hex.substr(2, 2), 16) - 30);
      const b = Math.max(0, parseInt(hex.substr(4, 2), 16) - 30);
      return `rgb(${r}, ${g}, ${b})`;
    }
    
    return '';
  };

  const customStyles = color ? { 
    ...style, 
    '--button-color': color,
    '--button-hover-color': getHoverColor(color)
  } : style;

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      style={customStyles}
    >
      {icon && iconPosition === 'left' && (
        <span className="custom-button__icon custom-button__icon--left">
          {icon}
        </span>
      )}
      <span className="custom-button__content">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="custom-button__icon custom-button__icon--right">
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;