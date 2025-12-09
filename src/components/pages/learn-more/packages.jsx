import React from 'react';
import '../../../assets/styles/pages/packages.css';
import { FaCalendarAlt } from 'react-icons/fa';

import PackageHero from "../../../assets/images/package/package-hero.webp"
import PackageProduct from "../../../assets/images/package/product.webp"
import Footer from '../layout/footer'
import Button from '../../ui/button'

const Packages = () => {
  const packages = [
    {
      title: "BOOSTER SHOT",
      subtitle: "10 Pack",
      price: "$249",
      save: "Save $141!",
      features: [
        "B-12",
        "BIOTIN",
        "ENERGY",
        "WEIGHT LOSS",
        "GLUTATHIONE BEAUTY"
      ],
      info: "All packages have a one year expiration from the date of purchase",
      image: PackageProduct,
      featured: true
    },
    {
      title: "Premium 5 Pack",
      subtitle: "IV Therapy Package",
      price: "$749",
      save: "Save $246!",
      features: [
        "MYERS' COCKTAIL",
        "ENERGY BOOST",
        "SKINNY DRIP"
      ],
      info: "All packages have a one year expiration from the date of purchase",
      image: PackageProduct
    },
    {
      title: "Elite 5 Pack",
      subtitle: "IV Therapy Package",
      price: "$999",
      save: "Save $246!",
      features: [
        "STRESS RELIEF",
        "ATHLETIC RECOVERY",
        "ANTI-INFLAMMATION"
      ],
      info: "All packages have a one year expiration from the date of purchase",
      image: PackageProduct
    },
    {
      title: "Ultimate 5 Pack",
      subtitle: "IV Therapy Package",
      price: "$1,249",
      save: "Save up to $496!",
      features: [
        "ULTIMATE HANGOVER",
        "ULTIMATE IMMUNITY",
        "ULTIMATE BEAUTY",
        "THE SIGNATURE DRIP"
      ],
      info: "All packages have a one year expiration from the date of purchase",
      image: PackageProduct
    }
  ];

  const nadPackages = [
    {
      title: "NAD+ 500mg",
      subtitle: "5 Pack",
      price: "$1,249",
      save: "Save $246!",
      features: "5 NAD+ 500mg IV TREATMENTS WITH GLUTATHIONE PUSH",
      info: "For most customers, results are seen immediately. NAD+ IV therapy when used in a series is an extremely efficient way to increase your body's natural levels of NAD.",
      specialInfo: "For NAD+ 1000mg IV Treatment two NAD+ 500mg package treatments are required.",
      image: PackageProduct,
      featured: false
    },
    {
      title: "NAD+ 500mg",
      subtitle: "10 Pack",
      price: "$4,249",
      save: "Save $741!",
      features: "10 NAD+ 500mg IV TREATMENTS WITH GLUTATHIONE PUSH",
      info: "For most customers, results are seen immediately. NAD+ IV therapy when used in a series is an extremely efficient way to increase your body's natural levels of NAD.",
      specialInfo: "For NAD+ 1000mg IV Treatment two NAD+ 500mg package treatments are required.",
      image: PackageProduct,
      featured: true
    }
  ];

  const handleBuyNow = (packageName) => {
    alert(`Proceeding to checkout for ${packageName}`);
  };

  return (
    <div className="packages-page">
            <section className="packages-hero">
        <div className="packages-hero-image-container">
          <div
            className="packages-hero-image"
            style={{ 
                backgroundImage: `url(${PackageHero})`,
              
              }}
          />
          <div className="packages-hero-overlay"></div>
          <div className="packages-hero-content">
            <h1 className="packages-hero-title">PACKAGES</h1>
            <p className="packages-hero-subtitle">
              Invest in your health with our curated wellness packages 
              designed for optimal results and significant savings
            </p>
          </div>
        </div>
      </section>

            <section className="packages-section">
        <div className="packages-container">
          <div className="packages-section-header">
            <h2 className="packages-section-title">
              Our <span className="packages-title-accent">Blewm Package</span> 
            </h2>
            <p className="packages-section-subtitle">
              Promote regular health and wellness while saving money with package discounts
            </p>
          </div>

                    <div className="packages-grid">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`package-card ${pkg.featured ? 'package-card-featured' : ''}`}
              >
                                <div className="package-header">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="package-header-image"
                  />
                  <div className="package-header-overlay">
                    <h3 className="package-title">{pkg.title}</h3>
                    <p className="package-subtitle">{pkg.subtitle}</p>
                    <div className="package-price-container">
                      <div className="package-price">{pkg.price}</div>
                      <div className="package-save">{pkg.save}</div>
                    </div>
                  </div>
                </div>
                
                                <div className="package-content">
                                    <div className="package-features">
                    <h4 className="package-features-title">Includes:</h4>
                    <ul className="package-features-list">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                                    <div className="expiration-info">
                    <FaCalendarAlt className="expiration-icon" />
                    <p className="expiration-text">Expires 1 year from purchase</p>
                  </div>
                  
                                    <div className="package-footer">
                   <Button
  variant={pkg.featured ? "primary" : "secondary"}
  size="large"
  onClick={() => handleBuyNow(pkg.title)}
  color={pkg.featured ? "var(--primary-color)" : "var(--text-dark)"}
  fullWidth={true}
>
  BUY NOW
</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            <section className="nad-section">
        <div className="packages-container">
          <div className="nad-section-header">
            <h2 className="packages-section-title">
              <span className="packages-title-accent">NAD+</span> Packages
            </h2>
            <p className="packages-section-subtitle">
              Advanced cellular therapy for optimal wellness and longevity
            </p>
          </div>
          
          <div className="nad-grid">
            {nadPackages.map((nad, index) => (
              <div 
                key={index} 
                className={`nad-card ${nad.featured ? 'nad-card-featured' : ''}`}
              >
                                <div className="nad-header">
                  <img 
                    src={nad.image} 
                    alt={nad.title}
                    className="nad-header-image"
                  />
                  <div className="nad-header-overlay">
                    <h3 className="nad-title">{nad.title}</h3>
                    <p className="nad-subtitle">{nad.subtitle}</p>
                    <div className="nad-price-container">
                      <div className="nad-price">{nad.price}</div>
                      <div className="nad-save">{nad.save}</div>
                    </div>
                  </div>
                </div>
                
                                <div className="nad-content">
                                    <div className="nad-features">
                    <h4 className="nad-features-title">Treatment Includes:</h4>
                    <p className="nad-features-text">{nad.features}</p>
                  </div>
                  
                                    <div className="nad-info">
                    <h4 className="nad-info-title">Important Information</h4>
                    <p className="nad-info-text">{nad.info}</p>
                    <p className="nad-info-text">
                      <strong>Important:</strong> {nad.specialInfo}
                    </p>
                  </div>
                  
                                    <div className="expiration-info">
                    <FaCalendarAlt className="expiration-icon" />
                    <p className="expiration-text">Expires 1 year from purchase</p>
                  </div>
                  
                                    <div className="nad-footer">
              <Button
  variant="primary"
  size="large"
  onClick={() => handleBuyNow(pkg.title)}
  color="var(--elite-color)"
  fullWidth={true}
>
  BUY NOW
</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Packages;