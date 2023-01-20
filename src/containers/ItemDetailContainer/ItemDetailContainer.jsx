import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemCount from "../../componentes/ItemCount/ItemCount";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {

    const [quantity, setQuantity] = useState(0);

    const funcionOnAdd = (cantidad) => {
        console.log(`Se agrego la cantidad de productos ${cantidad}`);
        setQuantity(cantidad)
    }

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
                            {
                                quantity === 0 ?
                                    <ItemCount stock={20} initial={1} onAdd={funcionOnAdd} />
                                    :
                                    <button className="btn btn-danger p3">
                                        <Link to="/cart">
                                            ir a compras
                                        </Link>
                                    </button>
                            }
                        </div>
                    </div>
            }
        </div>
    )
}

export default ItemDetailContainer;