import { styled } from 'styled-components';

export const FooterStyled = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 1rem;
  margin-top: 50px;
  border-top: 8px solid #daa520;

  @media screen and (min-width: 1200px) {
    justify-content: center;
    font-size: 1.3rem;
  }
`;
