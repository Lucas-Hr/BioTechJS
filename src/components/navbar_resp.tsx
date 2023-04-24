import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Mon site web</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
