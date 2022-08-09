import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ImageSliderWrapper = styled.div`
  width: fit-content;
  height: ${({ height }) => height || '100vh'};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  flex-direction: row;
  transform: translateX(calc(${({ imgIndex }) => imgIndex} * -100vw));
  transition: transform 0.5s ease;
  img {
    /* position: absolute; */
    width: 100vw;
    object-fit: cover;
    opacity: 1;
    transition: opacity 2s ease;

    &.active {
      opacity: 1;
    }
  }
`;

const ImageSlider = ({ images, height = '100vh', imgIndex = 0 }) => {
  // const [currentImageIndex, setCurrentImageIndex] = useState(imgIndex);

  // const changeImg = () => {
  //   setCurrentImageIndex((current) =>
  //     current === images.length - 1 ? 0 : current + 1
  //   );
  //   console.log('llamado');
  // };

  // useEffect(() => {
  //   setTimeout(() => changeImg(), timeOut);
  // }, [currentImageIndex]);

  return (
    <ImageSliderWrapper height={height} imgIndex={imgIndex}>
      {images.map((img, index) => (
        <img
          // className={currentImageIndex === index && 'active'}
          src={img}
          key={index}
        ></img>
      ))}
    </ImageSliderWrapper>
  );
};

export default ImageSlider;
