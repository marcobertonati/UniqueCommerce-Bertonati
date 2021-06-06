// Import React y hooks
import React, { useState, useEffect, useContext } from "react";

// Importo Contexto
import { CartContext } from "../../Context/CartContext";

// Importo Lógica del contador
import ItemCountContainer from "../../Container/ItemCountContainer";

//Importamos para navegar y poner links
import { useHistory } from "react-router-dom";

//Importo botones de boots-trap
import { Container, Row, Button } from "react-bootstrap";

// Importo CSS
import "./ItemDetail.css";

export default function ItemDetail({ product }) {
  // Importo un boleano para que cheequee si ya hay algo en el carrito
  const { somethingInCart } = useContext(CartContext);

  // Importo del contexto una función que recibe como argumento un objeto y lo setea en setonCart (CartContext.js)
  const { addItemContext } = useContext(CartContext);

  // Estado para setear items que vamos a gregar al carrito
  const [quantityProductsAdded, setQuantityProductsAdded] = useState([]);

  // Estado para saber si se agregó items, de esta manera se setea un booleano que lo que nos permite es ver o no el botón de finalziar compra
  const [showFinishBuy, setshowFinishBuy] = useState(false);

  useEffect(() => {
    setQuantityProductsAdded(quantityProductsAdded);
  }, []);

  // Declaramos variable para usar link en botones
  let history = useHistory();

  // Función agregar a carrito. Esta función se la pasamos al botón agregar al carrito que se crea cuando al menos el usuario haya ajustado el contador a 1.
  function goCart() {
    // Se ejecuta función que lleva a /cart donde se ven los productos comproados
    history.push("/cart");
  }

  return (
    <>
      {product.id !== undefined ? (
        <Container fluid className="itemDetail-container">
          <h3 className="itemDetail-container_h3">DETALLES DEL PRODUCTO 🔍</h3>

          <Row key={product.id}>
            <ul className="itemDetail-container__ul">
              <li>
                {" "}
                <img src={product.image} alt={product.title}></img>
              </li>
              <li>
                <strong>{product.title}</strong>
              </li>
              <li>Detalles: {product.description}</li>
              <li>Precio por unidad: {product.price}</li>
            </ul>
          </Row>

          {/* ITEM DELCONTADOR */}
          {!showFinishBuy ? (
            <ItemCountContainer
              product={product}
              setQuantityProductsAdded={setQuantityProductsAdded}
              setshowFinishBuy={setshowFinishBuy}
            />
          ) : null}

          {/* ITEM TERMINAR COMPRA: si colocó +1 en la botonera o en el CartContext existe algo previamente en el cart, ya te deja terminar la compra */}
          {showFinishBuy || somethingInCart ? (
            <>
              <Button size="sm" onClick={goCart}>
                Ir al carrito
              </Button>

              <div className="itemDetail-container__finishBuyText">
                Ya tienes items en tu carrito, puedes finalizar tu compra.
              </div>
            </>
          ) : null}
        </Container>
      ) : (
        <Container fluid>
          <h2>¡Woops! No encontramos productos</h2>
        </Container>
      )}
    </>
  );
}
