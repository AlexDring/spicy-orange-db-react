import { 
  BrowserRouter as Router, 
  Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/images/spicy-orange-logo.svg'
import avatar from '../assets/images/avatar.png'

const NavStyles = styled.nav`
  background: var(--orange);
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .logo {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
  }
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
  }
  li {
    color: var(--navy);
    margin: 16px 36px 16px 0;
  }
  form {
    padding-left: 115px;
    position: relative;
  }
  input {
    height: 36px;
    width: 250px;
    background: var(--light-yellow);
    border: 0;
    border-radius: 3px;
    font-size: 14px;
    padding: 0 12px;
  }
  button {
    background: transparent;
    position: absolute;
    top: 8px;
    right: 12px;
    padding: 0;
  }
  input:focus {
    outline-color: var(--yellow);
  }
  svg {
    fill: var(--gray);
    height: 20px;
  }
`

const Nav = () => {
  return(
    <Router>
      <NavStyles>
        <img className="logo" src={logo} alt="Spicy Orang Database Logo" />
        <form action="">
          <input type="text" placeholder="Add recommendation" />
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path id="search-icon" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg>
          </button>
        </form>
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
          <li>
            <Link to='/user/'><img height="40" src={avatar} alt="Logged in users avatar" /></Link>
          </li>
        </ul>
      </NavStyles>
    </Router>
  )}

export default Nav