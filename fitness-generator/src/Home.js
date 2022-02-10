import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    
    return (
        <div>
            <Container className="p-5 mb-4 bg-light rounded-3">
                <h1>Hello, welcome to the fitness generator app. We are currently under construction.</h1>
                <Button onClick={() => navigate('/sign-up')}>SignUp</Button>
            </Container>
        </div>
    )
}
export default Home;