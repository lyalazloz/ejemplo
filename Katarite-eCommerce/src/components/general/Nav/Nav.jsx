import React from "react";
import './Nav.css';
import NavItem from '../NavItem/NavItem';
import NavCart from '../NavCart/NavCart';
import {Link} from 'react-router-dom';

function Nav({titulo, action}) {
    const menuItems = [
        {
            texto: 'Terror',
            ruta: '/terror',
        },
        {
            texto: 'Ciencia Ficción',
            ruta: '/ciencia-ficcion',
        },
        {
            texto: 'Fantasía',
            ruta: '/fantasia',
        },
        {
            texto: 'Misterio',
            ruta: '/misterio',
        },
    ]
    

    const qty = 1;

    return (
        <nav>
            <div className="container">
                <h1><Link to="/">{titulo}</Link></h1>
                <p>LIBROS</p>
                <ul>
                    {
                     menuItems.map((seccion, index) => <NavItem key={index} text={seccion.texto} url={seccion.ruta} />)   
                    }
                </ul>
                {
                       !!qty && <NavCart action={action} qty={qty}/>

                }
            </div>
        </nav>
    )
}

export default Nav;