import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ProjectsPage = styled.main`
  background-color: #121214;
  height: 100%;
  width: 100%;
  color: #fff;
  font-family: 'Work Sans', sans-serif;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-size: 1.2em;
    padding-top: 2em;
    display: none;
  }
  .visible {
    @keyframes start {
      from {
        transform: translate(-100px);
        opacity: 0;
      }
      to {
        transform: translate(0);
        opacity: 1;
      }
    }

    animation: start 1s;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1%;

    div {
      width: 49%;
      height: 20em;
      margin: 1em auto 1em auto;
      text-align: center;
      img {
        width: 100%;
      }

      a {
        text-decoration: none;
      }

      .video {
        display: flex;
        z-index: 25;
        position: absolute;
        justify-content: space-between;
        position: absolute;
        top: 25%;
        left: 25%;
        &::before {
          content: '';
          background-color: rgba(0, 0, 0, 0.9);
          height: 100%;
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: -1;
        }
        svg {
          position: absolute;
          top: 0;
          right: 0;
          cursor: pointer;
          font-size: 2em;
        }
        video {
          width: 100%;
        }
      }
    }
    .hidePass {
      display: none;
    }

    .hideWeather {
      display: none;
    }

    .hideFood {
      display: none;
    }

    .hideCircle {
      display: none;
    }
  }

  @media screen and (max-width: 1000px) {
    h2 {
      font-size: 1.2em;
      padding-top: 2em;
      display: block;
      color: #7171c3;
    }
    section {
      div {
        height: 10em;
        width: 80%;
      }
      .video {
        width: 50%;
        left: 0;

        video {
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 450px) {
    height: 60em;
    font-size: 1em;

    section {
      div {
        height: 10em;
        width: 80%;
      }
    }
  }

  @media screen and (max-height: 1000px) {
    height: 60em;
  }
`;
