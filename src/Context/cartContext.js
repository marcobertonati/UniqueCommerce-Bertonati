//Importo para crear contexto
import { createContext, useState } from "react";

//Importo SERVICE para postear item
import {addOrders} from '../Services/Services'

//Importo de firebase la función que trae fecha
import {dateFirebase} from '../Services/Services'

// Exporto contexto
export const CartContext = createContext([]);

// ¿Qué exporta CartContext
export default function CartContextProvider({ children }) {

  ///////////
  //ESTADOS//
  ///////////

  // Estado donde se setean todos lo productos en el carrito
  const [onCart, setonCart] = useState([]);

  // Estado que chequea si existen productos en el carrito. Este se actualiza cuando efectivamente se ejecuta la función AddItem
  const [somethingInCart, setsomethingInCart] = useState(false);

  // Estado donde se setea la orden de compra con datos de la persona y el contenido del carrito
  const [order, setOrder] = useState({})


  /////////////////////////////
  //FUNCIONES PARA EL CARRITO//
  /////////////////////////////

  // Función que setea en el contexto de carrito el producto que le llega desde ItemDetail
  function addItemContext(product) {
    //El 'product' es un objeto que está divido en 2 propiedades: product.item, es el item en si mismo... y product.quantity es la cantidad que agregó de ese producto

    if (isInCart(product)) {
    
      const newQuantity = product.quantity;
      const [oldProduct] = onCart.filter(
        (onCartProduct) => onCartProduct.item.id === product.item.id
      );

      const oldQuantity = oldProduct.quantity;

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

      const newCart = onCart.filter(
        (onCartProduct) => onCartProduct.item.id !== product.item.id
      );

      return setonCart([...newCart,newProduct]);
    }

    //Seteo en el carro el producto que me llega si no existe nada
    setonCart([...onCart, product]);

  }

  // Función que chequea si existe previamente un producto. Esta sirve para que si existe no agrege otro objeto al array, sino que lo agregue al ya existente.
  function isInCart(product) {

    if(product.item.id===undefined) {

        console.log('Aún no hay nada en el carrito')

    } else {

        return onCart.some(
          (productOnCart) => productOnCart.item.id === product.item.id
        );
        //El .some retorna un booleano. Es decir la función si no encuentra que haya ID en el carrito es porque está vació. Si encuentra que hay ID se fija si coinciden con el producto que está agregando. Si está dice TRUE, si no está dice FALSE.
    }
  }

  // Función clear que remmueve todos los items
  function clearCart() {
    setsomethingInCart(false)
    setonCart([])
    alert('¡Vaciaste tu carrito! Vuelva pronto')
  }

  // Función sacar item de la canasta
  function removeItem (id) {

    const [productToBeRest] = onCart.filter(product => product.item.id === id );
   
    const newCart = onCart.filter(product => product.item.id !== id )

    
    if(productToBeRest.quantity < 1 ) {

        return setonCart([...newCart])

    } else {

        //Resto al producto clickeado -1
        const newRestedProducto = {
            item: {...productToBeRest.item},
            quantity: productToBeRest.quantity - 1
        }

        //Si ese producto tiene la cantidad de 0 y además el array de productos es 1 (es decir que hay un producto) seteamos el estado de si hay algo en el carrito en false y seteamos en el carrito un array vacio
        if(newRestedProducto.quantity === 0 && onCart.length === 1){
            setsomethingInCart(false)
            return setonCart([])

        }

        //Si ese producto tiene la cantidad de 0, entonces no se setea
        if (newRestedProducto.quantity === 0) {
            return setonCart([...newCart])
        }

        //Si ese producto tiene la cantidad +1, entonces se setea
        return setonCart([newRestedProducto,...newCart])

    }
    
  }


  /////////////////////////////
  //FUNCIONES PARA LA ORDERS //
  /////////////////////////////

  // Función para setear orden
  async function addOrder(userInfo) {

    const newOrder = {
      buyer: {...userInfo},
      items: itemIdTitlePrice(),
      date:  dateFirebase,
      total: totalAmount(),
    }

    console.log(newOrder)

    setOrder(newOrder)
    await addOrders(newOrder)
  
    setOrder({})
    setonCart([])
    setsomethingInCart(false)

  }


  ////////////////////////////////
  // FUNCIONES PARA OTROS DATOS //
  ////////////////////////////////

  //Función que saca el total del carrito
  function totalAmount() {

    let totalAmount = 0;

    onCart.forEach(product => {
      totalAmount = totalAmount + product.item.price * product.quantity
      
    });

    return totalAmount;
    
  }

  //Función que sirve para obtener algunos datos que van en las ordenes de compra
  function itemIdTitlePrice() {

    const cartItemIdtitlePrice = onCart.map(product => {
      return { 
        id: product.item.id,
        title: product.item.title,
        price: product.item.price,
        quantity: product.quantity
            }
    })

    return cartItemIdtitlePrice;

  }

  //Función que devuelve cantidad de productos
  function quantityProducts() {
    let productQuantity = 0;
    onCart.forEach((product) => { return (productQuantity = product.quantity + productQuantity)});
    return productQuantity;
  }


  console.log('SOY CART DE CARTCONTEXT 🛒👇')
  console.log(onCart)


  return (
    <CartContext.Provider
      value={{
        onCart,
        setonCart,
        somethingInCart,
        setsomethingInCart,
        addItemContext,
        removeItem,
        clearCart,
        addOrder,
        setOrder,
        quantityProducts,
        totalAmount
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
