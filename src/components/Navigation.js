import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { AutoContext } from "../AutoContext";

export default function Navigation() {
  const context = useContext(AutoContext);
  const handleClick = (tab) => {
    // context[1]({ page: tab });
    console.log(tab);
  };
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Kimberly Wilks</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{ marginRight: "10px" }}>
          <Nav.Link onClick={handleClick("about")}>About</Nav.Link>
          <Nav.Link onClick={handleClick("projects")} href="#projects">
            Projects
          </Nav.Link>
          <Nav.Link onClick={handleClick("contact")} href="#contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
