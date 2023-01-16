import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import "./ItemListContainer.css";

const Productos = () => {
    const [items, setItems] = useState([]);
    const { tipo } = useParams();
    useEffect(() => {
        setTimeout(() => {
            fetch('data.json')
                .then(respuesta => respuesta.json())
                .then(productosTodos => {
                    if (categoria === "todos") {
                        setItems(productosTodos);
                    } else {
                        const arr_productos = productosTodos.filter(producto => producto.tipo === categoria);
                        setItems(arr_productos);
                    }
                })
                .catch(() => {
                    console.log("error, el archivo del metodo fech no esta disponible.");
                });
            let categoria = "";
            if (tipo === "guitarra") {
                categoria = "Guitarra";
            } else if (tipo === "bajo") {
                categoria = "Bajo";
            } else if (tipo === "bateria") {
                categoria = "Bateria";
            } else {
                categoria = "todos";
            }
            console.log("tipo de producto :" + tipo)
        }, 2000);
    }, [tipo])

    return (
        <div className="container">
            {
                Object.keys(items).length === 0
                    ? <div className="load">CARGANDO...</div>
                    :
                    <div className="row">
                        {items.map(producto => (
                            <div key={producto.id} className="col-md-3">
                                <Item item={producto} />
                            </div>
                        ))}
                    </div>
            }
        </div>
    );
}
export default Productos;