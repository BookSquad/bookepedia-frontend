import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import React from "react";
import accountContext from "./userAccounts/accountContext";
//import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "./media/bookepedia.gif";

function NavBar(props) {
  const { loggedIn, setLoggedIn } = React.useContext(accountContext);

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Navbar
      fixed="top"
      variant="dark"
      expand="lg"
      style={{ background: "#0047a9" }}
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            alt="logo"
            src={logo}
            width="75"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            variant="pills"
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>

            <Nav.Link href="#">Link</Nav.Link>
          </Nav>
          <Nav variant="pills">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="success">Search</Button>
            </Form>

            <Nav.Link href="upload">Add Book +</Nav.Link>
            {/* 
              Adding conditional rendering depending if user is logged in
            */}
            {loggedIn ? (
              <Nav.Link href="" onClick={handleLogout}>
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link href="login">Login</Nav.Link>
            )}

            {loggedIn ? (
              <div></div>
            ) : (
              <Nav.Link href="register">Register</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
