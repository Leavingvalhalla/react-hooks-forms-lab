import React, { useState } from 'react';
import ShoppingList from './ShoppingList';
import Header from './Header';
import itemData from '../data/items';

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function updateItems(newItem) {
    console.log(newItem);
    setItems([...items, newItem]);
  }

  return (
    <div className={'App ' + (isDarkMode ? 'dark' : 'light')}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onItemFormSubmit={updateItems} />
    </div>
  );
}

export default App;
