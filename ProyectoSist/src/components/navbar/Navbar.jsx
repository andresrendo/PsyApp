import React, {useState} from 'react'
// import Navbar.css

function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <a id="NavbarLogo">PsyApp</a>
                <div class="navbar__toggle" id="mobile-menu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
                <ul class="navbar__menu">
                    <li class="navbar__item">
                        <a href="/" class="navbar__links">
                        Inicio
                        </a>
                    </li>
                    <li class="navbar__item">
                        <a class="navbar__links">
                        Doctores
                        </a>
                    </li>
                    <li class="navbar__item">
                        <a class="navbar__links">
                        Agendar Cita
                        </a>
                    </li>
                    <li class="navbar__item">
                        <a class="navbar__links">
                        Contacto
                        </a>
                    </li>
                    <li class="navbar__item">
                        <a class="navbar__links">
                        Iniciar Sesion
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  );
}

export default Navbar