import { styled } from 'styled-components';

export const DELETE = styled.div`
  display: flex;
  margin-top: 3%;
  height: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  border-radius: 15px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin: 20px;
  background-color: pink;
  padding: 5px;

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    color: white;
    background-color: #ef2d56;
    cursor: pointer;
    transition: border-color 0.25s;
    margin: 5px;

    &:hover {
      cursor: pointer;
      background-color: #4c934c;
    }
  }
`;
