// src/components/CategoryList.jsx
import React from "react";
import { cleanCategoryName } from "../cleanCategoryName";

const CategoryList = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onCategorySelect(category)}
          className={selectedCategory === category ? "active" : ""}
        >
          {cleanCategoryName(category)}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;

