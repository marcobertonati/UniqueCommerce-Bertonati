import React from "react";
import Item from "./Item";

export default function ItemList({ item }) {
  return (
    <div className="itemList">
      {item.map((singleItem) => (
        <Item title={singleItem.title} title={singleItem.id} />
      ))}
    </div>
  );
}
