import './itemCount.css';

import React from 'react';

export const ItemCount = () => {
    return(
        <div className='contador'>
            <button>-</button>
            <span className='spa'>2</span>
            <button>+</button>
            <div>
                <button>agregar</button>
            </div>
        </div>      
    );
}

export default ItemCount;