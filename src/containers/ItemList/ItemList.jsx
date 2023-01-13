import React from 'react'
import ItemCard from '../ItemCard/ItemCard'

const ItemList = ({ productos }) => {
    return (
        <div>
            {productos.map(producto => {
                return <ItemCard product={producto} key={producto.id} />
            })}
        </div>
    )
}

export default ItemList