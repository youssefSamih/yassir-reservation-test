import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from 'theme/config'
import GlobalStyle from 'theme/global-style'

// ~~~~~~ HOC

function createComponent<P extends object>(WrappedComponent: React.ComponentType<P>) {
  const WithThemeProvider = (props: P) => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <WrappedComponent {...props} />
      </ThemeProvider>
    )
  }

  return WithThemeProvider
}

// ~~~~~~

export const withThemeProvider = <P extends object>(component: React.ComponentType<P>) =>
  createComponent(component)
