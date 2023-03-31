import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const HeaderContainer = styled.header`
  background-color: #101012;
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 2em;
  align-items: center;
  font-family: 'Work Sans', sans-serif;

  .view {
    @keyframes view {
      from {
        transform: translate(-10%);
        opacity: 0;
      }
      to {
        transform: translate(0);
        opacity: 1;
      }
    }
    animation: view 1s;
  }
  section {
    width: 13em;
    h1 {
      margin-top: 2em;
      font-size: 2em;
    }
    h2 {
      font-size: 2.5em;
      color: #8257e6;
      margin-bottom: 0.5em;
    }
    p {
      color: #969595;
      margin-bottom: 1em;
    }
    div {
      width: 90%;
      margin: 0.5em 0 1rem 0;
      svg {
        font-size: 1.5em;
        margin-right: 0.5em;
        cursor: pointer;
        color: #8257e6;
        transition: all 0.2s;
        &:hover {
          transform: scale(0.8);
          transition: all 0.2s;
        }
      }
    }
  }
  img {
    width: 12em;
    border-radius: 40%;
  }

  @media screen and (min-width: 1500px) {
    justify-content: center;
    gap: 50%;
    padding: 10em;
    section {
      width: 19em;
      h1 {
        font-size: 2em;
      }
    }
    img {
      transition: all 0.2s;
      width: 15em;
      height: 17em;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        transform: scale(1.2);
        transition: all 0.2s;
      }
    }
  }
`;
