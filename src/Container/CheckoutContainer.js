import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../Context/CartContext";

import { Container } from "react-bootstrap";


//Importamos React Rout Dom
import { useHistory } from "react-router-dom";

//Importamos componente checkout
import Checkout from '../components/Checkout/Checkout'

export default function CheckOutContainer() {
  ///////////
  //ESTADOS//
  ///////////

  // Importo History
  let history = useHistory();

  // Importo desde el contexto que hay en el carrito
  const { onCart, somethingInCart,addOrder, totalAmount } = useContext(CartContext);

  // Función de finalizar compra
  function finishBuy(e) {
    e.preventDefault();
    //si no prevengo esto hace que no se termine de resolver la promesa y nunca llegue a firebase

    const nameBuyer = document.getElementById("name").value;
    const phoneBuyer = document.getElementById("phone").value;
    const emailBuyer = document.getElementById("email").value;

    if (nameBuyer===" " || phoneBuyer===" " || emailBuyer===" " || nameBuyer==="" || phoneBuyer==="" || emailBuyer==="") {

      return alert("¡Ingrese datos válidos! Espacios vacios serán rechazados ❌")
    }

    const userInfo = {
      name: nameBuyer,
      phone: phoneBuyer,
      email: emailBuyer,
    };

    console.log("Estos son los datos de la orden de compra");
    console.log(userInfo);
    console.log("Estos son los procutos de la compra");
    console.log(onCart);

    addOrder(userInfo);
  }
  
  return (
    <>
      {somethingInCart ? (
        <Checkout finishBuy={finishBuy} totalAmount={totalAmount} />
      ) : (
        <Container fluid style={{fontFamily: 'Work Sans', fontWeight: '600', fontSize:'2rem', color:"#4a96ff"}}>¡Gracias por su compra! 😃👌</Container>
      )}
    </>
  );
}
