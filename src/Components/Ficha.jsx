import React from 'react';
import styled from 'styled-components';

const FichaWrapper = styled.a`
  width: 100%;
  height: 100px;
  justify-content: space-around;
  background-color: white;
  border-radius: 0px 14px;
  box-shadow: 3px 4px 12px #00000085;
  padding: 9px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;
  color: black;
  /* pointer-events: ${(props) => (props.href ? 'all' : 'none')}; */
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

  .highlight {
    font-size: 11px;
  }
`;

const Ficha = ({
  children,
  className = '',
  onClick,
  href = null,
  download = false,
}) => {
  return (
    <FichaWrapper
      href={href}
      download={download}
      target='_blank'
      onClick={onClick}
      className={`${className} ficha`}
    >
      {children}
    </FichaWrapper>
  );
};

export default Ficha;
