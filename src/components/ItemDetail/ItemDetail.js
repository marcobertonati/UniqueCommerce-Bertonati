import React from "react";
import { useState, useEffect } from "react";
import "./ItemDetail.css";
import ItemCountContainer from "../../Container/ItemCountContainer";
import ItemCount from "../ItemCount/ItemCount";

//Importamos para navegar
import { useHistory } from "react-router-dom";

//Importo botones
import { ButtonGroup, Button } from "react-bootstrap";

export default function ItemDetail({ product }) {
  console.log(product);

  const [quantityProductsAdded, setQuantityProductsAdded] = useState([]);
  const [showFinishBuy, setshowFinishBuy] = useState(false);

  useEffect(() => {
    setQuantityProductsAdded(quantityProductsAdded);
  }, []);

  console.log("ESTO TRAE quantityProductsAdded");
  console.log(quantityProductsAdded);

  let history = useHistory();

  return (
    <div className="itemDetail">
      <h3 className="title-h3">DESCRIPCIÓN DE ITEMS</h3>

      <div key={product.id}>
        <img src={product.photo} alt={product.title}></img>

        <ul>
          <li>{product.title}</li>
          <li>Descrpción: {product.description}</li>
          <li>Precio: {product.price}</li>
        </ul>
      </div>

      <ItemCountContainer
        product={product}
        setQuantityProductsAdded={setQuantityProductsAdded}
        setshowFinishBuy={setshowFinishBuy}
      />

      {showFinishBuy ? (
        <ButtonGroup size="lg" className="mb-2">
          <Button onClick={() => history.push("/cart")}>
            Finalizar compra
          </Button>
        </ButtonGroup>
      ) : null}
    </div>
  );
}
