import React from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './Categorylist'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favourites">Favourites</Link>
        </li>
        <li>
          <CategoryList />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
