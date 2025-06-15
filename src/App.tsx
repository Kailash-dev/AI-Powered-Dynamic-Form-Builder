import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FormSelector from './components/FormSelector';
import HeroSection from './components/Hero';

const App = () => (
  <BrowserRouter basename="/AI-Powered-Dynamic-Form-Builder">
  <Routes>
  <Route path="/" element={<HeroSection />} />
  <Route path="/forms" element={<FormSelector />} />
  <Route path="*" element={<HeroSection />} />  {/* fallback */}
</Routes>
  </BrowserRouter>
);

export default App;
