//Importo React
import React from "react";

//Importo imagen
import CartWidget from './Icon/cartWidget.svg'

//Importo CSS
import "./CartWidget.css";

//Importo Hook useHistory para darle navegabilidad
import { useHistory } from 'react-router-dom';


export default function ShowCartWidget () {

    let history = useHistory()

    return(
        <>
            <img className="widget-container" onClick={()=>history.push('/cart')} src={CartWidget}/>

        </>            
        
    )
}