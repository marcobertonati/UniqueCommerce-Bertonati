import React from "react";
import "./ItemDetail.css";

export default function ShowItemDetail({ arrayProducts }) {
  console.log(arrayProducts);

  return (
    <div className="itemDetail">
      <h3 className="title-h3">DESCRIPCIÓN DE ITEMS</h3>

      {arrayProducts.map((eachProduct) => {
        return (
          <div className="eachItemDetail" key={eachProduct.id}>

              <img src= {eachProduct.photo} alt={eachProduct.title}></img>

            <ul>
              <li>{eachProduct.description}</li>
              <li>¿Ta caro no? {eachProduct.price}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
