import React from 'react';
import { ProductsWrapper } from './Styles/Products.styles';
import { BsPlusCircle } from 'react-icons/bs';
import { ViewWrapper } from './Styles/View.styles';
import Background from '../Assets/img/Background_Products.jpg';
import QualitySeal from '../Components/QualitySeal';
import { Link } from 'react-router-dom';
import { Icons, IconosFrutas, FichasConoce } from '../Assets/img';
import { Frutas } from '../Data';
import Ficha from '../Components/Ficha';

const { Icon_carozos, Icon_citricos } = Icons;
const { Icon_manzana } = IconosFrutas;
const { Ficha_Conoce, Ficha_Global, Ficha_Disponibilidad } = FichasConoce;

const Products = () => {
  return (
    <ViewWrapper backgroundImage={Background}>
      <div id='products'></div>
      <ProductsWrapper>
        <QualitySeal />
        <div className='products_container'>
          <h1>
            PRINCIPALES LÍNEAS DE <span className='bold'>PRODUCTOS</span>
          </h1>
          <div className='products'>
            {Frutas.map(({ label, img, id, type, ...producto }, i) => (
              <div key={i} className='product'>
                {<img src={img} alt='producto' />}
                <div className='icon'>
                  {type && type === 'carozos' && (
                    <img src={Icon_carozos} alt='Etiqueta producto carozo' />
                  )}
                  {type && type === 'cítricos' && (
                    <img src={Icon_citricos} alt='Etiqueta producto citrico' />
                  )}
                </div>
                <div className='overlay'>
                  <p>{label}</p>
                  <Link to={`product/${id}`}>
                    <BsPlusCircle
                      style={{ cursor: 'pointer', fontSize: '1.2em' }}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className='fichas_container'>
            <Ficha>
              <p>
                Disponibilidad de <span className='bold'>frutas en Chile</span>
              </p>
              <img src={Ficha_Disponibilidad} alt='' />
            </Ficha>
            <Ficha>
              <p className='bolder'>Conoce más de Chile</p>
              <img src={Ficha_Conoce} alt='' />
            </Ficha>
            <Ficha>
              <p style={{ textTransform: 'initial', fontSize: '8px' }}>
                Asociados certificado Productores{' '}
                <span className='bold'>GLOBALGAP</span>
              </p>
              <img src={Ficha_Global} alt='' />
            </Ficha>

            {/* <div className='ficha'>Ficha</div> */}
          </div>
        </div>
      </ProductsWrapper>
    </ViewWrapper>
  );
};

export default Products;
