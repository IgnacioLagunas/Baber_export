import React from 'react';
import { ProductsWrapper } from './Styles/Products.styles';
import { BsPlusCircle } from 'react-icons/bs';
import { ViewWrapper } from './Styles/View.styles';
import Background from '../Assets/img/Background_Products.jpg';
import QualitySeal from '../Components/QualitySeal';
import { Link } from 'react-router-dom';
import { Icons } from '../Assets/img';
import { Frutas } from '../Data';

const { Icon_carozos, Icon_citricos } = Icons;

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
            {Frutas.map(({ label, img, id, ...producto }, i) => (
              <div key={i} className='product'>
                {<img src={img} alt='producto' />}
                <div className='icon'>
                  {producto.carozos && (
                    <img src={Icon_carozos} alt='Etiqueta producto carozo' />
                  )}
                  {producto.citricos && (
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
        </div>
      </ProductsWrapper>
    </ViewWrapper>
  );
};

export default Products;
