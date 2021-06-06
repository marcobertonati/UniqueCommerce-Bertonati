//Import React
import React, { useState } from "react";

//Import componentes de React-Bootstrap
import { Container, Row, Col, Button } from "react-bootstrap";

//Importamos CSS
import "./Checkout.css";

export default function Checkout({ onHandleInputChange, finishBuy, completeInput, totalAmount }) {


  return (
    <section>
      <Container className="container-checkout" fluid>
        <Row className="container-checkout__title">
          Ingrese sus datos personales 😃
        </Row>
        <Row className="container-checkout__form">
          <form>
            <Col>
              <input
                onChange={onHandleInputChange}
                className="input-form"
                id="name"
                type="text"
                placeholder="Apellido y Nombre"
                required
              ></input>
            </Col>
            <Col>
              <input
                onChange={onHandleInputChange}
                className="input-form"
                id="phone"
                type="text"
                placeholder="Número de contacto"
                required
              ></input>
            </Col>
            <Col>
              <input
                onChange={onHandleInputChange}
                className="input-form"
                id="email"
                type="email"
                placeholder="Correo electrónico"
                required
              ></input>
            </Col>

            <Col>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "0.5rem",
                }}
              >
                Confirme su correo 👇
              </div>
            </Col>

            <Col>
              <input
                onChange={onHandleInputChange}
                className="input-form"
                id="emailConfirm"
                type="email"
                placeholder="Correo electrónico"
                required
              ></input>
            </Col>

            <Col>
              {completeInput ? (
                <Button className="button-form" onClick={finishBuy}>
                  Finalizar compra
                </Button>
              ) : (
                <Button disabled className="button-form" onClick={finishBuy}>
                  Por favor llene sus datos
                </Button>
              )}

            </Col>
          </form>
        </Row>
        <Row className="container-checkout__amount">
          El total de su compra es de: ${totalAmount()} 💵
        </Row>
      </Container>
    </section>
  );
}
