import React from 'react';

function Filter({ onCategoryChange, searchQuery, onSearchChange }) {
  return (
    <div className="Filter">
      <input
        type="text"
        onChange={(e) => onSearchChange(e.target.value)}
        value={searchQuery}
        name="search"
      />
      <select name="filter">
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
