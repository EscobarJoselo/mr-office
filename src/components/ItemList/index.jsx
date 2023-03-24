import Item from "../Item";
import React from "react";

const itemList = ({data = []}) => {
    return (
        data.map(preciosCuidados => <Item key={preciosCuidados.id} info={preciosCuidados}/>)
    );
}

export default itemList;