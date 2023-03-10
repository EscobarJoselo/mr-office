import React from "react";
import ItemCount from '../ItemCount';
import Title from '../Tittle';
export const ItemsListContainer = () => {
    return (
        <>
        <Title greeting='Mi carrito'/>
        <ItemCount />
        </>
        
    )
};

export default ItemsListContainer;