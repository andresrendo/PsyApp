import React, {useState} from 'react';
import { LOGIN_URL, HOME_URL } from '../../constants/urls';
import { Link } from 'react-router-dom';
import styles from './TopNav.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useUser } from '../../context/UserContext';


function TopNav() {
    const { user } = useUser();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-success">
      <div className="container-fluid main-container">

        <div className="left-side-navbar">
          <a className="navbar-brand" href={HOME_URL}>
            <img src="https://w7.pngwing.com/pngs/3/863/png-transparent-yoga-vriksasana-meditating-physical-fitness-arm-sports.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
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
                <button className="btn btn-outline-success" type="submit" >Iniciar sesión</button>
              </Link>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default TopNav