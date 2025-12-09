import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/pages/layout/header";
import Footer from "./components/pages/layout/footer";
import Hero from "./components/pages/other-solo-content/hero";
import ComingSoon from "./components/pages/other-solo-content/comingSoon";

import LifestyleMedicationsPage from './components/pages/lifestyle-medication/lifestyleMedication';
import IMTherapy from './components/pages/im-theraphy/imTherapy';
import IVTherapy from './components/pages/iv-theraphy/ivTherapy';
import TestKitsPage from './components/pages/test-kit/testKits';

import Peptides from "./components/pages/lifestyle-medication/peptides"; 
import Vitamins from "./components/pages/lifestyle-medication/vitamins";
import Weightloss from "./components/pages/lifestyle-medication/weightloss";

import Contact from "./components/pages/learn-more/contact";
import About from "./components/pages/other-solo-content/about";
import Concierge from "./components/pages/other-solo-content/concierge";
import FAQs from "./components/pages/learn-more/faq";
import GiftCards from "./components/pages/learn-more/giftCards";
import Packages from "./components/pages/learn-more/packages";

const PlaceholderPage = ({ title }) => {
  return (
    <div style={{ padding: '100px 20px', textAlign: 'center', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>{title}</h1>
      <p style={{ fontSize: '1.2rem', color: '#666' }}>
        This page is coming soon. Check back later!
      </p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Header/>
      
      <Routes>
  
        <Route path="/" element={<Hero />} />
        
        <Route path="/services/im-therapy" element={<IMTherapy />} />
        <Route path="/services/iv-therapy" element={<IVTherapy />} />
        <Route path="/services/test-kits" element={<TestKitsPage />} />
        <Route path="/services/lifestyle-medications" element={<LifestyleMedicationsPage />} />
        
        <Route path="/services/lifestyle-medications/peptides" element={<Peptides />} />
        <Route path="/services/lifestyle-medications/vitamins" element={<Vitamins />} />
        <Route path="/services/lifestyle-medications/weightloss" element={<Weightloss />} />
        
        <Route path="/concierge" element={<Concierge />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/gift-cards" element={<GiftCards />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        
      
    
        
  
        <Route path="/coming-soon" element={<ComingSoon />} />
        
      
        <Route path="*" element={<ComingSoon />} />
        
      </Routes>

    </Router>
  )
}

export default App;