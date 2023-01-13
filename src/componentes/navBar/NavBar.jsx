import React from 'react';
import Logo from "../../assets/images/logo/logo.jpg";
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

import "./NavBar.css";

export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to={"/"}><img className="Logo" src={Logo} alt="logo Empresa" /></NavLink>
                <div className='carrito' >
                <CartWidget />
                <span>5</span>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to={"/"}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/nosotros"}>Nosotros</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">Productos</NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><NavLink className="dropdown-item" to={"/todos-los-productos"}>Todos los productos</NavLink></li>
                                <li><NavLink className="dropdown-item" to={"/guitarra"}>Guitarras</NavLink></li>
                                <li><NavLink className="dropdown-item" to={"/bajo"}>Bajos</NavLink></li>
                                <li><NavLink className="dropdown-item" to={"/bateria"}>Baterias</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;