import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";

const preciosCuidados = [
    { id: 1, image: "https://i.pinimg.com/originals/c6/dd/c6/c6ddc6cad52d2f0f4e075b0aee26bd2e.jpg", category: 'secos', title: "Azucar Ledesma" },
    { id: 2, image: "https://laislena.es/wp-content/uploads/2021/05/Fideo_n3_250g_pastasclasicas_laislena.jpg", category: 'secos', title: "Fideos La Isla" },
    { id: 3, image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/151/835/products/77902720010051-67ce05998ad8fe115a15890740721462-1024-1024.jpg", category: 'secos', title: "Aceite Natura" },
    { id: 4, image: "https://tatauy.vteximg.com.br/arquivos/ids/182304-1000-1000/Arvejas-Pequena-Granja-Lata-300-Gr-1-14311.jpg?v=637303049163870000", category: 'envasados', title: "Arvejas Granja" },
    { id: 5, image: "https://almacenonline.com.ar/wp-content/uploads/2019/10/jardinerainalpa.jpg", category: 'envasados', title: "Jardinera Inalpa" },
];

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    const { detalleId } = useParams();


    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(preciosCuidados);
            }, 1000);
        });

        getData.then(res => setData(res.find(secos => secos.id === parseInt(detalleId))));
    }, [])


    return (
        <ItemDetail data={data} />
    );
}


export default ItemDetailContainer;