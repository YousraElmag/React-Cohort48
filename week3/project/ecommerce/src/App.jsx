import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/Productlist';
import ProductDetail from './components/ ProductDetail'
import FavoritesPage from './components/FavoritesPage';
import NavBar from './components/Navbar'; 
import { FavoritesProvider } from './components/FavoritesContext';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <NavBar /> 
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/category/:categoryId" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/favourites" element={<FavoritesPage />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
