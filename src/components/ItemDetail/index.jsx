import React from "react";

import './itemDetails.css';

export const ItemDetail = ({ data }) => {
    return (
        <div className="container">
            <div className="details">
                <img className="detail_image" src={data.image} alt="imagen de referencia, si no ves nada aqui pues se ha roto el link.." />
                <div className="content">
                    <h1>{data.title}</h1>
                </div>
            </div>
        </div>
    );
}


export default ItemDetail;