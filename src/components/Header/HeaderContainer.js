import React from "react";
import {Container, Row, Col} from "react-bootstrap"
import './HeaderContainer.css'


export default function showHeader(props) {
  return (
    <Container fluid className="background-home">
      <Row>
        <Col><h2>EL PRECIO JUSTO PARA LO ÚNICO</h2></Col>
      </Row>
      <Row>
        <Col><h3>{props.greetings}! Donás más % de tu venta, mejor posicionado vas a estar. Agregamos valor a tus productos y tu marca.</h3></Col>
      </Row>
      <Row className="background-description">
        <Col><h4>Chequeá todos nuestros productos 👇 </h4></Col>
      </Row>
    </Container>
  );
}