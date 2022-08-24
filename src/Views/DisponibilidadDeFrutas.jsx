import React from 'react';
import styled from 'styled-components';
import { ViewWrapper } from './Styles/View.styles';
import { FichasConoce } from '../Assets/img';
import Background from '../Assets/img/Background_Products.jpg';
import CuadroDisponibilidad from '../Assets/img/cuadro_disponibilidad de fruta en chile/SVG/cuadro_disponibilidad.svg';
import Ficha from '../Components/Ficha';

const { Ficha_Descargar } = FichasConoce;

const DisponibilidadWrapper = styled.section`
  overflow: hidden !important;
  transition: max-height 1s ease;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  &.show {
    max-height: 10000px;
  }
  &.hidden {
    max-height: 0px;
  }
  .container {
    background-color: #ffffff94;
    padding: 3rem var(--column-width);
    align-items: center;
    gap: 3rem;
    h1 {
      text-align: center;
      letter-spacing: 1.68px;
      font-size: 2.5rem;
      width: 100%;
      max-width: 700px;
      font-weight: 500;
      z-index: 9;
    }
    .img_container {
      position: relative;
      padding: 0;
      max-width: 1100px;
      width: 80%;
      .fichas_container {
        position: absolute;
        width: fit-content;
        height: fit-content;
        right: -120px;
        top: 50%;
        gap: 1rem;
        transform: translateY(-25%);
        .ficha {
          width: 104px;
        }
      }
    }
    @media (max-width: 900px) {
      /* padding-bottom: 220px; */
      .img_container {
        width: 100%;
        gap: 25px;
        .fichas_container {
          position: initial;
          flex-direction: row-reverse;
          align-items: center;
          /* transform: translate(-50%, 100%); */
          transform: translate(0px);
          bottom: -29px;
          top: auto;
          left: 50%;

          .ficha {
            width: 65px;
            align-items: center;
            img {
              height: 30px;
              width: 30px;
            }
            .subtitle {
              display: none;
            }
          }
        }
      }
    }
  }
`;
const DisponibilidadDeFrutas = ({ className, disponibilidadRef }) => {
  return (
    <DisponibilidadWrapper
      className={className}
      id='disponibilidad'
      ref={disponibilidadRef}
      backgroundImage={Background}
    >
      <div className='container'>
        <h1>
          DISPONIBILIDAD DE <span className='bold'>FRUTAS EN CHILE</span>
        </h1>
        <div className='img_container'>
          <img src={CuadroDisponibilidad} alt='' />
          <div className='fichas_container'>
            <Ficha>
              <p className='bold'>Descargar</p>
              <img
                style={{ height: '35px' }}
                src={Ficha_Descargar}
                alt='Ícono descargar'
              />
              <p className='subtitle'>
                DISPONIBILIDAD DE <span className='bold'>FRUTAS EN CHILE</span>
              </p>
            </Ficha>
          </div>
        </div>
      </div>
    </DisponibilidadWrapper>
  );
};

export default DisponibilidadDeFrutas;