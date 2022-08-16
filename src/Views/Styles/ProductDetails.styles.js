import styled from 'styled-components';

export const ProductDetailsWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: calc(var(--navbar-height));
  display: flex;
  flex-direction: column;
  position: relative;
  /* align-items: center; */
  justify-content: center;
  overflow-x: hidden;

  .ficha_container {
    height: calc(100vh - var(--navbar-height));
    width: 50%;
    padding: 3rem;
    padding-top: 7rem;
    max-width: 800px;
    /* min-width: fit-content; */
    background-color: #ffffffcf;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    .icons_container {
      flex-direction: row;
      gap: 0.7rem;
      width: fit-content;
      flex-wrap: wrap;
      justify-content: center;
      img {
        width: 45px;
        height: 45px;
        object-fit: contain;
        cursor: pointer;
      }
    }

    h1,
    h2 {
      text-align: center;
      letter-spacing: 1.68px;
      font-size: 3rem;
      width: 100%;
      max-width: 500px;
      font-weight: 500;
      margin: 0 auto;
    }

    h2 {
      font-size: 3.2rem;
      font-weight: 800;
    }
    h4 {
      text-transform: uppercase;
      font-weight: 500;
    }

    .calendario {
      width: 90%;
      max-width: 560px;
    }

    .ficha_tecnica {
      flex-direction: row;
      gap: 0.4rem;
      width: fit-content;
      p {
        font-size: 14px;
      }
    }

    @media (max-width: 1200px) {
      h1 {
        font-size: 2.1rem;
      }
    }
  }

  @media (max-width: 1000px){
    justify-content: flex-end;
    overflow-x: hidden;

    .ficha_container{
      width: 100vw;
      height: fit-content;
      min-height: 60vh;
      max-width:100000px;
      justify-content: flex-start;
      padding: 7rem 3rem;
    }
  }
`;
