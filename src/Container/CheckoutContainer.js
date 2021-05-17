import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../Context/CartContext";

//Importamos React Rout Dom
import { useHistory } from "react-router-dom";

export default function CheckOutContainer() {
  ///////////
  //ESTADOS//
  ///////////

  // Importo History
  let history = useHistory();

  // Importo desde el contexto que hay en el carrito
  const { onCart } = useContext(CartContext);
  const { somethingInCart } = useContext(CartContext);
  const { addOrder } = useContext(CartContext);
  const { setOrder } = useContext(CartContext);

  // Función de finalizar compra
  function finishBuy(e) {
    e.preventDefault();
    //si no prevengo esto hace que no se termine de resolver la promesa y nunca llegue a firebase

    const nameBuyer = document.getElementById("name").value;
    const phoneBuyer = document.getElementById("phone").value;
    const emailBuyer = document.getElementById("email").value;

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
    <div>
      {somethingInCart ? (
        <form>
          <input id="name" type="text" placeholder="Apellido y Nombre"></input>
          <input
            id="phone"
            type="text"
            placeholder="Número de contacto"
          ></input>
          <input
            id="email"
            type="email"
            placeholder="Correo electrónico"
          ></input>
          <button onClick={finishBuy}>Finalizar compra</button>
        </form>
      ) : <h2>¡Gracias por su compra!</h2>}
    </div>
  );
}
