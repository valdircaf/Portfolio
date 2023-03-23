import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const HeaderContainer = styled.header`
  background-color: #13131f;
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 2em;
  align-items: center;
  font-family: 'Work Sans', sans-serif;
  section {
    width: 13em;
    h1 {
      margin-bottom: 1em;
      font-size: 2em;
      span {
        font-size: 1.5em;
        color: #8257e6;
      }
    }
    p {
      color: #969595;
      margin-bottom: 1em;
    }
    div {
      text-align: center;
      width: 90%;
      margin: 1em 0;
      svg {
        font-size: 1.5em;
        margin-right: 0.5em;
        cursor: pointer;
        color: #8257e6;
        transition: all 0.2s;
        &:hover {
          transform: scale(0.8);
          transition: all 0.2s;
        }
      }
    }
  }
  img {
    width: 12em;
    border-radius: 40%;
  }
`;
