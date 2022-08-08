import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductDetailsWrapper } from './Styles/ProductDetails.styles';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import { ViewWrapper } from './Styles/View.styles';
import { Frutas } from '../Data';

const ProductDetails = () => {
  const [hoveredIndex, setHoveredIndex] = useState(1);
  const [selectedFruit, setSelectedFruit] = useState(Frutas[0]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const frutaID = Frutas.find((fruta) => fruta.id == id);
    if (frutaID) setSelectedFruit(frutaID);
    else {
      navigate(`../product/${Frutas[0].id}`);
    }
  }, []);

  return (
    <ViewWrapper backgroundImage={selectedFruit.img}>
      <ProductDetailsWrapper>
        <div className='ficha_container'>
          <h1>PRINCIPALES LÍNEAS DE PRODUCTOS</h1>
          <div className='icons_container'>
            {Frutas.map(({ icon, icon_rojo }, i) => (
              <img
                src={i === hoveredIndex ? icon_rojo : icon}
                onMouseOver={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(-1)}
                onClick={() => setSelectedFruit(Frutas[i])}
                alt='Figura fruta'
                key={i}
              />
            ))}
          </div>
          <h2>{selectedFruit.label}</h2>
          <h4>Calendario de embalaje</h4>
          <div className='calendario'>
            <img src={selectedFruit.calendario} alt='' />
          </div>
          <div className='ficha_tecnica'>
            <p>Ficha Tecnica</p>
            <BsFileEarmarkPdf />
          </div>
        </div>
      </ProductDetailsWrapper>
    </ViewWrapper>
  );
};

export default ProductDetails;
