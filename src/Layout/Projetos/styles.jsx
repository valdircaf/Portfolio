import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ProjectsDiv = styled.div`
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  cursor: pointer;
  position: relative;
  z-index: 1;
  border-bottom: 2px solid #513d9c;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    z-index: 2;
  }

  .visible {
    width: 100%;
    position: absolute;
    top: 50%;
    z-index: 5;
    font-size: 1.5em;
  }

  .svgs {
    width: 100%;
    position: absolute;
    top: 58%;
    z-index: 5;
    display: flex;
    justify-content: center;
    svg {
      color: #7171c3;
      font-size: 1.5em;
    }
  }

  .hover {
    font-size: 1em;
    color: #ccc;
    z-index: 3;
    display: none;
    text-align: start;
    padding: 0.5em;
  }

  img {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  &:hover {
    z-index: 5;
    transform: scale(1.1);
    transition: all 0.3s;

    .svgs {
      display: none;
    }

    &::before {
      top: 95%;
      z-index: -1;
      bottom: 0;
      height: 20%;
      background-color: #2c2c2c;
      border-radius: 15px;
      @keyframes beforeAnimation {
        0% {
          height: 0;
        }

        100% {
          height: 20%;
        }
      }
      animation: beforeAnimation 0.2s;
    }

    .hover {
      display: block;
    }
    .visible {
      display: none;
    }
  }
  .hover:hover {
    color: #fff;
  }

  @media screen and (max-width: 800px) {
    width: 12em;
    height: 8em;
    .informations,
    .visible {
      width: 100%;
      position: absolute;
      top: 20%;
      z-index: 5;

      p {
        color: #fff;
        word-wrap: break-word;
      }
    }

    &:hover {
      transform: scale(1);
      &::before {
        height: 30%;
        @keyframes beforeAnimation {
          0% {
            height: 0;
          }

          100% {
            height: 30%;
          }
        }
        animation: beforeAnimation 0.2s;
      }
      .hover {
        padding: 0 0 0 0.5em;
        display: none;
      }
    }
    .visible {
      display: block;
    }
    .svgs {
      display: flex;
      top: 4em;
    }
  }
`;
