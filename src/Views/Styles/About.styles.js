import styled from 'styled-components';

export const AboutWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 var(--column-width);
  padding-top: calc(var(--navbar-height) + 13rem);
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #bababe2f;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;

  .cards_container {
    z-index: 9;
    width: 100%;
    max-width: 1300px;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    height: fit-content;
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
      p {
        font-size: 12px;
      }

      .card_button {
        top: 17px;
        right: 18px;
      }
    }
  }

  @media (max-width: 800px) {
    padding-bottom: 4rem;
    min-height: 1px;
    .card {
      min-height: 1px;
      height: 480px;
      border-radius: 25px;
    }

    .main_card {
      .apple-box_img {
        display: none;
      }
    }
  }

  @media (max-width: 600px) {
    .cards_container {
      flex-direction: column;
      align-items: center;
    }
    .card{
      padding-bottom:2.5rem;
      box-shadow: 2px 2px 20px #00000085;
      img{
        width: 40% !important;
        min-width: 120px !important;
      }

      &.main_visible{
        display: flex !important;
      }

      &.visible{
        /* display: flex !important; */

        animation: fadeInMobile 1s ease;
        position: initial;
        opacity: 1;
      }
      &.not_visible{
        /* display: flex !important; */
        animation: fadeOutMobile 1s ease;
        position: absolute;
        opacity: 0;
        display: none;

      }
    }
  }

  .main_card {
    display: flex;
    max-width: 650px;
    position: relative;
    h1 {
      text-align: center;
      margin-bottom: 1.5rem;
    }

    p {
    }

    .apple-box_img {
      position: absolute;
      max-width: 340px;
      bottom: -51px;
      right: -159px;
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

  @keyframes fadeInMobile {
    0% {
      position: initial;
      opacity: 0;
    }
    100% {
      opacity: 1;
      pointer-events: all;
    }
  }
  @keyframes fadeOutMobile {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      position: absolute;
      pointer-events: none;
    }
  }


`;
