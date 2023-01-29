import React, { Component } from 'react';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './nav-elements';

export default class Navbar extends Component{
  render() {
    return (
      <Nav>
        <NavLink to='/'>
        <h1>Epidemic Management System</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/Create-pat' activeStyle>
            New Patient
          </NavLink>
          <NavLink to='/hos-list' activeStyle>
            Hospital Data
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Log in</NavBtnLink>
        </NavBtn>
      </Nav>
    );
  }
}