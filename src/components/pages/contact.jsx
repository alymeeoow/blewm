import React, { useState } from 'react';
import '../../assets/styles/pages/contact.css';
import ContactForm from '../modal/contactModal';

import Footer from '../pages/footer'
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaCommentDots
} from 'react-icons/fa';

import ContactHero from "../../assets/images/contact/contact-hero.png";

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone Number",
      details: [
        { label: "Main Office", value: "(555) 123-4567" },
        { label: "Support Line", value: "(555) 123-4568" },
        { label: "Emergency", value: "(555) 123-4569" }
      ],
      action: { text: "Call Now", href: "tel:5551234567" }
    },
    {
      icon: <FaEnvelope />,
      title: "Email Address",
      details: [
        { label: "General Inquiries", value: "info@blewm.com" },
        { label: "Medical Support", value: "medical@blewm.com" },
        { label: "Partnerships", value: "partners@blewm.com" }
      ],
      action: { text: "Send Email", href: "mailto:info@blewm.com" }
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      details: [
        { label: "Address", value: "123 Wellness Ave" },
        { label: "City & State", value: "Miami, FL 33101" },
        { label: "Hours", value: "Mon-Fri: 9AM-6PM" }
      ],
      action: { text: "Get Directions", href: "https://maps.google.com" }
    }
  ];

  return (
    <div className="contact-page">
      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-image-container">
          <div 
            className="contact-hero-image"
            style={{ 
              backgroundImage: `url(${ContactHero})`
            }}
          />
          <div className="contact-hero-overlay"></div>
        </div>
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">GET IN TOUCH</h1>
          <p className="contact-hero-subtitle">
            Connect with our medical team for personalized wellness guidance
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-intro">
            <div className="contact-intro-content">
              <h2 className="contact-section-title">
                Ready to <span className="contact-title-accent">Transform</span> Your Wellness?
              </h2>
              <p className="contact-section-description">
                Whether you have questions about our therapies, need medical guidance, 
                or want to schedule a consultation, our team is here to support your wellness journey.
              </p>
            </div>
          </div>

          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="contact-info-icon">
                  {info.icon}
                </div>
                <div className="contact-info-content">
                  <h3 className="contact-info-title">{info.title}</h3>
                  <div className="contact-info-details">
                    {info.details.map((detail, idx) => (
                      <div key={idx} className="contact-info-detail">
                        <span className="contact-info-label">{detail.label}:</span>
                        <span className="contact-info-value">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                  <a 
                    href={info.action.href} 
                    className="contact-info-action"
                    target={info.action.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                  >
                    {info.action.text}
                  </a>
                </div>
              </div>
            ))}

            {/* Send Message CTA Card */}
            <div className="contact-info-card cta-card" onClick={() => setIsFormOpen(true)}>
              <div className="contact-info-icon">
                <FaCommentDots />
              </div>
              <div className="contact-info-content">
                <h3 className="contact-info-title">Send Message</h3>
                <div className="contact-info-details">
                  <div className="contact-info-detail">
                    <span className="contact-info-label">Response Time:</span>
                    <span className="contact-info-value">Within 24 hours</span>
                  </div>
                  <div className="contact-info-detail">
                    <span className="contact-info-label">Available:</span>
                    <span className="contact-info-value">7 days a week</span>
                  </div>
                  <div className="contact-info-detail">
                    <span className="contact-info-label">Best For:</span>
                    <span className="contact-info-value">Detailed inquiries</span>
                  </div>
                </div>
                <button className="contact-info-action-btn">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
        

      </section>
      <Footer/>
    </div>
  );
};

export default Contact;