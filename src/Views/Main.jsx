import React, { lazy, useRef } from 'react';
import Home from './Home';
import '../index.css';
const About = lazy(() => import('./About'));
const Products = lazy(() => import('./Products'));
const Contact = lazy(() => import('./Contact'));

const Main = () => {
  const homeSection = useRef();
  // const aboutSection = useRef(null);
  // const productsSection = useRef(null);
  // const contactSection = useRef(null);

  return (
    <div className='App_container'>
      <Home homeRef={homeSection} />
      <About />
      <Products />
      <Contact />
    </div>
  );
};

export default Main;
