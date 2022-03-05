import React, {useRef} from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Form, Card, Container } from 'react-bootstrap';
import { continueGuestBtnText } from './SignUp';

const signUpBtnText = "Don't have an account? Sign up...";

export { signUpBtnText };

export default function SignIn() {
    // useNavigate hook
    const navigate = useNavigate();

    // useRef hook
    const emailRef = useRef(); 
    const passwordRef = useRef();

    return (
      // empty fragment
      <>
        {/* d-inline-flex makes the div elements inline */}
        <div className="d-inline-flex align-items-center w-50" style={{ minHeight: '100vh'}}>
            {/* Users with accoutn or dont want to make an account */}
            <Container style={{ minHeight: '400px', maxWidth: '500px' }}>
                    <div className="text-center pt-4">
                        <Button onClick={() => navigate('/sign-up')}>{signUpBtnText}</Button>
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
                        <h2 className="fst-italic d-flex justify-content-start mb-4"> Sign In</h2>
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
                        </Form>

                        <div className="mb-5">
                            <a className="position-absolute end-0 pe-3" href="./" onClick={() => navigate('/questionnaire')}> Forgot Password</a>
                        </div>

                        <div>
                            <Button onClick={() => navigate('/')}>Sign In</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
      </>
  )
}
