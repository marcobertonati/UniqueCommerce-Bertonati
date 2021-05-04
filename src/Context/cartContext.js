//Importo para crear contexto
import {createContext, useState}from 'react';


export const CartContext = createContext([]);


export default function CartContextProvider ({children}){

    const [onCart, setonCart] = useState([])

    const [somethingInCart, setsomethingInCart] = useState(false)



    return(

        <CartContext.Provider value={{onCart, setonCart, somethingInCart, setsomethingInCart}}>
            {children}
        </CartContext.Provider>

    )
}