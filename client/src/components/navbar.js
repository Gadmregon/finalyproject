import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  const user = null;
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Games</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/profile">
              <Nav.Link active>Profile</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin">
              <Nav.Link active>Admin</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Button variant="outline-success" className="me-5">
                Search
              </Button>
            </Form>

            {user ? (
              <>HelloUser</>
            ) : (
              <>
                <LinkContainer to="/register">
                  <Button variant="primary" className="me-2 ">
                    Registration
                  </Button>
                </LinkContainer>
                <Button variant="primary">Log in</Button>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavBar;
