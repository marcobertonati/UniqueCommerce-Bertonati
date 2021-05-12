import React, { useState, useEffect } from "react";
import ItemList from '../components/Item/ItemList';
import {getAllProducts} from '../Services/Services';
import {useParams} from 'react-router-dom';

export default function ItemListContainer() {

    const { categoryId } = useParams();
    console.log(categoryId);
    const [item, setItem] = useState([])
    
    useEffect(()=> {

        //Simulamos un retraso de 2 segundos
        setTimeout(() => {

            //useEffect si no viene con url params: sirve para el home
            if (categoryId===undefined) {
                getAllProducts
                    // .then(data=>console.log(data))
                .then(data=> {
                    setItem(data)
                })
            
            } else {
                //useEffect si viene con url params: sirve para las category
                getAllProducts
                    // .then(data=>console.log(data))
                .then(data=> {
                    let productsCategory = data.filter(product=> product.categoryId === categoryId)
                    console.log(productsCategory)
                    setItem(productsCategory)
                })

                
            }
        }, 2000)

    }, [categoryId]);
    // Sin esto de arriba no se actualzia el componente por lo cual si entro a /category/anillos, pero luego voy a /category/gorras se van a seguir viendo los anillos aunque esté parado en horra. El ITEM no se está actualizando, solo se monta

    // PREGUNTA PORQUE TENGO QUE PONER EL CATEGORY EN LA LINEA 29 ( la que est{a entre [] ) Y NO EL ITEM. Pasa que si pongo el ITEM me crea un bucle infinito.

    return (
        <div className="itemListContainer container-fluid" style={{marginTop:'1rem'}}>
               <ItemList item={item}/>
        </div>
         
    )
}
