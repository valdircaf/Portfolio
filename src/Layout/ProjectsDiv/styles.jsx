import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ProjectsDivContainer = styled.div`
  width: 10em;
  height: 8em;
  z-index: 1;
  border-bottom: 3px solid #8257e6;
  font-family: 'Work Sans', sans-serif;
  cursor: pointer;
  position: relative;
  .infoAfter {
    color: #fff;
    padding: 0.5em;
    background-color: #262626;
    display: none;
  }
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
  }
  section {
    background-color: red;
    display: flex;
    justify-content: center;

    h1 {
      position: absolute;
      top: 30%;
      font-size: 1.2em;
      color: #fff;
      margin-bottom: 0.5em;
    }
    div {
      position: absolute;
      top: 60%;
      display: flex;
      gap: 1em;
      p {
        svg {
          color: #8257e6;
          font-size: 1.5em;
        }
      }
    }
  }
  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 1500px) {
    width: 30em;
    height: 20em;
    transition: all 0.2s;
    section {
      text-align: center;
      h1 {
        position: absolute;
        top: 40%;
        font-size: 1.2em;
        color: #fff;
        margin-bottom: 0.5em;
        font-family: 'Quicksand', sans-serif;
      }
      div {
        position: absolute;
        top: 50%;
        display: flex;
        gap: 1em;
        p {
          svg {
            color: #8257e6;
            font-size: 1.5em;
          }
        }
      }
    }
    &:hover {
      transform: scale(1.2);
      z-index: 5;
      transition: all 0.2s;
      section {
        display: none;
      }
      .infoAfter {
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 0;
        border-radius: 5px;
        p {
          font-size: 0.8em;
        }
        @keyframes showBar {
          from {
            transform: translateY(-20%);
          }
          to {
            transform: translateY(0);
          }
        }
        animation: showBar 1s;
      }
      &::before {
        display: none;
      }
    }
  }
`;
