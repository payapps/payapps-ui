import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/theme'
import { GlobalStyle } from '../src/GlobalStyle'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

console.log('theme', theme)

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  )
]
