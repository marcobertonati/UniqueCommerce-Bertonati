import React, { useContext, useState, useEffect } from "react";
import ItemCount from "../components/ItemCount/ItemCount";
import {CartContext} from '../Context/CartContext'

export default function ItemCountContainer({product, setshowFinishBuy, productItem}) {
  
  ///////////
  //ESTADOS//
  ///////////

  const [item, setItem] = useState(0);
  //Cantidad de item que pusiste en el contador

  const [stock, setStock] = useState(5);
  // Ese useState de arriba debería hacer un llamado a la base de datos para saber la cantidad de stock que hay. Pero en la consigna nos piden que solo que tenga 5.

  const {addItemContext} = useContext(CartContext)
  // Función que agrega item al contexto

  const {setsomethingInCart} = useContext(CartContext)
  // Función que cambiar el valor para saber si hay algo en el carrto

  ///////////////
  //USE EFFECTS//
  ///////////////

  // Si hay cambios en el contador: Es decir si suma o resta productos se muestra este mensaje
  useEffect( ()=> {
    console.log('Se actualizó el componente de la botonera')
  }, [item])

  ///////////////
  ///FUNCIONES///
  ///////////////

  // Función onADD que lo que setea es los items y los pasa a ItemDetail
  function onAdd() {
    // Setea el producto que traemos de item detail y la cantidad que responde a la que puso en el contador (item)

    if (productItem) {
      //productItem está llegando desde el componente ITEM

      addItemContext( { item: productItem, quantity: item} )

    } else {
      //product está llegando desde el componente ITEM DETAIL
      addItemContext( { item: product, quantity: item} )

      // Setea en true para que el estado del ItemDetail que está en false cambie a true para que te muestre el botón de finalizar compra

      // setshowFinishBuy(true);

    }

    setsomethingInCart(true);

  }

  // Función que suma +1 en el botón
  function onIncrement() {
      if (stock > item) {
          setItem(item + 1);
      } else {
          alert('No tenemos suficiente stock')
      }
  }

  // Función que suma -1 en el botón
  function onDecrement() {
    if (item > 1) {
      setItem(item - 1);
    } else {
      alert("Tiene que agregar al menos un producto");
    }
  }

  ////////////////////////////////
  ///¿Qué exporta el componente?//
  ////////////////////////////////

  return (
    <ItemCount
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      itemQuantity={item}
      onAdd={onAdd}
    />
  );
}
