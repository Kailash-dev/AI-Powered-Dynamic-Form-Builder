import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FormSelector from './components/FormSelector';
import HeroSection from './components/Hero';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/forms" element={<FormSelector />} />
    </Routes>
  </BrowserRouter>
);

export default App;
