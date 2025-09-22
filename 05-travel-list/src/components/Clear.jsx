import React from "react";
import "../index.css";
import { useState } from "react";

export default function Clear({ clearList }) {
  return (
    <button className="clear" onClick={clearList}>
      Clear Lists
    </button>
  );
}
