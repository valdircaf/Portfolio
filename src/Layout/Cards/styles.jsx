import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const CardContainer = styled.div`
  background-color: #212121;
  width: 8em;
  height: 8em;
  color: #8257e6;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
  border-bottom: 3px solid #8257e6;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  h2 {
    font-size: 1.2em;
    font-weight: 500;
  }
  svg {
    font-size: 2.3em;
  }
  &:hover {
    transform: scale(1.2);
    transition: all 0.2s;
  }
`;
