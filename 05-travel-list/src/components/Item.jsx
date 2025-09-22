import React from "react";
import "../index.css";

export default function Item({ item, handleDeleteItem, toggleItem }) {
  return (
    <li>
      <input
        onChange={() => toggleItem(item.id)}
        type="checkbox"
        value={item.packed}
        checked={item.packed}
      />

      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0rem",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={() => handleDeleteItem(item.id)}>✖️</button>
      </div>
    </li>
  );
}
