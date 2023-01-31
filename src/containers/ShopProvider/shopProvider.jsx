import React, { useState } from 'react'
import { createContext } from 'react'

export const Shop = createContext()

//HOC
const ShopProvider = ({ children }) => {

    const [products, setPorducts] = useState([])

    const addProduct = (product) => {
        const isInCart = isProductInCart(product.id);
        if (isInCart) {

            const productoRepetido = products.find(elemento => elemento.id === product.id)
            productoRepetido.quantity += product.quantity
            setPorducts([...products])
        } else {
            setPorducts([...products, product]);
        }
    }



    const countCart = () => {
        let cantidadTotal = 0;
        for (const product of products) {
            cantidadTotal += product.quantity
        }
        return cantidadTotal
    }
    //para ver si el id del prodcuto se repite, Tru/False
    const isProductInCart = (id) => {
        return products.some(product => product.id === id)
    }

    return (
        <Shop.Provider value={{ products, addProduct, countCart }}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider