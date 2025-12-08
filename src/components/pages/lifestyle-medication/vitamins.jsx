import React from 'react';
import '../../../assets/styles/pages/vitamins.css';
import Vitamins from "../../../assets/images/vitamins/inject.png";
import VitaminsProd from "../../../assets/images/vitamins/vit-products.png";
import Footer from '../../pages/footer'

const VitaminsPage = () => {
  const handleBuyNow = () => {
    console.log('Buy Now clicked');
    alert('Redirecting to checkout...');
  };
    
  return (
    <div className="vitamins-page">
      {/* Hero Section */}
      <section className="vitamins-hero">
        <div className="vitamins-hero-image-container">
          <div
            className="vitamins-hero-image"
            style={{ backgroundImage: `url(${Vitamins})` }}
          />
          <div className="vitamins-hero-overlay"></div>
          <div className="vitamins-hero-content">
            <h1 className="vitamins-hero-title">VITAMINS</h1>
            <p className="vitamins-hero-tagline">Vitamins that work as hard as you do</p>
            <p className="vitamins-hero-subtitle">
              Fast-absorbing vitamin injections restore what your body needs to repair, recharge, and perform at its best
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="vitamins-content">
        
        {/* Intro Section - WITHOUT RIGHT-SIDE IMAGE */}
        <section className="vitamins-section vitamins-intro">
          <div className="vitamins-container">
            <div className="vitamins-section-header">
              <h2 className="vitamins-section-title">
                Why <span className="vitamins-title-accent">Vitamin Injections</span> Work Better
              </h2>
              <p className="vitamins-section-subtitle">
                Maximum absorption. Immediate results. No digestive waste.
              </p>
            </div>
            
            <div className="vitamins-intro-text">
              <h3 className="vitamins-intro-headline">
                Oral supplements lose up to 80% of their potency through digestion.
              </h3>
              
              <p className="vitamins-key-point">
                <strong>Vitamin injections skip the digestive system entirely</strong>, delivering nutrients directly to your cells where they're needed most.
              </p>
              
              {/* Stats Section */}
              <div className="vitamins-stats">
                <div className="vitamins-stat">
                  <span className="vitamins-stat-number">100%</span>
                  <span className="vitamins-stat-label">Absorption Rate</span>
                </div>
                <div className="vitamins-stat">
                  <span className="vitamins-stat-number">24</span>
                  <span className="vitamins-stat-label">Hours to Feel Effects</span>
                </div>
                <div className="vitamins-stat">
                  <span className="vitamins-stat-number">10x</span>
                  <span className="vitamins-stat-label">More Bioavailable</span>
                </div>
              </div>
              
              {/* Benefits Grid - LARGER IMAGES */}
              <div className="vitamins-benefits-grid">
                <div className="vitamins-benefit">
                  <div className="vitamins-benefit-icon">
                    <img 
                      src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80"
                      alt="Energy Boost" 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="white"><path d="M13 2v6h6v2h-6v6h-2v-6H5V8h6V2h2z"/></svg>';
                      }}
                    />
                  </div>
                  <div className="vitamins-benefit-content">
                    <h4>Immediate Energy</h4>
                    <p>Feel revitalized within hours, not weeks</p>
                  </div>
                </div>
                
                <div className="vitamins-benefit">
                  <div className="vitamins-benefit-icon">
                    <img 
                      src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80"
                      alt="Enhanced Immunity" 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="white"><path d="M12 2L4 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-8-3zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>';
                      }}
                    />
                  </div>
                  <div className="vitamins-benefit-content">
                    <h4>Enhanced Immunity</h4>
                    <p>Strengthen your body's natural defenses</p>
                  </div>
                </div>
                
                <div className="vitamins-benefit">
                  <div className="vitamins-benefit-icon">
                    <img 
                      src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80"
                      alt="Mental Clarity" 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="white"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm-1 16v-2h2v2h-2zm2.07-7.75l-.9.92C11.45 12.9 11 13.5 11 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>';
                      }}
                    />
                  </div>
                  <div className="vitamins-benefit-content">
                    <h4>Mental Clarity</h4>
                    <p>Improve focus and cognitive function</p>
                  </div>
                </div>
                
                <div className="vitamins-benefit">
                  <div className="vitamins-benefit-icon">
                    <img 
                      src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80"
                      alt="Better Recovery" 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="white"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>';
                      }}
                    />
                  </div>
                  <div className="vitamins-benefit-content">
                    <h4>Better Recovery</h4>
                    <p>Optimize sleep and cellular repair</p>
                  </div>
                </div>
              </div>
              
              {/* CTA Text */}
              <p className="vitamins-cta-text">
                Perfect for busy professionals, athletes, and anyone seeking optimal wellness without the wait.
              </p>
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section className="vitamins-section vitamins-product">
          <div className="vitamins-container">
            <div className="vitamins-section-header">
              <h2 className="vitamins-section-title">Featured Vitamin Product</h2>
            </div>
            <div className="vitamins-product-card">
              <div className="vitamins-product-image">
                <img 
                  src={VitaminsProd}
                  alt="Premium Vitamin Complex" 
                  className="vitamins-product-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </div>
              <div className="vitamins-product-details">
                <div className="vitamins-product-badge">MOST POPULAR</div>
                <h3 className="vitamins-product-name">Premium Energy & Immunity Complex</h3>
                <p className="vitamins-product-description">
                  Our most comprehensive vitamin formulation designed to boost energy, enhance immunity, 
                  and support overall wellness. Perfect for busy professionals, athletes, and anyone 
                  seeking optimal health.
                </p>
                <div className="vitamins-product-features">
                  <div className="vitamins-feature">
                    <span className="vitamins-feature-check">✓</span>
                    <span>B-complex vitamins</span>
                  </div>
                  <div className="vitamins-feature">
                    <span className="vitamins-feature-check">✓</span>
                    <span>Vitamin C </span>
                  </div>
                  <div className="vitamins-feature">
                    <span className="vitamins-feature-check">✓</span>
                    <span>Essential minerals</span>
                  </div>
                  <div className="vitamins-feature">
                    <span className="vitamins-feature-check">✓</span>
                    <span>Amino acid blend</span>
                  </div>
                </div>
                <div className="vitamins-product-pricing">
                  <div className="vitamins-price-container">
                    <span className="vitamins-price-old">$95</span>
                    <span className="vitamins-price">$65</span>
                    <span className="vitamins-price-month">/month</span>
                  </div>
                  <span className="vitamins-savings">Save 32%</span>
                </div>
                <button 
                  className="vitamins-btn vitamins-btn-primary"
                  onClick={handleBuyNow}
                >
                  <span className="vitamins-btn-text">Buy Now </span>
                  <span className="vitamins-btn-icon">→</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default VitaminsPage;