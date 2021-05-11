import React from "react";
import "./Cart.css";
import { Link } from 'react-router-dom'

// Importo useContext
import { useContext } from "react";

// Importo Contexto
import { CartContext } from "../../Context/CartContext";

export default function Cart() {

  // Importo desde el contexto que hay en el carrito
  const { onCart } = useContext(CartContext);
  const { somethingInCart } = useContext(CartContext);
  const { removeItem } = useContext(CartContext);
  const { clearCart } = useContext(CartContext)
  // console.log(onCart);
  // console.log(typeof (onCart));
  // console.log(somethingInCart);
  // console.log(typeof(removeItem))

  let total = 0;

  //Función que calcula el monto total del carrito
  function totalAmount() {
    console.log("Se ejecutó función totalAmount");

    if (onCart === undefined) {
      return console.log('Aún no hay productos')
    } else {

      onCart.forEach((productPrice) => {
        console.log(total);
        console.log(productPrice.item.price * productPrice.quantity);
        return (total = total + productPrice.item.price * productPrice.quantity);
      });

    }

  }
  totalAmount()

  return (
    <div>
      <h1>Bienvenido a su carrito</h1>

      {/* Si hay algo en el carrito renderizo el listado, o que no hay nada*/}
      {somethingInCart === false ? (
        <h2 className="cart-h2">Usted no tiene productos en el carrito <Link to ={`/`}>¡Chequea todos nuestros productos!</Link></h2>
      ) : (
        onCart.map((product) => {
          return (
            <ul key={product.item.id}>
                <span>{product.item.title}</span>
                <li>Cantidad: {product.quantity}</li>
                <li>Precio: {product.item.price}</li>
                <li>Total por producto: {product.item.price * product.quantity}</li>
                <li><button onClick={()=>removeItem(product.item.id)} className={product.item.id}>-</button></li>
            </ul>
          );
        })
      )}

      {/* Si hay algo en el carrito renderizo el total */}
      {
          somethingInCart ?
            <h5 style={{color: "black"}}>El total de su carrito es: {total}</h5>
            :
            null
      }

      {/* Si hay algo en el carrito renderizo el botón para vaciar */}
      {
          somethingInCart ?
            <button onClick={clearCart}>Vaciar Carrito</button>
            :
            null
      }

    </div>
  );
}
