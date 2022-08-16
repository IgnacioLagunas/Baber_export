import React, { useState } from 'react';
import { ViewWrapper } from './Styles/View.styles';
import { AboutIcons, AboutFotos } from '../Assets/img';
import { BiPlus } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { AboutWrapper } from './Styles/About.styles';
import QualitySeal from '../Components/QualitySeal';
import Carousel from '../Components/Carousel';
const About = () => {
  const { About_2, About_3, About_4, About_5, About_6 } = AboutFotos;
  const { Icon_mision, Icon_vision } = AboutIcons;

  const [cardsVisible, setCardsVisible] = useState(false);

  return (
    <ViewWrapper>
      <div id='about'></div>
      <QualitySeal />
      <AboutWrapper backgroundImage={About_2}>
        <Carousel
          height='70vh'
          images={[About_2, About_3, About_4, About_5, About_6]}
        />
        <div className='cards_container'>
          <div
            className={`card ${cardsVisible ? 'main_visible' : 'main_card'}`}
          >
            <div className='card_text'>
              <h1>Somos una empresa familiar Chilena</h1>
              <p>
                <b>BABER Export</b> es una compañía de negocios familiar
                dedicada a la exportación de frutas de calidad Premium en
                asociación directa con productores certificados.{' '}
              </p>
              <p>
                Trabajamos solamente de acuerdo a la calidad exigida por cada
                mercado, siguiendo las recomendaciones del servicio de
                agricultura de cada país donde llegamos. Nosotros compartimos
                nuestras experiencias con nuestros asociados con el objeto de
                lograr buenos resultados durante todo el proceso del negocio,
                asegurando así una participación integral de todos los
                colaboradores.
              </p>
            </div>
            {!cardsVisible && (
              <div
                className='card_button'
                onClick={() => setCardsVisible((current) => !current)}
              >
                <BiPlus />
              </div>
            )}
          </div>
          <div
            className={`card card2 ${cardsVisible ? 'visible' : 'not_visible'}`}
          >
            <img src={Icon_vision} alt='Icono de nuestra visión' />
            <div className='card_text'>
              <h2>Nuestra Visión</h2>
              <p>
                Impulsar estrategias que nos permita avanzar hacia una
                producción y exportación más sostenible de nuestros productos.
              </p>
            </div>
          </div>
          <div
            className={`card card3 ${cardsVisible ? 'visible' : 'not_visible'}`}
          >
            <img src={Icon_mision} alt='Icono de nuestra visión' />
            <div className='card_text'>
              <h2>Nuestra Misión</h2>
              <p>
                Entregar productos frescos y de la más alta calidad y establecer
                alianzas de largo plazo y ser el proveedor preferido por
                nuestros clientes.
              </p>
            </div>
            <div
              className='card_button'
              onClick={() => setCardsVisible((current) => !current)}
            >
              <IoClose />
            </div>
          </div>
        </div>
      </AboutWrapper>
    </ViewWrapper>
  );
};

export default About;
