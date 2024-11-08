import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Diary", quantity: 2, packed: true },
//   { id: 4, description: "Pen", quantity: 1, packed: false },
// ];

// const itemList = [];

export default function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('tripItem')) || []);

  function handleClearList() {
    const confirmationMssg = window.confirm("Are you sure you want to delete all items");
    if (confirmationMssg) {
      localStorage.removeItem('tripItem');
    };
  };

  function handleAddItem(item) {
    setItems((prevItems) => {
      const newItems = [...prevItems, item];
      localStorage.setItem("tripItem", JSON.stringify(newItems));
      return newItems;
    });
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      localStorage.setItem("tripItem", JSON.stringify(updatedItems));
      return updatedItems;
    });
  }

  function handleToggleItem(id) {
    setItems((prevItems) => {
      const toggledItem = prevItems.map((item) => item.id === id ? { ...item, packed: !item.packed } : item)
    localStorage.setItem("tripItem", JSON.stringify(toggledItem));
      return toggledItem;
    })
  }

  return (<div className="app">
    <Logo />
    <Form onAddItems={handleAddItem} itemList = {items}/>
    <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItemList={handleClearList} />
    <Stats items={items} />
  </div>)
};

