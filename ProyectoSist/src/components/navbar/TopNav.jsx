import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


function TopNav() {
  return (
    <Navbar className='navbar' bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="#home">PsyApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Doctores</Nav.Link>
            <Nav.Link href="#link">Agenda tu Cita</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <Button variant="light">Iniciar Sesion</Button>{''}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav