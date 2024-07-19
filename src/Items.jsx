import React from "react";
import SingleItem from "./SingleItem";

function Items({ items, func, editItems }) {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            item={item}
            key={item.id}
            funct={func}
            editItems={editItems}
          />
        );
      })}
    </div>
  );
}

export default Items;
