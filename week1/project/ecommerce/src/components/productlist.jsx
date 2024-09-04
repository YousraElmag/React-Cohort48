// src/components/ProductList.jsx
import React from "react";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <h3>{product.title.replace("FAKE: ", "")}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <p>Rating: {product.rating.rate} (Reviews: {product.rating.count})</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
