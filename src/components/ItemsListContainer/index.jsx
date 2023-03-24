import React, {useState, useEffect} from "react";
import ItemCount from '../ItemCount';
import ItemList from "../ItemList";
import Title from '../Tittle';

const preciosCuidados = [
    { id: 1, image: "https://www.google.com.ar/url?sa=i&url=https%3A%2F%2Fwww.conradomarket.com.ar%2Fazucar-ledesma-x-1-kg--det--1001&psig=AOvVaw3VUsAYjvKoIG_rfuUiA2w4&ust=1679706322042000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPDB1p-w8_0CFQAAAAAdAAAAABAD", title: "Azucar Ledesma" },
    { id: 2, image: "https://laislena.es/wp-content/uploads/2021/05/Fideo_n3_250g_pastasclasicas_laislena.jpg", title: "Fideos La Isla" },
    { id: 3, image: "https://www.google.com.ar/url?sa=i&url=https%3A%2F%2Fwww.vea.com.ar%2Faceite-natura-de-girasol-x-900-cc-2%2Fp&psig=AOvVaw3Qi0oiZ3Tnt8WgmJBimIh-&ust=1679706794918000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKD9hYKy8_0CFQAAAAAdAAAAABAD", title: "Aceite Natura" },
];

export const ItemsListContainer = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(preciosCuidados);
            }, 3000);
        });

        getData.then(res => setData(res));
    }, [])

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return (
        <>
            <Title greeting='Mi carrito' />
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <ItemList data={data}/>
        </>

    );
};

export default ItemsListContainer;