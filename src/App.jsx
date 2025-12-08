import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/pages/header";
import Hero from "./components/pages/hero";
import ComingSoon from "./components/pages/comingSoon";
import Peptides from "./components/pages/lifestyle-medication/peptides"; 
import Vitamins from "./components/pages/lifestyle-medication/vitamins";
 import Weightloss from "./components/pages/lifestyle-medication/weightloss";


import Contact from "./components/pages/contact";
import About from "./components/pages/about";
import Concierge from "./components/pages/concierge";
import FAQs from "./components/pages/faq";
// import GiftCards from "./components/pages/giftCards";
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
        <Route path="/" element={
          <>
            {/* <ComingSoon/> */}
            <Hero/>
          </>
        } />
        
        {/* Lifestyle Medications Routes */}
        {/* <Route path="/services/lifestyle-medications" element={
          <div style={{ padding: '100px 20px', textAlign: 'center' }}>
            <h1>Lifestyle Medications</h1>
            <p>Select a specific treatment option from the dropdown menu.</p>
          </div>
        } /> */}
        
        <Route path="/services/lifestyle-medications/peptides" element={<Peptides />} />
       <Route path="/services/lifestyle-medications/vitamins" element={<Vitamins />} />
        <Route path="/services/lifestyle-medications/weightloss" element={<Weightloss />} />
      
     
        {/* <Route path="/services/iv-therapy" element={<PlaceholderPage title="IV Therapy" />} /> */}
        {/* <Route path="/services/im-therapy" element={<PlaceholderPage title="IM Therapy" />} /> */}
        {/* <Route path="/services/test-kits" element={<PlaceholderPage title="Test Kits" />} /> */}
        
      
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
        {/* <Route path="/gift-cards" element={<GiftCards />} /> */}
        <Route path="/packages" element={<Packages />} />
        
   
        <Route path="/concierge" element={<Concierge />} />
        <Route path="/about" element={<About />} />
        
    
        {/* <Route path="/book-now" element={<BookNow />} /> */}
        {/* <Route path="/book-now/lifestyle-medication" element={<BookNow serviceType="lifestyle-medication" />} /> */}
        
    
        <Route path="/coming-soon" element={<ComingSoon />} />
        
        <Route path="*" element={<ComingSoon  />} />
      </Routes>
    </Router>
  )
}

export default App;