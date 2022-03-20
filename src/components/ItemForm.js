import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Produce');

  function handleFormSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: name,
      category: category,
    };
    onItemFormSubmit(newItem);
  }

  return (
    <form onSubmit={(e) => handleFormSubmit(e)} className="NewItem">
      <label>
        Name:
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          value={name}
        />
      </label>

      <label>
        Category:
        <select
          onChange={(e) => setCategory(e.target.value)}
          name="category"
          value={category}
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
