import React, { useRef, useState, useContext } from "react";
import { Button, Form, Card, Container, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { createUserWithEmail, AuthContext, signInWithGoogle } from './config/firebase';
// reportErrorCode
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


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    // const [userName, setUserName] = useState("Gabe");
    const [confirmPassWord, setConfirmPassword] = useState("");


    const { user } = useContext(AuthContext); 
    
    // Error Catching
    const [errorCode, setErrorCode] = useState(() => "");


    // confirmPassWord
    function handleSubmit(event) {
        event.preventDefault();
    
        if (password !== confirmPassWord) {
            // password is not matching, you can show error to your user
            return setErrorCode("Passwords Do Not Match!");
        }
    
        createUserWithEmail(email, password, firstName, lastName).catch((e) => {
            if (e.code === 'auth/invalid-email') {
                setErrorCode('Invalid E-mail')
            };
        })

        
        if (user !== null) {
            
            navigate("/");
        }
        
        // ... rest of the codes
    }


    return (
      // empty fragment
      <>
        {/* d-inline-flex makes the div elements inline */}
        <div className="d-inline-flex align-items-center w-50 align-self-baseline" style={{}}>
            {/* Users with accoutn or dont want to make an account */}
            <Container style={{ maxWidth: '500px' }}>
                    <div className="text-center">
                        <Button style={{ minWidth: '275px' }} onClick={() => navigate('/login')}>{signInBtnText}</Button>
                    </div>
                    
                    <h3 className="mt-4 mb-4 text-center"> OR </h3>

                    <div className="text-center">
                        <Button style={{ minWidth: '275px' }} onClick={() => navigate('/questionnaire')}>{continueGuestBtnText}</Button>
                    </div>    
            </Container>
        </div>


        <div className="d-inline-flex align-items-center w-50" style={{ minHeight: '100vh' }}>
            {/* Sign up portion */}
            {/* d-flex makes container fit forms */}
            {/*  */}
            <Container className="">
            <Card>
                <Card.Body>
                        {errorCode && <Alert variant="danger">{errorCode}</Alert>}
                        <h2 className="fst-italic d-flex justify-content-start mb-4"> Sign Up</h2>
                        <Form>
                        {/* First Name Form*/}
                            <Form.Group id="firstname">
                                <Form.Label className="d-flex justify-content-start">First Name</Form.Label>
                                <Form.Control 
                                    name="firstname"
                                    value={firstName || ""}
                                    onChange={event => setFirstName(event.target.value)}
                                    type="email" 
                                    placeholder="Enter First Name" 
                                    required/>
                            </Form.Group>

                        {/* Last name Form*/}
                            <Form.Group id="lastname">
                                <Form.Label className="d-flex justify-content-start">Last Name</Form.Label>
                                <Form.Control 
                                    name="lastname"
                                    value={lastName || ""}
                                    onChange={event => setLastName(event.target.value)}
                                    type="email" 
                                    placeholder="Enter Last Name" 
                                    required/>
                            </Form.Group>
                        
                        {/* Email Address Form*/}
                            <Form.Group id="email">
                                <Form.Label className="d-flex justify-content-start">E-mail</Form.Label>
                                <Form.Control 
                                    name="email"
                                    value={email || ""}
                                    onChange={event => setEmail(event.target.value)}
                                    type="email" 
                                    ref={emailRef} 
                                    placeholder="Enter Email" 
                                    required/>
                            </Form.Group>

                        {/* Password Form*/}
                            <Form.Group id="password">
                                <Form.Label className="d-flex justify-content-start">Password</Form.Label>
                                <Form.Control 
                                    name="password"
                                    value={password || ""}
                                    onChange={event => setPassword(event.target.value)}
                                    type="password" 
                                    ref={passwordRef} 
                                    placeholder="Enter Password" 
                                    required/>
                            </Form.Group>

                        {/* Password Confirmation Form */}
                            <Form.Group className="mb-5" id="password-confrimation">
                                <Form.Label className="d-flex justify-content-start">Password Confirmation</Form.Label>
                                <Form.Control
                                    name="confirmPassWord"
                                    value={confirmPassWord || ""}
                                    onChange={event => setConfirmPassword(event.target.value)} 
                                    type="password" 
                                    ref={passwordConfRef} 
                                    placeholder="Confirm Password" 
                                    required/>
                            </Form.Group>
                        </Form>
                        
                        <div>
                            {/* <Button onClick={() => userSignUpFullActions()}>Sign Up</Button> */}
                            {/* disabled={true} */}
                            <Button onClick={handleSubmit}>Sign Up</Button>
                        </div>
                        <br></br>
                        <div>
                            <Button onClick={signInWithGoogle}>Sign in with Google</Button>

                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
      </>
    )
}