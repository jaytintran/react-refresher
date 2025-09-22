import React from "react";
import "../index.css";

function Sorting({ items, sortBy, setSortBy }) {
  return (
    <div className="actions">
      <select
        name="sort"
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="input">Sort by Input Order</option>
        <option value="description">Sort by Description</option>
        <option value="packed">Sort by Packing Status</option>
      </select>
    </div>
  );
}

export default Sorting;
