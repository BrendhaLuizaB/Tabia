import { createGlobalStyle } from 'styled-components'
import { theme } from '../Styles/theme'

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Open Sans', sans-serif;
        background-color: ${theme.interfaceColor.white.white_100};
    }

    ::selection {
        background-color: ${theme.interfaceColor.black.black_300};
    }
`