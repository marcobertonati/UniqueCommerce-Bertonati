import React from "react";
import Item from "./Item";

//Import React Bootstrap
import { Container, Row } from "react-bootstrap";

import "./ItemList.css";

export default function ItemList({ item }) {
  return (
    <Container fluid>
      <Row className="row-itemList">
        {item.map((singleItem) => (
          <Item
            image={singleItem.photo}
            key={singleItem.id}
            productItem={singleItem}
          />
        ))}
      </Row>
    </Container>
  );
}
