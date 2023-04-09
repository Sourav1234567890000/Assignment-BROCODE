import React from 'react';
import {AppBar, Toolbar, styled} from '@mui/material';
import { NavLink } from 'react-router-dom';


const Header = styled(AppBar) `
  background : #414a4c;
  border-radius: 22px;
`;

const Ptabs = styled(NavLink) `
   font-size : 18px;
   margin-right : 5rem;
   color : inherit;
   text-decoration : none;
` 
const NavBar = () => {
  return (
    <div>
     <Header position='static'>
        <Toolbar>
          <Ptabs to ='/'>BROCODE</Ptabs>
          <Ptabs to = '/add'>ADD USER</Ptabs>
          <Ptabs to = '/all'>DISPLAY ALL USER</Ptabs>
        </Toolbar>
      </Header> 
    </div>
  )
}

export default NavBar;