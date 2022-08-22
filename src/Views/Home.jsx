import React from 'react';
import { HomeWrapper } from './Styles/Home.styles';
import { HiOutlineArrowDown } from 'react-icons/hi';
import QualitySeal from '../Components/QualitySeal';
import Carousel from '../Components/Carousel';
import { ViewWrapper } from './Styles/View.styles';
import { HomeImages } from '../Assets/img';

const { Home_cerezas, Home_duraznos, Home_manzanas, Home_uvas } = HomeImages;

const Home = ({ homeRef }) => {
  return (
    <ViewWrapper>
      <div id='home'></div>
      <HomeWrapper ref={homeRef}>
        <Carousel
          images={[Home_cerezas, Home_duraznos, Home_manzanas, Home_uvas]}
        />
        <QualitySeal />
        <div className='title_container'>
          <pre className='title'>
            UNA EMPRESA <br />
            EXPORTADORA <br />
            DE <span style={{ fontWeight: 700 }}>FRUTA FRESCA</span>
          </pre>
          <a href='#products' className='home_cta'>
            CONOCE NUESTROS PRODUCTOS
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
