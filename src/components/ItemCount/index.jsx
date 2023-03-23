import React, { useState } from 'react';
import './itemCount.css';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);


    const decrease = () => {
        setCount(count - 1);
    }    
        

        const increase = () => {
            setCount(count + 1);
        }    
        
        
    
    return(
        <div className='contador'>
            <button disabled ={count <= 1}  onClick={decrease}>-</button>
            <span className='spa'>{count}</span>
            <button disabled ={count >=stock}  onClick={increase}>+</button>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count) }>agregar</button>
            </div>
        </div>      
    );
}

export default ItemCount;