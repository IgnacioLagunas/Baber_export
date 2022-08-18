import React, { Suspense, lazy } from 'react';
import Backdrop from './Components/Backdrop';
import Home from './Views/Home';
// import About from './Views/About';
// import Products from './Views/Products';
// import Contact from './Views/Contact';
const About = lazy(() => import('./Views/About'));
const Products = lazy(() => import('./Views/Products'));
const Contact = lazy(() => import('./Views/Contact'));

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
