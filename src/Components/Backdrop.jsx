import React from 'react';
import styled from 'styled-components';

const BackdropWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: transparent;
  backdrop-filter: blur(20px);
  z-index: 9;
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? 'all' : 'none')};
  transition: opacity 0.5s ease;
  div {
    width: 100%;
    height: 100%;
  }
`;

const Backdrop = ({ show, onClick }) => {
  return (
    <BackdropWrapper show={show}>
      <div onClick={onClick}></div>
    </BackdropWrapper>
  );
};

export default Backdrop;
