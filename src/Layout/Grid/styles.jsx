import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const GridContainer = styled.section`
  .show {
    min-height: 60vh;
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
    }
  }
  .hide {
    display: none;
  }

  @media screen and (min-width: 1500px) {
    .show {
      width: 50%;
      left: 30%;
      min-height: 50vh;
      .video {
        display: flex;
        flex-direction: column;
        video {
          width: 40%;
        }
      }
    }
  }
`;
