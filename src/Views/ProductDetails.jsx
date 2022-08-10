import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductDetailsWrapper } from './Styles/ProductDetails.styles';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import { ViewWrapper } from './Styles/View.styles';
import { Frutas } from '../Data';
import { ProductosImages } from '../Assets/img';
import ImageSlider from '../Components/ImageSlider';

const {
  Productos_cerezas,
  Productos_ciruelas,
  Productos_kiwi,
  Productos_limones,
  Productos_manzanas,
  Productos_naranjas,
  Productos_nectarines,
  Productos_peras,
  Productos_uvas,
} = ProductosImages;

const ProductImagesArray = [
  Productos_manzanas,
  Productos_peras,
  Productos_uvas,
  Productos_cerezas,
  Productos_kiwi,
  Productos_limones,
  Productos_naranjas,
  Productos_nectarines,
  Productos_ciruelas,
];

const ProductDetails = () => {
  const [hoveredIndex, setHoveredIndex] = useState(1);
  const [selectedFruit, setSelectedFruit] = useState(Frutas[0]);
  const [selectedFruitIndex, setselectedFruitIndex] = useState();

  const { id } = useParams();
  const navigate = useNavigate();

  const changeFruit = (i) => {
    setSelectedFruit(Frutas[i]);
    setselectedFruitIndex(i);
  };

  useEffect(() => {
    const idFruitIndex = Frutas.findIndex((fruta) => fruta.id == id);
    if (idFruitIndex > -1) {
      setSelectedFruit(Frutas[idFruitIndex]);
      setselectedFruitIndex(idFruitIndex);
    } else {
      navigate(`../product/${Frutas[0].id}`);
    }
  }, []);

  return (
    <ViewWrapper>
      <ProductDetailsWrapper>
        <ImageSlider
          images={ProductImagesArray}
          imgIndex={selectedFruitIndex}
        />
        <div className='ficha_container'>
          <h1>PRINCIPALES LÍNEAS DE PRODUCTOS</h1>
          <div className='icons_container'>
            {Frutas.map(({ icon, icon_rojo }, i) => (
              <img
                src={i === hoveredIndex ? icon_rojo : icon}
                onMouseOver={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(-1)}
                onClick={() => changeFruit(i)}
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
