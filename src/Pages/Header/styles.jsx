import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Principal = styled.header`
  height: 100vh;
  background-position: center center;
  background-size: cover;

  @keyframes photo {
    from {
      background-position: center;
    }
    to {
      background-position: bottom;
    }
  }

  animation: photo 30s infinite;

  //First div
  div {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Work Sans', sans-serif;
    color: #fff;

    h1 {
      font-size: 6em;
      font-weight: 700;
    }

    h2 {
      font-size: 1.5em;
      font-weight: 300;
      color: #df7d3d;
    }

    nav {
      display: flex;
      gap: 2em;

      //Second div
      div {
        background-color: rgba(255, 255, 255, 0.1);
        height: 5em;
        width: 5em;
        border: 1px solid #fff;
        border-radius: 50%;
        margin-top: 2em;

        a {
          color: #fff;
        }
      }

      svg {
        font-size: 3em;
        cursor: pointer;
      }
    }
  }
  footer {
    svg {
      position: absolute;
      bottom: 0;
      font-size: 4em;
      cursor: pointer;
      @keyframes arrowDown {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      animation: arrowDown 1s infinite;
    }
  }
  article {
    animation: arrowDown 1s infinite;
    position: absolute;
    bottom: 4em;
    left: 50.4%;
  }
  @media screen and (max-width: 850px) {
    div {
      h1 {
        text-align: center;
        font-size: 5em;
      }
      .footer {
        article {
          margin-left: 0.5em;
        }
        background-color: red;
        position: absolute;
        bottom: 0;
        left: 45%;
      }
    }
  }
`;
