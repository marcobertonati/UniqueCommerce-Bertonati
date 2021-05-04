import React from "react";

// Importo useContext
import {useContext} from 'react';

// Importo Contexto
import {CartContext} from '../../Context/CartContext'


export default function Cart() {

    const {onCart} = useContext(CartContext)
    // console.log(onCart.item.title)

    return (

        <div>

            <h1>Bienvenido al carrito</h1>
            <h2>Este es su carrito</h2>
            {onCart.item.title}
            {onCart.quantity}
            
        

        </div>
     
    )

}