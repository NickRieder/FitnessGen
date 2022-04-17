import React, { useRef, useState, useContext } from "react";
import { Button, Form, Card, Container, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { createUserWithEmail, AuthContext, signInWithGoogle } from './config/firebase';
import { useCookies } from 'react-cookie'

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

    //user data useState hook
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassWord, setConfirmPassword] = useState("");


    //user Context
    const { user }= useContext(AuthContext); 
    
    // Error Catching
    const [errorCode, setErrorCode] = useState(() => "");

    // Cookies
    const [setCookies] = useCookies(['user']);
    

    // confirmPassWord
    function handleSubmit(event) {
        event.preventDefault();
    
        if (password !== confirmPassWord) {
            // password is not matching, you can show error to your user
            return setErrorCode("Passwords Do Not Match!");
        }
    
        createUserWithEmail(email, password, firstName, lastName).then(() => {
            //set cookies here for firstName LastName
            setCookies('firstName', firstName, {path: '/', sameSite: 'none', secure: true})
            setCookies('lastName', lastName, {path: '/', sameSite: 'none', secure: true})   
            const displayName = firstName.charAt(0) + lastName.charAt(0);
            setCookies('email', email, {path: '/', sameSite: 'none', secure: true})
            setCookies('displayName', displayName, {path: '/', sameSite: 'none', secure: true})             
    
            navigate("/");
        }).catch((e) => {
            if (e.code === 'auth/invalid-email') {
                setErrorCode('Invalid E-mail')
            } else if (e.code === 'auth/email-already-in-use') {
                setErrorCode('E-mail Already Has Account')
            } else {
                console.log('nah')
            }
        })

        
        
        
        // ... rest of the codes
    }

    const buttonStyle = {
        minWidth: '275px', 
        backgroundColor:'#B7D1E2', 
        borderColor:'#323334', 
        color:'#323334', 
        borderRadius:'24px'
    }

    console.log(user);

    return (
      // empty fragment
      <div className="d-inline-flex w-100" style={{position: 'relative', backgroundColor: '#F1F2F3', minHeight: '100vh'}}>
        {/* d-inline-flex makes the div elements inline */}
        <div className="w-50 mt-4" style={{height: '600px', position: ''}}>
            {/* Users with accoutn or dont want to make an account */}
            <div className="" style={{marginTop: '175px'}}>
                    <div className="text-center">
                        <Button style={buttonStyle} onClick={() => navigate('/login')}>{signInBtnText}</Button>
                    </div>
                    
                    <h3 className="mt-4 mb-4 text-center"> OR </h3>

                    <div className="text-center">
                        <Button style={buttonStyle} onClick={() => navigate('/questionnaire')}>{continueGuestBtnText}</Button>
                    </div>    
            </div>
        </div>

        {/* minHeight: '715px' */}
        <div className="w-50 mt-4 me-5" style={{ minHeight: '600px' }}>
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
                            <Button style={buttonStyle} onClick={handleSubmit}>Sign Up</Button>
                        </div>
                        <br></br>
                        <div>
                            <Button style={buttonStyle} onClick={signInWithGoogle}>Sign Up with Google</Button>

                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
      </div>
    )
}