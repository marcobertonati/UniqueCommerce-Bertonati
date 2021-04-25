import React from "react";
import "./ItemDetail.css";

export default function ShowItemDetail({ arrayProducts }) {
  console.log(arrayProducts);

  return (
    <div className="itemDetail">

      <h3 className="title-h3">DESCRIPCIÓN DE ITEMS</h3>

      {arrayProducts.map((eachProduct) => (
        <div className="eachItemDetail" key={eachProduct.id}>
            <img className="ItemDetail-img" scr={eachProduct.photo}/>
          <ul>
              <li>{eachProduct.description}</li>
              <li>¿Ta caro no? {eachProduct.price}</li>
          </ul>
        </div>
      ))}

    </div>
  );
}
