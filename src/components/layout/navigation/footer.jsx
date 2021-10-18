import styled from 'styled-components'
import { 
  BrowserRouter as Router, 
  Link } from 'react-router-dom'

const FooterStyles = styled.footer`
  background: var(--navy);
  padding: 24px 0;
  ul {
    list-style: none;
    display: flex;
    max-width: 970px;
    padding: 0 15px;
    margin: auto;
  }
  li {
    padding: 0 36px 0 0;
  }
  a {
    color: white;
  }
`

const Footer = () => {
  return(
    <FooterStyles>
      <Router>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/recommendations'>Recommendations</Link>
          </li>
          <li>
            <Link to='/watchlist'>Watchlist</Link>
          </li>
        </ul>
      </Router>
    </FooterStyles>
  )
}

export default Footer