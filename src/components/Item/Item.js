import React from "react";

// Importo useContext
import {useContext} from 'react';
// Importo Contexto
import {CartContext} from '../../Context/CartContext'

//Importo botones de boots-trap
import { Card, Button } from "react-bootstrap";
import ItemCountContainer from "../../Container/ItemCountContainer";
import { useHistory } from "react-router-dom";
import {Col} from 'react-bootstrap';
import "./Item.css";


export default function ShowItem({ productItem, image }) {

  const {somethingInCart} = useContext(CartContext)

  let history = useHistory();
  function goCart() {
    // Se ejecuta función que lleva a /cart donde se ven los productos comproados
    history.push("/cart")
  }

  return (
    <Col lg={3} md={4} sm={6} className="col-card">
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="col-card__title">{productItem.title}</Card.Title>

        <span className="col-card__span"
          onClick={() => history.push(`/item/${productItem.id}`)}
        >
          Detalles del Producto
        </span>

        <ItemCountContainer productItem={productItem} />
          {somethingInCart ? (
              <Button onClick={goCart}>Finalizar compra</Button>
          ) : null}
   
      </Card.Body>
    </Card>
    </Col>
  );
}
