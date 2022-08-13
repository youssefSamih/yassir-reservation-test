import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

export default createGlobalStyle`
  ${normalize}
  
  body {
    font-family: Butler, Arial, sans-serif;
  }
`
