import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '@reach/menu-button/styles.css'
import {  Menu,  MenuList,  MenuButton,  MenuItem } from '@reach/menu-button'
import styled from 'styled-components'
import logo from 'assets/images/spicy-orange-logo.svg'
import { SearchContext } from 'context/search-context'
import SearchInput from 'components/search-input'
import { useHistory } from 'react-router'
import { useProfile } from 'utils/profile'
import ItemCount from 'components/item-count'
import { useAuth0 } from '@auth0/auth0-react'
import spicyLogo from 'assets/images/spicy-orange-logo.png'

const NavStyles = styled.div`
  display: flex;
  background: var(--orange);
  align-items: center;
  position: relative;
  form {
    margin-left: 15px;
    @media(max-width: 450px) {
      margin-left: 0;
    }
  }
  nav {
    flex: 1;
  }
  > button {
    display: none;
    @media(max-width: 600px) {
      display: block;
      margin-left: auto;
      background: transparent;
      font-size: 48px;
      padding: 10px;
    }
  }
`

const NavLinksStyles = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  li {
    padding: 0 15px;
    a {
      position: relative;
      &.active:before {
        content: '';
        width: 5px;
        height: 5px;
        background: var(--light-yellow);
        border-radius: 50%;
        position: absolute;
        bottom: -10px;
        right: 50%;
        left: 50%;
      }
    }
  }
  button {
    background: transparent;
    padding: 0;
  }
  
  @media (max-width: 600px) {
    position: absolute;
    right: 0;
    top: 79px;
    background: var(--orange);
    height: calc(70vh - 79px);
    width: 60%;
    z-index: 100;
    transform: ${({ openNav }) => openNav ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform .2s ease-in;
    ul {
      flex-direction: column;
      height: 100%;
      justify-content: space-evenly;
    }
    li a.active:before {
    }
  }
`

const Nav = () => {
  const [openNav, setOpenNav] = useState(false)
  const { logout } = useAuth0()
  const history = useHistory()
  const { searchInput } = useContext(SearchContext)
  const { profile, isLoading } = useProfile()
  
  // console.log(profile)
  
  const searchQuery = async (e) => {
    e.preventDefault()
    searchInput(e.target.elements.search.value)
    history.push('/search')
  }

  const toggle = () => setOpenNav(!openNav)

  return(
    <NavStyles>
      <img className="logo" src={logo} alt="Spicy Orange Database Logo" />
      <SearchInput onSubmit={searchQuery} placeholder="Add recommendation" />
      <NavLinksStyles openNav={openNav}>
        <ul>
          <li>
            <NavLink exact to='/' onClick={toggle}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/recommendations' onClick={toggle}>Recommendations</NavLink>
          </li>
          <li>
            <NavLink to='/watchlist' onClick={toggle}>
              Watchlist <ItemCount isLoading={isLoading} count={profile?.watchlist?.length} fontSize={'12px'} />
            </NavLink>
          </li>
          <li>
            <Menu>
              <MenuButton><img width="40" height="40" src={profile?.avatar ? profile?.avatar : spicyLogo} alt="Logged in users avatar" /></MenuButton>
              <MenuList>
                <MenuItem onSelect={() => toggle()}><NavLink to={`/${profile?._id}/recommendations`}>Your Recommendations</NavLink></MenuItem>
                <MenuItem onSelect={() => toggle()}><NavLink to={`/${profile?._id}/reviews`}>Your Reviews</NavLink></MenuItem>
                <MenuItem onSelect={() => logout({returnTo: window.location.origin})}>Log Out</MenuItem>
              </MenuList>
            </Menu>
          </li>
        </ul>
      </NavLinksStyles>
      <button 
        aria-expanded={openNav ? 'true' : 'false'}
        aria-label="Mobile Navigation Button" 
        onClick={toggle}
      >???</button>
    </NavStyles>
  )}

export default Nav