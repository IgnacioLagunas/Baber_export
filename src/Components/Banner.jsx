import React from 'react';
import styled from 'styled-components';
import logo from '../Assets/img/baber_logo.png';

const BannerWrapper = styled.div`
  width: 45%;
  max-width: 200px;
  height: 227px;
  padding: 20px;
  padding-bottom: 0px;
  box-shadow: -4px -11px 20px;
  background-color: #fff;
  position: absolute;
  top: 0;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <img src={logo} alt='Baber export logo' />
    </BannerWrapper>
  );
};

export default Banner;
