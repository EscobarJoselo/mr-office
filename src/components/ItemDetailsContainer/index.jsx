import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetails";

const preciosCuidados =
    { id: 1, image: "https://www.google.com.ar/url?sa=i&url=https%3A%2F%2Fwww.conradomarket.com.ar%2Fazucar-ledesma-x-1-kg--det--1001&psig=AOvVaw3VUsAYjvKoIG_rfuUiA2w4&ust=1679706322042000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPDB1p-w8_0CFQAAAAAdAAAAABAD", title: "Azucar Ledesma" };


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(preciosCuidados);
            }, 3000);
        });

        getData.then(res => setData(res));
    }, [])


    return (
        <ItemDetail data={data}/>
    );
}


export default ItemDetailContainer;