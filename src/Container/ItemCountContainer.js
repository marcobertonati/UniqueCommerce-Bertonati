import React, { useState, useEffect } from "react";
import ItemCount from "../components/ItemCount/ItemCount";

export default function ItemCountContainer() {
  const [item, setItem] = useState(1);
  const [stock, setStock] = useState(5);


  function onIncrement() {
      if (stock > item) {
          
          setItem(item + 1);

      } else {
          alert('No tenemos suficiente stock')
      }
  }

  function onDecrement() {
    if (item > 1) {
      setItem(item - 1);
    } else {
      alert("Tiene que agregar al menos un producto");
    }
  }

  return (
    <ItemCount
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      itemNumber={item}
    />
  );
}
