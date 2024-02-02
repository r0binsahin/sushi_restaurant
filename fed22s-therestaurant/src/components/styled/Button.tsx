import { styled } from 'styled-components';
export const Button = styled.button`
  width: 150px;
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
    background-color: #4c934c;
  }
`;
