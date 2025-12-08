import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/pages/header";
import Footer from "./components/pages/footer";
import Hero from "./components/pages/hero";
import ComingSoon from "./components/pages/comingSoon";

import LifestyleMedicationsPage from './components/pages/lifestyle-medication/lifestyleMedication';
import IMTherapy from './components/pages/imTherapy';
import IVTherapy from './components/pages/ivTherapy';
import TestKitsPage from './components/pages/testKits';

import Peptides from "./components/pages/lifestyle-medication/peptides"; 
import Vitamins from "./components/pages/lifestyle-medication/vitamins";
import Weightloss from "./components/pages/lifestyle-medication/weightloss";

import Contact from "./components/pages/contact";
import About from "./components/pages/about";
import Concierge from "./components/pages/concierge";
import FAQs from "./components/pages/faq";
import GiftCards from "./components/pages/giftCards";
import Packages from "./components/pages/packages";
// import BookNow from "./components/pages/bookNow";

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
        {/* Home Page */}
        <Route path="/" element={<Hero />} />
        
        {/* Services with /services/ prefix */}
        <Route path="/services/im-therapy" element={<IMTherapy />} />
        <Route path="/services/iv-therapy" element={<IVTherapy />} />
        <Route path="/services/test-kits" element={<TestKitsPage />} />
        <Route path="/services/lifestyle-medications" element={<LifestyleMedicationsPage />} />
        
        {/* Lifestyle Medications Sub-pages */}
        <Route path="/services/lifestyle-medications/peptides" element={<Peptides />} />
        <Route path="/services/lifestyle-medications/vitamins" element={<Vitamins />} />
        <Route path="/services/lifestyle-medications/weightloss" element={<Weightloss />} />
        
        {/* Main Pages (no /services/ prefix) */}
        <Route path="/concierge" element={<Concierge />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/gift-cards" element={<GiftCards />} />
        
        {/* Informational Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Booking */}
        {/* <Route path="/book-now" element={<BookNow />} /> */}
        
        {/* Coming Soon */}
        <Route path="/coming-soon" element={<ComingSoon />} />
        
        {/* 404 - Not Found */}
        <Route path="*" element={<ComingSoon />} />
        
      </Routes>

    </Router>
  )
}

export default App;