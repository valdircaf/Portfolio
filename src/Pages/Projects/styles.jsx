import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ProjectsContainer = styled.section`
  background-color: #101012;
  padding: 4em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  h1 {
    color: #fff;
    font-size: 2em;
    font-family: 'Work Sans', sans-serif;
    text-align: center;
  }

  .show {
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

  .hide {
    opacity: 0;
  }

  .bar {
    height: 0.2em;
    width: 6em;
    background-image: linear-gradient(to right, #8257e6, #9332e5);
    margin: 0.5em 2em 7em 0;
    animation: view 1s;
  }
  > section {
    width: 100%;
    gap: 2em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    h1 {
      margin: 0;
    }
  }

  @media screen and (min-width: 1500px) {
    height: 100vh;
  }
`;
