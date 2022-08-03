import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './Components/Navbar/Navbar';
import './index.css';
import About from './Views/About';
import Products from './Views/Products';
import Contact from './Views/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='About' element={<About />} />
        <Route path='Products' element={<Products />} />
        <Route path='Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
