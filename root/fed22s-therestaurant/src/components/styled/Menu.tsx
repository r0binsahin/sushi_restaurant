import { styled } from 'styled-components';

export const MENU = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 450px;
  color: white;
  border-bottom: 2px solid grey;

  img {
    width: 300px;
    height: 300px;
    border-radius: 15px;
    border: 2px solid white;
    object-fit: cover;
  }

  h3 {
    margin-top: 10px;
  }

  p {
    width: 70%;
    text-align: center;
    font-size: 1.2rem;
    margin: 10px;
  }

  span {
    font-size: 1.2em;
    padding-bottom: 10px;
  }
`;
