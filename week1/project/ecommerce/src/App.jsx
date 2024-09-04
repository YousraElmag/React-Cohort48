// src/App.jsx
import React, { useState } from "react";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import allCategories from "./fake-data/all-categories";
import allProducts from "./fake-data/all-products";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = selectedCategory
    ? allProducts.filter(
        (product) => product.category === selectedCategory.replace("FAKE: ", "")
      )
    : allProducts;

  return (
    <div className="App">
      <CategoryList
        categories={allCategories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
