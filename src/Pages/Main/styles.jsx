import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const MainPage = styled.main`
  border-top: 1px solid #7171c3;
  background: #0a0a0b;
  height: 100vh;
  display: flex;
  align-items: center;
  font-family: 'Work Sans', sans-serif;

  section {
    display: flex;
    flex-direction: column;
    gap: 1em;
    height: 100vh;
    width: 100%;
    .skills {
      h1 {
        color: #7171c3;
      }
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #7171c3;
      gap: 2em;
      height: 30%;
      margin: 0;
      .elements {
        width: 100%;
        display: flex;
        gap: 2em;
        justify-content: center;
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          height: 9em;
          width: 8em;
          background-color: #121214;
          border-radius: 10px;
          border-bottom: 2px solid #7171c3;
          cursor: pointer;
          transition: all 0.2s;
          gap: 2em;
          &:hover {
            transform: scale(1.2);
            transition: all 0.2s;
          }
          svg {
            font-size: 3em;
          }
        }
      }
    }

    article {
      max-width: 100%;
      margin: 5em auto;
      text-align: center;

      h1 {
        color: #7171c3;
      }
      p {
        margin: 2em auto;
        color: #969595;
        width: 50%;
      }
    }

    .container {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 20%;
      margin: 0 0 3em 0;
    }

    .informations {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3em;
      margin-top: 7em;
    }

    h1 {
      color: #ccc;
      font-size: 2em;
      span {
        font-size: 1.3em;
        color: #7171c3;
      }
    }

    button {
      height: 2.5em;
      width: 10em;
      border-radius: 20px;
      background-color: transparent;
      background-image: linear-gradient(to right, #513d9c 70%, #3e4d74);
      color: #ccc;
      outline: none;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5em;
      cursor: pointer;

      &:hover {
        transform: scale(0.9);
        transition: all 0.2s;
        background: #513d9c;
      }
      svg {
        color: #7171c3;
        font-size: 1.5em;
      }
    }

    div {
      img {
        height: 15em;
        margin-top: 6em;
        transition: all 0.2s;
        border-radius: 10em;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
          transition: all 0.2s;
        }
      }
    }
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

    animation: start 0.7s;
  }
  @media screen and (max-width: 850px) {
    padding: 0;
    margin: 0;
    max-height: 100%;
    max-width: 100%;

    article {
      display: none;
    }

    .visible {
      @keyframes startPhone {
        from {
          opacity: 0;
          transform: translate(-100px);
        }
        to {
          opacity: 1;
          transform: translate(0);
        }
      }
      animation: startPhone 2s;
    }

    .elements {
      width: 100%;
      max-height: 100%;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 1em;

      padding: 1em;
    }

    .container {
      padding: 1em;
      h1 {
        font-size: 1.5em;
      }
      button {
        width: 9em;
      }
      img {
        margin-top: 0;
      }
      .informations {
        margin: 2em auto;
        padding: 0;
        gap: 1em;
        align-items: flex-start;
      }
    }

    .skills {
      height: 40%;
      width: 100%;
      gap: 0;
    }
  }

  @media screen and (max-width: 600px) {
    margin: 0;
    padding: 0;
    min-height: 110em;

    .container {
      height: 100%;
      gap: 0;
      margin: 0;
      padding: 0;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .informations {
      margin-top: 2em;
    }

    .elements {
      .svgElements {
      }
    }
  }

  @media screen and (max-height: 1000px) {
    height: 60em;
    padding: 4em;

    justify-content: flex-start;
    align-items: flex-start;
    .container {
      gap: 0;
      margin: 0;
      padding: 0;
      align-items: center;
      justify-content: center;
    }

    .informations {
      margin-top: 2em;
    }

    .elements {
      .svgElements {
      }
    }
  }
`;

// .skills {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   color: #7171c3;
//   gap: 2em;
//   height: 30%;
//   margin: 0;
//   .elements {
//     width: 100%;
//     display: flex;
//     gap: 2em;
//     justify-content: center;
//     div {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       flex-direction: column;
//       text-align: center;
//       height: 9em;
//       width: 8em;
//       background-color: #121214;
//       border-radius: 10px;
//       border-bottom: 2px solid #7171c3;
//       cursor: pointer;
//       transition: all 0.2s;
//       gap: 2em;
//       &:hover {
//         transform: scale(1.2);
//         transition: all 0.2s;
//       }
//       svg {
//         font-size: 3em;
//       }
//     }
//   }
// }
