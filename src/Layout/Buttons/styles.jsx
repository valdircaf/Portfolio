import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledButton = styled.button`
  height: 2.5em;
  width: 10em;
  border-radius: 7px;
  background-color: transparent;
  background-image: linear-gradient(to right, #513d9c, #7b53da 70%);
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
`;
