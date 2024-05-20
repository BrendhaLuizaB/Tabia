import styled from "styled-components";
import { theme } from "../../../Styles/theme";

export const ContainerMenu = styled.aside`
  background-color: ${theme.interfaceColor.white.white_50};
  transition: transform 0.5s ease, padding 1s ease, opacity 0.7s ease,
  visibility 0.7s ease, width 1s ease;
  min-height: 100%;
  padding: ${(props) => (!props.showmenu ? '0' : '2rem 2rem 0 2rem')};
  width: ${(props) => (!props.showmenu ? '0' : '20rem')};
  transform: translateX(${(props) => (!props.showmenu ? '-100%' : '0')});
  box-shadow: rgba(0, 0, 0, 0.04) 3px 0px 5px;
  opacity: ${(props) => (!props.showmenu ? '0' : '1')};
  visibility: ${(props) => (!props.showmenu ? 'hidden' : 'visible')}; 
`

export const BoxSection = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
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

export const Options = styled.p`
  font-size: 1.4rem;
  color: ${(props) => props.isComparison ? `${theme.interfaceColor.black.black_500}` : `${theme.interfaceColor.black.black_400}`};
  font-weight: ${(props) => props.isComparison ? 700 : 400};
  padding: 2rem 0 ;
`