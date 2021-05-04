import React from "react";
import { useState, useEffect } from "react";

// Importo useContext
import {useContext} from 'react';

// Importo Contexto
import {CartContext} from '../../Context/CartContext'


import "./ItemDetail.css";
import ItemCountContainer from "../../Container/ItemCountContainer";
import ItemCount from "../ItemCount/ItemCount";

//Importamos para navegar
import { useHistory } from "react-router-dom";

//Importo botones
import { ButtonGroup, Button } from "react-bootstrap";


//ACA EMPIEZA EL EXPORT
export default function ItemDetail({ product }) {

  // Importo el contexto ¿No se pasan como props?
  const {onCart, setonCart} = useContext(CartContext)
  console.log(onCart)
  const {somethingInCart, setsomethingInCart} = useContext(CartContext)

  //CREO 2 ESTADOS
  // ESTADO PARA SABER QUE ITEMS AGREGUÉ AL CARRITO
  const [quantityProductsAdded, setQuantityProductsAdded] = useState([]);

  // ¿AGREGUÉ ITEMS AL CARRITO? SI ES ASÍ, MOSTRAME EL TERMINAR COMPRA?
  const [showFinishBuy, setshowFinishBuy] = useState(false);

  useEffect(() => {
    setQuantityProductsAdded(quantityProductsAdded);
  }, []);

  // console.log("ESTO TRAE quantityProductsAdded");
  console.log(quantityProductsAdded);

  let history = useHistory();

  function addItem() {
    setonCart(quantityProductsAdded)
    setsomethingInCart(true)
    history.push("/cart")
    
  }

  //Solo para chequear si funciona
  const precio = quantityProductsAdded.productPrice;
  const cantidad = quantityProductsAdded.quantity;
  const total = precio * cantidad;
  console.log(precio);
  console.log(cantidad);

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

      {/* ITEM DELCONTADOR */}
      {
       !showFinishBuy ? <ItemCountContainer
          product={product}
          setQuantityProductsAdded={setQuantityProductsAdded}
          setshowFinishBuy={setshowFinishBuy}
        /> : null
      }

      {/* ITEM TERMINAR COMPRA */}
      {showFinishBuy || somethingInCart ? (
        <ButtonGroup size="lg" className="mb-2">
          <Button onClick={addItem}>
            Finalizar compra
          </Button>
          <p>Usted ya tiene en el carrito: {onCart.item?.title}</p>
        </ButtonGroup>
      ) : null}

      {/*Solo para chequear si funciona */}
      {<p>Tu monto es de {total}</p>}
    </div>
  );
}
