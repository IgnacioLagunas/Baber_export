import React from 'react';
import { HomeWrapper } from './Styles/Home.styles';
import { HiOutlineArrowDown } from 'react-icons/hi';
import QualitySeal from '../Components/QualitySeal';
import Carousel from '../Components/Carousel';
import { ViewWrapper } from './Styles/View.styles';
import { HomeImages } from '../Assets/img';

const { Home_cerezas } = HomeImages;

const Home = () => {
  return (
    <ViewWrapper backgroundImage={Home_cerezas}>
      <HomeWrapper>
        {/* <Carousel images={[ManzanasImg, CerezasImg, UvasImg, DuraznosImg]} /> */}
        <QualitySeal />
        <div className='title_container'>
          <h1 className='title'>UNA EMPRESA EXPORTADORA DE FRUTA FRESCA</h1>
          <button className='home_cta'>CONOCE NUESTROS PRODUCTOS</button>
        </div>
        <button className='nextSection_btn'>
          <HiOutlineArrowDown />
        </button>
      </HomeWrapper>
    </ViewWrapper>
  );
};

export default Home;
