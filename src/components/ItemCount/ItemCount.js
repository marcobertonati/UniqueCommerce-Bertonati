//Importamos React
import React from "react";

//Importamos componentes de React
import { ButtonGroup, Button } from "react-bootstrap";

//Importamos CSS
import "./ItemCount.css";


export default function ItemCount({ onIncrement, onDecrement, itemQuantity, onAdd }) {

  return (
    <div>
      <ButtonGroup size="md" className="mb-2">

        <Button onClick={onDecrement}>-</Button>
        <Button onClick={onIncrement}>+</Button>

        {
        //Si la cantidad de items es MAYOR a 0 (Es decir a partir de 1) se va a mostrar el boton a la cual mediante prop se le pasa la función onAdd que setea el producto y su cantidad
        itemQuantity > 0 ? (
            <Button className="buttonGroup-button___addToCart" onClick={onAdd}>Agregar <strong>{itemQuantity}</strong> al Carrito</Button>
        ) : null 
        //Si es Null, no muestra
      }

      </ButtonGroup>
    </div>
  );
}
