import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar/Navbar';
import './index.css';
import App from './App';
import ProductDetails from './Views/ProductDetails';
import LanguageContext,{ languages} from './Utils/LanguageContext'



// const [lang, setLang] = useState("español")
const root = ReactDOM.createRoot(document.getElementById('root'));

// setLanguage={setLang} language={lang}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageContext.Provider value={languages[1]}>
        <Navbar />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='product/:id' element={<ProductDetails />} />
        </Routes>
      </LanguageContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
