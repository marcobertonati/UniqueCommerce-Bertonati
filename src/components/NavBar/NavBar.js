//Importamos React
import React from "react";

//Importamos React Rout Dom
import { useHistory } from "react-router-dom";

// Importo hook useContext
import { useContext } from "react";

// Importo Contexto
import { CartContext } from "../../Context/CartContext";

//Importo Icono
import CartWidget from "../CartWidget/CartWidget.js";

//Importamos componente
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

//Importamos estilos CSS de BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

// AQUÍ COMIENZA EL EXPORT DEFAULT
export default function MostrarNavBar() {

  // Consumos del CartContext
  const { onCart } = useContext(CartContext);
  const { somethingInCart } = useContext(CartContext);
  const { quantityProducts } = useContext(CartContext);

  // Declaro history para navegación de botones
  let history = useHistory();

  return (
    <nav>

      <Navbar className="navbar-container" expand="lg">
        
         {/* Componente que trae el Name Branding */}
        <Navbar.Brand
          onClick={() => history.push("/")}
        >
          <h1 className="navbar-container__title">UNIQUE 📦</h1>
        </Navbar.Brand>
        
        {/* Componente que trae el cartWidget */}
        <Navbar.Brand className="cartWidget-container">
          {somethingInCart ? (
            <>
              <CartWidget />
              <span className="cartWidget-container__span">{quantityProducts()}</span>
            </>
          ) : null}
        </Navbar.Brand>


        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="mr-auto">

            <Nav.Link
              href="#home"
              className="navCollapse-nav__navLink"
            >
              ¿Quiénes somos?
            </Nav.Link>
            
            <Nav.Link
              href="#link"
              className="navCollapse-nav__navLink"
            >
              Contactanos
            </Nav.Link>
            
            <NavDropdown title="Productos" id="basic-nav-dropdown" className="navCollapse-nav__navLink">
              <NavDropdown.Item
                onClick={() => history.push("/category/anillos")}
              >
                Anillos
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => history.push("/category/collares")}
              >
                Collares
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => history.push("/category/remeras")}
              >
                Remeras
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => history.push("/category/gorras")}
              >
                Gorras
              </NavDropdown.Item>

              {/* <NavDropdown.Item href="#action/3.4">Gorras</NavDropdown.Item> ESTA ES LA ESTRUCTURA BASE QUE VENIA*/}

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">
                ¿Cómo funciona la subasta?
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>
    </nav>
  );
}
