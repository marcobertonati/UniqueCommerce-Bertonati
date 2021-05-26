//Import React
import React from "react";

//Importamos React Rout Dom
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

// Importo useContext
import { useContext } from "react";

// Importo Contexto
import { CartContext } from "../../Context/CartContext";

//Import React Bootstrap
import { Container, Row, Col, Button } from "react-bootstrap";


//Import CSS
import "./Cart.css";

export default function Cart() {
  // Importo desde el contexto que hay en el carrito
  const { onCart } = useContext(CartContext);
  const { somethingInCart } = useContext(CartContext);
  const { removeItem } = useContext(CartContext);
  const { clearCart } = useContext(CartContext);

  let history = useHistory();

  let total = 0;

  //Función que calcula el monto total del carrito
  function totalAmount() {
    console.log("Se ejecutó función totalAmount");

    if (onCart === undefined) {
      return console.log("Aún no hay productos");
    } else {
      onCart.forEach((productPrice) => {
        console.log(total);
        console.log(productPrice.item.price * productPrice.quantity);
        return (total =
          total + productPrice.item.price * productPrice.quantity);
      });
    }
  }
  totalAmount();

  return (
    <Container fluid>
      <Row className="cart-row">
        <span className="cart-row__h1">Bienvenido a su carrito 🛒</span>
      </Row>

      {/* Si hay algo en el carrito renderizo el listado, o que no hay nada*/}
      {somethingInCart === false ? (
        <Row className="cart-row">
          <span className="cart-h2">
            Usted no tiene productos en el carrito{" "}
            <Link to={`/`}>¡Chequea todos nuestros productos!</Link>
          </span>
        </Row>
      ) : (
        onCart.map((product) => {
          return (
            <Row className="cart-row cart-row__border">
              <ul className="cart-row__ul" key={product.item.id}>
                <span className="cart-row__spanTitle">{product.item.title}</span>
                <li className="cart-row__li">Cantidad: {product.quantity}</li>
                <li className="cart-row__li">Precio: ${product.item.price}</li>
                <li className="cart-row__li">
                  Total por producto: ${product.item.price * product.quantity}
                </li>
                <li className="cart-row__liButton">
                  <Button
                    onClick={() => removeItem(product.item.id)}
                    className={product.item.id}
                  >
                    Borrar uno
                  </Button>
                </li>
              </ul>
            </Row>
          );
        })
      )}

      {/* Si hay algo en el carrito renderizo el total */}

      <Row className="cart-row">
        <Col md={12} className="cart-row-colTotal">
        {somethingInCart ? (
          <span>El total de su carrito es ${total}</span>
        ) : null}
        </Col>

        <Col>
        {/* Si hay algo en el carrito renderizo el botón para vaciar */}
        {somethingInCart ? (
          <Button onClick={clearCart}>Vaciar Carrito</Button>
        ) : null}
        </Col>

        <Col>
        {/* Si hay algo en el carrito renderizo el botón para comprar */}
        {somethingInCart ? (
          <Button onClick={() => history.push("/checkout")}>¡Comprar!</Button>
        ) : null}
        </Col>
      </Row>
    </Container>
  );
}
