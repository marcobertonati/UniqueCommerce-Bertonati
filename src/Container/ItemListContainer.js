import React, { useState, useEffect } from "react";
import ItemList from '../components/Item/ItemList'


// import { useParams } from 'react-router-dom'

export default function ShowItemListContainer() {

    const [item, setItem] = useState([])
    
    useEffect(() => {

        // Simulamos un retraso de 2 segundos
        setTimeout(()=>{
            fetch('https://raw.githubusercontent.com/marcobertonati/uniqueCatalogoMaps-Bertonati/main/src/Data/itemsJSON.json')
            .then(response=>response.json())
            .then(data=>{
                // console.log(typeof(data))
                console.log(data)
                setItem(data)
            })
        }, 1000)

    }, []);

    // const {itemId} = useParams();

    return (
        <div className="itemListContainer">
               <ItemList item={item}/>
               {/* Este item={item} llama al Array */}
        </div>
         
    )
}
