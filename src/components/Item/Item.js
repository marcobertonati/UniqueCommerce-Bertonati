import React from "react";

// Importo useContext
import {useContext} from 'react';
// Importo Contexto
import {CartContext} from '../../Context/CartContext'

//Importo botones de boots-trap
import { Card, Button, ButtonGroup } from "react-bootstrap";
import ItemCountContainer from "../../Container/ItemCountContainer";
import { useHistory } from "react-router-dom";

export default function ShowItem({ productItem, image }) {

  const {somethingInCart} = useContext(CartContext)

  let history = useHistory();
  function goCart() {
    // Se ejecuta función que lleva a /cart donde se ven los productos comproados
    history.push("/cart")
  }

  return (
    <Card style={{ width: "18rem", margin: "4px 2px 2px 2px" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{productItem.title}</Card.Title>
        {/* <Card.Text>
          Esta sería la descripción de todo el producto.
        </Card.Text> */}
        <Button
          onClick={() => history.push(`/item/${productItem.id}`)}
          variant="primary"
        >
          Detalles del Producto
        </Button>
        <ItemCountContainer productItem={productItem} />

   
          {somethingInCart ? (
              <Button onClick={goCart}>Finalizar compra</Button>
          ) : null}
   
      </Card.Body>
    </Card>
  );
}
