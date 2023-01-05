import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component{

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Epidemic Management System</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/pat-list" className="nav-link">Patient Data</Link>
          </li>
          <li className="navbar-item">
          <Link to="/hos-list" className="nav-link">Hospital Data</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}