import React from 'react';
import { Link } from 'react-router-dom';
import './FlexContainer.css';

const FlexContainer = () => (
  <div className='container'>
    <Link to='/pat-search'>
      <button className='button'>Patient Data</button>
    </Link>
    <Link to='/pageY'>
      <button className='button'>Hospital Resources</button>
    </Link>
  </div>
);

export default FlexContainer;
