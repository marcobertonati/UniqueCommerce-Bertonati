import React from "react";
import "./ItemDetail.css";

export default function ShowItemDetail({ arrayProducts }) {
  console.log(arrayProducts);

  return (
    <div className="itemDetail">
      <h3 className="title-h3">DESCRIPCIÓN DE ITEMS</h3>


      {

        arrayProducts.map(eachProduct=>{
            
            <div>
                {eachProduct.description}
            </div>
        })

      }



      {/* {
      
      arrayProducts.map(eachItem => {
        <div className="colorP" key={eachItem.id}>
          <p>{eachItem.description}</p>
          <p>{eachItem.price}</p>
          <img scr={eachItem.photo} />
        </div>;
      })

      } */}
    </div>
  );
}
