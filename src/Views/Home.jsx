import React from 'react';
import { HomeWrapper } from './Styles/Home.styles';
import FondoDuraznos from '../Assets/img/Duraznos.jpg';
import { HiOutlineArrowDown } from 'react-icons/hi';

const Home = () => {
  return (
    <section className='view_container'>
      <HomeWrapper backgroundImage={FondoDuraznos}>
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
