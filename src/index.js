import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar/Navbar';
import './index.css';
import About from './Views/About';
import Products from './Views/Products';
import Contact from './Views/Contact';
import Home from './Views/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Products' element={<Products />} />
        <Route path='Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
