import React, { useRef, useState, useContext } from "react";
import { Button, Form, Card, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { createUserWithEmail, logOut, AuthContext, signInWithGoogle } from './config/firebase';

// string vars
const signInBtnText = "Already have an account? Sign in...";
const continueGuestBtnText = "Continue as Guest...";

export { signInBtnText, continueGuestBtnText };

export default function SignUp() {
    
    // useNavigate hook
    const navigate = useNavigate();

    // useRef hook
    const emailRef = useRef(); 
    const passwordRef = useRef();
    const passwordConfRef = useRef();

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassWord, setConfirmPassword] = useState("");

    const { user } = useContext(AuthContext); 


    return (
      // empty fragment
      <>
      <h3 style={{color: 'green' }}>{`${user ? 'Success! Welcome ' + user.email : ''}`}</h3>
        {/* d-inline-flex makes the div elements inline */}
        <div className="d-inline-flex align-items-center w-50" style={{ minHeight: '100vh'}}>
            {/* Users with accoutn or dont want to make an account */}
            <Container style={{ minHeight: '400px', maxWidth: '500px' }}>
                    <div className="text-center pt-4">
                        <Button onClick={() => navigate('/login')}>{signInBtnText}</Button>
                    </div>
                    
                    <h3 className="mt-4 mb-4 text-center"> OR </h3>

                    <div className="text-center">
                        <Button onClick={() => navigate('/questionnaire')}>{continueGuestBtnText}</Button>
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
                                <Form.Control 
                                    name="email"
                                    value={email || ""}
                                    onChange={event => setEmail(event.target.value)}
                                    type="email" 
                                    ref={emailRef} 
                                    placeholder="Enter email" 
                                    required/>
                            </Form.Group>

                        {/* Password Form*/}
                            <Form.Group id="password">
                                <Form.Label className="d-flex justify-content-start">Password</Form.Label>
                                <Form.Control 
                                    name="password"
                                    value={password || ""}
                                    onChange={event => setPassword(event.target.value)}
                                    type="email" 
                                    ref={passwordRef} 
                                    placeholder="Enter password" 
                                    required/>
                            </Form.Group>

                        {/* Password Confirmation Form */}
                            <Form.Group className="mb-5" id="password-confrimation">
                                <Form.Label className="d-flex justify-content-start">Password Confirmation</Form.Label>
                                <Form.Control
                                    name="confirmPassWord"
                                    value={confirmPassWord || ""}
                                    onChange={event => setConfirmPassword(event.target.value)} 
                                    type="email" 
                                    ref={passwordConfRef} 
                                    placeholder="Confirm password" 
                                    required/>
                            </Form.Group>
                        </Form>
                        <div>
                        <Button fluid color="blue" onClick={signInWithGoogle}>Sign in with Google</Button>
                        </div>
                        <br></br>
                        <div>
                        <Button onClick={() => createUserWithEmail(email, password)}>Sign Up</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
      </>
    )
}