import { styled } from "styled-components";

export const CHECKBOX = styled.svg`
    color: green;
    margin-left: 20px;
    width: 70px;
    height: 70px;
    animation-name: bigger;
    animation-duration: 1.5s;


    @keyframes bigger {
       0% {  transform: scale(1) }
       50% {  transform: scale(1.5) }
       100% {  transform: scale(1) }
       
    }
`;
