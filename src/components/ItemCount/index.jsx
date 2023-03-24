import React, { useState, useEffect } from 'react';
import './itemCount.css';

export const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial));


    const decrease = () => {
        setCount(count - 1); //resta al carrito
    }


    const increase = () => {
        setCount(count + 1); ///suma al carrito
    }

    ///setea o reinicia el valor inicial cada vez que hay un cambio sin nececidad de recargar la pagina
    useEffect(()=>{
        setCount(parseInt(initial));
    }, [initial])
///carrito

    return (
        <div className='contador'>
            <button disabled={count <= 1} onClick={decrease}>-</button>
            <span className='spa'>{count}</span>
            <button disabled={count >= stock} onClick={increase}>+</button>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)}>agregar</button>
            </div>
        </div>
    );
}

export default ItemCount;