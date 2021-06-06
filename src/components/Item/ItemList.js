//Importamos React
import React from "react";

//Importamos componente
import Item from "./Item";

//Import React Bootstrap
import { Container, Row } from "react-bootstrap";

//Importamos CSS
import "./ItemList.css";

export default function ItemList({ item }) {
  return (
    <section>
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
    </section>
  );
}
