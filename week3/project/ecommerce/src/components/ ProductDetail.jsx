import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import heartRegular from '/Users/yousraelmaghraby/React-Cohort48/week3/project/assets/heart-regular.svg';
import heartSolid from '/Users/yousraelmaghraby/React-Cohort48/week3/project/assets/heart-solid.svg';
import { useFavorites } from './FavoritesContext';

function ProductDetail() {
  const { favorites, addFavorite, removeFavorite } = useFavorites(); // Move this inside the component
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [id]);

  const isFavorite = favorites.includes(product?.id); // Check if the product is a favorite

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='product-card'>
      {product && (
        <>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <img src={product.image} alt={product.title} />
          <img
            src={isFavorite ? heartSolid : heartRegular}
            alt="Favorite"
            onClick={() =>
              isFavorite 
                ? removeFavorite(product.id) 
                : addFavorite(product.id)
            }
            style={{ cursor: 'pointer', width: '24px', height: '24px' }}
          />
        </>
      )}
    </div>
  );
}

export default ProductDetail;
