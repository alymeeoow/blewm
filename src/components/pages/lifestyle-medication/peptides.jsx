import React from 'react';
import '../../../assets/styles/pages/peptides.css';
import PeptidesDrop from "../../../assets/images/peptides/peptides-drops.png";
import MuscleRecovery from "../../../assets/images/peptides/muscle.png";
import PeptidesProduct from "../../../assets/images/peptides/peptides-product.png";
import Footer from '../../pages/footer'

const PeptidesPage = () => {
  const handleBuyNow = () => {
    console.log('Buy Now clicked');
    alert('Redirecting to checkout...');
  };
    
  return (
    <div className="peptides-page">
      {/* Hero Section */}
      <section className="peptides-hero">
        <div className="peptides-hero-image-container">
          <div
            className="peptides-hero-image"
            style={{ backgroundImage: `url(${PeptidesDrop})` }}
          />
          <div className="peptides-hero-overlay"></div>
          <div className="peptides-hero-content">
            <h1 className="peptides-hero-title">PEPTIDES</h1>
            <p className="peptides-hero-tagline">The building blocks of healing</p>
            <p className="peptides-hero-subtitle">
              Harness the power of peptides to enhance recovery, metabolism, and cellular health
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="peptides-content">
        
        {/* Benefits Section */}
        <section className="peptides-section peptides-benefits">
          <div className="peptides-container">
            <div className="peptides-section-header">
              <h2 className="peptides-section-title">
                The Power of <span className="peptides-title-accent">Peptide Therapies</span>
              </h2>
            </div>
            <div className="peptides-cards-grid">
              <div className="peptides-card">
                <div className="peptides-card-icon">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" 
                    alt="Recovery Icon"
                    className="peptides-icon-img"
                  />
                </div>
                <h3 className="peptides-card-title">Enhanced Recovery</h3>
                <p className="peptides-card-text">Accelerate tissue repair and muscle recovery</p>
              </div>
              
              <div className="peptides-card">
                <div className="peptides-card-icon">
                  <img 
                    src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" 
                    alt="Metabolism Icon"
                    className="peptides-icon-img"
                  />
                </div>
                <h3 className="peptides-card-title">Metabolic Optimization</h3>
                <p className="peptides-card-text">Support healthy metabolism and energy use</p>
              </div>
              
              <div className="peptides-card">
                <div className="peptides-card-icon">
                  <img 
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" 
                    alt="Cellular Health Icon"
                    className="peptides-icon-img"
                  />
                </div>
                <h3 className="peptides-card-title">Cellular Health</h3>
                <p className="peptides-card-text">Promote cellular regeneration and longevity</p>
              </div>
            </div>
          </div>
        </section>

        {/* Therapy Applications */}
        <section className="peptides-section peptides-therapy">
          <div className="peptides-container">
            <div className="peptides-section-header">
              <h2 className="peptides-section-title">
                Targeted <span className="peptides-title-accent">Peptide Therapies</span>
              </h2>
              <p className="peptides-section-subtitle">
                Scientific approaches to specific health optimization
              </p>
            </div>
            <div className="peptides-cards-grid">
              <div className="peptides-card">
                <div className="peptides-card-icon">
                  <img 
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" 
                    alt="Weight Management Icon"
                    className="peptides-icon-img"
                  />
                </div>
                <h3 className="peptides-card-title">Weight Management</h3>
                <p className="peptides-card-text">
                  Support healthy weight loss through optimized metabolic function and appetite regulation
                </p>
              </div>
              
              <div className="peptides-card">
                <div className="peptides-card-icon">
                  <img 
                    src={MuscleRecovery}
                    alt="Muscle Recovery Icon"
                    className="peptides-icon-img"
                  />
                </div>
                <h3 className="peptides-card-title">Muscle Recovery</h3>
                <p className="peptides-card-text">
                  Accelerate tissue repair, reduce inflammation, and enhance athletic performance recovery
                </p>
              </div>
              
              <div className="peptides-card">
                <div className="peptides-card-icon">
                  <img 
                    src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" 
                    alt="Anti-Aging Icon"
                    className="peptides-icon-img"
                  />
                </div>
                <h3 className="peptides-card-title">Anti-Aging</h3>
                <p className="peptides-card-text">
                  Promote cellular regeneration, enhance collagen production, and support longevity
                </p>
              </div>
              
              <div className="peptides-card">
                <div className="peptides-card-icon">
                  <img 
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" 
                    alt="Immune Support Icon"
                    className="peptides-icon-img"
                  />
                </div>
                <h3 className="peptides-card-title">Immune Support</h3>
                <p className="peptides-card-text">
                  Enhance immune system function, improve resilience, and support overall wellness
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Methods */}
        <section className="peptides-section peptides-delivery">
          <div className="peptides-container">
            <div className="peptides-section-header">
              <h2 className="peptides-section-title">
                Multiple <span className="peptides-title-accent">Delivery Methods</span>
              </h2>
            </div>
            <div className="peptides-cards-grid">
              <div className="peptides-card">
                <div className="peptides-card-icon">
                  <img 
                    src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" 
                    alt="Injection Icon"
                    className="peptides-icon-img"
                  />
                </div>
                <h3 className="peptides-card-title">Subcutaneous Injections</h3>
                <p className="peptides-card-text">Maximum bioavailability with precise dosing</p>
              </div>
              
              <div className="peptides-card">
                <div className="peptides-card-icon">
                  <img 
                    src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" 
                    alt="Oral Medicine Icon"
                    className="peptides-icon-img"
                  />
                </div>
                <h3 className="peptides-card-title">Oral Formulations</h3>
                <p className="peptides-card-text">Convenient daily dosing</p>
              </div>
              
              <div className="peptides-card">
                <div className="peptides-card-icon">
                  <img 
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" 
                    alt="Topical Cream Icon"
                    className="peptides-icon-img"
                  />
                </div>
                <h3 className="peptides-card-title">Topical Applications</h3>
                <p className="peptides-card-text">Localized treatment for targeted effects</p>
              </div>
            </div>
          </div>
        </section>

        {/* Science Section */}
        <section className="peptides-section peptides-science">
          <div className="peptides-container">
            <div className="peptides-section-header">
              <h2 className="peptides-section-title">
                Scientifically <span className="peptides-title-accent">Backed</span>
              </h2>
            </div>
            <div className="peptides-science-content">
              <p className="peptides-science-text">
                Leveraging your body's natural signaling pathways, peptides are FDA-approved 
                tools for tissue repair, recovery, and inflammation management—promoting faster 
                healing and long-term health benefits.
              </p>
              <div className="peptides-science-list">
                <div className="peptides-science-item">
                  <div className="peptides-science-check">✓</div>
                  <span>FDA-approved methodologies</span>
                </div>
                <div className="peptides-science-item">
                  <div className="peptides-science-check">✓</div>
                  <span>Clinical research backed</span>
                </div>
                <div className="peptides-science-item">
                  <div className="peptides-science-check">✓</div>
                  <span>Medical supervision included</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section className="peptides-section peptides-product">
          <div className="peptides-container">
            <div className="peptides-section-header">
              <h2 className="peptides-section-title">
                Featured <span className="peptides-title-accent">Peptide Product</span>
              </h2>
            </div>
            <div className="peptides-product-card">
              <div className="peptides-product-image">
                <img 
                  src = {PeptidesProduct}
                  alt="Premium Peptide Formula" 
                  className="peptides-product-img"
                />
              </div>
              <div className="peptides-product-details">
               
                <h3 className="peptides-product-name">Premium Recovery Peptide Complex</h3>
                <p className="peptides-product-description">
                  Our most advanced peptide formulation designed to accelerate muscle recovery, 
                  enhance cellular repair, and support optimal metabolic function.
                </p>
                <div className="peptides-product-features">
                  <div className="peptides-feature">
                    <span className="peptides-feature-check">✓</span>
                    <span>30-day supply</span>
                  </div>
                  <div className="peptides-feature">
                    <span className="peptides-feature-check">✓</span>
                    <span>Medical-grade purity</span>
                  </div>
                  <div className="peptides-feature">
                    <span className="peptides-feature-check">✓</span>
                    <span>Third-party tested</span>
                  </div>
                </div>
                <div className="peptides-product-pricing">
                  <div className="peptides-price-container">
                    <span className="peptides-price-old">$85</span>
                    <span className="peptides-price">$55</span>
                    <span className="peptides-price-month">/month</span>
                  </div>
                  <span className="peptides-savings">Save 35%</span>
                </div>
                <button 
                  className="peptides-btn peptides-btn-primary"
                  onClick={handleBuyNow}
                >
                  <span className="peptides-btn-text">Buy Now</span>
                  <span className="peptides-btn-icon">→</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    </div>
  );
};

export default PeptidesPage;