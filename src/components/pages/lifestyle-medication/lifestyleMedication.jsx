import React from 'react';
import '../../../assets/styles/pages/lifestyle.css';

import LifeStyleHero from "../../../assets/images/lifestyle/lifestyle-hero.webp"
import WomanInject from "../../../assets/images/lifestyle/woman-inject.webp"
import Bench from "../../../assets/images/lifestyle/bench.webp"
import StomachInject from "../../../assets/images/lifestyle/stomach-inject.webp"
import HarnessPeptides from "../../../assets/images/lifestyle/harness-peptides.webp"
import Footer from '../layout/footer'

const LifestyleMedicationsPage = () => {
  return (
    <div className="lifestyle-page">
            <section className="lifestyle-hero">
        <div className="lifestyle-hero-images">
          <div className="lifestyle-hero-image-container">
           <div
                      className="peptides-hero-image"
                      style={{ backgroundImage: `url(${LifeStyleHero})` }}
                    />
          </div>
          <div className="lifestyle-hero-image-container">
            <div
                      className="peptides-hero-image"
                     
                    />
          </div>
          <div className="lifestyle-hero-image-container">
           <div
                      className="peptides-hero-image"
                   
                    />
          </div>
        </div>
        <div className="lifestyle-hero-overlay"></div>
        <div className="lifestyle-hero-content">
          <h1 className="lifestyle-hero-title">
            <span className="lifestyle-hero-main-title">Lifestyle Medications</span>
            <span className="lifestyle-hero-subtitles">
              <span className="lifestyle-hero-subtitle">Vitamins, Peptides , Weightloss</span>
            
            
            </span>
          </h1>
          <p className="lifestyle-hero-tagline">
            Wherever you're heading, we've got you covered.
          </p>
        </div>
      </section>

            <section className="lifestyle-intro">
        <div className="lifestyle-container">
          <div className="lifestyle-intro-content">
            <h2 className="lifestyle-intro-title">
              Science-Backed Support for Everyday Performance and Longevity
            </h2>
            <div className="lifestyle-intro-text">
              <p>
                Lifestyle Medications by Blewm deliver science-backed support for everyday performance and longevity. 
                From precision peptides to premium vitamins and supplements, each formula is physician-directed to 
                enhance energy, recovery, focus, and overall well-being.
              </p>
              <p>
                Designed for modern living, our therapies go beyond basic wellness — helping you feel stronger, 
                think clearer, and age smarter.
              </p>
            </div>
          </div>
        </div>
      </section>

            <section className="lifestyle-section lifestyle-vitamins">
        <div className="lifestyle-container">
          <div className="lifestyle-section-content">
            <div className="lifestyle-section-image">
              <img 
                src={StomachInject}
                alt="Vitamin Injections" 
                className="lifestyle-section-img" 
              />
            </div>
            <div className="lifestyle-section-text">
              <h2 className="lifestyle-section-title">
                Why vitamin injections?
              </h2>
              <p className="lifestyle-section-description">
                Vitamin injections are becoming a popular health trend for those seeking a fast and 
                effective way to boost their nutrient intake. These injections deliver essential vitamins 
                and minerals directly into the muscle, allowing for quicker and more efficient absorption 
                than pills or food sources.
              </p>
              <p className="lifestyle-section-description">
                Benefits can include increased energy, better cognitive performance, improved sleep, 
                and enhanced overall well-being. By bypassing the digestive system, vitamin injections 
                achieve absorption rates of up to 100%, providing higher vitamin levels than oral supplements.
              </p>
            </div>
          </div>
        </div>
      </section>

            <section className="lifestyle-section lifestyle-peptides">
        <div className="lifestyle-container">
          <div className="lifestyle-section-content reversed">
            <div className="lifestyle-section-text">
              <h2 className="lifestyle-section-title">
                Harness the power of peptides
              </h2>
              <p className="lifestyle-section-description">
                Peptides, the building blocks of proteins, offer a safe and effective way to target 
                and optimize your body's natural processes. Unlike larger proteins, peptides are easily 
                absorbed, making them ideal for enhancing cellular function, healing, metabolism regulation, 
                and overall health improvement.
              </p>
            </div>
            <div className="lifestyle-section-image">
              <img 
                src={HarnessPeptides}
                alt="Young woman taking a selfie" 
                className="lifestyle-section-img" 
              />
            </div>
          </div>
        </div>
      </section>

            <section className="lifestyle-section lifestyle-weightloss">
        <div className="lifestyle-container">
          <div className="lifestyle-section-content">
            <div className="lifestyle-section-image">
              <img 
                src={Bench}
                alt="Weight Loss" 
                className="lifestyle-section-img" 
              />
            </div>
            <div className="lifestyle-section-text">
              <h2 className="lifestyle-section-title">
                Ready to get serious about weight loss?
              </h2>
              <p className="lifestyle-section-description">
                Our physician-supervised weight loss programs combine medical expertise with personalized 
                nutrition plans to help you achieve sustainable results. We utilize evidence-based approaches 
                that target metabolic optimization, appetite regulation, and healthy lifestyle habits.
              </p>
              <p className="lifestyle-section-description">
                With our comprehensive approach, you'll receive the support and guidance needed to reach 
                your weight loss goals while maintaining optimal health and vitality.
              </p>
            </div>
          </div>
        </div>
      </section>

   <Footer/>
     
    </div>
  );
};

export default LifestyleMedicationsPage;