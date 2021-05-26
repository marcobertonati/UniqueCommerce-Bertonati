import React, { useState, useEffect } from "react";
import ItemList from '../components/Item/ItemList';
import {getAllProducts} from '../Services/Services';
import {useParams} from 'react-router-dom';

export default function ItemListContainer() {

    const { categoryId } = useParams();
    const [item, setItem] = useState([])
    const [loading, SetLoading] = useState(true)
    
    useEffect(()=> {
        //Simulamos un retraso de 2 segundos
        setTimeout(() => {

            //useEffect si no viene con url params: sirve para el home
            if (categoryId===undefined) {
                getAllProducts
                    // .then(data=>console.log(data))
                    .then(data=> {
                    console.log(data)
                    setItem(data)
                    SetLoading(false)
                })
            
            } else {
                //useEffect si viene con url params: sirve para las category
                getAllProducts
                    // .then(data=>console.log(data))
                    .then(data=> {
                     let productsCategory = data.filter(product=> product.categoryId === categoryId)
                        console.log(productsCategory)
                        setItem(productsCategory)
                        SetLoading(false)

                })
                
            }
        }, 2000)
    }, [categoryId]);
    // Sin esto de arriba no se actualzia el componente por lo cual si entro a /category/anillos, pero luego voy a /category/gorras se van a seguir viendo los anillos aunque esté parado en horra. El ITEM no se está actualizando, solo se monta

    // PREGUNTA PORQUE TENGO QUE PONER EL CATEGORY EN LA LINEA 29 ( la que est{a entre [] ) Y NO EL ITEM. Pasa que si pongo el ITEM me crea un bucle infinito.

    return (

        <>
        {
            loading ?   <h5 style={{color:"white", backgroundColor:"#4a96ff", fontSize:"1rem",margin:"0.3rem", padding:"1rem", textAlign:"center", borderRadius:"40px"}}> CARGANDO PRODUCTOS ⌛</h5> :  
            
                      
                        <ItemList item={item}/>
                 

        }
         </>
       
         
    )
}
