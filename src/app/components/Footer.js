import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return(
        <footer>
            <div className='politicas-container'>
                <ul>
                    <li><Link href="/">Politicas de tratamientos de datos personales</Link></li>
                    <li><Link href="/">Politicas de privacidad</Link></li>
                    <li><Link href="/">Politicas de garantia</Link></li>
                    <li><Link href="/">Terminos y condiciones</Link></li>
                </ul>
            </div>
            <div className='copyright-container'>
                <p>2023 Creado por Sú Instalador</p>
            </div>
            <div className='logo-container'>
                <Image src='' alt='' className=''/>
            </div>
            <div className='Redes Sociales'>
                <Image src='' alt='' className=''/>
                <Image src='' alt='' className=''/>
                <Image src='' alt='' className=''/>
                <Image src='' alt='' className=''/>
            </div>
        </footer>
    )
};

export default Footer;