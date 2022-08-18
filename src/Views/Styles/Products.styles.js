import styled from 'styled-components';

export const ProductsWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 4rem var(--column-width);
  padding-top: calc(var(--navbar-height) + 13rem);
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  /* justify-content: center; */
  background-color: #ffffff73;

  .products_container {
    gap: 3rem;

    h1 {
      text-align: center;
      letter-spacing: 1.68px;
      font-size: 2.5rem;
      width: 100%;
      max-width: 700px;
      font-weight: 500;
      margin: 0 auto;
      z-index: 9;
    }
    .products {
      flex-direction: row;
      width: 100%;
      max-width: 1100px;
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

  }
/* 
  @media (max-width: 930px){
    padding-top: 8rem;
  } */

  
`;
