import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const NavbarContainer = styled.nav`
  color: #fff;
  height: 4em;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #8257e6;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  font-family: 'Work Sans', sans-serif;
  position: fixed;

  .svg {
    &:hover {
      background-color: #8257e6;
      transition: all 0.2s;
    }
    svg {
      fill: #fff;
      font-size: 2em;
      cursor: pointer;
    }
  }
  ul {
    display: flex;
    gap: 1em;
    li {
      cursor: pointer;
      outline: 0;
      border-bottom: 1px solid transparent;
      padding: 0.5em;
      width: 100%;
      list-style: none;
      transition: all 1s;
      &:hover {
        box-sizing: border-box;

        @keyframes barLink {
          from {
            border-bottom: 1px solid transparent;
          }
          to {
            border-bottom: 1px solid #8257e6;
          }
        }
        animation: barLink 0.7s infinite;
      }
    }
  }

  .bar {
    background-color: red;
    width: 1000%;
    height: 2px;
  }

  .menuOpen {
    position: fixed;
    top: 0;
    background-color: rgba(0, 0, 0, 1);
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5em;
    z-index: 1000;
    @keyframes menuOpen {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }
    animation: menuOpen 0.5s;
    h1 {
      font-size: 3em;
      color: #8257e6;
    }
    svg {
      font-size: 2em;
      position: absolute;
      top: 0.5em;
      left: 0.5em;
      cursor: pointer;
      transition: all 0.2s;
      &:hover {
        background: #8257e6;
      }
    }
    ul {
      display: block;
      text-align: center;
      li {
        margin-bottom: 1em;
        cursor: pointer;

        a {
          font-size: 2em;
          cursor: pointer;
        }
      }
    }
    @media screen and (max-width: 1500px) {
      h1 {
        text-align: center;
      }
    }
  }

  .hide {
    display: none;
  }

  @media screen and (max-width: 1500px) {
    border: none;
    .navbarUl {
      display: none;
    }
  }
`;
