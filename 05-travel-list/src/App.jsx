import { useState } from "react";
import "./index.css";

import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const initialItems = [
  { id: 1, description: "📝 Passports", quantity: 2, packed: true },
  { id: 2, description: "🧦 Socks", quantity: 12, packed: false },
];

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  /* Explaination:
    Filter loops through the array and skip the item that matches the id.
    Filter returns a new array with each item matched the condition
    This condition is: item.id !== id
  */
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function toggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearList() {
    // Alert no items in the list
    if (items.length === 0) {
      alert("No items in the list");
      return;
    }

    // Alert if user really want to delete the list
    if (window.confirm("Are you sure you want to clear the list?"))
      setItems([]);
  }

  return (
    <div className="app">
      <Logo />

      <Form handleAddItem={handleAddItem} />

      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        toggleItem={toggleItem}
        clearList={clearList}
      />

      <Stats items={items} />
    </div>
  );
}

export default App;
