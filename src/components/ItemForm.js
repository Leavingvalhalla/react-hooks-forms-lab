import React from 'react';
import { v4 as uuid } from 'uuid';

function ItemForm({
  itemName,
  itemCategory,
  onItemFormSubmit,
  onNameChange,
  onCategoryChange,
}) {
  function handleFormSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
    onItemFormSubmit(newItem);
  }

  return (
    <form onSubmit={(e) => handleFormSubmit(e)} className="NewItem">
      <label>
        Name:
        <input
          onChange={(e) => onNameChange(e.target.value)}
          type="text"
          name="name"
          value={itemName}
        />
      </label>

      <label>
        Category:
        <select
          onChange={(e) => onCategoryChange(e.target.value)}
          name="category"
          value={itemCategory}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
