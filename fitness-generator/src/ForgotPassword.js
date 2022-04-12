import React, { useState } from 'react'
import { Button, Form, Card, Container, Alert } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import { forgotPassword } from './config/firebase';


export default function ForgotPassword() {
    const navigate = useNavigate();

    const [email, setEmail] = useState(() => "")

    const [result, setResult] = useState(() => "")
    
    const firebase = require("./config/firebase");

    function handleForgotPassword() {

        if (email === "") {
            setResult("Please Enter an Email")
        } else {
            forgotPassword(email).then(() => {
                setResult("Password Renewal Email Was Sent")
                setTimeout(() => {navigate('/login')}, 2000)
                // setResult("Password Renewal Email Was Sent")
            }).catch((e) => {
                const errorCode = e.code
                console.log(errorCode)
    
                if (errorCode === "auth/invalid-email") {
                    setResult("Invalid E-mail") 
                    setEmail(() => "")
                } else if (errorCode === "auth/user-not-found") {
                    setResult(`No user found with e-mail: ${email}`)
                    setEmail(() => "")
                }
            })    
            // navigate()
        }
    }

    return (
        <div style={{backgroundColor: '#F1F2F3', minHeight: '100vh'}}>
            <div className="d-inline-flex align-items-center w-50" style={{ minHeight: '100vh'}}>
            {/* Sign up portion */}
            {/* d-flex makes container fit forms */}
            {/*  */}
            <Container className="start-0">
            <Card>
                <Card.Body style={{}}>
                        {result && <Alert className="" color="danger"> {result} <br/></Alert>}
                        <h2 className="fst-italic d-flex justify-content-start mb-4"> Forgot Password</h2>
                        <Form>
                        {/* Email Address Form*/}
                            <Form.Group id="email">
                                <Form.Label className="d-flex justify-content-start">E-mail</Form.Label>
                                <Form.Control 
                                    value={email}
                                    onChange={event => {setEmail(event.target.value)}} 
                                    type="email" 
                                    // ref={emailRef} 
                                    placeholder="Enter email" 
                                    required 
                                />
                            </Form.Group>
                        </Form>

                        {/* onClick={() => handleSignIn()} */}
                        <div className="text-end mb-2 mt-5">
                            <Button className="pe-3" onClick={handleForgotPassword}> Sign In</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
        </div>
  )
}
