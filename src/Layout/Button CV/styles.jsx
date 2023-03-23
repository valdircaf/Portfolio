import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ButtonCVModule = styled.button`
  font-family: 'Work Sans', sans-serif;
  width: 9em;
  height: 2em;
  background-image: linear-gradient(to right, #8257e6, #5703de);
  color: #fff;
  cursor: pointer;
  align-items: center;
  transition: all 0.2s;
  svg {
    color: #fff;
    font-size: 1.5em;
  }
  &:hover {
    transform: scale(0.9);
    transition: all 0.2s;
  }
`;
