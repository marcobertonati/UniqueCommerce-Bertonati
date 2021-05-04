import React from "react";
import CartWidget from './Icon/cartWidget.svg'
import { useHistory } from 'react-router-dom';


export default function MostrarCartWidget () {

    let history = useHistory()
    return(
        <img onClick={()=>history.push('/cart')}src={CartWidget}/>
    )
}