import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

    function NavBar() {
        return (
            <Navbar sticky="top" bg="dark" variant="dark">
            <Container >
              <Navbar.Brand href="/" style={{fontSize: 35}}>Yodelr</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="reviews" style={{fontSize: 20}}>Reviews</Nav.Link>
                <Nav.Link href="create" style={{fontSize: 20}}>Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        );
    }

export default NavBar;