import React, { useState, useEffect } from "react";
import ItemList from '../components/Item/ItemList';
import {getProducts} from '../Services/Services';
import {useParams} from 'react-router-dom';

export default function ItemListContainer() {

    const { categoryId } = useParams();
    console.log(categoryId);
    const [item, setItem] = useState([])
    
    //useEffect si viene con url params
    useEffect(()=> {
        if (categoryId===undefined) {
            getProducts
            .then(data=> {
                setItem(data)
            })
        
        } else {
            getProducts
            .then(data=> {
                let productsCategory = data.filter(product=> product.idCategory === categoryId)
                console.log(productsCategory)
                setItem(productsCategory)
            })
        }
    }, [item]);
    // Sin esto de arriba no se actualzia el componente por lo cual si entro a /category/anillos, pero luego voy a /category/gorras se van a seguir viendo los anillos aunque esté parado en horra. El ITEM no se está actualizando, solo se monta

    //useEffect si viene undefined
    // useEffect(() => {

    //     // Simulamos un retraso de 2 segundos
    //     setTimeout(()=>{
    //         fetch('https://raw.githubusercontent.com/marcobertonati/uniqueDetail-Bertonati/main/src/Data/itemsJSON.json')
    //         .then(response=>response.json())
    //         .then(data=>{
    //             // console.log(typeof(data))
    //             console.log(data)
    //             setItem(data)
    //         })
    //     }, 1000)

    // }, []);

    // const {itemId} = useParams();

    return (
        <div className="itemListContainer">
               <ItemList item={item}/>
               {/* Este item={item} llama al Array */}
        </div>
         
    )
}
