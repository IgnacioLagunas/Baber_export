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

  .tipo_label{
    height: fit-content;
    position: absolute;
    color: white;
    background-color: black;
    font-size: 1.2rem;
    right: 0;
    bottom: 30px;
    transform: translate(100%);
    padding: 0.5rem 1rem 0.5rem 1rem;
    border-radius: 0px 34px 34px 0px;
    text-transform: uppercase;
  }

  .arrows{
    position: absolute;
    right: 50px;
    bottom: 30px;
    width: 100px;
    justify-content: space-between;
    flex-direction: row;
    font-size: 2.5rem;
    color: gray;
    z-index: 999;
    

    svg{
      cursor: pointer;

      &:hover{
      color: #0000FF;
    }
    }

  }

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
    position: relative;
    .icons_container {
      flex-direction: row;
      gap: 0.7rem;
      width: fit-content;
      flex-wrap: wrap;
      justify-content: center;
      div{
        width: fit-content;
        align-items: center;
        font-size: 0.8rem;
        img {
          width: 55px;
          height: 55px;
          object-fit: contain;
          cursor: pointer;
        }
  
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
      display:flex;
      flex-direction: row;
      gap: 0.4rem;
      width: fit-content;
      cursor: pointer;
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
      min-height: 1px;
      max-width:100000px;
      justify-content: flex-start;
      padding: 2rem 3rem;
      padding-bottom: 40px;
      gap: 1rem;

      .tipo_label{
        left: 0;
        transform: translate(0px);
        width: fit-content;
        top: -50px;
      }

      h1{
        font-size: 1.5rem;
        margin: 1rem 0;
      }
      .calendario{
        width: 100%;
      }

    }

    .arrows{
      width: 90%;
      transform: translateX(50%);
      right: 50%;
    }
  }

  @media (max-width: 500px){
    .ficha_container{
      .icons_container{
        div{
          img{
            width: 35px;
          }

        }
      }
    }
  }
`;
