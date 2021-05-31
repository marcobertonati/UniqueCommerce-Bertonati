import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
  return (
    <div style={{position: 'sticky', bottom: 0}}>
    <Container className="footer-container" fluid>
      <Row className="footer-container__row">
        <footer className="footer-container__foot">Desarrollo por Marco Bertonati 🙋‍♂️</footer>
      </Row>
    </Container>
    </div>
  );
}
