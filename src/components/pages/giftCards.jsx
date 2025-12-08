import React from 'react';
import '../../assets/styles/pages/giftCards.css';
import { FaGift, FaRedo, FaBalanceScale, FaShoppingCart } from 'react-icons/fa';
import Footer from '../pages/footer';
import GiftCardHero from "../../assets/images/gift-cards/gift-cards.png";


import GiftCard100 from "../../assets/images/gift-cards/gift-card-100.png";
import GiftCard250 from "../../assets/images/gift-cards/gift-card-250.png";
import GiftCard500 from "../../assets/images/gift-cards/gift-card-500.png";
import GiftCard1000 from "../../assets/images/gift-cards/gift-card-1000.png";


// import GiftCardDesign from "../../assets/images/gift-cards/gift-card-design.jpg";

const GiftCardPage = () => {
  const giftCards = [
    {
      title: "$100 GIFT CARD",
      subtitle: "Perfect Starter Gift",
      price: "$100",
      save: null,
      features: [
        "Perfect for first-time clients",
        "One therapy session",
        "Ideal for small wellness needs",
        "Easy digital delivery"
      ],
      featured: false,
      image: GiftCard100 
    },
    {
      title: "$250 GIFT CARD",
      subtitle: "Popular Choice",
      price: "$250",
      save: "Most Popular",
      features: [
        "Best value for money",
        "Two therapy sessions",
        "Most popular gift amount",
        "Includes free consultation"
      ],
      featured: true,
      image: GiftCard250 || GiftCardDesign
    },
    {
      title: "$500 GIFT CARD",
      subtitle: "Premium Wellness Package",
      price: "$500",
      save: "Premium Choice",
      features: [
        "Complete wellness package",
        "Multiple therapy sessions",
        "Priority scheduling",
        "Includes comprehensive consultation"
      ],
      featured: false,
      image: GiftCard500 || GiftCardDesign
    },
    {
      title: "$1000 GIFT CARD",
      subtitle: "Ultimate Wellness Experience",
      price: "$1,000",
      save: "Best Value",
      features: [
        "Full year of wellness",
        "All premium services",
        "VIP scheduling access",
        "Includes wellness assessment"
      ],
      featured: false,
      image: GiftCard1000 || GiftCardDesign
    }
  ];

  const handleBuyNow = (cardTitle) => {
    alert(`Proceeding to checkout for ${cardTitle}`);
  };

  const handleReloadCard = () => {
    alert('Redirecting to card reload page...');
  };

  const handleCheckBalance = () => {
    alert('Redirecting to balance check page...');
  };

  return (
    <div className="gift-card-page">
      {/* Header Navigation */}
      <header className="gift-card-header">
        <div className="gift-card-container">
          <div className="header-content">
            <div className="logo-section">
              <h1>Blewm MSO, LLC</h1>
            </div>
            <nav className="gift-nav">
              <button className="nav-btn active">
                <FaGift /> Buy gift card
              </button>
              <button className="nav-btn" onClick={handleReloadCard}>
                <FaRedo /> Reload card
              </button>
              <button className="nav-btn" onClick={handleCheckBalance}>
                <FaBalanceScale /> Check balance
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Background Image */}
      <section className="gift-hero">
        <div className="gift-hero-image-container">
          <div
            className="gift-hero-image"
            style={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${GiftCardHero})`
            }}
          />
          <div className="gift-hero-overlay"></div>
          <div className="gift-hero-content">
            <h1 className="gift-hero-title">GIFT CARDS</h1>
            <p className="gift-hero-subtitle">
              Give the gift of wellness. Perfect for friends, family, or yourself
            </p>
          </div>
        </div>
      </section>

      {/* Gift Cards Section */}
      <section className="gift-section">
        <div className="gift-card-container">
          <div className="gift-section-header">
            <h2 className="gift-section-title">
              Choose Your <span className="gift-title-accent">Gift Card</span>
            </h2>
            <p className="gift-section-subtitle">
              Select the perfect amount for your wellness journey
            </p>
          </div>

          <div className="gift-grid">
            {giftCards.map((card, index) => (
              <div 
                key={index} 
                className={`gift-card ${card.featured ? 'gift-card-featured' : ''}`}
              >
                {/* Card Header with Image */}
                <div className="gift-header">
                  <div className="gift-header-image">
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="gift-card-image"
                      onError={(e) => {
                        e.target.src = GiftCardDesign;
                      }}
                    />
                    <div className="gift-header-overlay">
                      <h3 className="gift-title">{card.title}</h3>
                      <p className="gift-subtitle">{card.subtitle}</p>
                      <div className="gift-price-container">
                        <div className="gift-price">{card.price}</div>
                        {card.save && (
                          <div className="gift-save">{card.save}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="gift-content">
                  <div className="gift-features">
                    <h4 className="gift-features-title">What's Included:</h4>
                    <ul className="gift-features-list">
                      {card.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="gift-details">
                    <div className="detail-item">
                      <strong>Delivery:</strong> Instant digital
                    </div>
                    <div className="detail-item">
                      <strong>Expires:</strong> 1 year from purchase
                    </div>
                    <div className="detail-item">
                      <strong>Redeemable:</strong> All services
                    </div>
                  </div>
                  
                  <div className="gift-footer">
                    <button 
                      className={`gift-btn ${card.featured ? 'gift-btn-primary' : 'gift-btn-secondary'}`}
                      onClick={() => handleBuyNow(card.title)}
                    >
                      <FaShoppingCart /> BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="gift-card-container">
          <div className="how-it-works-header">
            <h2 className="section-title">How Gift Cards Work</h2>
            <p className="section-subtitle">Simple steps to gift wellness</p>
          </div>
          
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Choose & Purchase</h3>
              <p>Select your desired gift card amount and complete your purchase securely.</p>
            </div>
            
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Instant Delivery</h3>
              <p>Receive your digital gift card immediately via email or text message.</p>
            </div>
            
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Redeem Any Time</h3>
              <p>Use your gift card for any Blewm service within 12 months of purchase.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Section */}
      <section className="terms-section">
        <div className="gift-card-container">
          <div className="terms-card">
            <h3>Gift Card Terms & Conditions</h3>
            <ul className="terms-list">
              <li>Valid for 12 months from date of purchase</li>
              <li>Redeemable for all Blewm services and packages</li>
              <li>No cash value, not reloadable</li>
              <li>Cannot be combined with other offers or promotions</li>
              <li>Digital delivery only - no physical cards available</li>
              <li>Non-refundable, non-transferable</li>
              <li>Lost or stolen cards cannot be replaced</li>
              <li>For questions, contact info@blewm.com</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GiftCardPage;