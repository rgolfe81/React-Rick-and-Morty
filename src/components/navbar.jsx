  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
  import React from 'react';
  import { Link } from 'react-router-dom';
  
  export const NavbarExample = () => {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">Rick & Morty</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              <Nav.Link as={Link} to="/list">List characters</Nav.Link>
              <Nav.Link as={Link} to="/add">New character</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <hr/>
      </>
    );
  }

