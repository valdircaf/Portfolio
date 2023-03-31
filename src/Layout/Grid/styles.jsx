import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const GridContainer = styled.section`
  .show {
    max-height: 100vh;
    background-color: #13131f;
    z-index: 20;
    position: fixed;
    width: 90%;
    top: 50%;
    transform: translateY(-50%);
    left: 5%;
    border-radius: 1em;
    font-family: 'Quicksand', sans-serif;
    z-index: 20;
    @keyframes showGrid {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    animation: showGrid 1s;
    .svg {
      text-align: right;
      width: 100%;
      svg {
        font-size: 2em;
        color: #fff;
        cursor: pointer;
      }
    }
    .texts {
      display: block;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1em;

      h1 {
        color: #fff;
      }
      .bar {
        height: 0.2em;
        width: 7em;
        background-image: linear-gradient(to right, #8257e6, #9332e5);
        margin: 0 0 2em 0;
      }
      p {
        color: #969595;
      }
    }
    .video {
      video {
        width: 80%;
        height: 100%;
      }
    }
    .buttons {
      display: flex;
      gap: 1em;
      margin-bottom: 2em;
      width: 100%;
      justify-content: center;
    }
  }
  .hide {
    display: none;
  }

  @media screen and (min-width: 1500px) {
    .show {
      width: 50%;
      left: 30%;
      max-height: 100vh;
      .video {
        display: flex;
        flex-direction: column;
        video {
          width: 40%;
        }
      }
    }
  }
  @media screen and (max-width: 1500px) {
    .show {
      width: 50%;
      left: 30%;
      max-height: 100vh;
      .video {
        display: flex;
        flex-direction: column;
        video {
          width: 40%;
        }
      }
    }
  }
  @media screen and (max-height: 700px) {
    .show {
      max-height: 100vh;
      .video {
        display: flex;
        flex-direction: column;

        video {
          width: 38%;
        }
      }
      .buttons {
        margin-bottom: 1em;
      }
      .texts {
        .bar {
          margin: 0;
        }
      }
    }
  }
  @media screen and (max-height: 600px) {
    .show {
      max-height: 100vh;
      .video {
        display: flex;
        video {
          width: 38%;
        }
      }
      .texts {
        .bar {
          margin: 0;
        }
      }
    }
  }
`;
