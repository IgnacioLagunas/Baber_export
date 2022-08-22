import React, { Suspense, lazy, useEffect, useRef } from 'react';
import Backdrop from './Components/Backdrop';
import Home from './Views/Home';
// import About from './Views/About';
// import Products from './Views/Products';
// import Contact from './Views/Contact';
const About = lazy(() => import('./Views/About'));
const Products = lazy(() => import('./Views/Products'));
const Contact = lazy(() => import('./Views/Contact'));

const App = () => {
  const homeSection = useRef()
  const aboutSection = useRef(null)
  const productsSection = useRef(null)
  const contactSection = useRef(null)

  useEffect(()=>{
    console.log(homeSection)
  },[homeSection])
  return (

    <div className='App_container'>
      <Home homeRef={homeSection}/>
      <About />
      <Products />
      <Contact />
    </div>
  );
};

export default App;
