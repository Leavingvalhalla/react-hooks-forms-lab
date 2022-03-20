import React from 'react';

function Filter({ onCategoryChange, onSearchChange, search }) {
  return (
    <div className="Filter">
      <input
        type="text"
        onChange={(e) => onSearchChange(e.target.value)}
        value={search}
        placeholder="Search..."
        name="search"
      />
      <select onChange={(e) => onCategoryChange(e)} name="filter">
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
