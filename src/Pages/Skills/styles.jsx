import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const SkillsContainer = styled.main`
  padding-top: 2em;
  font-family: 'Work Sans', sans-serif;
  background-color: #121214;
  .hide {
    opacity: 0;
  }

  .bar {
    height: 0.2em;
    width: 7em;
    background-image: linear-gradient(to right, #8257e6, #9332e5);
    margin: 0.5em 4.5em 5em 0;
  }

  .view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  h1 {
    font-size: 2em;
    color: #fff;
  }
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    section {
      gap: 2em;
    }
  }
  @media screen and (min-width: 1500px) {
    padding-top: 0;
    height: 60vh;
    display: flex;
    justify-content: center;
  }
`;
