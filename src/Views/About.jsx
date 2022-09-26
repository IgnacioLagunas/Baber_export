import React, { useState, useContext } from 'react';
import { ViewWrapper } from './Styles/View.styles';
import { AboutIcons, AboutFotos } from '../Assets/img';
import { BiPlus } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { AboutWrapper } from './Styles/About.styles';
import QualitySeal from '../Components/QualitySeal';
import Carousel from '../Components/Carousel';
import useWindowDimensions from '../Utils/useDimentionsHook';
import { LanguageContext } from '../App.js';

const About = ({ aboutRef }) => {
  const { About_1, About_2, About_3, About_4, About_5, About_6 } = AboutFotos;
  const { Icon_mision, Icon_vision } = AboutIcons;
  const language = useContext(LanguageContext);

  const [cardsVisible, setCardsVisible] = useState(false);

  const { width: screenWidth } = useWindowDimensions();

  return (
    <ViewWrapper>
      <div id='about' ref={aboutRef}></div>
      <QualitySeal />
      <AboutWrapper backgroundImage={About_2}>
        <Carousel
          height={screenWidth < 1200 ? '420px' : '60%'}
          images={[About_2, About_3, About_4, About_5, About_6]}
        />
        <div className='cards_container'>
          <div
            className={`card ${cardsVisible ? 'main_visible' : 'main_card'}`}
          >
            {language === 'español' ? (
              <div className='card_text'>
                <h1>Una empresa exportadora de fruta fresca</h1>
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
            ) : (
              <div className='card_text'>
                <h1>A Chilean company exporting fresh fruit</h1>
                <p>
                  <b>BABER EXPORT SPA</b> is a Chilean business company focused
                  on the export of fresh fruits from the different regions of
                  Chile. We work with certified and authorized producers to
                  export to the markets of the United States, Europe, Latin
                  America, Central America and China, among others.{' '}
                </p>
                <p>
                  We work only according to the quality required by each market,
                  following the recommendations of the agricultural service of
                  each country where we arrive, sharing experiences with our
                  associates, in order to achieve good results throughout the
                  business process, thus ensuring an integral participation of
                  all employees.
                </p>
              </div>
            )}
            {!cardsVisible && (
              <img
                src={About_1}
                className='apple-box_img'
                alt='Caja de manzanas Baber Export'
              />
            )}
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

            {language === 'español' ? (
              <div className='card_text'>
                <h2>Nuestra Visión</h2>
                <p>
                  Impulsar estrategias que nos permita avanzar hacia una
                  producción y exportación más sostenible de nuestros productos.
                </p>
              </div>
            ) : (
              <div className='card_text'>
                <h2>Our Vision</h2>
                <p>To deliver fresh Chilean fruit of the best quality.</p>
              </div>
            )}
          </div>
          <div
            className={`card card3 ${cardsVisible ? 'visible' : 'not_visible'}`}
          >
            <img src={Icon_mision} alt='Icono de nuestra visión' />

            {language === 'español' ? (
              <div className='card_text'>
                <h2>Nuestra Misión</h2>
                <p>
                  Entregar productos frescos y de la más alta calidad y
                  establecer alianzas de largo plazo y ser el proveedor
                  preferido por nuestros clientes.
                </p>
              </div>
            ) : (
              <div className='card_text'>
                <h2>OUR MISSION</h2>
                <p>
                  To deliver the best quality fresh fruit to our customers,
                  through a service of excellence, produced under the highest
                  standards, establishing long term relationships and trust.
                </p>
              </div>
            )}
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
