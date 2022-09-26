import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductDetailsWrapper } from './Styles/ProductDetails.styles';
import {
  BsFileEarmarkPdf,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import { ViewWrapper } from './Styles/View.styles';
import { Frutas } from '../Data';
import { ProductosImages } from '../Assets/img';
import ImageSlider from '../Components/ImageSlider';
import QualitySeal from '../Components/QualitySeal';
import { LanguageContext } from '../App.js';
import { useContext } from 'react';

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
  const language = useContext(LanguageContext);
  const [hoveredIndex, setHoveredIndex] = useState(1);
  const [selectedFruit, setSelectedFruit] = useState(Frutas[0]);
  const [selectedFruitIndex, setselectedFruitIndex] = useState(0);

  const { id } = useParams();
  const navigate = useNavigate();

  const changeFruit = (i) => {
    setSelectedFruit(Frutas[i]);
    setselectedFruitIndex(i);
  };

  const slide = (num) => {
    const length = Frutas.length;
    let targetIndex;
    if (selectedFruitIndex + num > length - 1) {
      targetIndex = 0;
    } else if (selectedFruitIndex + num < 0) {
      targetIndex = length - 1;
    } else {
      targetIndex = selectedFruitIndex + num;
    }
    changeFruit(targetIndex);
  };

  useEffect(() => {
    const idFruitIndex = Frutas.findIndex((fruta) => fruta.id === id);
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
        <QualitySeal />
        <ImageSlider
          images={ProductImagesArray}
          imgIndex={selectedFruitIndex}
        />
        <div className='arrows'>
          <BsFillArrowLeftCircleFill onClick={() => slide(-1)} />
          <BsFillArrowRightCircleFill onClick={() => slide(1)} />
        </div>
        <div className='ficha_container'>
          {Frutas[selectedFruitIndex].type && (
            <p className='tipo_label'>
              {}
              {language === 'español'
                ? Frutas[selectedFruitIndex].type
                : Frutas[selectedFruitIndex].typeEng}
            </p>
          )}
          {language === 'español' ? (
            <h1>
              PRINCIPALES LÍNEAS DE <span className='bold'>PRODUCTOS</span>
            </h1>
          ) : (
            <h1>
              OUR MAIN <span className='bold'>PRODUCT LINES</span>
            </h1>
          )}
          <div className='icons_container'>
            {Frutas.map(({ icon, icon_rojo }, i) => (
              <div key={i}>
                <img
                  src={i === hoveredIndex ? icon_rojo : icon}
                  onMouseOver={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(-1)}
                  onClick={() => changeFruit(i)}
                  alt='Figura fruta'
                  key={i}
                />
              </div>
            ))}
          </div>
          <h2>
            {language === 'español'
              ? selectedFruit.label
              : selectedFruit.labelEng}
          </h2>
          <h4>
            {language === 'español'
              ? 'Calendario de embalaje'
              : 'Packing Schedule'}
          </h4>

          <div className='calendario'>
            <img
              src={
                language === 'español'
                  ? selectedFruit.calendario
                  : selectedFruit.calendarioIng
              }
              alt=''
            />
          </div>
          <a className='ficha_tecnica' href={selectedFruit.ficha} download>
            <p>{language === 'español' ? 'Ficha Técnica' : 'Data Sheet'}</p>
            <BsFileEarmarkPdf />
          </a>
        </div>
      </ProductDetailsWrapper>
    </ViewWrapper>
  );
};

export default ProductDetails;
