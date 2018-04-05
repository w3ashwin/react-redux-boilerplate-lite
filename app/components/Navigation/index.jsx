import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/list">List</Link></li>
      <li><Link to="/form">Form</Link></li>
    </ul>
  </nav>
);


export default Navigation;
