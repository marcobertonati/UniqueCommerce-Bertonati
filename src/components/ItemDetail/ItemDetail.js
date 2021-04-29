import React from "react";
import "./ItemDetail.css";
import ItemCountContainer from '../../Container/ItemCountContainer'


export default function ItemDetail({ product }) {
  console.log(product);

  return (
    <div className="itemDetail">
      <h3 className="title-h3">DESCRIPCIÓN DE ITEMS</h3>

      <div className="eachItemDetail" key={product.id}>

              <img src= {product.photo} alt={product.title}></img>

            <ul>
              <li>{product.description}</li>
              <li>¿Ta caro no? {product.price}</li>
            </ul>
          </div>
        <ItemCountContainer/>



      {/* {arrayProducts.map((eachProduct) => {
        return (
          <div className="eachItemDetail" key={eachProduct.id}>

              <img src= {eachProduct.photo} alt={eachProduct.title}></img>

            <ul>
              <li>{eachProduct.description}</li>
              <li>¿Ta caro no? {eachProduct.price}</li>
            </ul>
          </div>
        );
      })} */}
    </div>
  );
}
