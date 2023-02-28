import React, {useState} from 'react';
import { LOGIN_URL, HOME_URL } from '../../constants/urls';
import { Link } from 'react-router-dom';
import styles from './TopNav.module.css'
import  logo_pic from './../../assets/logo.png'
import { useUser } from '../../context/UserContext';


function TopNav() {
    const { user } = useUser();

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
                <a className="nav-link" href="#">Doctores</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Agenda tu cita</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
              <Link to={LOGIN_URL}>
                <button className={`btn btn-outline-success ${styles.logInButton}`} type="submit" >Iniciar sesión</button>
              </Link>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default TopNav