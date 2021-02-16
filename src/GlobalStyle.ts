import { createGlobalStyle } from 'styled-components'
import "@fontsource/roboto"

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: ${props => props.theme.baseFontSize + 'px'};
  }

  body {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
  }
`
