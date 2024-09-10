
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductList = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => handleProductClick(product.id)}
          style={{ cursor: "pointer", border: "1px solid #ddd", padding: "10px", margin: "10px" }}
        >
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} style={{ width: "100px" }} />
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
