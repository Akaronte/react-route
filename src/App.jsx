import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index';
import Products from './pages/Products';
import Lugares from './pages/Lugares';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Lugares" element={<Lugares />} />
    </Routes>
  </BrowserRouter>

  );
};

export default App;

