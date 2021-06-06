//Importamos React
import React from "react";

//Importamos componentes de React-Bootstrap
import { Container, Row, Col } from "react-bootstrap";

//Importamos CSS
import "./HeaderContainer.css";

//Importo imagen
import HeaderImg from "./img/header-image-box.png";

export default function HeaderContainer() {
  return (
    <header>
      <Container fluid className="container-header">
        <Row>
          <Col xs={12} sm={6}>
            <Row>
              <Col>
                <h2 className="header-row-col__h2">
                  EL PRECIO JUSTO PARA LO ÚNICO
                </h2>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6} className="background-home">
            <Row>
              <img className="header-img" src={HeaderImg}></img>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="header-row-col__h3">
              Donás más % de tu venta, mejor posicionado estarás en nuestro feed
              de productos <strong>¡Chequeálos!</strong> 👇
            </h3>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
