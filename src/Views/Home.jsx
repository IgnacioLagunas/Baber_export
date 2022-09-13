import React from 'react';
import { HomeWrapper } from './Styles/Home.styles';
import { HiOutlineArrowDown } from 'react-icons/hi';
import QualitySeal from '../Components/QualitySeal';
import Carousel from '../Components/Carousel';
import { ViewWrapper } from './Styles/View.styles';
import { HomeImages } from '../Assets/img';
import { useContext, useEffect } from 'react';
import { LanguageContext } from '../App.js';

const { Home_cerezas, Home_duraznos, Home_manzanas, Home_uvas } = HomeImages;

const Home = ({ homeRef }) => {
  const lenguajeFromContext = useContext(LanguageContext);

  const PageTitle = (leng) => {
    if (leng === 'español') {
      return (
        <pre className='title'>
          UNA EMPRESA <br />
          EXPORTADORA <br />
          DE <span style={{ fontWeight: 700 }}>FRUTA FRESCA</span>
        </pre>
      );
    } else if (leng === 'english') {
      return (
        <pre className='title'>
          A Chilean company
          <br />
          EXPORTER OF
          <br />
          <span style={{ fontWeight: 700 }}>fresh fruit</span>
        </pre>
      );
    }
  };

  return (
    <ViewWrapper>
      <div id='home'></div>
      <HomeWrapper ref={homeRef}>
        <Carousel
          images={[Home_cerezas, Home_duraznos, Home_manzanas, Home_uvas]}
        />
        <QualitySeal />
        <div className='title_container'>
          {PageTitle(lenguajeFromContext)}
          <a href='#products' className='home_cta'>
            {lenguajeFromContext === 'español'
              ? 'CONOCE NUESTROS PRODUCTOS'
              : 'GET TO KNOW OUR PRODUCTS'}
          </a>
        </div>
        <a href='#about' className='nextSection_btn'>
          <HiOutlineArrowDown />
        </a>
      </HomeWrapper>
    </ViewWrapper>
  );
};

export default Home;
