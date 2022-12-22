import React from 'react';
import Logo from "../../assets/images/logo/logo.jpg";
import CartWidget from '../cartWidget/CartWidget';

import "./NavBar.css";

export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" to={""}><img className="Logo" src={Logo} alt="logo Empresa" /></a>
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
                            <a className="nav-link active" aria-current="page" to={"/"}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" to={""}>Nosotros</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" to={""}>Todos los productos</a></li>
                                <li><a className="dropdown-item" to={""}>Guitarras</a></li>
                                <li><a className="dropdown-item" to={""}>Bajos</a></li>
                                <li><a className="dropdown-item" to={""}>Baterias</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;