import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Blog Platform</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/create">New Post</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}