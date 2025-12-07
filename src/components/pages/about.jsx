import React, { useState } from 'react';
import '../../assets/styles/pages/about.css';
import MedicalLeaderModal from '../modal/medicalLeaders'; 
import AboutHero from "../../assets/images/about/blewm.png";
import DrGreg from "../../assets/images/about/dr-greg.png";
import DrSosa from "../../assets/images/about/dr-sosa.png";
import DrJoel from "../../assets/images/about/dr-joel.png";
import Plank from "../../assets/images/about/plank.png";

import { FaBolt, FaDumbbell, FaBrain } from 'react-icons/fa';
const AboutPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState('');

  const handleOpenModal = (leader) => {
    setSelectedLeader(leader);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedLeader('');
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-image-container">
          <div
            className="about-hero-image"
            style={{ 
                backgroundImage:  `url(${AboutHero})` 
            }}
          />
          <div className="about-hero-overlay"></div>
          <div className="about-hero-content">
            <h1 className="about-hero-title">About Blewm</h1>
            <p className="about-hero-tagline">Redefining Wellness Through Science & Innovation</p>
          </div>
        </div>
      </section>

{/* Company Overview */}
<section className="about-section about-overview">
  <div className="about-container">
    <div className="about-section-header">
      <h2 className="about-section-title">
        More Than a <span className="about-title-accent">Wellness Company</span>
      </h2>
      <p className="about-section-subtitle">
        A transformative force dedicated to elevating human potential
      </p>
    </div>
    
    <div className="about-overview-content">
      <div className="about-overview-text">
        <p className="about-paragraph">
          Blewm is not just a hydration therapy and peptide company; it's a transformative 
          force dedicated to elevating experiences, optimizing performance, and fostering 
          holistic well-being.
        </p>
        
        <p className="about-paragraph">
          Our mission is to redefine wellness by blending cutting-edge therapies and 
          specialized peptides to empower individuals to thrive in every aspect of their lives.
        </p>
        
        <div className="about-highlights">
          <div className="about-highlight">
            <div className="about-highlight-icon">
              <FaBolt />
            </div>
            <h3 className="about-highlight-title">Festival Experience</h3>
            <p className="about-highlight-text">
              Revitalizing hydration solutions that enhance peak moments
            </p>
          </div>
          
          <div className="about-highlight">
            <div className="about-highlight-icon">
              <FaDumbbell />
            </div>
            <h3 className="about-highlight-title">Athletic Performance</h3>
            <p className="about-highlight-text">
              Tailored plans that propel athletes toward peak performance
            </p>
          </div>
          
          <div className="about-highlight">
            <div className="about-highlight-icon">
              <FaBrain />
            </div>
            <h3 className="about-highlight-title">Holistic Wellness</h3>
            <p className="about-highlight-text">
              Innovative therapies addressing mind and body together
            </p>
          </div>
        </div>
      </div>
      
      <div className="about-overview-image">
        <img 
          src={Plank}
          alt="Blewm Wellness Innovation"
          className="about-overview-img"
        />
      </div>
    </div>
  </div>
</section>

      {/* Mission & Vision */}
      <section className="about-section about-mission">
        <div className="about-container">
          <div className="about-mission-content">
            <div className="about-mission-card">
              <h2 className="about-mission-title">
                Our <span className="about-title-accent">Mission</span>
              </h2>
              <p className="about-mission-text">
                To unlock the potential of hydration and peptides, contributing to a world 
                where individuals thrive in vibrant health through the convergence of 
                science and well-being.
              </p>
            </div>
            
            <div className="about-mission-card">
              <h2 className="about-mission-title">
                Our <span className="about-title-accent">Vision</span>
              </h2>
              <p className="about-mission-text">
                To be the go-to source for transformative wellness, where Blewm becomes 
                synonymous with revitalization, optimal living, and empowering people to 
                live their best lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Leadership */}
      <section className="about-section about-leadership">
        <div className="about-container">
          <div className="about-section-header">
            <h2 className="about-section-title">
              Our <span className="about-title-accent">Medical Leadership</span>
            </h2>
            <p className="about-section-subtitle">
              World-class expertise guiding our innovative approach to wellness
            </p>
          </div>
          
          <div className="about-leadership-grid">
            {/* Dr. Greg Smith */}
            <div className="about-leader-card">
              <div className="about-leader-image">
                <img 
                  src={DrGreg}
                  alt="Dr. Greg A. Smith"
                  className="about-leader-img"
                />
                <div className="about-leader-badge">CMO</div>
              </div>
              <div className="about-leader-details">
                <h3 className="about-leader-name">Greg A. Smith, M.D.</h3>
                <p className="about-leader-role">Chief Medical Officer - Lifestyle Wellness</p>
                <div className="about-leader-credentials">
                  <span>President & CEO, Red Pill Medical, Inc.</span>
                  <span>Former Director of Pain Management, Harbor UCLA</span>
                  <span>Assistant Clinical Professor, UCLA</span>
                </div>
                <p className="about-leader-bio">
                  Creator of the NESP Program for addiction and chronic pain. Executive producer 
                  of award-winning health documentaries. Nationally recognized speaker on 
                  integrative medicine.
                </p>
                <button 
                  className="about-learn-more-btn"
                  onClick={() => handleOpenModal('greg-smith')}
                >
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Dr. John Sosa */}
            <div className="about-leader-card">
              <div className="about-leader-image">
                <img 
                  src={DrSosa}
                  alt="Dr. John P. Sosa"
                  className="about-leader-img"
                />
                <div className="about-leader-badge">CMO</div>
              </div>
              <div className="about-leader-details">
                <h3 className="about-leader-name">John P. Sosa, M.D., DipABLM</h3>
                <p className="about-leader-role">Chief Medical Officer - Lifestyle Medications</p>
                <div className="about-leader-credentials">
                  <span>Double Board Certified: Family & Lifestyle Medicine</span>
                  <span>Inaugural Class, American College of Lifestyle Medicine</span>
                  <span>Pioneer in Direct Primary Care Lifestyle Medicine</span>
                </div>
                <p className="about-leader-bio">
                  Focuses on health optimization, longevity, and maximizing healthspan. 
                  Founded first DPC Lifestyle Medicine practice. Passionate advocate for 
                  plant-based nutrition and preventive care.
                </p>
                <button 
                  className="about-learn-more-btn"
                  onClick={() => handleOpenModal('john-sosa')}
                >
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Dr. Joel Kahn */}
            <div className="about-leader-card">
              <div className="about-leader-image">
                <img 
                  src={DrJoel}
                  alt="Dr. Joel Kahn"
                  className="about-leader-img"
                />
                <div className="about-leader-badge">CMO</div>
              </div>
              <div className="about-leader-details">
                <h3 className="about-leader-name">Joel Kahn, M.D., FACC</h3>
                <p className="about-leader-role">Chief Medical Officer</p>
                <div className="about-leader-credentials">
                  <span>Triple Board Certified Cardiologist</span>
                  <span>Clinical Professor, Wayne State University</span>
                  <span>First Certified in Metabolic Cardiology (A4M/MMI)</span>
                </div>
                <p className="about-leader-bio">
                  Known as "America's Healthy Heart Doc." Creator of all Blewm IV formulas. 
                  World's top holistic cardiologist and plant-based nutrition advocate. 
                  Author of six health books and host of popular Heart Doc VIP podcast.
                </p>
                <button 
                  className="about-learn-more-btn"
                  onClick={() => handleOpenModal('joel-kahn')}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

 

      {/* Modal Component */}
      <MedicalLeaderModal 
        isOpen={modalOpen}
        onClose={handleCloseModal}
        leader={selectedLeader}
      />
    </div>
  );
};

export default AboutPage;