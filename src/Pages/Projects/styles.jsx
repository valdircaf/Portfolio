import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ProjectsContainer = styled.section`
  color: #fff;
  font-family: 'Work Sans', sans-serif;
  background-color: #101012;

  @keyframes showContent {
    from {
      transform: translateX(-20%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .hide {
    opacity: 0;
  }

  .header {
    animation: showContent 1s;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-size: 2em;
      padding-top: 2em;
    }
    .bar {
      width: 5em;
      height: 0.2em;
      background-image: linear-gradient(to right, #8257e6, #9332e5);
      margin: 0.5em 3em 3em 0;
    }
  }

  .highlights {
    animation: showContent 1s;
    padding-left: 4em;
    min-height: 100%;
    > h1 {
      font-size: 2em;
    }
    .bar {
      width: 5em;
      height: 0.2em;
      background-image: linear-gradient(to right, #8257e6, #9332e5);
      margin: 0.5em 3em 3em 0;
    }
    .highlightsProjects {
      display: flex;
      gap: 1em;
    }
  }

  .allProjects {
    opacity: 1;
    animation: showContent 1s;
    min-height: 70vh;
    padding: 4em;
    > h1 {
      font-size: 2em;
    }
    .bar {
      width: 5em;
      height: 0.2em;
      background-image: linear-gradient(to right, #8257e6, #9332e5);
      margin: 0.5em 3em 3em 0;
    }
    .allProjectsDivs {
      flex-wrap: wrap;
      display: flex;
      gap: 1em;
    }
  }

  @media screen and (max-width: 900px) {
    .highlights {
      padding: 1em;
      .highlightsProjects {
        justify-content: center;
      }
    }
    .allProjects {
      width: 100%;
      padding: 1em;
      min-height: 30vh;
      .allProjectsDivs {
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
