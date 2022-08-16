import styled from 'styled-components';

export const NavbarWrapper = styled.header`
  width: 100%;
  height: var(--navbar-height);
  background-color: #fff;
  box-shadow: -4px -11px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 999;
  top: 0;
  box-shadow: 0px 0px 13px black;
  padding: 0 var(--column-width);
  .navbar_collapsable {
    flex: 2;
    width: 30%;
    flex-direction: row;
    align-items: center;
    nav {
      flex: 1;
      ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        li {
          list-style: none;
          font-size: 14px;
          position: relative;
          a {
            text-decoration: none;
            color: black;
            &.active {
              color: #d52b15;
              &:after {
                width: 80%;
              }
            }
            &:after {
              content: '';
              width: 21px;
              height: 1px;
              background-color: red;
              position: absolute;
              bottom: -6px;
              right: 50%;
              transform: translate(50%, -50%);
            }
          }
        }
      }
    }
    .languajeSelector_container {
      flex: 1;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      position: relative;
      gap: 5%;
      ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        li {
          list-style: none;
          font-size: 14px;
          position: relative;
          text-transform: uppercase;
          font-size: 0.65rem;
          padding: 0 1.5em;
          cursor: pointer;

          &.middle {
            border: 1px solid #00000054;
            border-top: none;
            border-bottom: none;
          }

          &:hover {
            color: red;
          }
        }
      }
      .ig_logo {
        width: fit-content;
        /* position: absolute; */
        right: 0px;
        cursor: pointer;

        svg {
          font-size: 2rem;
          color: #00000073;

          &:hover {
            color: red;
          }
        }
      }
    }

    &.mobile {
      &.show{
        transform: translate(0, -50%);
      }
      position: fixed;
      transform: translate(100%, -50%);
      background-color: #ffffff69;
      backdrop-filter: blur(20px);
      flex-direction: column;
      top: 50%;
      right: 0;
      width: fit-content;
      padding: 2rem 3rem;
      gap: 2rem;
      border-radius: 8px 0 0 8px;
      transition: transform 0.5s ease;
      nav {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 2rem;
        border-bottom: 1px solid #0000008a;
        ul {
          flex-direction: column;
        }
      }
      .languajeSelector_container {
        flex-direction: column;
        ul {
          flex-direction: column;
          width: 100%;
          gap: 0.2rem;
          .middle {
            border: none;
          }
          li {
            background-color: white;
            width: 100%;
            text-align: center;
            padding: 0.3rem;
            border-radius: 5px;
            font-size: 0.8rem;
            font-weight: 500;
          }
        }
        .ig_logo {
          display: none;
        }
      }
    }
  }

  & > div {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }

  .banner_container {
    position: relative;
  }

  .burger_menu{
    justify-content: flex-end;
    font-size: 1.3rem;
    svg{
      color:#000000bd;
      cursor: pointer;
    }
  }
`;
