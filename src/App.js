import React from 'react';
import Home from './Views/Home';
import About from './Views/About';
import Products from './Views/Products';
import Contact from './Views/Contact';

const App = () => {
  return (
    <div className='App_container'>
      <Home />
      <About />
      <Products />
      <Contact />
    </div>
  );
};

export default App;
