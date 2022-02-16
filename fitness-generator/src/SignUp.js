import React, { useRef } from "react";
import { Button, Form, Card, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    
    // useNavigate hook
    const navigate = useNavigate();

    // useRef hook
    const emailRef = useRef(); 
    const passwordRef = useRef();
    const passwordConfRef = useRef();

    return (
      // empty fragment
      <>
        {/* d-inline-flex makes the div elements inline */}
        <div className="d-inline-flex align-items-center w-50" style={{ minHeight: '100vh'}}>
            {/* Users with accoutn or dont want to make an account */}
            <Container style={{ minHeight: '400px', maxWidth: '500px' }}>
                    <div className="text-center pt-4">
                        <Button onClick={() => navigate('/login')}>Already have an account? Sign in...</Button>
                    </div>
                    
                    <h3 className="mt-4 mb-4 text-center"> OR </h3>

                    <div className="text-center">
                        <Button onClick={() => navigate('/questionnaire')}>OR Continue as Guest...</Button>
                    </div>    
            </Container>
        </div>


        <div className="d-inline-flex align-items-center w-50" style={{ minHeight: '100vh'}}>
            {/* Sign up portion */}
            {/* d-flex makes container fit forms */}
            {/*  */}
            <Container className="start-0">
            <Card>
                <Card.Body>
                        <h2 className="fst-italic d-flex justify-content-start mb-4"> Sign Up</h2>
                        <Form>
                        {/* Email Address Form*/}
                            <Form.Group id="email">
                                <Form.Label className="d-flex justify-content-start">E-mail</Form.Label>
                                <Form.Control type="email" ref={emailRef} placeholder="Enter email" required/>
                            </Form.Group>

                        {/* Password Form*/}
                            <Form.Group id="password">
                                <Form.Label className="d-flex justify-content-start">Password</Form.Label>
                                <Form.Control type="email" ref={passwordRef} placeholder="Enter password" required/>
                            </Form.Group>

                        {/* Password Confirmation Form */}
                            <Form.Group className="mb-5" id="password-confrimation">
                                <Form.Label className="d-flex justify-content-start">Password Confirmation</Form.Label>
                                <Form.Control type="email" ref={passwordConfRef} placeholder="Confirm password" required/>
                            </Form.Group>
                        </Form>

                        <div>
                        <Button onClick={() => navigate('/questionnaire')}>Sign Up</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
      </>
    )
}
