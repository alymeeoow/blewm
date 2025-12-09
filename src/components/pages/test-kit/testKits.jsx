import React from 'react';
import '../../../assets/styles/pages/kits.css';
import Footer from '../layout/footer'
import TestKits from "../../../assets/images/kits/test-kits.webp"
import Button from '../../ui/button'

const TestKitsPage = () => {
  const handleOrderTestKit = (type) => {
    console.log(`Ordering ${type} test kit`);
    alert(`Redirecting to ${type} test kit order...`);
  };

  return (
    <div className="testkits-page">
      {/* Hero Section */}
      <section className="testkits-hero">
        <div className="testkits-hero-image-container">
          <div
            className="testkits-hero-image"
            style={{ 
              backgroundImage: `url(${TestKits})`,
            }}
          />
          <div className="testkits-hero-overlay"></div>
          <div className="testkits-hero-content">
            <h1 className="testkits-hero-title">Test Kits</h1>
            <p className="testkits-hero-tagline">Home health care begins with a simple test.</p>
            <p className="testkits-hero-subtitle">
              Know your levels, fuel your body the right way.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="testkits-section testkits-intro">
        <div className="testkits-container">
          <div className="testkits-section-header">
            <h2 className="testkits-section-title">
              Blewm Home Health <span className="testkits-title-accent">Test Kits</span>
            </h2>
            <p className="testkits-section-subtitle">
              Blewm home care health test kits offer immediate and effective results.
              Whatever you want to improve, we've got a place to start.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="testkits-section testkits-categories">
        <div className="testkits-container">
          <div className="testkits-section-header">
            <h2 className="testkits-section-title">
              Comprehensive <span className="testkits-title-accent">Testing Solutions</span>
            </h2>
          </div>
          
          <div className="testkits-categories-grid">
            {/* Peptides Card */}
            <div className="testkits-category-card">
              <div className="testkits-category-icon">
                <img 
                  src={TestKits}
                  alt="Peptides Testing"
                  className="testkits-category-img"
                />
              </div>
              <h3 className="testkits-category-title">Peptides</h3>
              <p className="testkits-category-text">
                Optimize your peptide levels for enhanced recovery and cellular health
              </p>
              <Button
                variant="primary"
                size="medium"
                color="var(--primary-color)"
                onClick={() => handleOrderTestKit('Peptides')}
                fullWidth={false}
              >
                Order Kit
              </Button>
            </div>
            
            {/* Sleep and Stress Card */}
            <div className="testkits-category-card">
              <div className="testkits-category-icon">
                <img 
                  src={TestKits}
                  alt="Sleep and Stress Testing"
                  className="testkits-category-img"
                />
              </div>
              <h3 className="testkits-category-title">Sleep and Stress</h3>
              <p className="testkits-category-text">
                Monitor cortisol and sleep-related biomarkers for better rest and relaxation
              </p>
              <Button
                variant="primary"
                size="medium"
                color="var(--primary-color)"
                onClick={() => handleOrderTestKit('Sleep and Stress')}
                fullWidth={false}
              >
                Order Kit
              </Button>
            </div>
            
            {/* Men's Health Card */}
            <div className="testkits-category-card">
              <div className="testkits-category-icon">
                <img 
                  src={TestKits}
                  alt="Men's Health Testing"
                  className="testkits-category-img"
                />
              </div>
              <h3 className="testkits-category-title">Men's Health</h3>
              <p className="testkits-category-text">
                Comprehensive testing for testosterone, fertility, and overall male wellness
              </p>
              <Button
                variant="primary"
                size="medium"
                color="var(--primary-color)"
                onClick={() => handleOrderTestKit("Men's Health")}
                fullWidth={false}
              >
                Order Kit
              </Button>
            </div>
            
            {/* Weight Loss Card */}
            <div className="testkits-category-card">
              <div className="testkits-category-icon">
                <img 
                  src={TestKits}
                  alt="Weight Loss Testing"
                  className="testkits-category-img"
                />
              </div>
              <h3 className="testkits-category-title">Weight Loss</h3>
              <p className="testkits-category-text">
                Analyze metabolic markers to optimize your weight management journey
              </p>
              <Button
                variant="primary"
                size="medium"
                color="var(--primary-color)"
                onClick={() => handleOrderTestKit('Weight Loss')}
                fullWidth={false}
              >
                Order Kit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="testkits-section testkits-process">
        <div className="testkits-container">
          <div className="testkits-section-header">
            <h2 className="testkits-section-title">
              Simple <span className="testkits-title-accent">4-Step Process</span>
            </h2>
            <p className="testkits-section-subtitle">
              Get personalized insights from the comfort of your home
            </p>
          </div>
          
          <div className="testkits-process-steps">
            <div className="testkits-step">
              <div className="testkits-step-number">1</div>
              <div className="testkits-step-content">
                <h3 className="testkits-step-title">Find your test kit solution</h3>
                <p className="testkits-step-text">
                  Select from an extensive range of home diagnostic testing services: 
                  Discover our comprehensive selection of testing services including; 
                  molecular and genetics testing, weight management, healthy sex, 
                  diet, energy, and more
                </p>
              </div>
            </div>
            
            <div className="testkits-step">
              <div className="testkits-step-number">2</div>
              <div className="testkits-step-content">
                <h3 className="testkits-step-title">Your home test kit will arrive</h3>
                <p className="testkits-step-text">
                  In a few days, you'll receive your at home test kit in a priority 
                  shipped box via US mail
                </p>
              </div>
            </div>
            
            <div className="testkits-step">
              <div className="testkits-step-number">3</div>
              <div className="testkits-step-content">
                <h3 className="testkits-step-title">Get your results fast</h3>
                <p className="testkits-step-text">
                  After taking and returning your home test, you'll get your results 
                  quickly and reliably at competitive prices
                </p>
              </div>
            </div>
            
            <div className="testkits-step">
              <div className="testkits-step-number">4</div>
              <div className="testkits-step-content">
                <h3 className="testkits-step-title">Use mail for secure correspondence</h3>
                <p className="testkits-step-text">
                  You mail your sample to us and we send your results via text and/or 
                  email. You're then armed with knowledge to purchase your recommended 
                  treatment(s).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="testkits-section testkits-benefits">
        <div className="testkits-container">
          <div className="testkits-section-header">
            <h2 className="testkits-section-title">
              Why Choose <span className="testkits-title-accent">Blewm Test Kits</span>
            </h2>
          </div>
          
          <div className="testkits-benefits-grid">
            <div className="testkits-benefit-card">
              <div className="testkits-benefit-icon">
                <div className="testkits-icon-number">✓</div>
              </div>
              <h3 className="testkits-benefit-title">Accurate Results</h3>
              <p className="testkits-benefit-text">
                Laboratory-grade accuracy with easy-to-understand reports
              </p>
            </div>
            
            <div className="testkits-benefit-card">
              <div className="testkits-benefit-icon">
                <div className="testkits-icon-number">✓</div>
              </div>
              <h3 className="testkits-benefit-title">Fast Turnaround</h3>
              <p className="testkits-benefit-text">
                Quick results delivered to your email within days
              </p>
            </div>
            
            <div className="testkits-benefit-card">
              <div className="testkits-benefit-icon">
                <div className="testkits-icon-number">✓</div>
              </div>
              <h3 className="testkits-benefit-title">Privacy Assured</h3>
              <p className="testkits-benefit-text">
                Secure testing from the comfort and privacy of your home
              </p>
            </div>
            
            <div className="testkits-benefit-card">
              <div className="testkits-benefit-icon">
                <div className="testkits-icon-number">✓</div>
              </div>
              <h3 className="testkits-benefit-title">Personalized Insights</h3>
              <p className="testkits-benefit-text">
                Actionable recommendations based on your unique results
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default TestKitsPage;