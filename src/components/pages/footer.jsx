import React, { useState, useEffect, useRef } from 'react';
import "../../assets/styles/pages/footer.css";
import { FaEnvelope, FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn, FaChevronRight } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import BlewmTextLogo from "../../assets/images/logo/blewm-word.png";
import BlewmLogo from "../../assets/images/logo/blewmswirl.png";

// Import the ContactForm modal
import ContactForm from '../modal/contactModal';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -200px 0px'
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <>
      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactModalOpen}
        onClose={handleCloseModal}
      />

      <footer ref={footerRef} className={`footer ${isVisible ? 'visible' : ''}`}>
        <div className="footer-container">
          {/* Top Section */}
          <div className="footer-top">
            <div className="footer-logo-section">
              <div className="footer-logo">
                <img 
                  src={BlewmLogo} 
                  alt="Blewm Swirl Logo" 
                  className="footer-logo-symbol"
                />
                <img 
                  src={BlewmTextLogo} 
                  alt="Blewm Text Logo" 
                  className="footer-logo-text-image"
                />
              </div>
              <p className="footer-tagline">
                Premium wellness solutions for modern living. Experience the difference.
              </p>
            </div>

            <div className="footer-columns">
              {/* Contact Column */}
              <div className="footer-column">
                <h3 className="footer-column-title">Contact</h3>
                <div className="footer-contact-item">
                  <FaEnvelope className="footer-contact-icon" />
                  <a href="mailto:info@blewm.com" className="footer-link">info@blewm.com</a>
                </div>
                <div className="social-links">
                  <a href="#" className="social-link" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    <FaXTwitter />
                  </a>
                  <a href="#" className="social-link" aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>

              {/* Access Column */}
              <div className="footer-column">
                <h3 className="footer-column-title">Access</h3>
                <ul className="footer-links">
                  <li><a href="/services/im-therapy" className="footer-link">IM Therapy</a></li>
                  <li><a href="/services/iv-therapy" className="footer-link">IV Therapy</a></li>
                  <li><a href="/services/test-kits" className="footer-link">Test Kits</a></li>
                  <li><a href="/services/lifestyle-medications" className="footer-link">Lifestyle Medications</a></li>
                  <li><a href="/concierge" className="footer-link">Concierge Medicine</a></li>
                  <li><a href="/packages" className="footer-link">Packages</a></li>
                  <li><a href="#" className="footer-link">Gift Cards</a></li>
                </ul>
              </div>

              {/* Actions Column */}
              <div className="footer-column">
                <h3 className="footer-column-title">Actions</h3>
                <ul className="footer-links">
                  <li>
                    <a href="/about" className="footer-link">
                      <FaChevronRight className="link-icon" />
                      Learn About Blewm
                    </a>
                  </li>
                  <li>
                    <a href="/faq" className="footer-link">
                      <FaChevronRight className="link-icon" />
                      Frequently Asked Questions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      <FaChevronRight className="link-icon" />
                      Privacy Policy
                    </a>
                  </li>
                </ul>
                
                {/* CTA Button that opens contact modal */}
                <div className="footer-cta">
                  <button 
                    onClick={handleContactClick}
                    className="cta-button"
                  >
                    Contact Us
                    <FaChevronRight className="link-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="copyright">
                <span className="blewm-logo-footer">BLEWM</span> © {currentYear}. All Rights Reserved.
              </div>
              <div className="footer-legal">
                <a href="#" className="footer-legal-link">Terms of Service</a>
                <span className="separator">•</span>
                <a href="#" className="footer-legal-link">Privacy Policy</a>
                <span className="separator">•</span>
                <a href="#" className="footer-legal-link">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;