import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

import "./ItemCount.css";

export default function showItemCount({
  onIncrement,
  onDecrement,
  itemNumber,
}) {
  return (
    <div className="productoCounter">
      <ButtonGroup size="lg" className="mb-2">
        <Button onClick={onDecrement}>-</Button>

        <span className="setItemNumber">{itemNumber}</span>

        <Button onClick={onIncrement}>+</Button>
      </ButtonGroup>
      <br/>

      <ButtonGroup size="lg" className="mb-2">
        <Button>Agregar al Carrito</Button>
      </ButtonGroup>
    </div>
  );
}
