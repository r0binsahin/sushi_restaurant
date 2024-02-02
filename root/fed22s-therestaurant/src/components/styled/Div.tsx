import { styled } from 'styled-components';

export const DIV = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #aabd8c;
  border-radius: 15px;
  padding: 10px;

  @media screen and (min-width: 1200px) {
    width: 40%;
  }
`;
