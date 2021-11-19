import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

export default class NavbarComponent extends Component {
  render() {
    return (
      <div>
        <Navbar bg="" variant="dark" expand="lg" fixed = "top">
          <Container>
            <Navbar.Brand href="#home">Personal Page</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto" >
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#service">Services</Nav.Link>
                <Nav.Link href="#portofolio">Portofolio</Nav.Link>
                <Nav.Link href="#link">ContactMe</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
