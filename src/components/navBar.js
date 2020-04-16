import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const navBar = () => {
  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" className="deep-turqoiuse">
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="#deets">
            <p className="navText">About</p>
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            <p className="navText">Projects</p>
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            <p className="navText">Contact</p>
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            <p className="red-text">CV</p>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navBar;
