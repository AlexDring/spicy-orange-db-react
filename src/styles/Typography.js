import { createGlobalStyle } from 'styled-components'
import '@fontsource/poppins'
import '@fontsource/poppins/700.css'
import '@fontsource/lora'
import '@fontsource/lora/700.css'

const Typography = createGlobalStyle`
  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', san-serif;
    color: var(--navy);
  }
  strong {
    font-weight: 700;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Lora', Georgia, Cambria, "Times New Roman", Times, serif;
    font-weight: 700;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: var(--navy)
  }
  .center {
    text-align: center;
  }
  .gray {
    color: var(--gray)
  }
  .caps {
    text-transform: uppercase;
  }
`

export default Typography