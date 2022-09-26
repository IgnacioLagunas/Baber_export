import React from 'react';
import { ProductsWrapper } from './Styles/Products.styles';
import { BsPlusCircle } from 'react-icons/bs';
import { ViewWrapper } from './Styles/View.styles';
import Background from '../Assets/img/Background_Products.jpg';
import QualitySeal from '../Components/QualitySeal';
import { Link } from 'react-router-dom';
import { Icons, FichasConoce } from '../Assets/img';
import { Frutas } from '../Data';
import Ficha from '../Components/Ficha';
import DisponibilidadDeFrutas from './DisponibilidadDeFrutas';
import { useState } from 'react';
import { useRef } from 'react';
import { LanguageContext } from '../App.js';
import { useContext } from 'react';

const { Icon_carozos, Icon_citricos, Icon_carozos_eng, Icon_citricos_eng } =
  Icons;
const { Ficha_Conoce, Ficha_Global, Ficha_Disponibilidad } = FichasConoce;

const Products = ({ productRef }) => {
  const [showDisponibilidad, setShowDisponibilidad] = useState(false);
  const disponibilidadRef = useRef(null);

  const language = useContext(LanguageContext);

  const gotToDisponibilidad = () => {
    if (showDisponibilidad) {
      setShowDisponibilidad((curr) => !curr);
      return;
    } else {
      setShowDisponibilidad((curr) => !curr);
      const elementPosition =
        disponibilidadRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 55;
      setTimeout(() => {
        // disponibilidadRef.current.scrollIntoView();
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }, 100);
    }
  };

  return (
    <>
      <ViewWrapper backgroundImage={Background} backgroundColor={'#ffffff94'}>
        <div id='products'></div>
        <ProductsWrapper ref={productRef}>
          <QualitySeal />
          <div className='products_container'>
            {language === 'español' ? (
              <h1>
                PRINCIPALES LÍNEAS DE <span className='bold'>PRODUCTOS</span>
              </h1>
            ) : (
              <h1>
                OUR MAIN <span className='bold'> PRODUCT LINES</span>
              </h1>
            )}

            <div className='products'>
              {Frutas.map(
                ({ label, labelEng, img, id, type, ...producto }, i) => (
                  <div key={i} className='product'>
                    {<img src={img} alt='producto' />}
                    <div className='icon'>
                      {type &&
                        type === 'carozos' &&
                        (language === 'español' ? (
                          <img
                            src={Icon_carozos}
                            alt='Etiqueta producto carozo'
                          />
                        ) : (
                          <img
                            src={Icon_carozos_eng}
                            alt='Etiqueta producto carozo'
                          />
                        ))}
                      {type &&
                        type === 'cítricos' &&
                        (language === 'español' ? (
                          <img
                            src={Icon_citricos}
                            alt='Etiqueta producto carozo'
                          />
                        ) : (
                          <img
                            src={Icon_citricos_eng}
                            alt='Etiqueta producto carozo'
                          />
                        ))}
                    </div>
                    <div className='overlay'>
                      <p>{language === 'español' ? label : labelEng}</p>
                      <Link to={`product/${id}`}>
                        <BsPlusCircle
                          style={{ cursor: 'pointer', fontSize: '1.2em' }}
                        />
                      </Link>
                    </div>
                  </div>
                )
              )}
            </div>
            <div className='fichas_container'>
              <Ficha
                onClick={() => gotToDisponibilidad()}
                //  href='#disponibilidad'
              >
                {language === 'español' ? (
                  <p>
                    Disponibilidad de{' '}
                    <span className='bold highlight'>
                      frutas <br />
                    </span>
                    en
                    <span className='bold highlight'> Chile</span>
                  </p>
                ) : (
                  <p>
                    Availability of{' '}
                    <span className='bold highlight'>
                      FRUITS <br />
                    </span>
                    in
                    <span className='bold highlight'> Chile</span>
                  </p>
                )}
                <img src={Ficha_Disponibilidad} alt='' />
              </Ficha>
              <Ficha href={'https://www.gob.cl/nuestro-pais/'}>
                {language === 'español' ? (
                  <p className='bolder'>Conoce más de Chile</p>
                ) : (
                  <p className='bolder'>Learn about Chile</p>
                )}

                <img src={Ficha_Conoce} alt='' />
              </Ficha>
              <Ficha href={'https://www.globalgap.org/es/'}>
                {language === 'español' ? (
                  <p style={{ textTransform: 'initial', fontSize: '10px' }}>
                    <span className='bold'>Certificación</span>
                  </p>
                ) : (
                  <p style={{ textTransform: 'initial', fontSize: '10px' }}>
                    <span className='bold'>Certified by</span>
                  </p>
                )}
                <img src={Ficha_Global} alt='' />
              </Ficha>
              {/* <div className='ficha'>Ficha</div> */}
            </div>
          </div>
        </ProductsWrapper>
      </ViewWrapper>
      <DisponibilidadDeFrutas
        className={`${!showDisponibilidad ? 'hidden' : 'show'}`}
        disponibilidadRef={disponibilidadRef}
        language={language}
      />
    </>
  );
};

export default Products;
