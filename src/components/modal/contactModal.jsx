import React, { useState } from 'react';
import "../../assets/styles/modals/contactModal.css"
import { 
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaTimes,
  FaCheckCircle
} from 'react-icons/fa';

const ContactForm = ({ isOpen, onClose, title = "Contact Us", description = "Send us a message and we'll get back to you soon." }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log('Contact form submitted:', formData);
    
    // Simulate API call delay
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.'
      });
      
      // Reset form after 3 seconds and close
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });
        setFormStatus({ submitted: false, success: false, message: '' });
        onClose();
      }, 3000);
    }, 1000);
  };

  const handleClose = () => {
    // Reset form when closing
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
    setFormStatus({ submitted: false, success: false, message: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="contact-form-modal-overlay" onClick={handleClose}>
      <div className="contact-form-modal" onClick={(e) => e.stopPropagation()}>
        <button className="contact-form-close-btn" onClick={handleClose}>
          <FaTimes />
        </button>
        
        <div className="contact-form-header">
          <h3 className="contact-form-title">{title}</h3>
          <p className="contact-form-description">{description}</p>
        </div>

        {formStatus.submitted ? (
          <div className={`form-success-message ${formStatus.success ? 'success' : 'error'}`}>
            <div className="success-icon">
              <FaCheckCircle />
            </div>
            <h4>{formStatus.success ? 'Message Sent Successfully!' : 'Error Sending Message'}</h4>
            <p>{formStatus.message}</p>
            <div className="success-checkmark"></div>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  <FaUser /> Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <FaEnvelope /> Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">
                  <FaPhone /> Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">
                  <FaBuilding /> Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Enter your company name"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="iv-therapy">IV Therapy Information</option>
                <option value="peptides">Peptide Therapy</option>
                <option value="booking">Schedule Appointment</option>
                <option value="billing">Billing Question</option>
                <option value="medical">Medical Question</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your wellness goals and any questions you have..."
                rows="4"
                required
              />
            </div>

            <div className="form-actions">
              <button type="button" className="contact-btn secondary" onClick={handleClose}>
                Cancel
              </button>
              <button type="submit" className="contact-btn primary submit-btn">
                <FaPaperPlane /> Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;