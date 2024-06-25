import React from 'react';
import { Link } from 'react-router-dom';
import '';

const Footer = () => {
    return(
        <footer>
            <div className='politicas-container'>
                <ul>
                    <li><Link to="/">Politicas de tratamientos de datos personales</Link></li>
                    <li><Link to="/">Politicas de privacidad</Link></li>
                    <li><Link to="/">Politicas de garantia</Link></li>
                    <li><Link to="/">Terminos y condiciones</Link></li>
                </ul>
            </div>
            <div className='copyright-container'>
                <p>2023 Creado por Sú Instalador</p>
            </div>
            <div className='logo-container'>
                <image src='' alt='' className=''/>
            </div>
            <div className='Redes Sociales'>
                <image src='' alt='' className=''/>
                <image src='' alt='' className=''/>
                <image src='' alt='' className=''/>
                <image src='' alt='' className=''/>
            </div>
        </footer>
    )
}