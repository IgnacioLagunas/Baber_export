import styled from 'styled-components';

export const ViewWrapper = styled.section`
  width: 100vw;
  /* min-height: 100vh; */
  height: 100%;
  /* height: 200px !important; */
  /* height: max-content; */
  /* height: 100%; */
  position: relative;
  overflow-x: hidden;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size:  ${(props) => props.backgroundSize || "cover"};
  background-color: ${(props) => props.backgroundColor};

  @media (max-width: 1200px){
    min-height: 100%;
  }
`;
