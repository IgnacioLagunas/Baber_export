import React from 'react';
import styled from 'styled-components';
import { Logo } from '../Assets/img';

const { Logo_banner } = Logo;

const BannerWrapper = styled.div`
  width: 152px;
  height: 222px;
  position: absolute;
  top: -40px;
  left: 0;
  img {
    filter: drop-shadow(0px 0px 8px rgb(0, 0, 0, 0.218));
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    /* display: none; */
    width: 119px;
    height: 133px;

    &:after {
      display: none;
    }
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
