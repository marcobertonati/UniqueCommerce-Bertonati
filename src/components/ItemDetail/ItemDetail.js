import React from "react";
import "./ItemDetail.css";

export default function ShowItemDetail({ arrayProducts }) {
  
  console.log(arrayProducts);


  return (
    <div className="itemDetail">
      <h3 className="title-h3">DESCRIPCIÓN DE ITEMS</h3>

      {arrayProducts.map((eachProduct) => (
        <div className="eachItemDetail" key={eachProduct.id}>
          <div className="ItemDetail-img">
            <img scr={eachProduct.photo} />
          </div>
          <ul>
            <li>{eachProduct.description}</li>
            <li>¿Ta caro no? {eachProduct.price}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
