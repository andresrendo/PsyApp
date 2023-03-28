import React, {useState} from 'react';
import { LOGIN_URL, HOME_URL, CONTACT_US_URL, BUSCAR_DOCTOR_URL, AGENDAR_URL } from '../../constants/urls';
import { Link } from 'react-router-dom';
import styles from './TopNav.module.css'
import  logo_pic from './../../assets/logo.png'
import { useUser } from '../../context/UserContext';
import { logout } from '../../firebase/auth/index.js';


function TopNav() {
    const { user } = useUser();

    const handleLogout = async () => {
      console.log(user);
      await logout();
    };

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbarColor}`} >
      <div className="container-fluid main-container">

        <div className="left-side-navbar" >
          <a className="navbar-brand" href={HOME_URL}>
            <img src={logo_pic} alt="Logo" width="30" height="30" className="d-inline-block align-text-top me-2"/>
            PsyApp
          </a>
        </div>

        <div className="right-side-navbar">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={HOME_URL}>Inicio</a>
              </li>
              <li className="nav-item">
                <Link to={BUSCAR_DOCTOR_URL} className='nav-link'>
                  Doctores
                </Link>
              </li>
              <li className="nav-item">
                <Link to={AGENDAR_URL} className="nav-link">
                  Agenda tu cita
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={CONTACT_US_URL}>Contacto</a>
              </li>


              {!!user && (
                <button onClick={handleLogout} className={`btn mx-4 ${styles.button1}`} type="button" >Salir</button>
              )}

              {!user && (
                <Link to={LOGIN_URL}>
                <button className={`btn mx-4 ${styles.button1}`} type="submit" >Iniciar sesión</button>
                </Link>
              )}

            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default TopNav