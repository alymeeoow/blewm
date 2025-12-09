import React, { useState, useRef, useEffect } from 'react';
import '../../../assets/styles/pages/faq.css';
import { FaChevronDown, FaChevronUp, FaSyringe, FaHeartbeat, FaCapsules, FaChild, FaClock, FaVial, FaFlask } from 'react-icons/fa';

import FaqHero from "../../../assets/images/faq/faq.webp";
import Footer from '../layout/footer'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqRefs = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Handle click outside to remove focus
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeIndex !== null && !faqRefs.current.some(ref => ref && ref.contains(event.target))) {
        // Remove focus from all FAQ buttons
        document.querySelectorAll('.faq-question').forEach(btn => {
          btn.blur();
        });
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [activeIndex]);

  const faqItems = [
    {
      question: "What Is IV Nutrient Therapy?",
      answer: "Intravenous (IV) nutrient therapy is an effective method of delivering and absorbing key nutrients via your veins. Because these nutrients are injected, we're bypassing the gastrointestinal system, so nutrients are 100% absorbed by the bloodstream, where they can be immediately utilized.",
      icon: <FaSyringe />
    },
    {
      question: "What Ailments Are Addressed By IV Nutrient Therapy?",
      answer: "There is an IV treatment for nearly any condition, and we recommend it for overall well-being! IV nutrient therapy supports: Anti-aging, Allergies, Asthma, Athletic Performance, Chronic Fatigue, Brain Fog, Detoxification, Energy Improvement, Hangovers, Headaches, Migraines, Improved Immunity, and Longevity.",
      icon: <FaHeartbeat />
    },
    {
      question: "What's The Difference Between Oral Vitamins And IV Vitamins?",
      answer: "When taken orally, only a fraction (20-40% or less) of the essential nutrients are absorbed due to a variety of factors: unhealthy diet, insufficient essential nutrients, widespread prevalence of gastrointestinal problems, chronic illness and more. With IV nutrient therapy, 100% of the nutrients are absorbed into the bloodstream, where they can immediately be used by your body.",
      icon: <FaCapsules />
    },
    {
      question: "Is IV Therapy Safe for Children?",
      answer: "While IV therapies are safe for kids, our drip blends are designed for adults. In specific circumstances, our medical staff can consult with your pediatrician and design a protocol designed to target a specific condition.",
      icon: <FaChild />
    },
    {
      question: "How Long Are IV Nutrient Therapy Drips?",
      answer: "Depending on the treatment you select, it will take between 30-60 minutes to infuse. The difference in infusion rate depends on the total fluid amount and the viscosity of the 'cocktail' infusing.",
      icon: <FaClock />
    },
    {
      question: "How Many Sessions Does It Take Until I See Results From An IV Drip?",
      answer: "Benefits can be seen after the first session, and with regular treatments, safe and lasting effects can be achieved.",
      icon: <FaVial />
    },
    {
      question: "Can You Create Specific 'Nutrient Cocktails' Based On My Individual Needs?",
      answer: "Yes! We invite you to consult with our medical team or take a micronutrient test to create an IV nutrient plan based on your concerns and needs.",
      icon: <FaFlask />
    }
  ];

  return (
    <div className="faq-page">
            <section className="faq-hero">
        <div 
          className="faq-hero-image"
          style={{ 
            backgroundImage: `url(${FaqHero})`,
          
          }}
        />
        <div className="faq-hero-overlay"></div>
        <div className="faq-hero-content">
          <h1 className="faq-hero-title">FREQUENTLY ASKED QUESTIONS</h1>
          <p className="faq-hero-subtitle">
            Get answers to common questions about IV Nutrient Therapy and our wellness services
          </p>
        </div>
      </section>

            <section className="faq-section">
        <div className="faq-container">
          <div className="faq-intro">
            <div className="faq-intro-content">
              <h2 className="faq-section-title">
                Your Questions, <span className="faq-title-accent">Answered</span>
              </h2>
              <p className="faq-section-description">
                Find clear, detailed answers to our most frequently asked questions about 
                IV therapy treatments, safety protocols, expected results, and personalized care.
              </p>
            </div>
          </div>

          <div className="faq-accordion-container">
            <div className="faq-accordion">
              {faqItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                  ref={el => faqRefs.current[index] = el}
                >
                  <button 
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-answer-${index}`}
                    onMouseDown={(e) => e.preventDefault()} // Prevent focus on mouse down
                  >
                    <div className="faq-question-content">
                      <div className="faq-icon-container">
                        <div className="faq-icon">{item.icon}</div>
                      </div>
                      <div className="faq-text-content">
                        <h3 className="faq-question-text">{item.question}</h3>
                      </div>
                    </div>
                    <div className="faq-toggle">
                      {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                  </button>
                  
                  <div 
                    id={`faq-answer-${index}`}
                    className="faq-answer"
                    style={{
                      maxHeight: activeIndex === index ? '500px' : '0',
                      opacity: activeIndex === index ? '1' : '0'
                    }}
                    aria-hidden={activeIndex !== index}
                  >
                    <div className="faq-answer-content">
                      <div className="faq-answer-icon-spacer"></div>
                      <div className="faq-answer-text">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

                    <div className="faq-info-footer">
            <p className="faq-info-text">
              Still have questions? Our medical team is available to provide personalized guidance. 
              Visit our <a href="/contact" className="faq-info-link">Contact page</a> to get in touch.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
    
  );
};

export default FAQ;