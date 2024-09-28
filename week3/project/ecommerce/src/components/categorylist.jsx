import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from './useFetch'; // Ensure the path is correct

function CategoryList() {
  const { data: categories, loading, error } = useFetch('https://fakestoreapi.com/products/categories');

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error loading categories: {error.message}</p>;

  return (
    <ul>
      {categories.map(category => (
        <li key={category}>
          <Link to={`/category/${category}`}>{category}</Link>
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;

