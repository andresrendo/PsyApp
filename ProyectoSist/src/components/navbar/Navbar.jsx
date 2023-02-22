import React, {useState} from 'react'
import styles from "./Navbar.module.css"

function Navbar() {
  return (
    <>
        <nav className={styles.navbar}>
            <div className={styles.navbar__container}>
                <a id="NavbarLogo">PsyApp</a>
                <div className={styles.navbar__toggle} id="mobile-menu">
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
                <ul className={styles.navbar__menu}>
                    <li className={styles.navbar__item}>
                        <a href="/" className={styles.navbar__links}>
                        Inicio
                        </a>
                    </li>
                    <li className={styles.navbar__item}>
                        <a className={styles.navbar__links}>
                        Doctores
                        </a>
                    </li>
                    <li className={styles.navbar__item}>
                        <a className={styles.navbar__links}>
                        Agendar Cita
                        </a>
                    </li>
                    <li className={styles.navbar__item}>
                        <a className={styles.navbar__links}>
                        Contacto
                        </a>
                    </li>
                    <li className={styles.navbar__item}>
                        <a className={styles.navbar__links}>
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