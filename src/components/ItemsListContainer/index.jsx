import React from "react";
import ItemCount from '../ItemCount';
import Title from '../Tittle';

export const ItemsListContainer = ({ texto }) => {

    const onAdd = (quantify) => {
        console.log("Compraste ${quantify} unidades");
    }
    return (
        <>
        <Title greeting='Mi carrito'/>
        <ItemCount initial={1} stock={5}  onAdd={onAdd} 
        />
        </>
        
    )
};

export default ItemsListContainer;