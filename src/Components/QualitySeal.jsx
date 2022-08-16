import React from 'react';
import styled from 'styled-components';
import QualityFruitSVG from '../Assets/img/logo_PremiumFruitBABER/SVG/Recurso_1.svg';

const QualitySealWrapper = styled.div`
  position: absolute;
  z-index: 9;
  top: 89px;
  right: 7.14%;
  max-width: 180px;
  width: 12%;
  min-width: 140px;
  height: 200px;
  transform: rotate(-20deg);
  background-color: #ffffffba;
  -webkit-mask: url(${(props) => props.bg}) no-repeat center;
  mask: url(${(props) => props.bg}) no-repeat center;

  @media (max-width: 1100px) {
    top: 44px;
    /* right: 41px; */
    min-width: 110px;
    /* min-width: 85px; */
  }

  @media (max-width: 500px) {
    top: 10px;
    /* right: 18px; */
    min-width: 85px;
  }
`;

const QualitySeal = () => {
  return (
    <QualitySealWrapper bg={QualityFruitSVG}>
      {/* <img src={QualityFruitSVG} alt='' /> */}
    </QualitySealWrapper>
  );
};

export default QualitySeal;
