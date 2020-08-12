import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { AutoContext } from "../AutoContext";

export default function Navigation() {
  const context = useContext(AutoContext);
  const handleClick = () => {
    // context[1]({ page: tab });
    console.log("text");
  };
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Kimberly Wilks</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          onSelect={handleClick}
          className="mr-auto"
          style={{ marginRight: "10px" }}
        >
          <Nav.Link href="About">About</Nav.Link>
          <Nav.Link href="Projects">Projects</Nav.Link>
          <Nav.Link href="Contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
