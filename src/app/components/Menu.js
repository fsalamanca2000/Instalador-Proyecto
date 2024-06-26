import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import "@/app/styles/menu.css"
const Menu = () => {
  return (
    <header className="header-container">
      <div className='advertising-container'>
        <p>Servicio al cliente - Whatsapp</p>
      </div>
      <div className='main-header-container'>
      <div className="logo-container">
        <Image src="/images/LogoSuInstalador.webp" alt="LogoPrincipal" className="logo" width={500} height={300}/>
      </div>
      <div className="search-input-container">
        <input 
          type="text" 
          placeholder="Buscar servicio ..." 
          className="search-input"
        />
        <button className="search-button">
          <Image src="/images/buscar.png" alt="Buscar" className="search-icon" width={500} height={300}/>
        </button>
      </div>
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-item"><Link href="/nosotros">Nosotros</Link></li>
          <li className="nav-item"><Link href="/testimonios">Testimonios</Link></li>
          <li className="carrito-container">
            <Link href="/carrito">
              <Image src="/images/carro-vacio.png" alt="Carrito" className="cart-icon" width={42} height={42}/>
              <p className='carrito-number'>0</p>
            </Link>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Menu;
