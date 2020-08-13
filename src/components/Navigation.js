import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Kimberly Wilks</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{ marginRight: "10px" }}>
          <Nav.Link href="About">About</Nav.Link>
          <Nav.Link href="Projects">Projects</Nav.Link>
          <Nav.Link href="Contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
