import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const GuideStyle = styled.section`
  width: 90%;
  display: flex;
  background-color: #13131f;
  z-index: 10;
  padding: 1em;
  margin: 0;
  border-radius: 5px;
  gap: 2em;

  .video {
    z-index: 10;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    video {
      width: 100%;
    }
    .buttons {
      display: flex;
      gap: 1em;
      margin: 2em 0;
    }
  }

  .explains {
    h1 {
      color: #7b53da;
    }
    text-align: start;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    z-index: 10;
    width: 50%;
    p {
      color: #6d6d70;
    }
  }
  svg {
    font-size: 1.5em;
  }
`;
