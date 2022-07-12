import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

    function NavBar() {
        return (
            <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="reviews">Reviews</Nav.Link>
                <Nav.Link href="create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        );
    }

export default NavBar;