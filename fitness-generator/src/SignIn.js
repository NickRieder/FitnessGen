import React, { useRef, useState, useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Form, Card, Container, Alert } from 'react-bootstrap';
import { signInWithEmail, logOut, AuthContext, signInWithGoogle } from './config/firebase';
import { continueGuestBtnText } from './SignUp';
import { useCookies } from 'react-cookie';

const signUpBtnText = "Don't have an account? Sign up...";

export { signUpBtnText };


export default function SignIn() {
    // useNavigate hook
    const navigate = useNavigate();

    // useRef hook
    const emailRef = useRef(); 
    const passwordRef = useRef();

    const [loginPassword, setPassword] = useState("");
    const [loginEmail, setEmail] = useState("");

    const { user, setUser } = useContext(AuthContext); 

    // Error Catching
    const [errorCode, setErrorCode] = useState(() => "");
    
    //set cookies
    const [cookies, setCookies] = useCookies(['user']);

    let userData = null;

    //signin function
    async function handleSignIn(e) {
        try {
            userData = await signInWithEmail(loginEmail, loginPassword)
            // console.log(userData.firstName, userData.lastName, userData.displayName)

            console.log(userData.firstName===undefined)
            if (userData.firstName!==undefined) {
                //set cookies here for firstName LastName
                setCookies('firstName', userData.firstName, {path: '/', sameSite: 'none', secure: true})
                setCookies('lastName', userData.lastName, {path: '/', sameSite: 'none', secure: true})
                setCookies('displayName', userData.displayName, {path: '/', sameSite: 'none', secure: true})             
                setCookies('email', loginEmail, {path: '/', sameSite: 'none', secure: true})
                navigate("/");
            } else {
                setErrorCode(() => "The email or password is incorrect.")
            }
        } catch(e) {
            console.log(e)
        }
    }
    
    // useEffect(() => {
    //     // console.log(user)
    //     console.log(user)
    //     if (user !== null) {
    //         //set cookies here for firstName LastName
    //         setCookies('firstName', userData.firstName, {path: '/', sameSite: 'none', secure: true})
    //         setCookies('lastName', userData.lastName, {path: '/', sameSite: 'none', secure: true})
    //         setCookies('displayName', userData.displayName, {path: '/', sameSite: 'none', secure: true})             
    //         navigate("/");
    //     }
    //     // setUser(user)
    // }, [userData]);

    const buttonStyle = {
        minWidth: '275px', 
        backgroundColor:'#B7D1E2', 
        borderColor:'#323334', 
        color:'#323334', 
        borderRadius:'24px'
    }

    return (
      // empty fragment
      <div style={{backgroundColor: '#F1F2F3', minHeight: '100vh'}}>
        
        <div className="d-inline-flex align-items-center w-100 mt-4">
            {/* d-inline-flex makes the div elements inline */}
            <div className="w-50" style={{ minHeight: '600px'}}>
                {/* Users with accoutn or dont want to make an account */}
                <div className="" style={{marginTop: '175px'}}>
                        <div className="text-center">
                            <Button style={buttonStyle} onClick={() => navigate('/sign-up')}>{signUpBtnText}</Button>
                        </div>
                        
                        <h3 className="mt-4 mb-4 text-center"> OR </h3>

                        <div className="text-center">
                            <Button style={buttonStyle} onClick={signInWithGoogle}>Sign In with Google</Button>
                            {/* <Button onClick={() => navigate('/questionnaire')}>{continueGuestBtnText}</Button> */}
                        </div>    
                </div>
            </div>


            <div className="w-50 me-5" style={{ minHeight: '600px'}}>
                {/* Sign up portion */}
                {/* d-flex makes container fit forms */}
                {/*  */}
                <Container className="start-0" style={{marginTop: '125px'}}>
                <Card>
                    <Card.Body>
                            {errorCode && <Alert variant="danger">{errorCode}</Alert>}  
                            <h2 className="fst-italic d-flex justify-content-start mb-4"> Sign In</h2>
                            <Form>
                            {/* Email Address Form*/}
                                <Form.Group id="email">
                                    <Form.Label className="d-flex justify-content-start">E-mail</Form.Label>
                                    <Form.Control 
                                        value={loginEmail || ""}
                                        onChange={event => setEmail(event.target.value)} 
                                        type="email" 
                                        ref={emailRef} 
                                        placeholder="Enter email" 
                                        required 
                                    />
                                </Form.Group>

                            {/* Password Form*/}
                                <Form.Group id="password">
                                    <Form.Label className="d-flex justify-content-start">Password</Form.Label>
                                    <Form.Control 
                                        value={loginPassword || ""}
                                        onChange={event => setPassword(event.target.value)}
                                        type="password" 
                                        ref={passwordRef} 
                                        placeholder="Enter password" 
                                        required/>
                                </Form.Group>
                            </Form>

                            <div className="mb-5">
                                <a className="position-absolute end-0 pe-3" href='/forgotpassword'> Forgot Password</a>
                            </div>

                            <div>
                                <Button style={buttonStyle} onClick={() => handleSignIn()}>Sign In</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </div>

        </div>
  )
}
