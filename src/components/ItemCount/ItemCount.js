import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

import "./ItemCount.css";

export default function ItemCount({ onIncrement, onDecrement, itemQuantity, onAdd }) {
  console.log(`Entro a ItemCount.js`)

  return (
    <div>
      <ButtonGroup size="lg" className="mb-2">
        <Button onClick={onDecrement}>-</Button>

        <div className="buttonGroup-button__quantityItem">{itemQuantity}</div>

        <Button onClick={onIncrement}>+</Button>
      </ButtonGroup>
      <br />

      {
        //Si la cantidad de items es MAYOR a 0 (Es decir a partir de 1) se va a mostrar el boton a la cual mediante prop se le pasa la función onAdd que setea el producto y su cantidad
        itemQuantity > 0 ? (
          <ButtonGroup size="lg" className="mb-2">
            <Button onClick={onAdd}>Agregar al Carrito</Button>
          </ButtonGroup>
        ) : null 
        //Si es Null, no muestra
      }
    </div>
  );
}
