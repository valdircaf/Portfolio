import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ButtonCVModule = styled.button`
  font-family: 'Work Sans', sans-serif;
  width: 9em;
  height: 2em;
  background-image: linear-gradient(to right, #8257e6, #5703de);
  border-radius: 2em;
  border: none;
  color: #fff;
  cursor: pointer;
  align-items: center;
  transition: all 0.2s;
  svg {
    color: #fff;
    font-size: 1.5em;
  }
  &:hover {
    transform: scale(1.1);
    transition: all 0.1s;
    background-color: 8257e6;
    font-weight: 500;
  }
  @media screen and (max-width: 500px) {
    a {
      font-size: 0.8em;
    }
  }
`;
