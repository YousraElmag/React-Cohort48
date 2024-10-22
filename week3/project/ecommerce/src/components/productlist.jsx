import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFavorites } from './FavoritesContext';
import heartRegular from '/path/to/heart-regular.svg';
import heartSolid from '/path/to/heart-solid.svg';
import useFetch from './useFetch';  // Import your custom hook

function ProductList() {
  const { categoryId } = useParams();
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  // Use the custom hook to fetch products
  const url = categoryId 
    ? `https://fakestoreapi.com/products/category/${categoryId}` 
    : 'https://fakestoreapi.com/products';

  const { data: products, loading, error } = useFetch(url); // Renamed 'data' to 'products' for clarity

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='all'>
      {products && products.map(product => (  // Ensure 'products' is not null
        <div className='box' key={product.id}>
          <Link to={`/product/${product.id}`}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} />
          </Link>
          <img
            src={favorites.includes(product.id) ? heartSolid : heartRegular}
            alt="Favorite"
            onClick={() =>
              favorites.includes(product.id)
                ? removeFavorite(product.id)
                : addFavorite(product.id)
            }
    
          />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
