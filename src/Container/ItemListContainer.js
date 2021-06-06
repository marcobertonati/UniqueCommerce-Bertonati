//Importamos React y hooks
import React, { useState, useEffect } from "react";

//Importamos useParams para tomar los parámestros que llegan y pasarselos a la promesa
import { useParams } from "react-router-dom";

//Importamos componente ItemList que cotiene todos los items
import ItemList from "../components/Item/ItemList";

//Importamos llamado promesa
import { getAllProducts } from "../Services/Services";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [item, setItem] = useState([]);
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    //Simulamos un retraso de 2 segundos
    setTimeout(() => {
      //useEffect si no viene con url params: sirve para el home ya que trae todos los items
      if (categoryId === undefined) {
        getAllProducts.then((data) => {
          setItem(data);
          SetLoading(false);
        });
      } else {
        //useEffect si viene con url params: sirve para las category
        getAllProducts.then((data) => {
          let productsCategory = data.filter(
            (product) => product.categoryId === categoryId
          );
          setItem(productsCategory);
          SetLoading(false);
        });
      }
    }, 2000);
  }, [categoryId]);
  // REMINDER: Sin esto de arriba no se actualzia el componente por lo cual si entro a /category/anillos, pero luego voy a /category/gorras se van a seguir viendo los anillos aunque esté parado en gorra. El ITEM se está actualizando, solo se monta. Es decir, debemos poner en [] el categoryId (el parametro) así cuando se actualiza también se ejecuta el useEffect y hace la llamada fetch a partir de nuevo parametro.

  return (
    <>
      {loading ? (
        <div
          style={{
            color: "white",
            backgroundColor: "#4a96ff",
            fontSize: "1rem",
            margin: "0.6rem",
            padding: "1rem",
            textAlign: "center",
            borderRadius: "40px",
          }}
        >
          {" "}
          CARGANDO PRODUCTOS ⌛
        </div>
      ) : (
        <ItemList item={item} />
      )}
    </>
  );
}
