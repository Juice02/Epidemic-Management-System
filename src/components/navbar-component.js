import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
  state = {
    isMenuOpen: false
  };

  toggleMenu = () => {
    this.setState(prevState => ({ isMenuOpen: !prevState.isMenuOpen }));
  };

  render() {
    return (
      <nav className='navbar'>
        <NavLink to='/' className='navbar-brand'>
          Epidemic Management System
        </NavLink>
        <button
          className='navbar-toggler'
          onClick={this.toggleMenu}
          aria-label='Toggle navigation'
        >
          <i className='fas fa-bars'></i>
        </button>
        <div
          className={`navbar-menu ${
            this.state.isMenuOpen ? 'is-active' : ''
          }`}
        >
          <NavLink
            to='/VACC'
            className='navbar-item'
            activeClassName='is-active'
          >
            Vaccination
          </NavLink>
          <NavLink
            to='/hos-search'
            className='navbar-item'
            activeClassName='is-active'
          >
            Hospital Data
          </NavLink>
        </div>
        <NavLink to='/signin' className='navbar-item navbar-btn'>
          Log in
        </NavLink>
      </nav>
    );
  }
}
