import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (id) => {
    setFavorites(prevFavorites => [...prevFavorites, id]);
  };

  const removeFavorite = (id) => {
    setFavorites(prevFavorites => prevFavorites.filter(favId => favId !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);

