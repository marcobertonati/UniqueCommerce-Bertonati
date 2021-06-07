//Importamos React
import React from "react";

//Importamos componentes de bootstrap
import { Container, Row } from "react-bootstrap";

//Importamos css
import "./Footer.css";


export default function Footer() {

  return (
    <footer style={{position: 'sticky', bottom: 0}}>
    <Container className="footer-container" fluid>
      <Row className="footer-container__row">
        <footer className="footer-container__foot">Desarrollo por <a style={{color:"white"}} href="https://www.linkedin.com/in/marcobertonati/">Marco Bertonati 🙋‍♂️</a> </footer>
      </Row>
    </Container>
    </footer>
  );
}
