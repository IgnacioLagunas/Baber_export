import React, { createContext, useState } from 'react';
import  Navbar  from './Components/Navbar/Navbar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Views/Main.jsx';
import ProductDetails from './Views/ProductDetails.jsx';

export const LanguageContext = createContext("español")

const App = () => {

  const [language, setLanguage] = useState("español")
  return (

<BrowserRouter>
      <LanguageContext.Provider value={language}>
        <Navbar setLanguag={setLanguage}/>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='product/:id' element={<ProductDetails />} />
        </Routes>
      </LanguageContext.Provider>
    </BrowserRouter> 
    
  );
};



export default App;
