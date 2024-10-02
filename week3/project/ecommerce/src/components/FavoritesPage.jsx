import React, { useEffect, useState } from 'react';
import { useFavorites } from './FavoritesContext';
import heartRegular from '/Users/yousraelmaghraby/React-Cohort48/week3/project/assets/heart-regular.svg';
import heartSolid from '/Users/yousraelmaghraby/React-Cohort48/week3/project/assets/heart-solid.svg';

function FavoritesPage() {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (favorites.length > 0) {
      Promise.all(favorites.map(id => fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json())))
        .then(data => setProducts(data))
        .catch(err => console.error(err));
    }
  }, [favorites]);

  return (
    <div>
      <h1>Favorites</h1>
      {products.length > 0 ? (
        products.map(product => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} />
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
        ))
      ) : (
        <p>No favorites yet.</p>
      )}
    </div>
  );
}

export default FavoritesPage;
