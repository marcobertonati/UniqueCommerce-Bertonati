import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "./Checkout.css";
import { useState } from "react";

export default function Checkout({ finishBuy, totalAmount }) {
  const [completeInput, setCompleteInput] = useState(false);

  function onHandleInputChange() {
    const nameBuyer = document.getElementById("name").value;
    const phoneBuyer = document.getElementById("phone").value;
    const emailBuyer = document.getElementById("email").value;
    const emailConfirmBuyer = document.getElementById("emailConfirm").value;

    console.log('Se ejecutó onHandleInputChange')

    if (emailBuyer === emailConfirmBuyer && emailBuyer !== "" && emailBuyer !== " " && emailConfirmBuyer !== "" && emailConfirmBuyer !== " ") {
      console.log("Se habilitó botón")
      setCompleteInput(true);
    } else {
      setCompleteInput(false)
    }
  }

  return (
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
            {/* <Button className="button-form" onClick={finishBuy}>Finalizar compra</Button> */}
          </Col>
        </form>
      </Row>
      <Row className="container-checkout__amount">
        El total de su compra es de: ${totalAmount()} 💵
      </Row>
    </Container>
  );
}
