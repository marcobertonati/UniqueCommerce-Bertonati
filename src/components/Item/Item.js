import React from "react";
import {Card, Button} from "react-bootstrap";
import ImgRing from '../../Assets/Img/Ring.jpg'
import ItemCountContainer from '../../Container/ItemCountContainer'

export default function showItem({title}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={ImgRing} />
      <Card.Body>
        <Card.Title>Nombre del Producto: {title}</Card.Title>
        <Card.Text>
          Esta sería la descripción de todo el producto.
        </Card.Text>
        <Button variant="primary">Detalles del Producto</Button>
        <ItemCountContainer/>
      </Card.Body>
    </Card>
  );
}
