import React from 'react';
import { HomeWrapper } from './Styles/Home.styles';
import ManzanasImg from '../Assets/img/Home_fotos/manzana_unsplash.jpg';
import CerezasImg from '../Assets/img/Home_fotos/cerezas_unsplash.jpg';
import UvasImg from '../Assets/img/Home_fotos/jason-leung-K1PU6sqsFPs-unsplash.jpg';
import DuraznosImg from '../Assets/img/Home_fotos/juraj-filipeje-V_X0uBi_8eQ-unsplash.jpg';
import { HiOutlineArrowDown } from 'react-icons/hi';
import QualitySeal from '../Components/QualitySeal';
import Carousel from '../Components/Carousel';

const Home = () => {
  return (
    <section className='view_container'>
      <HomeWrapper backgroundImage={CerezasImg}>
        <Carousel images={[ManzanasImg, CerezasImg, UvasImg, DuraznosImg]} />
        <QualitySeal />
        <div className='title_container'>
          <h1 className='title'>UNA EMPRESA EXPORTADORA DE FRUTA FRESCA</h1>
          <button className='home_cta'>CONOCE NUESTROS PRODUCTOS</button>
        </div>
        <button className='nextSection_btn'>
          <HiOutlineArrowDown />
        </button>
      </HomeWrapper>
    </section>
  );
};

export default Home;
