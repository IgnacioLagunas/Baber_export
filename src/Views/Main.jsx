import React, { lazy, useEffect, useRef } from 'react';
import Home from './Home';
import '../index.css';
const About = lazy(() => import('./About'));
const Products = lazy(() => import('./Products'));
const Contact = lazy(() => import('./Contact'));

const Main = () => {
  const homeSection = useRef();
  const aboutSection = useRef();
  const productsSection = useRef();
  const contactSection = useRef();

  useEffect(() => {
    if (window.location.hash === '#about') {
      aboutSection.current.scrollIntoView();
    } else if (window.location.hash === '#products') {
      productsSection.current.scrollIntoView();
    } else if (window.location.hash === '#contact') {
      contactSection.current.scrollIntoView();
    }
  }, []);

  return (
    <div className='App_container'>
      <Home homeRef={homeSection} />
      <About aboutRef={aboutSection} />
      <Products productRef={productsSection} />
      <Contact contactRef={contactSection} />
    </div>
  );
};

export default Main;
