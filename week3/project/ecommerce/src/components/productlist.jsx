import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFavorites } from './FavoritesContext';
import heartRegular from '../assets/heart-regular.svg';
import heartSolid from '../assets/heart-solid.svg';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryId } = useParams();
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  useEffect(() => {
    setLoading(true);
    fetch(categoryId ? `https://fakestoreapi.com/products/category/${categoryId}` : 'https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
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
            style={{ cursor: 'pointer', width: '24px', height: '24px' }}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
