import React, { useState } from 'react';
import ItemForm from './ItemForm';
import Filter from './Filter';
import Item from './Item';

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('Produce');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
    .filter((item) => {
      if (selectedCategory === 'All') return true;
      return item.category === selectedCategory;
    })
    .filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="ShoppingList">
      <ItemForm
        onItemFormSubmit={onItemFormSubmit}
        itemName={itemName}
        itemCategory={itemCategory}
        onNameChange={setItemName}
        onCategoryChange={setItemCategory}
      />
      <Filter
        onCategoryChange={handleCategoryChange}
        search={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
