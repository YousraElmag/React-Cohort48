import React, { useState, useEffect } from "react";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from './components/ ProductDetail';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [categoryError, setCategoryError] = useState(null);
  const [productError, setProductError] = useState(null);

  // Fetch categories
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setLoadingCategories(false);
      })
      .catch(() => {
        setCategoryError("Failed to load categories.");
        setLoadingCategories(false);
      });
  }, []);

  // Fetch products based on selected category
  useEffect(() => {
    setLoadingProducts(true);
    const url = selectedCategory
      ? `https://fakestoreapi.com/products/category/${selectedCategory}`
      : "https://fakestoreapi.com/products";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoadingProducts(false);
      })
      .catch(() => {
        setProductError("Failed to load products.");
        setLoadingProducts(false);
      });
  }, [selectedCategory]);

  // Loading states
  if (loadingCategories || loadingProducts) {
    return <div>Loading...</div>;
  }

  // Error handling
  if (categoryError || productError) {
    return (
      <div>
        {categoryError && <div>{categoryError}</div>}
        {productError && <div>{productError}</div>}
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Render category list if no error */}
                <CategoryList
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategorySelect={setSelectedCategory}
                />
                
                {/* Render product list if no error */}
                <ProductList products={products} />
              </>
            }
          />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
