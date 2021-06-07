//Importamos React
import React from "react";

//Import React Bootstrap
import { Container, Row, Col } from "react-bootstrap";

//Importamos imagen
import aboutWorking from "./img/about-working.png";

export default function About() {
  return (
    <Container fluid>
      <section>
        <Row>
          <Col >
            <h5 style={{marginTop:"2rem", display:"flex", justifyContent:"center"}}>Estamos en construcción 🛠</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <img style={{width:"100%", maxHeight:"250px", objectFit:"contain"}} src={aboutWorking} />
          </Col>
        </Row>
      </section>
    </Container>
  );
}
