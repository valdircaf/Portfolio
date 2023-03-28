import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ProjectsDivContainer = styled.div`
  width: 12em;
  height: 8em;
  border-bottom: 3px solid #8257e6;
  cursor: pointer;
  position: relative;
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    position: absolute;
  }
  section {
    text-align: center;
    h1 {
      position: absolute;
      top: 30%;
      font-size: 1.5em;
      color: #fff;
      margin-bottom: 0.5em;
    }
    div {
      position: absolute;
      top: 60%;
      display: flex;
      gap: 1em;
      p {
        svg {
          color: #8257e6;
          font-size: 1.5em;
        }
      }
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
