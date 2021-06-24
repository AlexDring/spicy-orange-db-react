import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --navy: #294C60;
    --gray: #949494;
    --orange: #FFB17A;
    --yellow: #FCE762;
    --light-yellow: #FFFDED;
    --light-orange: #FFF8ED;
  }
  html {
    height: 100vh;
  }
  button {
    background: var(--navy);
    color: white;
    border: 0;
    padding: 12px 24px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`

export default GlobalStyles