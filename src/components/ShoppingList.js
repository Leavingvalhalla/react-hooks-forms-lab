import React, { useState } from 'react';
import ItemForm from './ItemForm';
import Filter from './Filter';
import Item from './Item';

function ShoppingList({ items, updateItems }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('Search...');
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('Produce');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
    .filter((item) => {
      if (searchQuery === 'Search...' || searchQuery === '') {
        return true;
      } else {
        return item.name.toLowerCase().includes(searchQuery.toLowerCase());
      }
    })
    .filter((item) => {
      if (selectedCategory === 'All') return true;
      return item.category === selectedCategory;
    });

  function onItemFormSubmit(newItem) {
    updateItems(newItem);
  }

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
        searchQuery={searchQuery}
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
