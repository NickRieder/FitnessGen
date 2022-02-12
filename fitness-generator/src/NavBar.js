import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    
    return (
        <div style={{ marginBottom: '3.5rem' }}>
            <Navbar fixed="top" bg="light" expand="lg">
                <Container>
                <Navbar.Brand href="/">FitGen</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="">Get Started</Nav.Link>
                    <NavDropdown title="Account" id="basic-nav-dropdown">
                        <NavDropdown.Item href="login">Sign In</NavDropdown.Item>
                        <NavDropdown.Item href="sign-up">Sign Up</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavBar;