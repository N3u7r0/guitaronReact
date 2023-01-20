import React, { useState } from 'react'
import "./ItemCount.css"
const ItemCount = ({ onAdd, stock, initial }) => {

    const [count, setCount] = useState(initial);

    const onPlus = () => {
        if (count < stock) setCount(count + 1);
    };

    const onDecrement = () => {
        if (count > initial) setCount(count - 1);
    };

    return (
        <div className="count-container">
            <span className='padBtb'>
            <button className="btn btn-outline-danger p-3 " onClick={onDecrement}>-</button>
            <span className='numeroCount' >{count}</span>
            <button className="btn btn-outline-danger p-3" onClick={onPlus}>+</button>
            </span>
            <button className="btn btn-danger p-3" onClick={() => onAdd(count)}>Confirm purchase</button>
        </div>
    )
}

export default ItemCount