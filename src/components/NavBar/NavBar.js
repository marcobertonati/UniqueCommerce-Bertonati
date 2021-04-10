import React from "react";

//Importamos componente
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap"

//Importamos estilos CSS de BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

export default function mostrarNavBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">UNIQUE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Nosotros</Nav.Link>
            <Nav.Link href="#link">Registrate</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Productos 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Productos 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Productos 1</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                ¿Cómo funciona la subasta?
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="¿Qué querés buscar?" className="mr-sm-2" />
            <Button variant="outline-success">¡Vamos!</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
