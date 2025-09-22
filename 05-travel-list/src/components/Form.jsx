import React, { useState } from "react";
import "../index.css";

function Form({ handleAddItem }) {
  const [inputValue, setInputValue] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [isCustomQuantity, setIsCustomQuantity] = useState(false); // To track custom input
  const [customQuantity, setCustomQuantity] = useState(""); // For custom quantity input

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if (value === "custom") {
      setIsCustomQuantity(true);
      setSelectedValue(customQuantity);
    } else {
      setIsCustomQuantity(false);
      setSelectedQuantity(Number(value));
    }
  };

  const handCustomQuantityChange = (e) => {
    setCustomQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    // Prevent the page from reloading
    e.preventDefault();

    if (inputValue !== "") {
      const newItem = {
        id: Date.now(),
        description: inputValue,
        quantity: isCustomQuantity ? customQuantity : selectedQuantity,
        packed: false,
      };

      handleAddItem(newItem);
      setInputValue("");
      setCustomQuantity("");
      setSelectedQuantity(1 /* reset to default */);
    }
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <input
        className="input"
        type="text"
        placeholder="Enter your thing..."
        onChange={handleInputChange}
        value={inputValue}
      />
      <select
        value={isCustomQuantity ? "custom" : selectedQuantity}
        onChange={handleQuantityChange}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
        <option value="custom">Custom</option>
      </select>
      {isCustomQuantity && (
        <input
          className="input-custom"
          type="number"
          placeholder="How many?"
          value={customQuantity}
          onChange={handCustomQuantityChange}
        />
      )}
      <button className="button" type="submit">
        Add
      </button>
    </form>
  );
}

export default Form;
