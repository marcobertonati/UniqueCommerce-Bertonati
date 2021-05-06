//Importo para crear contexto
import { createContext, useState } from "react";
import Cart from "../components/Cart/Cart";

export const CartContext = createContext([]);

export default function CartContextProvider({ children }) {
  ///////////
  //ESTADOS//
  ///////////

  // Estado donde se setean todos lo productos en el carrito
  const [onCart, setonCart] = useState([]);

  // Estado que chequea si existen productos en el carrito. Este se actualiza cuando efectivamente se ejecuta la función AddItem
  const [somethingInCart, setsomethingInCart] = useState(false);

  /////////////
  //FUNCIONES//
  /////////////

  // Función que setea en el contexto de carrito el producto que le llega desde ItemDetail
  function addItemContext(product) {
    //por las dudas, el 'product' es un objeto que está divido en 2 propiedades: product.item, es el item en si mismo... y product.quantity es la cantidad que agregó de ese producto
    console.log(`Se ejecutó la function addItemContext que trae:`);

    if (isInCart(product)) {
      console.log("Esto trae product id");
      console.log(product.item.id);

      const newQuantity = product.quantity;
      const [oldProduct] = onCart.filter(
        (onCartProduct) => onCartProduct.item.id === product.item.id
      );
      const oldQuantity = oldProduct.quantity;
      console.log("Esto trae newQuantity");
      console.log(newQuantity);
      console.log("Esto trae oldProduct");
      console.log(oldProduct);
      console.log("Esto trae oldQuantity");
      console.log(oldQuantity);

      const [newProduct] = [
          {
              item :{

                    description: product.item.description,
                    id: product.item.id,
                    idCategory: product.item.idCategory,
                    photo: product.item.photo,
                    price: product.item.price,
                    title: product.item.title

              },
              quantity: newQuantity+oldQuantity
          }
      ];

      const [newCart] = onCart.filter(
        (onCartProduct) => onCartProduct.item.id !== product.item.id
      );


    //   console.log(newProduct);
      return setonCart([newProduct, newCart]);
    }

    //Seteo en el carro el producto que me llega si no existe nada
    setonCart([...onCart, product]);

    // Porque no funciona push?
    // setonCart(onCart.push(product))

    //¿Por qué onCart es un objeto ¿No es un arra?
    console.log(typeof(onCart));
    console.log(onCart);
  }


  // Función que chequea si existe previamente un producto. Esta sirve para que si existe no agrege otro objeto al array, sino que lo agregue al ya existente.
  function isInCart(product) {
    return onCart.some(
      (productOnCart) => productOnCart.item.id === product.item.id
    );
  }


   // Función clear que remmueve todos los items
   function removeItem(product) {
       const [removeQuantityItem] = onCart.filter(productOnCart => productOnCart.item.id === product.item.id);

       const removedOneQuantityItem = removeQuantityItem = {
           item: {

            description: product.item.description,
            id: product.item.id,
            idCategory: product.item.idCategory,
            photo: product.item.photo,
            price: product.item.price,
            title: product.item.title

           },
           quantity: removeQuantityItem.quantity - 1
       }

       setonCart([onCart, removedOneQuantityItem])

}

  // Función clear que remmueve todos los items
  function clear() {
    setonCart([])
  }

  return (
    <CartContext.Provider
      value={{
        onCart,
        setonCart,
        somethingInCart,
        setsomethingInCart,
        addItemContext,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
