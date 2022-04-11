import React, { useRef, useState, useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Form, Card, Container } from 'react-bootstrap';
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

    return (
      // empty fragment
      <>
      <h3 style={{color: 'green' }}>{`${user ? 'Welcome ' + user.email : ''}`}</h3>
        {/* d-inline-flex makes the div elements inline */}
        <div className="d-inline-flex align-items-center w-50" style={{ minHeight: '100vh'}}>
            {/* Users with accoutn or dont want to make an account */}
            <Container style={{ minHeight: '400px', maxWidth: '500px' }}>
                    <div className="text-center pt-4">
                        <Button style={{ minWidth: '275px' }} onClick={signInWithGoogle}>Sign In with Google</Button>
                    </div>
                    
                    <h3 className="mt-4 mb-4 text-center"> OR </h3>

                    <div className="text-center">
                        <Button style={{ minWidth: '275px' }} onClick={() => navigate('/sign-up')}>{signUpBtnText}</Button>
                        {/* <Button onClick={() => navigate('/questionnaire')}>{continueGuestBtnText}</Button> */}
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
                            <Button onClick={() => handleSignIn()}>Sign In</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
      </>
  )
}
