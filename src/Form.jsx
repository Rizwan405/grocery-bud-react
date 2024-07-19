import React, { useState } from "react";

function Form({ addItem }) {
  const [newItem, setNewItem] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h4>Grocery bud</h4>
        <div className="form-control">
          <input
            type="text"
            className="form-input"
            onChange={(e) => setNewItem(e.target.value)}
            value={newItem}
          />
          <button type="submit" className="btn">
            Add item
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
