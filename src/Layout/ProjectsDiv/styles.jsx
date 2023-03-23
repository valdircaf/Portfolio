import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ProjectsDivContainer = styled.div`
  width: 12em;
  height: 8em;
  border-bottom: 3px solid #8257e6;
  cursor: pointer;
  position: relative;
  section {
    position: absolute;
    top: 2em;
    left: 4em;
    text-align: center;
    h1 {
      font-size: 1.5em;
      color: #fff;
      margin-bottom: 0.5em;
    }
    svg {
      font-size: 1.5em;
      color: #8257e6;
    }
  }
  img {
    width: 100%;
    height: 100%;
    &::before {
      content: '';
      display: block;
      background-color: rgba(0, 0, 0, 0.5);
      width: 100%;
      height: 100%;
      z-index: 5;
    }
  }
`;
