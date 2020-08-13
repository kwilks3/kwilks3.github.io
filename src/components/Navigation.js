import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand>Kimberly Wilks</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{ marginRight: "10px" }}>
          <Nav.Link style={styles} href="About">
            About
          </Nav.Link>
          <Nav.Link style={styles} href="Projects">
            Projects
          </Nav.Link>
          <Nav.Link style={styles} href="Contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

let styles = {
  color: "#64a19d",
  padding: "1.5rem 1.5rem 1.25rem",
  borderBottom: "0.25rem solid transparent",
  "&:hover": {
    color: "#64a19d",
  },
  "&:active": {
    color: "darken(#64a19d, 15%)",
  },
  "&.active": {
    color: "#64a19d",
    outline: "none",
    borderBottom: "0.25rem solid #64a19d",
  },
};
