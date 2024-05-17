import styled from "styled-components";
import { theme } from "../../../Styles/theme";


export const ContainerMenu = styled.aside`
  background-color: ${theme.interfaceColor.white.white_50};
  transition: transform 0.5s ease, padding 0.5s ease, opacity 0.1s ease,
  visibility 0.5s ease;
  min-height: 100%;
  padding: ${(props) => (!props.showMenu ? '0' : '2rem 10rem 0 2rem')};
  width: ${(props) => (!props.showMenu ? '0' : '10rem')};
  transform: translateX(${(props) => (!props.showMenu ? '-100%' : '0')});
  box-shadow: rgba(0, 0, 0, 0.04) 3px 0px 5px;
  opacity: ${(props) => (!props.showMenu ? '0' : '1')};
  visibility: ${(props) => (!props.showMenu ? 'hidden' : 'visible')}; 
`

export const BoxSection = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  padding-top: 3rem;
`;

export const TitleOfSection = styled.p`
  font-size: 1.6rem;
  color: ${theme.interfaceColor.black.black_400};
  font-weight: 400;
`;
export const IconMenu = styled.i`
  font-size: 2rem;
  color: ${theme.interfaceColor.black.black_400};
  font-weight: 900;
  cursor: pointer;
`;
