import styled from "styled-components";
import { theme } from "../../../Styles/theme";

export const ContainerMenu = styled.aside`
  background-color: ${theme.interfaceColor.white.white_50};
  transition: all 0.5s ease;
  min-height: 100%;
  padding: 2rem 10rem 0 2rem;
  transform: translateX(${(props) => props.showMenu});
  box-shadow: rgba(0, 0, 0, 0.04) 3px 0px 5px;
`;

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
