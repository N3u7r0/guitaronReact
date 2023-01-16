import React from "react";
import { Link } from "react-router-dom";


const Item = ({ item }) => {

    return (
        <div className="card">
            <Link to={"/producto/" + item.id}> <img src={item.foto} className="card-img-top" alt={item.nombre} /></Link>
            <div className="card-body">
                <h5 className="card-title">{item.marca}</h5>
                <p className="card-text">{item.nombre}</p>
                <p className="card-text">{item.modelo}</p>
                <p className="card-text">{item.precio}</p>
                < div className="d-grid gap-2">
                    <Link to={"/producto/" + item.id} className="btn btn-danger btn-lg">Ver mas...</Link>
                </div>
            </div>
        </div>
    )
}

export default Item;