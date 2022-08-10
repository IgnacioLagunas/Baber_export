import React from 'react';
import { HomeWrapper } from './Styles/Home.styles';
import { HiOutlineArrowDown } from 'react-icons/hi';
import QualitySeal from '../Components/QualitySeal';
import Carousel from '../Components/Carousel';
import { ViewWrapper } from './Styles/View.styles';
import { HomeImages } from '../Assets/img';

const { Home_cerezas, Home_duraznos, Home_manzanas, Home_uvas } = HomeImages;

const Home = () => {
  return (
    <ViewWrapper>
      <div id='home'></div>
      <HomeWrapper>
        <Carousel
          images={[Home_cerezas, Home_duraznos, Home_manzanas, Home_uvas]}
        />
        <QualitySeal />
        <div className='title_container'>
          <h1 className='title'>
            UNA EMPRESA EXPORTADORA DE{' '}
            <span style={{ fontWeight: 700 }}>FRUTA FRESCA</span>
          </h1>
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
