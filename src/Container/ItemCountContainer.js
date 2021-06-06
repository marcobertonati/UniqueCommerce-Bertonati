//Importamos React y hooks
import React, { useContext, useState, useEffect } from "react";

//Importo componente
import ItemCount from "../components/ItemCount/ItemCount";

//Importo contexto
import { CartContext } from "../Context/CartContext";


export default function ItemCountContainer({
  product,
  productItem,
}) {

  const [itemQuantity, setItemQuantity] = useState(0);
  //Cantidad de item que pusiste en el contador

  const [stock, setStock] = useState(5);
  // Cantidad de stock que hay. Esto en proyectos donde realmente tengamos un stock debería ser consumido desde la base de datos y consultar cuántos hay actualmente.

  const [notProductAdded, SetNotProductAdded] = useState(true);
  // Chequea si se realizó la opción de agregar al carrito. Esto para que oculte el botón de agregar más productos

  const { addItemContext } = useContext(CartContext);
  // Función que agrega item al contexto

  const { setsomethingInCart } = useContext(CartContext);
  // Función que cambiar el valor para saber si hay algo en el carro


  // Si hay cambios en el contador: Es decir si suma o resta productos se muestra este mensaje
  useEffect(() => {
    console.log("Se actualizó el componente de la botonera");
  }, [itemQuantity]);


  // Función onADD que lo que setea es los items y los pasa a ItemDetail
  function onAdd() {
    // Setea el producto que traemos de item detail y la cantidad que responde a la que puso en el contador (item)
    
    if (productItem) {
      //productItem está llegando desde el componente ITEM
      addItemContext({ item: productItem, quantity: itemQuantity });

    } else {
      //product está llegando desde el componente ITEM DETAIL
      addItemContext({ item: product, quantity: itemQuantity });
    }

    setsomethingInCart(true);
    SetNotProductAdded(false);
    
  }

  // Función que suma +1 en el botón
  function onIncrement() {
    if (stock > itemQuantity) {
      setItemQuantity(itemQuantity + 1);
    } else {
      alert("¡No tenemos suficiente stock!");
    }
  }

  // Función que suma -1 en el botón
  function onDecrement() {
    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);
    } else {
      alert("Tiene que agregar al menos un producto");
    }
  }

 
  return (
    <>
      {notProductAdded ? (
        <ItemCount
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          itemQuantity={itemQuantity}
          onAdd={onAdd}
        />
      ) : null}
    </>
  );
}
