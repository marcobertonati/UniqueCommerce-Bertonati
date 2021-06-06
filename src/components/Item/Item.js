//Importamos React
import React from "react";

//Importamos Hook para darle navegabilidad a ver detalles
import { useHistory } from "react-router-dom";

//Importamos componente de botonera
import ItemCountContainer from "../../Container/ItemCountContainer";

// Importo useContext
import { useContext } from "react";

// Importo Contexto
import { CartContext } from "../../Context/CartContext";

//Importo botones de boots-trap
import { Card, Button, Col } from "react-bootstrap";

//Importo CSS
import "./Item.css";

export default function Item({ productItem, image }) {
  const { somethingInCart } = useContext(CartContext);

  let history = useHistory();
  function goCart() {
    // Se ejecuta función que lleva a /cart donde se ven los productos comproados
    history.push("/cart");
  }

  return (
    <Col lg={3} md={4} sm={6} className="col-card">
      <article>
        <Card>
          <Card.Img variant="top" src={productItem.image} />

          <Card.Body>
            <Card.Title className="col-card__title">
              {productItem.title}
            </Card.Title>

            <span
              className="col-card__span"
              onClick={() => history.push(`/item/${productItem.id}`)}
            >
              Detalles del Producto
            </span>

            <ItemCountContainer productItem={productItem} />

            {somethingInCart ? (
              <div>
                <Button onClick={goCart}>Ir al carrito</Button>
              </div>
            ) : null}
          </Card.Body>
        </Card>
      </article>
    </Col>
  );
}
