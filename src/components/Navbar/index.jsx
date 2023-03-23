import React from "react";
import styled from "styled-components";
import CartWidget from '../CartWidget';
export const NavBar = () => {
    return (
            <div className="contenedor">
            <h2>Bienvenidos a <span>Mr Office</span></h2>
            <nav className="nav">
                <div className="cont_nav">
                    <a className="nav_link" href="#">Home</a>
                </div>
                <ul className="lista_nav">
                    <li>
                        <a className="nav_link" href="#">articulo 1</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">articulo 2</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">
                            <CartWidget/>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;

