import React from 'react';
import styled from 'styled-components';

const FichaWrapper = styled.div`
  width: 100%;
  height: auto;
  justify-content: space-around;
  background-color: white;
  border-radius: 0px 14px;
  box-shadow: 3px 4px 12px #00000085;
  padding: 9px;
  gap: 6px;
  cursor: pointer;
  p {
    text-transform: uppercase;
    font-size: 8px;
    text-align: center;
    font-weight: 500;
  }
  img {
    height: 55px;
    object-fit: contain;
  }
`;

const Ficha = ({ children, className }) => {
  return <FichaWrapper className={className}>{children}</FichaWrapper>;
};

export default Ficha;
