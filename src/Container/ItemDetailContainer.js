import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import ItemDetail from '../components/ItemDetail/ItemDetail'
const {getIdProducts} = require('../Services/Services')



export default function ItemDetailContainer() {

    const { id } = useParams();

    const [itemDetail, setItemDetail] = useState([])
    
    useEffect(() => {

        setTimeout(()=> {
            getIdProducts
            .then((data)=> {
                console.log(data);
                console.log(id);
                const especificItem = data.filter(product=> product.id === id);
                console.log(especificItem)
                setItemDetail(especificItem)
            })  
        })
    }, []);

    return (
        <div className="itemDetailContainer">
            <ItemDetail product={itemDetail}/>
        </div>
    )
}