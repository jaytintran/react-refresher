import React from "react";
import "../index.css";

function Stats({ items }) {
  const packedItems = items.filter((item) => item.packed);
  const totalItems = items.length;
  const packedPercentage = (packedItems.length / totalItems) * 100;

  return (
    <div className="stats">
      <em>
        You have {items.length} things to pack, you already packed{" "}
        {packedPercentage ? Math.round(packedPercentage) : 0}%
      </em>
    </div>
  );
}

export default Stats;
