import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import LuxuryCarRental from './pages/LuxuryCarRental';
import MedicalPractice from './pages/MedicalPractice';
import EcommerceHome from './pages/ECommerce';
import ConstructionDemo from './pages/ConstructionDemo';
import AppStore from './pages/AppStore';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demos/luxury" element={<LuxuryCarRental />} />
        <Route path="/demos/medical" element={<MedicalPractice />} />
        <Route path="/demos/ecommerce" element={<EcommerceHome />} />
        <Route path="/demos/construction" element={<ConstructionDemo />} />
        <Route path="/app-store" element={<AppStore />} />
      </Routes>
    </>
  );
};

export default App;
