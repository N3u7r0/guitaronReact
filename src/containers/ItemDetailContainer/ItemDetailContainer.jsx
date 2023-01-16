import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const { id } = useParams();
    useEffect(() => {

        setTimeout(() => {
            fetch('data.json')
                .then(respuesta => respuesta.json())
                .then(productosTodos => {
                    setItem(productosTodos[id]);
                    console.log("id del producto numero :" + id)
                })
                .catch(() => {
                    console.log("error, el archivo del metodo fech no esta disponible.");
                });
        }, 2000);
    }, [id]);

    return (
        <div className="container-detail">
            {
                Object.keys(item).length === 0
                    ? <div className="load">CARGANDO...</div>
                    :
                    <div className="card">
                        <img src={item.foto} className="card-img-top" alt={item.nombre} />
                        <div className="card-body">
                            <h1 className="card-title">{item.marca}</h1>
                            <h2 className="card-text">{item.nombre}</h2>
                            <p className="card-text">{item.modelo}</p>
                            <p className="card-text">{item.precio}</p>
                        </div>
                    </div>
            }
        </div>
    )
}

export default ItemDetailContainer;