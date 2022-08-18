import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CarouselWrapper = styled.div`
  width: 100%;
  height: ${({ height }) => height || '100%'};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  img {
    position: absolute;
    object-fit: cover;
    opacity: 0;
    transition: opacity 2s ease;

    &.active {
      opacity: 1;
    }
  }
`;

const Carousel = ({ images, timeOut = 7000, height = '100%' }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImg = () => {
    setCurrentImageIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
    console.log('llamado');
  };

  useEffect(() => {
    setTimeout(() => changeImg(), timeOut);
  }, [currentImageIndex]);

  return (
    <CarouselWrapper height={height}>
      {images.map((img, index) => (
        <img
          className={currentImageIndex === index && 'active'}
          src={img}
          key={index}
        ></img>
      ))}
    </CarouselWrapper>
  );
};

export default Carousel;
