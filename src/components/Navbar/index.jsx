import React from "react";
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';



export const NavBar = () => {
    return (
        <div className="contenedor">
            <h2>Bienvenidos a <span>Mr Office</span></h2>
            <nav className="nav">
                <div className="cont_nav">
                    <NavLink className="nav_link" to='/'>Home</NavLink>
                </div>
                <ul className="lista_nav">
                    <li>
                        <NavLink className="nav_link" to='/categoria/secos'>Alimentos Secos</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav_link" to='/categoria/envasados'>Alimentos Envasados</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav_link" to='/cart'>
                            <CartWidget />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;

