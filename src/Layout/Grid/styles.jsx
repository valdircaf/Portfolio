import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const GridContainer = styled.section`
  .show {
    min-height: 60vh;
    background-color: #000;
    position: fixed;
    width: 90%;
    top: 50%;
    transform: translateY(-50%);
    left: 5%;
    border-radius: 1em;
    font-family: 'Work Sans', sans-serif;
    z-index: 20;
    .animation {
      @keyframes show {
        from {
          transform: translate(-100%);
        }
        to {
          transform: translate(0);
        }
      }
      animation: 0.5s show;
    }
    .svg {
      text-align: right;
      width: 100%;
      svg {
        font-size: 2em;
        color: #8257e6;
        cursor: pointer;
      }
    }
    .texts {
      display: block;
      text-align: start;
      padding: 3em;
      h1 {
        text-align: start;
        margin-bottom: 0.5em;
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
    button {
      margin-bottom: 2em;
    }
  }
  .hide {
    display: none;
  }
`;
