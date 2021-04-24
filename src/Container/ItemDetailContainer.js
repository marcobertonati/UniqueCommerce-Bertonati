import React, { useState, useEffect } from "react";
import ItemDetail from '../components/ItemDetail/ItemDetail'
const {getProducts} = require('../Services/Services')

export default function ShowItemDetailContainer() {

    const [itemDetail, setItemDetail] = useState([])
    
    useEffect(() => {

        setTimeout(()=> {
            getProducts
            .then(data=>setItemDetail(data))
            .catch(err=>console.log(err))
        }, 2000)

    }, []);

    // const {itemId} = useParams();

    return (
        <div className="itemDetailContainer">
            <ItemDetail arrayProducts={itemDetail}/>
        </div>
    )
}