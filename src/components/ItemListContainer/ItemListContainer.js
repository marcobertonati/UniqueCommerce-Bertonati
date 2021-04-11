import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import NavBar from "../NavBar/NavBar";
import {Container, Row, Col} from "react-bootstrap"
import './ItemListContainer.css'

export default function showHome(props) {
  return (
    <Container fluid className="background-home">
      <Row>
        <Col><h2>EL PRECIO JUSTO PARA LO ÚNICO</h2></Col>
      </Row>
      <Row>
        <Col><h3>{props.greetings}! Donás más % de tu venta, mejor posicionado vas a estar. Agregamos valor a tus productos y tu marca.</h3></Col>
      </Row>

      <Row className="background-description">
        <Col><p>Lorem ipsum dolor sit amet consectetur adipiscing elit leo, nisl cum eget accumsan lacus molestie. At per laoreet primis porttitor mauris non varius turpis, sagittis taciti penatibus netus aenean fermentum viverra, tempor vitae fusce ante proin est ullamcorper. <br/>Molestie dapibus eros lobortis magnis lacinia lacus condimentum senectus habitant, quisque suspendisse ligula mollis aptent urna taciti elementum, sapien litora duis pharetra non cubilia torquent consequat.</p></Col>

      </Row>

    </Container>
  );
}

// export default function showHome() {

//     return(
//         <NavBar/>
//     )

// }
