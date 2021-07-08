import { useState } from 'react'
import { Link } from 'react-router-dom'
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
      /* font-family: 'Lora'; */
      font-weight: 700;
    }
    @media (max-width: 900px) {
      display: none;
      position: absolute;
      top: 79px;
      background: var(--orange);
      /* border: 1px solid var(--light-gray); */
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
          <form action="">
            <input type="text" placeholder="Add recommendation" />
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path id="search-icon" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg>
            </button>
          </form>
        </li>
        <li>
          <Link onClick={() => setOpenNav(!openNav)} to='/'>Home</Link>
        </li>
        <li>
          <Link onClick={() => setOpenNav(!openNav)} to='/recommendations'>Recommendations</Link>
        </li>
        <li>
          <Link onClick={() => setOpenNav(!openNav)} to='/watchlist'>Watchlist</Link>
        </li>
        <li>
          <Link onClick={() => setOpenNav(!openNav)} to='/user/'><img height="40" src={avatar} alt="Logged in users avatar" /></Link>
        </li>
      </ul>
      <button onClick={() => setOpenNav(!openNav)} style={{'fontSize': 48}}>☰</button>
        
    </NavStyles>
  )}

export default Nav