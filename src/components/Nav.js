import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/images/spicy-orange-logo.svg'
import avatar from '../assets/images/avatar.png'
import OMDbSearch from './OMDbSearch'
import PropTypes from 'prop-types'

const NavStyles = styled.nav`
  background: var(--orange);
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 79px;
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
    width: 100%;
    a {
      font-weight: 700;
    }
    @media (max-width: 900px) {
      display: none;
      position: absolute;
      top: 79px;
      background: var(--orange);
      text-align: center;
      &.active {
        display: flex;
        flex-direction: column;
      }
    }
  }
  li {
    color: var(--navy);
    margin: 16px 36px 16px 0;
    &:first-child {
      flex-grow: 2;
      @media (max-width: 900px) {
        order: 1;
      }
    }
    @media (max-width: 900px) {
      margin: 16px;
    }
  }
  form {
    padding-left: 115px;
    position: relative;
    display: flex;
    align-content: center;
    @media (max-width: 900px) {
      padding-left: 0;
    }
    > button {
    background: transparent;
    margin-left: -30px;
    padding: 0;
  }
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
  
  input:focus {
    outline-color: var(--yellow);
  }
  svg {
    fill: var(--gray);
    height: 20px;
  }
  > button {
    display: none; 
    background: transparent;
    @media (max-width: 900px) {
      display: block;
      position: absolute;
      right: 0;
      top: -5px;
    }
  }
`

const Nav = () => {
  const [openNav, setOpenNav] = useState(false)

  return(
    <NavStyles>
      <img className="logo" src={logo} alt="Spicy Orang Database Logo" />
      <ul className={openNav ? 'active' : ''}>
        <li>
          <OMDbSearch />
        </li>
        <li>
          <Link onClick={() => setOpenNav(!openNav)} to='/'>Home</Link>
        </li>
        <li>
          <Link onClick={() => setOpenNav(!openNav)} to='/recommendations'>Recommendations</Link>
        </li>
        <li>
          <Link onClick={() => setOpenNav(!openNav)} to='/watchlist' >Watchlist</Link>
        </li>
        <li>
          <Link onClick={() => setOpenNav(!openNav)} to='/user/'><img height="40" src={avatar} alt="Logged in users avatar" /></Link>
        </li>
      </ul>
      <button onClick={() => setOpenNav(!openNav)} style={{'fontSize': 48}}>☰</button>
        
    </NavStyles>
  )}

Nav.propTypes = {
  profileId: PropTypes.string
  // Defining types for component props improves reusability of your components by validating received data. It can warn other developers if they make a mistake while reusing the component with improper data type.
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md#rule-options
}

export default Nav