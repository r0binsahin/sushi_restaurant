import { styled } from 'styled-components';

export const DISPLAYSTYLED = styled.div`
  gap: 10px;

  span {
    font-weight: bold;
  }

  p {
    width: 100%;
    margin: 5px;
    border-bottom: 1px solid white;
  }

  .booking {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5%;
    font-size: 0.9em;
    padding: 5%;
    border-radius: 15px;

    background-color: black;
    color: white;

    @media screen and (min-width: 1200px) {
      width: 400px;
    }
  }
`;
