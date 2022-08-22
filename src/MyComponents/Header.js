import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
const Header = () => {
  return (
    <div>
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Todo List App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
          <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Search</Form.Label>
        <Form.Control type="text" placeholder="Search" />
      </Form.Group>
        </Container>
        
      </Navbar>
    </div>
  )
}

export default Header;