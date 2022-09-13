import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 300px var(--column-width);
  padding-top: calc(var(--navbar-height) + 13rem);

  .title_container {
    width: 40%;
    gap: 1.5rem;
    .title {
      color: white;
      font-size: 4rem;
      font-weight: 500;
      letter-spacing: 1.8px;
      line-height: 105%;
      text-shadow: 0px 0px 20px #000;
      min-width: 650px;
      text-transform: uppercase;
    }

    .home_cta {
      border: 1px solid black;
      padding: 0.5rem 0.9rem;
      width: fit-content;
      color: white;
      background-color: transparent;
      letter-spacing: 0.6px;
      text-shadow: 0px 0px 4px black;
      font-size: 1.1rem;
      text-decoration: none;

      &:hover {
        background-color: #d52b15;
        border-color: #d52b15;
      }
    }
  }

  .nextSection_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.1rem;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid black;
    font-size: 1.5rem;
    position: absolute;
    bottom: 2rem;
    right: 50%;
    transform: translateX(50%);
    text-decoration: none;
    color: black;

    &:hover {
      color: #cf2422;
      border-color: #cf2422;
    }
  }
  @media (max-width: 1200px) {
    /* justify-content: center; */
    .title_container {
      width: 65%;
      /* margin-top: 20vh; */
      .title {
        font-size: 3rem;
        min-width: 0px;
      }
    }
  }

  @media (max-width: 800px) {
    min-height: 1px;
  }
  @media (max-width: 600px) {
    .title_container {
      width: 80%;

      .title {
        font-size: 2.7rem;
        min-width: 0px;
      }
    }
  }
`;
