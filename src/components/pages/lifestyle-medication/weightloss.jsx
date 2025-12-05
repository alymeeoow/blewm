import React from 'react';
import '../../../assets/styles/pages/weightloss.css';


import WeightLoss from "../../../assets/images/weight-loss/weight-loss.png";
const WeightLossPage = () => {
  const handleBuyNow = () => {
    console.log('Buy Now clicked');
    alert('Redirecting to checkout...');
  };

  const handleLearnMore = () => {
    console.log('Learn More clicked');
    alert('Redirecting to information page...');
  };
  
  return (
    <div className="weightloss-page">
      {/* Hero Section */}
      <section className="weightloss-hero">
        <div className="weightloss-hero-image-container">
          <div
            className="weightloss-hero-image"
            style={{ 
              backgroundImage:  `url(${WeightLoss})` 
            }}
          />
          <div className="weightloss-hero-overlay"></div>
          <div className="weightloss-hero-content">
            <h1 className="weightloss-hero-title"> Weight Loss</h1>
            <p className="weightloss-hero-tagline">Science-backed solutions for sustainable results</p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="weightloss-content">
        
        {/* Introduction Section */}
        <section className="weightloss-section weightloss-intro">
          <div className="weightloss-container">
            <div className="weightloss-section-header">
              <h2 className="weightloss-section-title">
                Transform Your <span className="weightloss-title-accent">Weight Loss Journey</span>
              </h2>
            </div>
            <div className="weightloss-intro-content">
              <div className="weightloss-intro-text">
                <p className="weightloss-intro-paragraph">
                  Struggling with weight loss despite diet and exercise? Discover medical-grade solutions that target the root causes of weight gain for lasting results.
                </p>
              </div>
              <div className="weightloss-intro-image">
                <img 
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Weight Loss Transformation"
                  className="weightloss-intro-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Semaglutide Section */}
        <section className="weightloss-section weightloss-semaglutide">
          <div className="weightloss-container">
            <div className="weightloss-semaglutide-content">
              <div className="weightloss-semaglutide-image">
                <img 
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Semaglutide Treatment"
                  className="weightloss-semaglutide-img"
                />
              </div>
              <div className="weightloss-semaglutide-text">
                <h3 className="weightloss-semaglutide-title">
                  Semaglutide: The Science of Weight Loss
                </h3>
                <p className="weightloss-semaglutide-paragraph">
                  Originally developed for diabetes, semaglutide has become a breakthrough in weight management. This FDA-approved treatment helps regulate appetite and supports sustainable weight loss.
                </p>
                <p className="weightloss-semaglutide-paragraph">
                  Clinical studies show significant results when combined with lifestyle changes, offering a new approach to overcoming weight loss plateaus.
                </p>
                <p className="weightloss-semaglutide-note">
                  <strong>Consult with our physicians to see if semaglutide fits your weight loss goals.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="weightloss-section weightloss-how-it-works">
          <div className="weightloss-container">
            <div className="weightloss-section-header">
              <h2 className="weightloss-section-title">
                How It <span className="weightloss-title-accent">Works</span>
              </h2>
            </div>
            <div className="weightloss-features-grid">
              <div className="weightloss-feature">
                <div className="weightloss-feature-icon">
                  <img 
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                    alt="Appetite Control"
                  />
                </div>
                <h3 className="weightloss-feature-title">Appetite Control</h3>
                <p className="weightloss-feature-text">
                  Regulates hunger signals naturally, reducing cravings and portion sizes without constant willpower.
                </p>
              </div>
              
              <div className="weightloss-feature">
                <div className="weightloss-feature-icon">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                    alt="Metabolic Support"
                  />
                </div>
                <h3 className="weightloss-feature-title">Metabolic Support</h3>
                <p className="weightloss-feature-text">
                  Supports healthy blood sugar levels and improves metabolic function for sustainable weight management.
                </p>
              </div>
              
              <div className="weightloss-feature">
                <div className="weightloss-feature-icon">
                  <img 
                    src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                    alt="Sustainable Results"
                  />
                </div>
                <h3 className="weightloss-feature-title">Sustainable Results</h3>
                <p className="weightloss-feature-text">
                  Achieve and maintain your target weight with physician-guided treatment plans designed for long-term success.
                </p>
              </div>
            </div>
            
            <div className="weightloss-cta-box">
              <h3 className="weightloss-cta-title">Ready for Change?</h3>
              <p className="weightloss-cta-text">
                Take the first step toward sustainable weight loss with science-backed treatments.
              </p>
              <button 
                className="weightloss-btn weightloss-btn-primary"
                onClick={handleLearnMore}
              >
                <span className="weightloss-btn-text">Learn More</span>
                <span className="weightloss-btn-icon">→</span>
              </button>
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section className="weightloss-section weightloss-product">
          <div className="weightloss-container">
            <div className="weightloss-section-header">
              <h2 className="weightloss-section-title">
                Choose Your <span className="weightloss-title-accent">Program</span>
              </h2>
            </div>
            <div className="weightloss-product-cards">
              <div className="weightloss-product-card">
                <div className="weightloss-product-image">
                  <img 
                    src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Tirzepatide Program"
                    className="weightloss-product-img"
                  />
                </div>
                <div className="weightloss-product-details">
                  <div className="weightloss-product-badge">MOST EFFECTIVE</div>
                  <h3 className="weightloss-product-name">Tirzepatide Program</h3>
                  <p className="weightloss-product-description">
                    Advanced dual-action treatment for maximum weight loss results.
                  </p>
                  <div className="weightloss-product-features">
                    <div className="weightloss-feature-item">
                      <span className="weightloss-feature-check">✓</span>
                      <span>Advanced formula</span>
                    </div>
                    <div className="weightloss-feature-item">
                      <span className="weightloss-feature-check">✓</span>
                      <span>Dual-action results</span>
                    </div>
                    <div className="weightloss-feature-item">
                      <span className="weightloss-feature-check">✓</span>
                      <span>Physician supervised</span>
                    </div>
                  </div>
                  <div className="weightloss-product-pricing">
                    <div className="weightloss-price-container">
                      <span className="weightloss-price-old">$295</span>
                      <span className="weightloss-price">$225</span>
                      <span className="weightloss-price-month">/month</span>
                    </div>
                    <span className="weightloss-savings">Save 24%</span>
                  </div>
                  <button 
                    className="weightloss-btn weightloss-btn-primary"
                    onClick={handleBuyNow}
                  >
                    <span className="weightloss-btn-text">Start Now</span>
                    <span className="weightloss-btn-icon">→</span>
                  </button>
                </div>
              </div>
              
              <div className="weightloss-product-card">
                <div className="weightloss-product-image">
                  <img 
                    src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Semaglutide Program"
                    className="weightloss-product-img"
                  />
                </div>
                <div className="weightloss-product-details">
                  <div className="weightloss-product-badge">FDA APPROVED</div>
                  <h3 className="weightloss-product-name">Semaglutide Program</h3>
                  <p className="weightloss-product-description">
                    Proven weight loss treatment with established success rates.
                  </p>
                  <div className="weightloss-product-features">
                    <div className="weightloss-feature-item">
                      <span className="weightloss-feature-check">✓</span>
                      <span>Clinically proven</span>
                    </div>
                    <div className="weightloss-feature-item">
                      <span className="weightloss-feature-check">✓</span>
                      <span>Cardiovascular benefits</span>
                    </div>
                    <div className="weightloss-feature-item">
                      <span className="weightloss-feature-check">✓</span>
                      <span>Medical monitoring</span>
                    </div>
                  </div>
                  <div className="weightloss-product-pricing">
                    <div className="weightloss-price-container">
                      <span className="weightloss-price-old">$275</span>
                      <span className="weightloss-price">$195</span>
                      <span className="weightloss-price-month">/month</span>
                    </div>
                    <span className="weightloss-savings">Save 29%</span>
                  </div>
                  <button 
                    className="weightloss-btn weightloss-btn-primary"
                    onClick={handleBuyNow}
                  >
                    <span className="weightloss-btn-text">Get Started</span>
                    <span className="weightloss-btn-icon">→</span>
                  </button>
                </div>
              </div>
            </div>
            
            
           
          </div>
        </section>
      </div>
    </div>
  );
};

export default WeightLossPage;