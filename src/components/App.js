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
  const [items, setItems] = useState([]);

  function handleClearList() {
    const confirmationMssg = window.confirm("Are you sure you want to delete all items");
    if (confirmationMssg) setItems([]);
  };

  function handleAddItem(item) {
    setItems((items) => [...items, item])
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  return (<div className="app">
    <Logo />
    <Form onAddItems={handleAddItem} />
    <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItemList={handleClearList} />
    <Stats items={items} />
  </div>)
};

