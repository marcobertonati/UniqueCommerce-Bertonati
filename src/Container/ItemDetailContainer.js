import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import ItemDetail from '../components/ItemDetail/ItemDetail'
const {getIdProducts} = require('../Services/Services')

export default function ItemDetailContainer() {
    console.log("SE EJECUTO ITEM DETAIL CONTAINER")

    const { id } = useParams();
    console.log(id);

    const [itemDetail, setItemDetail] = useState([]);
    
    useEffect(() => {
        
        console.log("ENTRO A USE EFFECT")

        setTimeout(()=> {
            console.log("ENTRO A SETIMEOUT")
            getIdProducts
                .then(data=> {
                console.log(data);
                console.log(id);
                const [especificItem] = data.filter(product=> product.id == id);
                
                console.log(especificItem);
                setItemDetail(especificItem);
            })  
        }, 2000)

    },[]);

    return (
        
        <div className="itemDetailContainer">
            <ItemDetail product={itemDetail}/>
        </div>
    )
}