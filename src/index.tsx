import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { withThemeProvider } from 'hocs/style-provider'
import { compose } from 'utils/misc'

import { App } from './app'
import reportWebVitals from './reportWebVitals'

const ProvidedApp = compose(withThemeProvider)(App)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <ProvidedApp />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
