import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const GridContainer = styled.section`
  .show {
    max-height: 100vh;
    background-color: #13131f;
    z-index: 20;
    left: 0;
    padding: 1em;
    position: fixed;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
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
        margin: 0.5em 0 2em 0;
      }
      p {
        color: #969595;
        margin: 0.5em;
      }
    }
    .video {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      video {
        width: 80%;
        height: 100%;
      }
    }
    .buttons {
      display: flex;
      gap: 1em;
      margin: 0;
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
      .buttons {
        margin: 2em;
      }
    }
  }

  @media screen and (max-height: 900px) {
    .show {
      left: 20%;
      width: 60%;
      max-height: 100vh;

      .video {
        display: flex;
        margin: 0;
        align-items: center;
        justify-content: center;
        video {
          width: 50%;
          height: 7em;
          margin: 0;
        }
      }
      .buttons {
        margin: 1em;
      }
    }
  }
`;
