import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar/Navbar';
import './index.css';
import About from './Views/About';
import Products from './Views/Products';
import Contact from './Views/Contact';
import App from './App';
import ProductDetails from './Views/ProductDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        {/* <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} /> */}
        <Route path='product/:id' element={<ProductDetails />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
