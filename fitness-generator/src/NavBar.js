import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { AuthContext, logOut } from './config/firebase';

const NavBar = () => {
    const { user } = useContext(AuthContext); 

    // const displayName = userData;
    
    return (
        <div style={{ marginBottom: '3.5rem' }}>
            <Navbar fixed="top" bg="light" expand="lg">
                <Container>
                <Navbar.Brand href="/">FitGen</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    
                    { user ?
                        <NavDropdown title="Get Started" id="">
                            <NavDropdown.Item href='questionnaire' >Questionnaire</NavDropdown.Item>
                            <NavDropdown.Item href='assessment' >Assessment</NavDropdown.Item>
                            <NavDropdown.Item href='workout' >Workout Plan</NavDropdown.Item>
                            <NavDropdown.Item href='mobilitytest'>Mobility Test</NavDropdown.Item>
                        </NavDropdown>
                    : 
                        <Nav.Link href="sign-up">Get Started</Nav.Link> 
                    }

                    
                    <NavDropdown title="Account" id="basic-nav-dropdown">
                        { user ? 
                        <>
                            <NavDropdown.Item href='settings' >Settings</NavDropdown.Item>
                            <NavDropdown.Item onClick={logOut} >Logout</NavDropdown.Item>
                        </>:<>
                            <NavDropdown.Item href="login">Sign In</NavDropdown.Item>
                            <NavDropdown.Item href="sign-up">Sign Up</NavDropdown.Item>
                        </>}
                    </NavDropdown>
                    {user ? 
                        <Nav.Link className="pl-5" href='settings'> {user ? user.displayName : ''} </Nav.Link>
                        : <></>
                    }
                    </Nav>
                </Navbar.Collapse>
                {/* User Initials */}
                {/* <Button > PP </Button> */}
                </Container>
            </Navbar>
        </div>
    )
}
export default NavBar;