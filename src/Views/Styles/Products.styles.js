import styled from 'styled-components';

export const ProductsWrapper = styled.div`
  width: 100%;
  /* min-height: 100vh; */
  height: 100%;
  height: fit-content;
  padding: 9rem var(--column-width);
  padding-top: calc(var(--navbar-height) + 9rem);
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  background-color: #ffffff94;

  .products_container {
    position: relative;
    gap: 3rem;
    width: fit-content;
    align-items: center;
    max-width: 1100px;
    width: 80%;

    h1 {
      text-align: center;
      letter-spacing: 1.68px;
      font-size: 2.5rem;
      width: 100%;
      max-width: 700px;
      font-weight: 500;
      z-index: 9;
    }
    .products {
      flex-direction: row;
      width: 100%;
      margin: 0 auto;
      flex-wrap: wrap;
      .product {
        width: 100%;
        /* grid-column: auto; */
        min-width: 200px;
        flex: 1;
        height: 200px;
        position: relative;

        .icon {
          position: absolute;
          bottom: 0;
          z-index: 9;
          max-width: 190px;
        }

        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: #d52b1e99;
          display: none;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.6rem;
          gap: 0.5rem;
          p {
            font-weight: 200;
            text-shadow: 0px 0px 13px #000;
          }

          a {
            color: white;
          }
        }

        &:hover > .overlay {
          display: flex;
        }
      }
    }

    .fichas_container {
      position: absolute;
      width: fit-content;
      height: fit-content;
      right: -120px;
      top: 50%;
      gap: 1rem;
      transform: translateY(-25%);
      div {
        width: 104px;
      }
    }
  }

  @media (max-width: 900px) {
    padding-bottom: 12rem;
    .products_container{
      .fichas_container{
        flex-direction: row-reverse;
        transform: translate(-50% , 100%);
        bottom: -29px;
        top: auto;
        left: 50%;
      }
    }
  }

  /* 
  @media (max-width: 930px){
    padding-top: 8rem;
  } */
`;
