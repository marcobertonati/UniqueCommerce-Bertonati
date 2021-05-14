import React from "react";
import Item from "./Item";
import './ItemList.css'

export default function ItemList({ item }) {
  return (
    <div className="itemList row container-fluid">

      {
      
      item.map((singleItem) => (

      <Item image={singleItem.photo} key={singleItem.id} productItem={singleItem} />

      ))}
      
    </div>
  );
}
