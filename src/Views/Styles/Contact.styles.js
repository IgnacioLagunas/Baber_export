import styled from 'styled-components';

export const ContactWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 var(--column-width);
  padding-top: calc(var(--navbar-height) + 5rem);
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  background-color: #ffffffa3;
  gap: 2rem;

  .text {
    width: fit-content;
    align-items: center;
    text-align: center;
    max-width: 350px;
    gap: 0.5rem;

    h1 {
      letter-spacing: 1.68px;
      font-size: 3rem;
    }

    h5 {
      font-size: 1.1rem;
      font-weight: 400;
    }
  }

  .contact_form {
    width: 100%;
    max-width: 700px;
    height: fit-content;
    border-radius: 40px 40px 0 0;
    background-color: #ffffff69;
    backdrop-filter: blur(20px);
    border-bottom: 18px solid black;
    padding: 3.5rem 6rem;
    padding-bottom: 2rem;
    justify-content: space-between;

    form {
      display: flex;
      flex-direction: column;
      /* align-items: center; */
      gap: 2.5rem;
      .input {
        width: 100%;
        position: relative;
        font-size: 0.9rem;
        /* flex-direction: column-reverse; */
        label {
          transition: all 0.3s ease;
          position: absolute;
          left: 5px;
          font-weight: 500;
        }
        input,
        textarea {
          background-color: transparent;
          border: none;
          border-bottom: 1px solid black;
          padding-bottom: 0.5rem;
          padding-left: 5px;
          cursor: pointer;
          font-size: 1em;

          &:focus {
            outline: none;
            background-color: transparent !important;

            label {
              color: red;
              pointer-events: none !important;
            }

            & + label {
              font-weight: 500;
              font-size: 0.7rem;
              color: blue;
              top: -24px;
              animation: goUp 0.3s ease;
            }
          }
        }
        textarea {
          height: 100px;
          resize: none;
        }
        .active {
          left: -4px;
          font-weight: 500;
          font-size: 0.8em;
          color: blue;
          top: -24px;
        }

        @keyframes goUp {
          0% {
            top: 0;
          }
          100% {
            top: -24px;
          }
        }
      }
      button {
        padding: 0 2rem;
        height: 3rem;
        background-color: #747678;
        border-radius: 40px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        align-self: center;
        transition: padding 0.3s ease;
        transition: font-size 0.4s ease;

        &:hover {
          background-color: black;
          padding: 0.6rem 1.5rem;
        }

        &.enviado {
          font-size: 2.5rem;
          padding: 0;
          /* height: 3.2rem; */
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background-color: blue;
        }
      }
    }

    .info_container {
      gap: 0.8rem;
      .info {
        flex-direction: row;
        gap: 1rem;
        align-items: center;
        color: red;
        svg {
          font-size: 1.2rem;
        }
        a {
          text-decoration: none;
          color: black;
          font-size: 0.8rem;
        }

        &:hover{
          a, svg{
            color:#0000FF;
            fill: #0000FF !important;
          }
        }
      }
    }
    /* Change Autocomplete styles in Chrome*/
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      border-bottom: 1px solid black;
      -webkit-text-fill-color: black;
      -webkit-box-shadow: 0 0 0px 1000px #0000 inset;
      transition: background-color 5000s ease-in-out 0s;
    }

    @media (max-width: 1200px){
      padding: 4.5rem 10%;
      padding-bottom: 2rem;
      border-bottom: 10px solid black;

    }

    @media (max-width: 500px){
      form{
        .input{
          font-size: 1rem;
        }

      }
      .info_container{
        .info{
          a{
            font-size: 0.9rem;
          }
        }
      }
    }
  }
`;
