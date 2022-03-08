import React, { useContext } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import { AuthContext, logOut } from './config/firebase';

const NavBar = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext); 


    
    return (
        <div style={{ marginBottom: '3.5rem' }}>
            <Navbar fixed="top" bg="light" expand="lg">
                <Container>
                <Navbar.Brand href="/">FitGen</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="assessment">Get Started</Nav.Link>
                    <NavDropdown title="Account" id="basic-nav-dropdown">
                        { user ? <><NavDropdown.Item onClick={logOut} >Logout</NavDropdown.Item></>: 
                                 <><NavDropdown.Item href="login">Sign In</NavDropdown.Item>
                                 <NavDropdown.Item href="sign-up">Sign Up</NavDropdown.Item></>}
                    </NavDropdown>
                    <Nav.Link >{`${user ? user.displayName : ''}`}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavBar;