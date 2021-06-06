//Importo React
import React from "react";

// Importo hook useContext
import { useContext } from "react";

//Importo Hook useHistory para darle navegabilidad
import { useHistory } from 'react-router-dom';

// Importo Contexto
import { CartContext } from "../../Context/CartContext";

//Importo imagen
import CartWidgetIcon from './Icon/cartWidget.svg'

//Importo CSS
import "./CartWidget.css";

export default function CartWidget () {

    const { quantityProducts } = useContext(CartContext);
    let history = useHistory()

    return(
        
        <>
            <img className="widget-container" onClick={()=>history.push('/cart')} src={CartWidgetIcon}/>
            <span className="cartWidget-container__span">{quantityProducts()}</span>
        </>            
        
    )
}