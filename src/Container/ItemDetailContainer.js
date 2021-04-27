import React, { useState, useEffect } from "react";
import ItemDetail from '../components/ItemDetail/ItemDetail'
const {getIdProducts} = require('../Services/Services')

export default function ShowItemDetailContainer() {

    const [itemDetail, setItemDetail] = useState([])
    
    useEffect(() => {

        setTimeout(()=> {
            getIdProducts
            .then((data)=> {

                const especificItem = data.find(product=> product.id === 2);
                setItemDetail(especificItem)
            })  
        })
    }, []);

    // const {itemId} = useParams();

    return (
        <div className="itemDetailContainer">
            <ItemDetail product={itemDetail}/>
        </div>
    )
}