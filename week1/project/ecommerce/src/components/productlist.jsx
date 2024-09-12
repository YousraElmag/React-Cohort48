// src/components/ProductList.jsx
import React from "react";
import { cleanCategoryName } from "../cleanCategoryName";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <h3>{cleanCategoryName(product.title)}</h3>
          <p>${product.price}</p>
          <p>Rating: {product.rating.rate} (Reviews: {product.rating.count})</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
