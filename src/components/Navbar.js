import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      {/* Navbar bagian atas */}
      <Navbar bg="light" expand="lg">
        <Container>
          {/* Logo */}
          <Navbar.Brand href="/">
            <img 
              src="winnicode-logo.png"  // Ganti dengan logo yang sesuai
              alt="Winnicode Logo"
              style={{ height: '40px', width: 'auto' }} 
            />
            Winnicode Garuda Teknologi
          </Navbar.Brand>

          {/* Pencarian */}
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-center">
            <InputGroup className="w-50">
              <FormControl 
                placeholder="Cari Berita"
                aria-label="Cari Berita"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                <i className="bi bi-search"></i> {/* Ikon pencarian */}
              </Button>
            </InputGroup>
          </Navbar.Collapse>

          {/* Tombol Register dan Sign In */}
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              <Nav.Link as={Link} to="/login">Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Menu Navigasi */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">News</Nav.Link>
            <Nav.Link as={Link} to="/education">Edukasi</Nav.Link>
            <Nav.Link as={Link} to="/sports">Olahraga</Nav.Link>
            <Nav.Link as={Link} to="/lifestyle">Lifestyle</Nav.Link>
            <Nav.Link as={Link} to="/property">Properti</Nav.Link>
            <Nav.Link as={Link} to="/travel">Travel</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
