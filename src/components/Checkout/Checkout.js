import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Checkout({ finishBuy, totalAmount }) {
  return (
    
    <Container fluid>
      <div>Ingrese sus datos personales 😃</div>
      <div>El total de su compra es de {totalAmount()} 💵</div>
      <form>
        <div>
          <input
            id="name"
            type="text"
            placeholder="Apellido y Nombre"
            required
          ></input>
        </div>
        <div>
          <input
            id="phone"
            type="text"
            placeholder="Número de contacto"
            required
          ></input>
        </div>
        <div>
          <input
            id="email"
            type="email"
            placeholder="Correo electrónico"
            required
          ></input>
        </div>
        <div>
          <button onClick={finishBuy}>Finalizar compra</button>
        </div>
      </form>
      </Container>
  );
}
