import React from "react";
import {Card, Button} from "react-bootstrap";
import ItemCountContainer from '../../Container/ItemCountContainer'

export default function showItem({title, image}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {/* <Card.Text>
          Esta sería la descripción de todo el producto.
        </Card.Text> */}
        <Button variant="primary">Detalles del Producto</Button>
        <ItemCountContainer/>
      </Card.Body>
    </Card>
  );
}
