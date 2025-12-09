import React from 'react';
import '../../../assets/styles/pages/concierge.css';
import Footer from '../layout/footer'
import ConciergeHero from "../../../assets/images/concierge/concierge-hero.webp"
import HappyPatient from "../../../assets/images/concierge/happy-patient.webp"
import UnliAccess from "../../../assets/images/concierge/unli-access.webp"
import LabResult from "../../../assets/images/concierge/lab-result.webp"
import DocCheck from "../../../assets/images/concierge/doc-check.webp"
import SameTime from "../../../assets/images/concierge/same-time.webp"
import Button from '../../ui/button'

import WeightLossResult from "../../../assets/images/concierge/r-d.webp"
import EnergyBoostResult from "../../../assets/images/concierge/c-m.webp"
import HeartHealthResult from "../../../assets/images/concierge/r-g.webp"
import PreventativeResult from "../../../assets/images/concierge/a-v.webp"

const ConciergePage = () => {
  const handleSubscribe = () => {
    console.log('Subscribe clicked');
    alert('Redirecting to subscription...');
  };

  return (
    <div className="concierge-page">
            <section className="concierge-hero">
        <div className="concierge-hero-image-container">
          <div
            className="concierge-hero-image"
            style={{ 
                backgroundImage:  `url(${ConciergeHero})` 
            }}
          />
          <div className="concierge-hero-overlay"></div>
          <div className="concierge-hero-content">
            <h1 className="concierge-hero-title">Concierge Medicine</h1>
            <p className="concierge-hero-tagline">All inclusive. All about you.</p>
            <p className="concierge-hero-subtitle">
              Concierge + Functional + Lifestyle + Longevity Medicine.
            </p>
          </div>
        </div>
      </section>

            <section className="concierge-section concierge-pricing">
        <div className="concierge-container">
          <div className="concierge-section-header">
            <h2 className="concierge-section-title">
              Achieve Your <span className="concierge-title-accent">Optimal Health</span>
            </h2>
            <p className="concierge-section-subtitle">
              Through our Concierge Functional, Lifestyle and Longevity Medicine Subscription
            </p>
          </div>
          
          <div className="concierge-pricing-cards">
            <div className="concierge-pricing-card">
              <div className="concierge-pricing-header">
                <h3 className="concierge-pricing-title">Monthly Plan</h3>
                <div className="concierge-pricing-badge">FLEXIBLE</div>
              </div>
              <div className="concierge-price-container">
                <span className="concierge-price">$300</span>
                <span className="concierge-price-period">/month</span>
              </div>
              <ul className="concierge-pricing-features">
                <li>Cancel anytime</li>
                <li>All inclusive care</li>
                <li>Month-to-month flexibility</li>
              </ul>
             <Button
  variant="secondary"  // Using secondary variant as indicated by the class
  size="large"
  color="var(--primary-color)"  // Your primary brand color
  onClick={handleSubscribe}
  fullWidth={false}
>
  Choose Monthly
</Button>
            </div>
            
            <div className="concierge-pricing-card concierge-pricing-card-featured">
              <div className="concierge-pricing-header">
                <h3 className="concierge-pricing-title">Annual Plan</h3>
                <div className="concierge-pricing-badge featured">BEST VALUE</div>
              </div>
              <div className="concierge-price-container">
                <span className="concierge-price">$3,000</span>
                <span className="concierge-price-period">/year</span>
              </div>
              <div className="concierge-savings">
                <span className="concierge-savings-badge">Save $600</span>
              </div>
              <ul className="concierge-pricing-features">
                <li>2 months free</li>
                <li>Priority scheduling</li>
                <li>Annual health review</li>
                <li>All inclusive care</li>
              </ul>
             <Button
  variant="primary"
  size="large"
  color="var(--primary-color)"  // Your main brand color
  onClick={handleSubscribe}
  fullWidth={false}
>
  Choose Annual
</Button>
            </div>
          </div>
        </div>
      </section>

            <section className="concierge-section concierge-benefits">
        <div className="concierge-container">
          <div className="concierge-section-header">
            <h2 className="concierge-section-title">
              Your <span className="concierge-title-accent">Personal Health Team</span>
            </h2>
            <p className="concierge-section-subtitle">
              Physician + wellness coach + preventive health expert — all in one
            </p>
          </div>
          
          <div className="concierge-benefits-grid">
            <div className="concierge-benefit-card">
              <div className="concierge-benefit-icon">
                <div className="concierge-icon-number">1</div>
                <img 
                  src={UnliAccess}
                  alt="Unlimited Access"
                  className="concierge-benefit-img"
                />
              </div>
              <h3 className="concierge-benefit-title">Unlimited Access</h3>
              <p className="concierge-benefit-text">
                Text, telemedicine, and in-office visits included. No copays. No surprises.
              </p>
            </div>
            
            <div className="concierge-benefit-card">
              <div className="concierge-benefit-icon">
                <div className="concierge-icon-number">2</div>
                <img 
                  src={LabResult}
                  alt="Advanced Labs"
                  className="concierge-benefit-img"
                />
              </div>
              <h3 className="concierge-benefit-title">Advanced Labs Included</h3>
              <p className="concierge-benefit-text">
                Comprehensive testing without hidden fees or insurance hassles.
              </p>
            </div>
            
            <div className="concierge-benefit-card">
              <div className="concierge-benefit-icon">
                <div className="concierge-icon-number">3</div>
                <img 
                  src={DocCheck}
                  alt="Expert Care"
                  className="concierge-benefit-img"
                />
              </div>
              <h3 className="concierge-benefit-title">Board-Certified Expertise</h3>
              <p className="concierge-benefit-text">
                Led by Dr. John P. Sosa, double board-certified in Family and Lifestyle Medicine.
              </p>
            </div>
            
            <div className="concierge-benefit-card">
              <div className="concierge-benefit-icon">
                <div className="concierge-icon-number">4</div>
                <img 
                  src={SameTime}
                  alt="Quick Appointments"
                  className="concierge-benefit-img"
                />
              </div>
              <h3 className="concierge-benefit-title">Same-Day Appointments</h3>
              <p className="concierge-benefit-text">
                No more waiting weeks to be seen. High-touch, low-volume care.
              </p>
            </div>
          </div>
        </div>
      </section>

            <section className="concierge-section concierge-features">
        <div className="concierge-container">
          <div className="concierge-features-content">
            <div className="concierge-features-text">
              <h2 className="concierge-section-title">
                Why <span className="concierge-title-accent">Patients Love It</span>
              </h2>
              
              <div className="concierge-features-list">
                <div className="concierge-feature">
                  <div className="concierge-feature-icon">✓</div>
                  <div className="concierge-feature-content">
                    <h3>No Insurance Hassles</h3>
                    <p>We work for you, not the insurance companies.</p>
                  </div>
                </div>
                
                <div className="concierge-feature">
                  <div className="concierge-feature-icon">✓</div>
                  <div className="concierge-feature-content">
                    <h3>Transparent Pricing</h3>
                    <p>All-inclusive fee. No add-ons, no CPT codes.</p>
                  </div>
                </div>
                
                <div className="concierge-feature">
                  <div className="concierge-feature-icon">✓</div>
                  <div className="concierge-feature-content">
                    <h3>Lifestyle Medicine Focus</h3>
                    <p>Evidence-based care from board-certified providers.</p>
                  </div>
                </div>
                
                <div className="concierge-feature">
                  <div className="concierge-feature-icon">✓</div>
                  <div className="concierge-feature-content">
                    <h3>Avoid Costly Surprises</h3>
                    <p>No denied tests or limited conventional plans.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="concierge-features-image">
              <img 
                src={HappyPatient}
                alt="Happy Patient"
                className="concierge-features-img"
              />
            </div>
          </div>
        </div>
      </section>

            <section className="concierge-section concierge-investment">
        <div className="concierge-container">
          <div className="concierge-section-header">
            <h2 className="concierge-section-title">
              A <span className="concierge-title-accent">Smarter Investment</span> in Your Health
            </h2>
          </div>
          
          <div className="concierge-investment-cards">
            <div className="concierge-investment-card">
              <h3 className="concierge-investment-title">Who It's For</h3>
              <ul className="concierge-investment-list">
                <li>Upper-middle-class professionals</li>
                <li>Health-conscious 40-somethings</li>
                <li>Retirees seeking preventative care</li>
                <li>Those wanting personalized attention</li>
              </ul>
            </div>
            
            <div className="concierge-investment-card">
              <h3 className="concierge-investment-title">Better Value</h3>
              <ul className="concierge-investment-list">
                <li>More than basic concierge ($150/month)</li>
                <li>More affordable than executive plans ($1000+/month)</li>
                <li>Comprehensive preventative care</li>
                <li>High-touch personalized service</li>
              </ul>
            </div>
          </div>
          
          <div className="concierge-investment-cta">
            <p className="concierge-investment-text">
              Your Health. On Your Terms. With Blewm concierge medicine, you get fast access to doctors, 
              tailored prescriptions, and ongoing support — without the hassle of insurance restrictions.
            </p>
          </div>
        </div>
      </section>

            <section className="concierge-section concierge-results">
        <div className="concierge-container">
          <div className="concierge-section-header">
            <h2 className="concierge-section-title">
              Real <span className="concierge-title-accent">Results</span>, Real <span className="concierge-title-accent">Stories</span>
            </h2>
            <p className="concierge-section-subtitle">
              Success stories from professionals and retirees in St. Pete and Birmingham
            </p>
          </div>
          
          <div className="concierge-results-grid">
            <div className="concierge-result-card">
              <div className="concierge-result-icon">
                <img 
                  src={WeightLossResult}
                  alt="Weight Loss Success"
                  className="concierge-result-img"
                />
            
              </div>
              <h3 className="concierge-result-title">Weight Loss Success</h3>
              <p className="concierge-result-text">
                "Lost 25 lbs and reversed my prediabetes in 6 months."
              </p>
              <div className="concierge-result-person">
                <span className="concierge-result-name">— Ronson D.</span>
                <span className="concierge-result-role">Professional, 22</span>
              </div>
            </div>
            
            <div className="concierge-result-card">
              <div className="concierge-result-icon">
                <img 
                  src={EnergyBoostResult}
                  alt="Energy Boost"
                  className="concierge-result-img"
                />
              
              </div>
              <h3 className="concierge-result-title">Energy Boost</h3>
              <p className="concierge-result-text">
                "Regained my energy and focus for work and family."
              </p>
              <div className="concierge-result-person">
                <span className="concierge-result-name">— Crisbel M.</span>
                <span className="concierge-result-role">Executive, 30</span>
              </div>
            </div>
            
            <div className="concierge-result-card">
              <div className="concierge-result-icon">
                <img 
                  src={HeartHealthResult}
                  alt="Heart Health"
                  className="concierge-result-img"
                />
               
              </div>
              <h3 className="concierge-result-title">Chronic Condition Reversal</h3>
              <p className="concierge-result-text">
                "Improved my cholesterol and blood pressure without medication."
              </p>
              <div className="concierge-result-person">
                <span className="concierge-result-name">— Rogie G.</span>
                <span className="concierge-result-role">Expert, 22</span>
              </div>
            </div>
            
            <div className="concierge-result-card">
              <div className="concierge-result-icon">
                <img 
                  src={PreventativeResult}
                  alt="Preventative Care"
                  className="concierge-result-img"
                />
               
              </div>
              <h3 className="concierge-result-title">Preventative Success</h3>
              <p className="concierge-result-text">
                "Finally have a doctor who focuses on prevention, not just sickness."
              </p>
              <div className="concierge-result-person">
                <span className="concierge-result-name">— Arpyra V.</span>
                <span className="concierge-result-role">Business Man, 23</span>
              </div>
            </div>
          </div>
        </div>
      </section>
            <Footer/>
    </div>
  );
};


export default ConciergePage;