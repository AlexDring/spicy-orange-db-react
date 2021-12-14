import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --navy: #294C60;
    --gray: #949494;
    --orange: #FFB17A;
    --yellow: #FCE762;
    --light-gray: #ededed;
    --lighter-gray: #f7f7f7;
    --light-yellow: #FFFDED;
    --light-orange: #FFF8ED;
    --serif: 'Lora', Georgia, Cambria, "Times New Roman", Times, serif;
    --san-serif: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', san-serif;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    background-color: var(--light-yellow);
    width: 100vw; /* To stop scrollbar adding width to pages */ 
    @media(max-width: 600px) {
      overflow-x: hidden;
    }
  }
  #root {
    display: flex; 
    flex-direction: column;
    height: 100%;
  }
  main {
    flex: 1 0 auto;
  }

  footer {
    flex-shrink: 0;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  p {
    margin: 0;
  }
  button, input[type=submit] {
    background: var(--navy);
    color: white;
    border: 0;
    padding: 12px 24px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 0;
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

  /* Reach Dialog component */
  [data-reach-dialog-content] {
    padding: 24px;
    background: var(--light-orange);
    max-width: 750px;
    @media(max-width: 650px) {
      width: 95vw;
      padding: 0;
      margin: 126px auto;
    }
  }

  /* Reach Menu Button component */
  [data-reach-popover] {
    z-index: 999;
  }
  [data-reach-menu-items] {
    border: solid 1px var(--light-gray);
    padding: 0;
  }
  [data-reach-menu-item] {  
    padding: 12px;
    &[data-selected] {
      background: var(--light-orange);
      color: var(--navy);
    }
  }

`

export default GlobalStyles