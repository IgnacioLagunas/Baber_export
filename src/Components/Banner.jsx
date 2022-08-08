import React from 'react';
import styled from 'styled-components';
import { Logo } from '../Assets/img';

const { Logo_banner } = Logo;

const BannerWrapper = styled.div`
  width: 152px;
  height: 170px;
  padding: 20px;
  padding-bottom: 0px;
  box-shadow: 0px 0px 20px;
  background-color: #fff;
  position: absolute;
  top: -28px;
  left: 71px;
  img {
    width: 100%;
    object-fit: contain;
  }
  &:after {
    box-sizing: border-box;
    content: '';
    width: 152px;
    height: 20px;
    border-top: 24px solid white;
    border-right: 153px solid transparent;
    position: absolute;
    bottom: -24px;
    left: 0;
  }
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <img src={Logo_banner} alt='Baber export logo' />
    </BannerWrapper>
  );
};

export default Banner;
