import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li><Link to="/todo">Todo</Link></li>
      <li><Link to="/repos">GitHub</Link></li>
      <li><Link to="/">Logout</Link></li>
    </ul>
  </nav>
);

export default Navigation;
