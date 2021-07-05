import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --navy: #294C60;
    --gray: #949494;
    --orange: #FFB17A;
    --yellow: #FCE762;
    --light-gray: #ededed;
    --light-yellow: #FFFDED;
    --light-orange: #FFF8ED;
  }
  html {
    height: 100vh;
  }
  ul {
    padding: 0;
    list-style: none;
  }
  p {
    margin: 0;
  }
  button {
    background: var(--navy);
    color: white;
    border: 0;
    padding: 12px 24px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;
    &.minimal {
      background: none;
      color: var(--navy);
    }
  }
  input, textarea {
    padding: 12px;
    border-radius: 3px;
    border: 1px solid #ededed;
    :focus {
      outline: none !important;
      border: 1px solid var(--orange);
    }
  }
`

export default GlobalStyles