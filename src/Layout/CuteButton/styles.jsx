import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const CuteButtonContainer = styled.button`
  width: 7em;
  height: 2em;
  border-radius: 1em;
  outline: 0;
  border: none;
  background-color: #8257e6;
  color: #fff;
  cursor: pointer;
  p {
    font-size: 0.9em;
  }
  @keyframes backgroundTransition {
    from {
      background-color: transparent;
    }
    to {
      background-color: #8257e6;
    }
  }
  animation: backgroundTransition 3s;
`;
