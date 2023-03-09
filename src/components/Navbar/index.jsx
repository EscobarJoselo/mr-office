import React from "react";

export const NavBar = () => {
    return (
        <div className="contenedor">
            <nav className="nav">
                <div className="cont_nav">
                    <a className="nav_link" href="#">Mr Office</a>
                </div>
                <ul className="list_nav">
                    <li>
                        <a className="nav_link" href="#">articulo 1</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">articulo 2</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">Carrito</a>
                    </li>
                </ul>
            </nav>
        <h1>NavBar</h1>
        </div>
        
    );
}

export default NavBar;