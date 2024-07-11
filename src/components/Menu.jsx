import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Menu.scss";

const Menu = () => {
    return (
        <nav>
            <ul className="menu">
                <li>
                    <NavLink to="/" exact >Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/products" >Products</NavLink>
                </li>
                <li>
                    <NavLink to="/lugares" >Lugares</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;