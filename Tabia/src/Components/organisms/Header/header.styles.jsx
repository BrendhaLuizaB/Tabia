import styled from "styled-components";
import { theme } from "../../../Styles/theme";

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${theme.interfaceColor.white.white_50};
  align-items: center;
  padding: 2.5rem 3rem;
  box-shadow:rgba(0, 0, 0, 0.04) 0px 3px 5px;;
`;

export const BoxMenuLogo = styled.div`
  display: flex;
  gap: 2rem;
`;

export const BoxQuestionUserIcon = styled.div`
  display: flex;
  gap: 2rem;

`

export const HamburgerIcon = styled.i`
    color: ${theme.interfaceColor.black.black_300};
    font-size: 2.4rem;
`
export const Logo = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    color: ${theme.interfaceColor.blue.primary_blue};
`
export const QuestionMarkIcon = styled.i`
    font-size: 2.4rem;
    color: ${theme.interfaceColor.black.black_300};
`