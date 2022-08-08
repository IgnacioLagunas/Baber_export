import React from 'react';
import styled from 'styled-components';
import QualityFruitSVG from '../Assets/img/logo_PremiumFruitBABER/SVG/Recurso_1.svg';

const QualitySealWrapper = styled.div`
  position: absolute;
  z-index: 9;
  top: 80px;
  right: 200px;
  width: 200px;
  height: 200px;
  transform: rotate(-20deg);
  background-color: #ffffffba;
  -webkit-mask: url(${(props) => props.bg}) no-repeat center;
  mask: url(${(props) => props.bg}) no-repeat center;
`;

const QualitySeal = () => {
  return (
    <QualitySealWrapper bg={QualityFruitSVG}>
      {/* <img src={QualityFruitSVG} alt='' /> */}
    </QualitySealWrapper>
  );
};

export default QualitySeal;
