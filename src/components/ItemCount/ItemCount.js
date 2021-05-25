import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

import "./ItemCount.css";

export default function ItemCount({ onIncrement, onDecrement, itemQuantity, onAdd }) {
  console.log(`Entro a ItemCount.js`)

  return (
    <div>
      <ButtonGroup size="md" className="mb-2">
        <Button onClick={onDecrement}>-</Button>

        {/* <div className="buttonGroup-button__quantityItem">{itemQuantity}</div> */}

        <Button onClick={onIncrement}>+</Button>

        {
        //Si la cantidad de items es MAYOR a 0 (Es decir a partir de 1) se va a mostrar el boton a la cual mediante prop se le pasa la función onAdd que setea el producto y su cantidad
        itemQuantity > 0 ? (
            <Button className="buttonGroup-button___addToCart" onClick={onAdd}>Agregar <strong>{itemQuantity}</strong> al Carrito</Button>
        ) : null 
        //Si es Null, no muestra
      }

      </ButtonGroup>
      <br />

      
    </div>
  );
}
