// Importo React y sus Hooks
import React, { useContext, useState } from "react";

//Importamos React Rout Dom
import { useHistory } from "react-router-dom";

// Importo contexto
import { CartContext } from "../Context/CartContext";

//Importo Componente de Reacto Boostrap
import { Container } from "react-bootstrap";

//Importamos componente checkout
import Checkout from "../components/Checkout/Checkout";


export default function CheckOutContainer() {

  // Importo History
  let history = useHistory();
  
  const [completeInput, setCompleteInput] = useState(false);


  // Importo desde el contexto que hay en el carrito
  const { somethingInCart, addOrder, totalAmount } =
    useContext(CartContext);

  // Función de finalizar compra
  function finishBuy(e) {
    e.preventDefault();
    //si no prevengo esto hace que no se termine de resolver la promesa y nunca llegue a firebase

    const nameBuyer = document.getElementById("name").value;
    const phoneBuyer = document.getElementById("phone").value;
    const emailBuyer = document.getElementById("email").value;
    const emailConfirmBuyer = document.getElementById("emailConfirm").value;

    if (emailBuyer === emailConfirmBuyer) {
     
      if (
        nameBuyer === " " ||
        phoneBuyer === " " ||
        emailBuyer === " " ||
        nameBuyer === "" ||
        phoneBuyer === "" ||
        emailBuyer === ""
      ) {
        return alert(
          "¡Ingrese datos válidos! Espacios vacios serán rechazados ❌"
        );
      }

      const userInfo = {
        name: nameBuyer,
        phone: phoneBuyer,
        email: emailBuyer,
      };

      addOrder(userInfo);

    } else {
      alert("¡Cuidado! Sus emails no coinciden");
    }
  }

  function onHandleInputChange() {

    const nameBuyer = document.getElementById("name").value;
    const phoneBuyer = document.getElementById("phone").value;
    const emailBuyer = document.getElementById("email").value;
    const emailConfirmBuyer = document.getElementById("emailConfirm").value;

    if (
      emailBuyer === emailConfirmBuyer &&
      emailBuyer !== "" &&
      emailBuyer !== " " &&
      emailConfirmBuyer !== "" &&
      emailConfirmBuyer !== " "
    ) {
      setCompleteInput(true);
    } else {
      setCompleteInput(false);
    }
  }

    return (
      <>
        {somethingInCart ? (
          <Checkout completeInput={completeInput} onHandleInputChange={onHandleInputChange} finishBuy={finishBuy} totalAmount={totalAmount} />
        ) : (
          <Container
            fluid
            style={{
              fontFamily: "Work Sans",
              fontWeight: "600",
              fontSize: "2rem",
              color: "#4a96ff",
            }}
          >
            ¡Gracias por su compra! 😃👌
          </Container>
        )}
      </>
    )
  }
