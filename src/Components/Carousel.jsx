import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const CarouselWrapper = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  img {
    position: absolute;
    object-fit: cover;
  }
`;

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImg = () => {
    console.log('llamado');
  };

  useEffect(() => {
    changeImg();
  }, []);

  return (
    <CarouselWrapper>
      {images.map((img, index) => (
        <img
          src={img}
          key={index}
          style={{ opacity: currentImageIndex === index ? 1 : 0 }}
        ></img>
      ))}
    </CarouselWrapper>
  );
};

export default Carousel;
