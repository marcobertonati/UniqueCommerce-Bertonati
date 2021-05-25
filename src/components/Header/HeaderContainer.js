import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./HeaderContainer.css";

export default function ShowHeader() {
  return (
    <Container fluid className="container-header">
      <Row>
        <Col>
          <Row>
            <Col>
              <h2 className="header-row-col__h2">
                EL PRECIO JUSTO PARA LO ÚNICO
              </h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="header-row-col__h3">
                Donás más % de tu venta, mejor posicionado estarás en nuestro
                feed de productos. <strong>¡Chequeálos!</strong> 👇
              </h3>
            </Col>
          </Row>
        </Col>
        <Col className="background-home">
        </Col>
      </Row>
    </Container>
  );
}
