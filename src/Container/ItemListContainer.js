import React, { useState, useEffect } from "react";
import Item from "../components/Item/Item";
import { ItemList } from "../components/Item/ItemList";

export default function ShowItemListContainer() {

    const [item, setItem] = useState([])
    
    useEffect(() => {
        ItemList.map((element) => console.log(element));
        setItem(ItemList)
    }, []);

    return (
        <div>
            {
                item.map(singleItem=> (
                    <Item title={singleItem.title}/>
                ))
            }
        </div>
    )
}
