import React, { useState, useEffect } from "react";
import Item from "../components/Item/Item";
import ItemList from '../components/Item/ItemList'
import { ProductsList } from "../components/Item/ProductsList";
import itemJSON from '../Data/itemsJSON.json'

// import { useParams } from 'react-router-dom'

export default function ShowItemListContainer() {

    const [item, setItem] = useState([])
    
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/felipelerner/sisclo/master/src/data/prueba.json')
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            setItem(data)
        })
        // ProductsList.map((element) => console.log(element));
        // setItem(ProductsList)
    }, []);

    // const {itemId} = useParams();

    return (

        <div className="itemListContainer">
            <ItemList item={item}/>
        </div>

        
    )
}
