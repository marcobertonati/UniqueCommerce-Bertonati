
// Import React y State y Effect
import React from "react";
import { useState, useEffect } from "react";

// Importo useContext
import {useContext} from 'react';
// Importo Contexto
import {CartContext} from '../../Context/CartContext'

// Importo CSS
import "./ItemDetail.css";

// Importo Lógica del contador
import ItemCountContainer from "../../Container/ItemCountContainer";
// import ItemCount from "../ItemCount/ItemCount";

//Importamos para navegar y poner links
import { useHistory } from "react-router-dom";

//Importo botones de boots-trap
import { ButtonGroup, Button } from "react-bootstrap";



//Bienvenido: Acá empieza la función cuando se renderiza ItemDetail//

export default function ItemDetail({ product }) {
  
  ///////////////
  // CONTEXTOS //
  ///////////////

  // Importo el contexto lo que hay en el carrito
  const {onCart} = useContext(CartContext)
  // Importo un boleano para que cheequee si ya hay algo en el carrito
  const {somethingInCart, setsomethingInCart} = useContext(CartContext)
  // Importo del contexto una función que recibe como argumento un objeto y lo setea en setonCart (CartContext.js)
  const {addItemContext} = useContext(CartContext);


  ///////////////
  // ESTADOS ////
  ///////////////

  // Estado para setear items que vamos a gregar al carrito
  const [quantityProductsAdded, setQuantityProductsAdded] = useState([]);

  // Estado para saber si se agregó items, de esta manera se setea un booleano que lo que nos permite es ver o no el botón de finalziar compra
  const [showFinishBuy, setshowFinishBuy] = useState(false);


  /////////////////
  // USE EFFECTS //
  /////////////////
  // No estoy seguro para que funciona. Chequear. 
  useEffect(() => {
    setQuantityProductsAdded(quantityProductsAdded);
  }, []);
  console.log(quantityProductsAdded);


  /////////////////
  // FUNCIONES/////
  /////////////////

  // Declaramos variable para usar link en botones
  let history = useHistory();

  // Función agregar a carrito. Esta función se la pasamos al botón agregar al carrito que se crea cuando al menos el usuario haya ajustado el contador a 1.
  function addItem() {
    // Setea en el contexto el producto añadido
    addItemContext(quantityProductsAdded)
    // Setea en el contexto que existe ya un producto en el carrito. Esto permite que el botón finalizar compra este en todos los ItemsDetails. La idea es que venga acompañado de un texto que diga qué productos ya hay.
    setsomethingInCart(true)
    // Se ejecuta función que lleva a /cart donde se ven los productos comproados
    history.push("/cart")
    
  }

  //Solo para chequear si funciona
  const precio = quantityProductsAdded.productPrice;
  const cantidad = quantityProductsAdded.quantity;
  const total = precio * cantidad;
  console.log(precio);
  console.log(cantidad);


  ////////////////////////////////
  ///¿Qué exporta el componente?//
  ////////////////////////////////

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


      {/* ITEM TERMINAR COMPRA: si colocó +1 en la botonera o en el CartContext existe algo previamente en el cart , ya te deja terminar la compra */}
      {showFinishBuy || somethingInCart ? 
      (
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
