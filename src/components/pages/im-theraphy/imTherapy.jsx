import React from 'react';
import '../../../assets/styles/pages/imTherapy.css';
import { FaClock, FaSyringe, FaCheck, FaArrowRight, FaTag } from 'react-icons/fa';
import PackageProduct2 from "../../../assets/images/package/product.webp"
import IMTheraphyHero from "../../../assets/images/im-therapy/wellness.webp"
import Footer from '../layout/footer'
import Button from '../../ui/button'
const IMTherapy = () => {

  const boosterShots = [
    {
      id: 1,
      title: "B-12 Booster",
      subtitle: "B-12 Booster",
      description: "Boost energy, improve mood, and support red blood cell production",
      price: "$39.00",
      image: PackageProduct2,
      isPackage: false
    },
    {
      id: 2,
      title: "Biotin Booster",
      subtitle: "Biotin Booster",
      description: "Support healthy hair, skin, and nails with essential vitamins",
      price: "$39.00",
      image: PackageProduct2,
      isPackage: false
    },
    {
      id: 3,
      title: "Energy Booster",
      subtitle: "Energy Booster",
      description: "Combat fatigue and enhance mental clarity",
      price: "$39.00",
        image: PackageProduct2,
      isPackage: false
    },
    {
      id: 4,
      title: "Glutathione Beauty Booster",
      subtitle: "Glutathione Beauty Booster",
      description: "The ultimate antioxidant for skin brightening and detox",
      price: "$39.00",
      image: PackageProduct2,
      isPackage: false
    },
    {
      id: 5,
      title: "Weight Loss MIC Booster",
      subtitle: "Weight Loss MIC Booster",
      description: "Support fat metabolism and weight management",
      price: "$39.00",
    image: PackageProduct2,
      isPackage: false
    },
    {
      id: 6,
      title: "Booster Shot Package",
      subtitle: "10 Pack - Save $141",
      description: "B-12, Biotin, Energy, Weight Loss, Glutathione Beauty",
      price: "$249.00",
     image: PackageProduct2,
      isPackage: true,
      features: ["B-12", "BIOTIN", "ENERGY", "WEIGHT LOSS", "GLUTATHIONE BEAUTY"]
    }
  ];

  const handleBookNow = (treatment, isPackage) => {
    if (isPackage) {
      window.location.href = '/packages';
    } else {
      console.log(`Booking ${treatment}`);
      alert(`Booking ${treatment} - You'll be redirected to our scheduling system`);
    }
  };

  return (
    <div className="imtherapy-page">
            <section className="imtherapy-hero">
        <div 
          className="imtherapy-hero-image"
          style={{
             backgroundImage:  `url(${IMTheraphyHero})` 
          }}
        >
          <div className="imtherapy-hero-overlay"></div>
          <div className="imtherapy-hero-content">
            <h1 className="imtherapy-hero-title">IM THERAPY</h1>
            <p className="imtherapy-hero-subtitle">
              Looking for a quick fix? Supplement your path to wellness in under 5 minutes with DripIV booster shots.
            </p>
            
          </div>
        </div>
      </section>

            <div className="imtherapy-container">
                <section className="boosters-section">
          <div className="boosters-header">
            <h2 className="boosters-title">Booster <span className='im-title-accent'> Shots </span></h2>
            <p className="boosters-subtitle">Quick, effective wellness solutions</p>
          </div>

          <div className="boosters-grid">
            {boosterShots.map((booster) => (
              <div 
                key={booster.id} 
                className={`booster-card ${booster.isPackage ? 'package-booster-card' : ''}`}
              >
                                {booster.isPackage && (
                  <div className="package-ribbon">
                    <FaTag className="ribbon-icon" />
                    <span>PACKAGE DEAL</span>
                  </div>
                )}
                
                <div className="booster-image-container">
                  <img 
                    src={booster.image} 
                    alt={booster.title}
                    className="booster-image"
                    loading="lazy"
                  />
                  <div className="booster-overlay">
                    {booster.isPackage ? (
                      <div className="package-icon-wrapper">
                        <FaCheck className="package-icon" />
                      </div>
                    ) : (
                      <FaSyringe className="booster-icon" />
                    )}
                  </div>
                </div>
                
                <div className="booster-content">
                  <h3 className="booster-title">{booster.title}</h3>
                  <p className="booster-subtitle">{booster.subtitle}</p>
                  <p className="booster-description">{booster.description}</p>
                  
                                    {booster.isPackage && booster.features && (
                    <div className="package-features-mini">
                      <div className="features-list">
                        {booster.features.map((feature, index) => (
                          <span key={index} className="feature-tag">
                            <FaCheck className="feature-check" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="booster-price-row">
                    <div className="price-wrapper">
                      <span className="booster-price">{booster.price}</span>
                      {booster.isPackage && (
                        <span className="package-savings-mini">Save $141!</span>
                      )}
                    </div>
                  <Button
  variant="primary"
  size="medium"
  onClick={() => handleBookNow(booster.title, booster.isPackage)}
  color="var(--primary-color)"
  fullWidth={false}
  aria-label={`${booster.isPackage ? 'View' : 'Book'} ${booster.title} for ${booster.price}`}
>
  {booster.isPackage ? 'View Packages' : 'Book Now'}
</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
         
        </section>
        
      </div>
      <Footer/>
    </div>
  );
};

export default IMTherapy;