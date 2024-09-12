import React, { useState } from "react";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import allCategories from "./fake-data/all-categories";
import allProducts from "./fake-data/all-products";
import { cleanCategoryName } from "./cleanCategoryName"

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = selectedCategory
    ? allProducts.filter(
        (product) => cleanCategoryName(product.category) === cleanCategoryName(selectedCategory)
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

