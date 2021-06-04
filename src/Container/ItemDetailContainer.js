import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import { getProductsById } from "../Services/Services";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      const product = getProductsById(id);
      product.then((product) => setItemDetail(product));
      // Tengo que poner ese THEN para resolver la promesa sino te trae el objeto no resuelto. No es que te traiga el return de del array. Lo que te retorna es UNA PROMESA que NECESITA ser resuelta. Y si no ponemos un .then NUNCA LA RESUELVE porque no sabemos cuánto tiempo va a tardar en resolverla
      setLoading(false)
    }, 2000);
  }, []);

  console.log("ESTO TRAE EL ITEM DETAIL");
  console.log(itemDetail.id);

  return (

    <>
    {loading ? <Container fluid> <h2>Cargando producto ⌛</h2></Container> : <div className="itemDetailContainer">
         <ItemDetail product={itemDetail} />
       </div>
     
     
     
     }
    </>
  );
}
