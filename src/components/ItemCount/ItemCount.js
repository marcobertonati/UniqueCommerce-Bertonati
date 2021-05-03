import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

import "./ItemCount.css";

export default function ItemCount({ onIncrement, onDecrement, itemQuantity, onAdd, itemAdded }) {
  console.log(`Entro a ItemCount.js`)
  // console.log(itemAdded)
  // console.log(itemQuantity)




  return (
    <div className="productoCounter">
      <ButtonGroup size="lg" className="mb-2">
        <Button onClick={onDecrement}>-</Button>

        <span className="setItemNumber">{itemQuantity}</span>

        <Button onClick={onIncrement}>+</Button>
      </ButtonGroup>
      <br />

      {
        //Si la cantidad de items es MAYOR a 0 (Es decir a partir de 1) se va a mostrar el boton
        itemQuantity > 0 ? (
          <ButtonGroup size="lg" className="mb-2">
            <Button onClick={onAdd}>Agregar al Carrito</Button>
          </ButtonGroup>
        ) : null 
        //Si es Null, no muestra
      }

      {/* {
        itemAdded ? (
          <ButtonGroup size="lg" className="mb-2">
            <Button onClick={()=>history.push('/cart')}>Finalizar compra</Button>
          </ButtonGroup>
        ) : null 
      } */}

      {/* Acá debería aparecer otro botón que aparezca cuando el estado de que hay algo en el carrito aparezca TERMINAR COMPRA */}

    </div>
  );
}
