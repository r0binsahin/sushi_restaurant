import { styled } from 'styled-components';

export const Nav = styled.nav`
  max-width: 100%;
  background-color: #1e1e24;
  display: flex;
  justify-content: center;
  margin: 0;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 1.5rem;
  margin: 0;
  border-bottom: 8px solid #daa520;

  @media screen and (min-width: 1200px) {
    justify-content: space-between;
    font-size: 2rem;
  }
`;

interface IULprops {
  flexdirection: string;
  fontSize?: string;
}

export const UL = styled.ul<IULprops>`
  list-style: none;
  display: flex;
  padding: 0;
  flex-direction: ${(props: IULprops) => props.flexdirection || 'row'};

  li {
    margin: 10px;
    padding-left: 20px;
    font-size: ${(props: IULprops) => props.fontSize || 'null'};
    color: white;
  }
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;
