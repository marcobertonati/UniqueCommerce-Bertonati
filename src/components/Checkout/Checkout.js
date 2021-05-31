import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import './Checkout.css'

export default function Checkout({ finishBuy, totalAmount }) {
  return (
    
    <Container className="container-checkout" fluid>
      <Row className="container-checkout__title" >Ingrese sus datos personales 😃</Row>
      <Row className="container-checkout__form">
      <form>
        <Col>
          <input className="input-form"
            id="name"
            type="text"
            placeholder="Apellido y Nombre"
            required
          ></input>
        </Col>
        <Col>
          <input className="input-form"
            id="phone"
            type="text"
            placeholder="Número de contacto"
            required
          ></input>
        </Col>
        <Col>
          <input className="input-form"
            id="email"
            type="email"
            placeholder="Correo electrónico"
            required
          ></input>
        </Col>
        <Col>
          <Button className="button-form" onClick={finishBuy}>Finalizar compra</Button>
        </Col>
      </form>
      </Row>
      <Row className="container-checkout__amount">El total de su compra es de: ${totalAmount()} 💵</Row>

      </Container>
  );
}
