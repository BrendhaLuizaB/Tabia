import styled from "styled-components";
import { theme } from "../../../Styles/theme";

export const ContainerButton = styled.button`
    background-color: ${theme.interfaceColor.white.white_50};
    border: 1px solid ${theme.interfaceColor.black.black_200};
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    gap: 1rem;
    border-radius: 0.4rem;
    cursor: pointer;
`
export const IconExport = styled.i`
    font-size: 2.4rem;
    color: ${theme.interfaceColor.black.black_300};
`

export const ExportText = styled.p`
    font-size: 1.4rem;
    font-weight: 600;
    color: ${theme.interfaceColor.black.black_400};
`