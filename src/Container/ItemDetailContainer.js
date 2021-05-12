import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import ItemDetail from '../components/ItemDetail/ItemDetail'
// const {getIdProducts} = require('../Services/Services')
const {getAllProducts} = require('../Services/Services')
const {getProductForId} = require( '../Services/Services')


export default function ItemDetailContainer() {
    console.log("SE EJECUTO ITEM DETAIL CONTAINER")

    const { id } = useParams();
    console.log(id);

    const [itemDetail, setItemDetail] = useState([]);
    
    useEffect(() => {
        console.log("ENTRO A USE EFFECT")

        setTimeout(()=> {
            console.log("ENTRO A SETIMEOUT")
            console.log(`Esto trae el ID: ${id}`)
            getProductForId(id)
            // getAllProducts
            //     .then(data=> {
            //     console.log(data);
            //     console.log(id);
            //     // Recortar que en el 'const [especificItem] lo utilizo entre corchetes [] porque lo que devuelve el fiter es un array con un objeto adentro. Por lo cual cuando yo lo pongo entre [] lo devuelve desestructurado. También que utilizo == ya que devuelve un STRING y el otro es un NUMBER. Podría parsearlo para que sea más óptimo.
            //     const [especificItem] = data.filter(product=> product.id == id);
            //     console.log(especificItem);
            //     setItemDetail(especificItem);
            // })  
        }, 2000)
    },[]);

    return (
        <div className="itemDetailContainer">
            <ItemDetail product={itemDetail}/>
        </div>
    )
}