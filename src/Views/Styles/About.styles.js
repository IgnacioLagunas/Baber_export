import styled from 'styled-components';

export const AboutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 var(--column-width);
  padding-top: calc(var(--navbar-height) + 13rem);
  height: fit-content;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #bababe2f;
  justify-content: flex-end;
  align-items: center;

  .cards_container {
    z-index: 9;
    width: 100%;
    max-width: 1300px;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    height: fit-content;

    @media (max-width: 1200px) {
      gap: 0px;
    }
  }

  .card {
    padding: 3rem;
    padding-top: 5rem;
    max-width: 450px;
    flex: 1;
    min-height: 60vh;
    background: #ffffff94 0% 0% no-repeat padding-box;
    backdrop-filter: blur(20px);
    border-radius: 5% 5% 0 0;
    align-items: center;
    gap: 1.5rem;
    position: relative;

    img {
      width: 50%;
      max-width: 160px;
      height: auto;
      object-fit: contain;
    }

    .card_text {
      width: 90%;
      gap: 1rem;
      align-items: center;

      h1 {
        font-size: 2.5rem;
        font-weight: 600;
      }

      h2 {
        font-size: 2rem;
      }
      p {
        text-justify: inter-word;
        font-size: 13px;
        font-weight: 500;
        max-width: 330px;
      }
    }

    .card_button {
      border: 1px solid black;
      padding: 0.5rem;
      border-radius: 50%;
      width: fit-content;
      font-size: 1.5rem;
      position: absolute;
      top: 27px;
      right: 33px;
      cursor: pointer;

      &:hover {
        border-color: red;
        color: red;
      }
    }

    &.visible {
      display: flex;
      animation: fadeIn ease 0.4s;
    }
    &.main_visible {
      display: flex;
      animation: fadeIn ease 0.4s;

      @media (max-width: 1200px) {
        display: none;
      }
    }
    &.not_visible {
      display: none;
      animation: fadeOut ease 3s;
    }

    @media (max-width: 1200px) {
      padding: 1.5rem;
      padding-top: 5rem;
      min-height: 60vh;
      gap: 1rem;

      h2 {
        text-align: center;
      }
      p{
        font-size: 12px;
      }

      &.card2 {
        border-radius: 25px 0 0 0;
        padding-right: 0;
        & img {
          width: 85%;
          max-width: 193px;
        }
      }
      &.card3 {
        border-radius: 0 25px 0 0;
        padding-left: 0;
        img {
          width: 70%;
        }
      }

      .card_button {
        top: 17px;
        right: 18px;
      }
    }
  }

  .main_card {
    display: flex;
    max-width: 650px;
    h1 {
      text-align: center;
      margin-bottom: 1.5rem;
    }

    p {
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      display: none;
    }
  }
`;
