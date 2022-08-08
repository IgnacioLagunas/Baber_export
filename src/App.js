import React from 'react';
import Home from './Views/Home';
import About from './Views/About';
import Products from './Views/Products';

const App = () => {
  return (
    <div className='App_container'>
      <Home />
      <About />
      <Products />
    </div>
  );
};

export default App;
