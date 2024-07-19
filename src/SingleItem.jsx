import React, { useState } from "react";

function SingleItem({ item, funct, editItems }) {
  const { name, id, completed } = item;
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItems(id)}
      />
      <p style={{ textDecoration: completed ? "line-through" : "none" }}>
        {name}
      </p>
      <button className="btn remove-btn" onClick={() => funct(id)}>
        delete
      </button>
    </div>
  );
}

export default SingleItem;
