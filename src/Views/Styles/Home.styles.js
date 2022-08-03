import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  position: relative;
  /* align-items: center; */
  /* justify-content: center; */

  .title_container {
    margin-top: 12%;
    margin-left: 10%;
    width: 40%;
    gap: 1.5rem;
    .title {
      color: white;
      font-size: 4rem;
      font-weight: 400;
      letter-spacing: 2.34px;
      line-height: 80px;
      text-shadow: 0px 0px 20px #000;
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

    &:hover {
      color: #cf2422;
      border-color: #cf2422;
    }
  }
`;
