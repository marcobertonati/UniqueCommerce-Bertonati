//Importamos React y hooks
import React, { useState, useEffect } from "react";

//Importamos componente de React Bootstrap
import { Container } from "react-bootstrap";

//Importamos hook useParams para dar navegabilidad
import { useParams } from "react-router-dom";

//Importamos componente
import ItemDetail from "../components/ItemDetail/ItemDetail";

//Importamos promesa que hace llamado a la bas de datos en busca del producto
import { getProductsById } from "../Services/Services";

export default function ItemDetailContainer() {
  
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout( async () => {
      const product = getProductsById(id);
      await product.then((product) => setItemDetail(product));
      // Tengo que poner ese THEN para resolver la promesa sino te trae el objeto "no resuelto". No es que te traiga el return del array. Lo que te retorna es UNA PROMESA que NECESITA ser resuelta. Y si no ponemos un .then NUNCA LA RESUELVE porque no sabemos cuánto tiempo va a tardar en resolverla
      setLoading(false);
    }, 2000);
  }, [id]);

  return (
    <>
      {loading ? (
        <Container fluid>
          <h2>Cargando producto ⌛</h2>
        </Container>
      ) : (
        <section className="itemDetailContainer">
          <ItemDetail product={itemDetail} />
        </section>
      )}
    </>
  );
}
