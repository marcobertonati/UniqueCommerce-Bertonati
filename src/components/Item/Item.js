import React from "react";
import {Card, Button} from "react-bootstrap";
import ItemCountContainer from '../../Container/ItemCountContainer'
import { useHistory } from 'react-router-dom'

export default function ShowItem({productItem, image}) {

  let history = useHistory();

  return (
    <Card style={{ width: "18rem", margin: "4px 2px 2px 2px" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{productItem.title}</Card.Title>
        {/* <Card.Text>
          Esta sería la descripción de todo el producto.
        </Card.Text> */}
        <Button onClick={()=>history.push(`/item/${productItem.id}`)} variant="primary">Detalles del Producto</Button>
        <ItemCountContainer productItem={productItem}/>
      </Card.Body>
    </Card>
  );
}
