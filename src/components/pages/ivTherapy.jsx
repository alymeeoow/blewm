import React from 'react';
import '../../assets/styles/pages/ivTherapy.css';
import { FaSyringe, FaBolt, FaHeartbeat, FaLeaf, FaDumbbell, FaBrain, FaWeight, FaStar, FaCrown, FaGem, FaCheck, FaTags } from 'react-icons/fa';
import PackageProduct3 from "../../assets/images/package/product.png"
import Footer from '../pages/footer'
import IVTheraphyHero from "../../assets/images/iv-therapy/iv-treatment.png"
const IVTherapy = () => {
  // Super-B Hydration (Value Treatment)
  const superBHydration = {
    id: 1,
    title: "Super-B Hydration",
    subtitle: "Super-B Hydration",
    price: "$149.00",
    description: "Essential B vitamins combined with hydration for energy and vitality",
    features: [
      "B-Complex Vitamins",
      "Hydration Support",
      "Energy Boost",
      "Electrolyte Balance"
    ],
    image: PackageProduct3,
    category: "value"
  };

  // Premium IV Treatments ($199) with Package
  const premiumSection = {
    title: "Premium IV ",
    pricePoint: "$199",
    badgeText: "PREMIUM IV TREATMENTS $199",
    color: "var(--primary-color)",

    treatments: [
      {
        id: 2,
        title: "Energy Boost",
        subtitle: "Energy Boost",
        price: "$199.00",
        description: "Combat fatigue and enhance mental clarity with our energizing blend",
        features: ["Energy Support", "Mental Clarity", "Vitamin C", "B-Complex"],
        image: PackageProduct3,
        icon: <FaBolt />,
      },
      {
        id: 3,
        title: "Myers Cocktail",
        subtitle: "Myers Cocktail",
        price: "$199.00",
        description: "Classic formula for immune support, energy, and overall wellness",
        features: ["Immune Support", "Magnesium", "Calcium", "B-Vitamins"],
        image: PackageProduct3,
        icon: <FaHeartbeat />,
      },
      {
        id: 4,
        title: "Skinny Drip",
        subtitle: "Skinny Drip",
        price: "$199.00",
        description: "Support metabolism and weight management with targeted nutrients",
        features: ["Metabolism Boost", "Appetite Control", "Fat Metabolism", "Energy"],
         image: PackageProduct3,
        icon: <FaWeight />,
      }
    ],
    package: {
      title: "Premium 5 Pack",
      price: "$749",
      savings: "Save $246!",
      originalPrice: "$995",
      description: "5 Premium IV Treatments ($199 each)",
      includes: ["Energy Boost", "Myers Cocktail", "Skinny Drip"],
    }
  };

  // Elite IV Treatments ($249) with Package
  const eliteSection = {
    title: "Elite IV Treatments",
    pricePoint: "$249",
    badgeText: "ELITE IV TREATMENTS $249",
    color: "#10B981",
    icon: <FaCrown />,
    treatments: [
      {
        id: 5,
        title: "Anti-Inflammation",
        subtitle: "Anti-Inflammation",
        price: "$249.00",
        description: "Reduce inflammation and support joint health with powerful antioxidants",
        features: ["Anti-Inflammatory", "Joint Support", "Glutathione", "Antioxidants"],
      image: PackageProduct3,
        icon: <FaLeaf />,
      },
      {
        id: 6,
        title: "Athletic Recovery",
        subtitle: "Athletic Recovery",
        price: "$249.00",
        description: "Optimize recovery and performance with specialized nutrient blend",
        features: ["Muscle Recovery", "Electrolytes", "Amino Acids", "Hydration"],
        image: PackageProduct3,
        icon: <FaDumbbell />,
      },
      {
        id: 7,
        title: "Stress Relief",
        subtitle: "Stress Relief",
        price: "$249.00",
        description: "Combat stress and promote relaxation with calming nutrients",
        features: ["Stress Reduction", "Relaxation", "Magnesium", "B-Vitamins"],
         image: PackageProduct3,
        icon: <FaBrain />,
      }
    ],
    package: {
      title: "Elite 5 Pack",
      price: "$999",
      savings: "Save $246!",
      originalPrice: "$1,245",
      description: "5 Elite IV Treatments ($249 each)",
      includes: ["Anti-Inflammation", "Athletic Recovery", "Stress Relief"],
    }
  };

  const handleBookNow = (treatment) => {
    console.log(`Booking ${treatment}`);
    alert(`Booking ${treatment} - You'll be redirected to our scheduling system`);
  };

  const handlePackageClick = (packageName) => {
    window.location.href = `/packages?package=${encodeURIComponent(packageName)}`;
  };

  // Render treatment section with integrated package
  const renderTreatmentSection = (section) => (
    <section 
      className={`treatment-section ${section.title.toLowerCase().includes('premium') ? 'premium-section' : 'elite-section'}`}
      style={{ '--section-color': section.color }}
    >
      <div className="ivtherapy-container">
        <div className="section-header">
         
          <h2 className="section-title"> {section.title} <span className='iv-title-accent'>Treatments </span></h2>
          <p className="section-subtitle">
            {section.title.includes('Premium') 
              ? 'Advanced therapies for enhanced wellness' 
              : 'Premium therapies for optimal health and performance'}
          </p>
        </div>
        
        <div className="treatment-package-wrapper">
          {/* Treatments Grid */}
          <div className="treatments-grid">
            {section.treatments.map((treatment) => (
              <div key={treatment.id} className="treatment-card" style={{ borderTopColor: section.color }}>
                <div className="treatment-card-header">
                  <div className="treatment-icon" style={{ color: section.color }}>
                    {treatment.icon}
                  </div>
                  <img 
                    src={treatment.image} 
                    alt={treatment.title}
                    className="treatment-card-image"
                    loading="lazy"
                  />
                </div>
                
                <div className="treatment-card-content">
                  <h3 className="treatment-card-title">{treatment.title}</h3>
                  <p className="treatment-card-subtitle">{treatment.subtitle}</p>
                  <p className="treatment-card-description">{treatment.description}</p>
                  
                  <div className="treatment-card-features">
                    {treatment.features.map((feature, index) => (
                      <span key={index} className="feature-tag" style={{ 
                        background: section.color === '#10B981' 
                          ? 'rgba(16, 185, 129, 0.1)' 
                          : 'rgba(var(--primary-color-rgb, 59, 130, 246), 0.1)',
                        color: section.color === '#10B981' ? '#065f46' : 'var(--text-dark)'
                      }}>
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="treatment-card-footer">
                    <div className="treatment-card-price" style={{ color: section.color }}>
                      {treatment.price}
                    </div>
                    <button 
                      className="treatment-card-btn"
                      style={{ 
                        background: section.color,
                        color: 'white'
                      }}
                      onClick={() => handleBookNow(treatment.title)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Package Card - Integrated with treatments */}
            <div className="treatment-card package-integrated-card" style={{ 
              border: `3px solid ${section.color}`,
              background: `linear-gradient(to bottom, ${section.color}15, #ffffff)`
            }}>
              <div className="package-integrated-header">
                <div className="package-integrated-badge" style={{ background: section.color }}>
                  <FaTags className="package-icon" />
                  <span>PACKAGE DEAL</span>
                </div>
                <h3 className="package-integrated-title">{section.package.title}</h3>
                <p className="package-integrated-subtitle">IV Therapy Package</p>
              </div>
              
              <div className="package-integrated-content">
                <div className="package-integrated-price" style={{ color: section.color }}>
                  <span className="price-main">{section.package.price}</span>
                  <span className="price-savings">{section.package.savings}</span>
                </div>
                
                <div className="package-integrated-desc">
                  <p>{section.package.description}</p>
                  <p className="package-original-price">Regular: {section.package.originalPrice}</p>
                </div>
                
                <div className="package-integrated-includes">
                  <h4 className="includes-title">INCLUDES:</h4>
                  <div className="includes-grid">
                    {section.package.includes.map((item, index) => (
                      <div key={index} className="include-item" style={{ 
                        background: section.color === '#10B981' 
                          ? 'rgba(16, 185, 129, 0.05)' 
                          : 'rgba(var(--primary-color-rgb, 59, 130, 246), 0.05)',
                        borderColor: section.color === '#10B981' 
                          ? 'rgba(16, 185, 129, 0.1)' 
                          : 'rgba(var(--primary-color-rgb, 59, 130, 246), 0.1)'
                      }}>
                        <FaCheck className="include-icon" style={{ color: section.color }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="member-pricing-integrated">
                  <p className="member-text">
                    <div className="member-icon" />
                    <strong>Special Member Pricing</strong> 
                  </p>
                </div>
                
                <button 
                  className="package-integrated-btn"
                  style={{ 
                    background: section.color,
                    color: 'white'
                  }}
                  onClick={() => handlePackageClick(section.package.title)}
                >
                  View Package Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="ivtherapy-page">
      {/* Hero Section */}
      <section className="ivtherapy-hero">
        <div 
          className="ivtherapy-hero-image"
          style={{
  backgroundImage:  `url(${IVTheraphyHero})` 
          }}
        >
          <div className="ivtherapy-hero-overlay"></div>
          <div className="ivtherapy-hero-content">
            <h1 className="ivtherapy-hero-title">IV THERAPY </h1>
            <p className="ivtherapy-hero-subtitle">
              Experience superior nutrient absorption and faster results with our IV Therapy treatments
            </p>
           
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="ivtherapy-intro">
        <div className="ivtherapy-container">
          <div className="intro-content">
            <h2 className="intro-title">Superior <span className='iv-title-accent'>Nutrient Delivery </span></h2>
            <p className="intro-description">
              IV Therapy when compared to oral nutrient supplementation is a significant and important factor 
              in any nutritional regiment. There is no comparison as to the efficacy of IV/IM Nutrient Therapy 
              which delivers superior and potent doses of nutrients that completely bypass the gastrointestinal system. 
              You'll feel better faster and absorb more nutrients when compared to oral supplementation. 
              That's how life should be!
            </p>
            <p className="intro-description">
              IV Nutrient Therapy can be used in two ways – to proactively maintain optimum health and wellness, 
              or to address acute and chronic conditions.
            </p>
            
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <FaBolt />
                </div>
                <h3 className="benefit-title">100% Absorption</h3>
                <p className="benefit-desc">Bypasses digestive system for immediate effect</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <FaHeartbeat />
                </div>
                <h3 className="benefit-title">Faster Results</h3>
                <p className="benefit-desc">Feel improvements within minutes to hours</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <FaLeaf />
                </div>
                <h3 className="benefit-title">Higher Potency</h3>
                <p className="benefit-desc">Higher doses than possible with oral supplements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Treatment - Super-B Hydration */}
      <section className="value-treatment-section">
        <div className="ivtherapy-container">
          <div className="section-header">
            <h2 className="section-title">Value <span className='iv-title-accent'>Treatments </span></h2>
            <p className="section-subtitle">Effective treatments at accessible prices</p>
          </div>
          
          <div className="value-treatment-card">
        
            <div className="treatment-content">
              <div className="treatment-image-side">
                <img 
                  src={superBHydration.image} 
                  alt={superBHydration.title}
                  className="treatment-image"
                  loading="lazy"
                />
              </div>
              
              <div className="treatment-info-side">
                <h3 className="treatment-title">{superBHydration.title}</h3>
                <p className="treatment-subtitle">{superBHydration.subtitle}</p>
                <p className="treatment-description">{superBHydration.description}</p>
                
                <div className="treatment-features">
                  <h4 className="features-title">Key Benefits:</h4>
                  <div className="features-grid">
                    {superBHydration.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <FaCheck className="feature-icon" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="treatment-footer">
                  <div className="treatment-price">
                    <span className="price-amount">{superBHydration.price}</span>
                    <span className="price-note">per treatment</span>
                  </div>
                  <button 
                    className="treatment-book-btn"
                    onClick={() => handleBookNow(superBHydration.title)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </section>
 
      

      {/* Premium Treatments Section with Integrated Package */}
      {renderTreatmentSection(premiumSection)}

      {/* Elite Treatments Section with Integrated Package */}
      {renderTreatmentSection(eliteSection)}
           <Footer/>
    </div>
    
  );
};

export default IVTherapy;