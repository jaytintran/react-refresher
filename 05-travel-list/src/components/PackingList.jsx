import React from "react";
import Item from "./Item";
import Sorting from "./Sorting";
import "../index.css";
import { useState } from "react";
import Clear from "./Clear";

export default function PackingList({
  items,
  handleDeleteItem,
  toggleItem,
  clearList,
}) {
  const [sortBy, setSortBy] = useState("packed");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              handleDeleteItem={handleDeleteItem}
              toggleItem={toggleItem}
            />
          ))}
        </ul>

        <div className="actions">
          <Sorting items={items} sortBy={sortBy} setSortBy={setSortBy} />
          <Clear clearList={clearList} />
        </div>
      </div>
    </>
  );
}
