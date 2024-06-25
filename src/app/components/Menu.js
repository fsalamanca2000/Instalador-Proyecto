import React from 'react';
import Link from 'next/link';
import "@/app/styles/menu.css"
const Menu = () => {
  return (
    <header className="header-container">
      <div className='advertising-container'></div>
      <div className="logo-container">
        <img src="src/app/img/LogoSuInstalador.webp" alt="LogoPrincipal" className="logo" />
      </div>
      <div className="search-input-container">
        <input 
          type="text" 
          placeholder="Buscar servicio ..." 
          className="search-input"
        />
        <button className="search-button">
          <img src="../img/buscar.png" alt="Buscar" className="search-icon" />
        </button>
      </div>
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-item"><Link href="/nosotros">Nosotros</Link></li>
          <li className="nav-item"><Link href="/testimonios">Testimonios</Link></li>
          <li className="nav-item">
            <Link href="/carrito">
              <img src="src/app/img/carro-vacio.png" alt="Carrito" className="cart-icon" />
              <p className='carrito-number'>0</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
