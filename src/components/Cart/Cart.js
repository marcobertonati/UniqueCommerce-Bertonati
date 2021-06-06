//Import React y hook contexto
import React, { useContext } from "react";

//Importamos React Rout Dom
import { useHistory, Link } from "react-router-dom";

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
  const { totalAmount } = useContext(CartContext);
  let history = useHistory();

  return (
    <section>
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
              <Row key={product.item.id} className="cart-row cart-row__border">
                <ul className="cart-row__ul" key={product.item.id}>
                  <span className="cart-row__spanTitle">
                    {product.item.title}
                  </span>
                  <li className="cart-row__li">Cantidad: {product.quantity}</li>
                  <li className="cart-row__li">
                    Precio: ${product.item.price}
                  </li>
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
              <span>El total de su carrito es ${totalAmount()}</span>
            ) : null}
          </Col>

          <Col className="cart-row__buttons">

            {/* Si hay algo en el carrito renderizo el botón para vaciar y comprar */}
            {somethingInCart ? (
              <>
                <Button className="cart-row__button" onClick={clearCart}>
                  Vaciar Carrito
                </Button>
                <Button
                  className="cart-row__button"
                  onClick={() => history.push("/checkout")}
                >
                  ¡Comprar!
                </Button>
              </>
            ) : null}
            
          </Col>
        </Row>
      </Container>
    </section>
  );
}
