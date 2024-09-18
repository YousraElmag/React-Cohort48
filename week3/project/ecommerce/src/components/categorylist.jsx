import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <nav>
      <ul>
        {categories.map(category => (
          <li key={category}>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
        <li>
          <Link to="/favourites">Favourites</Link>
        </li>
      </ul>
    </nav>
  );
}

export default CategoryList;
