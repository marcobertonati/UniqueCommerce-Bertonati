import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";


export default function Footer() {

  // Atención: Use href porque cuando usaba History o Link me mandaba dentro de localhost.

  return (
    <div style={{position: 'sticky', bottom: 0}}>
    <Container className="footer-container" fluid>
      <Row className="footer-container__row">
        <footer className="footer-container__foot">Desarrollo por <a style={{color:"white"}} href="https://www.linkedin.com/in/marcobertonati/">Marco Bertonati 🙋‍♂️</a> </footer>
      </Row>
    </Container>
    </div>
  );
}
