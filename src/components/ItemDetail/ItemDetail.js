import React from "react";
import "./ItemDetail.css";
import ItemCountContainer from "../../Container/ItemCountContainer";

export default function ItemDetail({ product }) {
  console.log(product);

  return (
    <div className="itemDetail">
      <h3 className="title-h3">DESCRIPCIÓN DE ITEMS</h3>

      <div key={product.id}>
        <img src={product.photo} alt={product.title}></img>

        <ul>
          <li>{product.title}</li>
          <li>Descrpción: {product.description}</li>
          <li>Precio: {product.price}</li>
        </ul>
      </div>

      <ItemCountContainer />
    </div>
  );
}
