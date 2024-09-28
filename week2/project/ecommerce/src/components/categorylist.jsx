import React from "react";

const CategoryList = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onCategorySelect(category)}
          className={selectedCategory === category ? "active" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
