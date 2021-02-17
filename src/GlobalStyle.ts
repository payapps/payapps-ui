import { createGlobalStyle } from 'styled-components'
import "@fontsource/roboto"

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  // Commenting as they\'re probably too far reaching for the app at this point
  // html {
  //   font-size: ${props => props.theme.baseFontSize};
  // }

  // body {
  //   font-size: 1rem;
  //   margin: 0;
  //   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  //     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  //     sans-serif;
  //   -webkit-font-smoothing: antialiased;
  //   -moz-osx-font-smoothing: grayscale;
  // }
`
