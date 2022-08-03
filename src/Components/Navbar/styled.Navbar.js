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
  top: 0;
  nav {
    flex: 1;
    width: 30%;
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
            height: 0.1px;
            background-color: red;
            position: absolute;
            bottom: -5px;
            right: 50%;
            transform: translate(50%, -50%);
          }
        }
      }
    }
  }
  & > div {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .banner_container {
    position: relative;
  }
`;
