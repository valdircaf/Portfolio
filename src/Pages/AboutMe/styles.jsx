import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const AboutContainer = styled.main`
  font-family: 'Work Sans', sans-serif;
  background-color: #101012;

  .hide {
    opacity: 0;
  }
  .view {
    @keyframes view {
      from {
        transform: translate(-5%);
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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    h1 {
      color: #fff;
      font-size: 2em;
      margin-top: 1.4em;
    }
    p {
      width: 100%;
      color: #969595;
      text-align: center;
      font-family: 'Quicksand', sans-serif;
      font-weight: 700;
    }
    .bar {
      height: 0.2em;
      width: 7em;
      margin: 0.5em 3.5em 3em 0;
      background-image: linear-gradient(to right, #8257e6, #9332e5);
    }
  }

  @media screen and (min-width: 1500px) {
    section {
      p {
        width: 50%;
        margin: 0 auto;
      }
    }
  }
`;
