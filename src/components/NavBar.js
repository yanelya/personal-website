import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'

import { CustomLink } from '../utils/custom-link'

const NavBar = () => {
  return (
    <>      
     <nav className='nav'>
        <Link to='/'> <NavBarFont>home</NavBarFont> </Link>
        <ul>
          <CustomLink to='/about'> <NavBarFont>about</NavBarFont> </CustomLink>
          <CustomLink to='/projects'> <NavBarFont>projects</NavBarFont> </CustomLink>
          <CustomLink to='/contact'> <NavBarFont>contact</NavBarFont></CustomLink> 
        </ul>
      </nav>
    </>
  )
}

const NavBarFont = styled.h1`
  font-size: 10px;
`;

export default NavBar