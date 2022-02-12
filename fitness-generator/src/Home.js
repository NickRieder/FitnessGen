import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import background from "./images/fitness-rdl.jpg";

const Home = () => {
    const navigate = useNavigate();
    
    return (
        <div className="Home" style={{height: '100vh', background: `url(${background})`, }}>
            {/*<Image fluid src='./fitness-rdl.jpg'></Image>*/}
            <div style={{padding: '10rem'}}>
            <Carousel>
                <Carousel.Item>
                    <Container className="p-5 mb-4 bg-light rounded-3">
                    <h1>Welcome to the fitness generator app.</h1>
                    <p>We use information on your past workout history along with your current metrics to develop the ideal workout plan for you!</p>
                    <Button onClick={() => navigate('/sign-up')}>Get Started</Button>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container className="p-5 mb-4 bg-light rounded-3">
                    <h1>Who we are.</h1>
                    <p>This is the vision of the creator, Dan Bagin, a personal trainer with a goal of finding the ideal workout for all perspective clients to improve their fitness.</p>
                    <Button onClick={() => navigate('/sign-up')}>Sign Up</Button>
                    </Container>
                </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
export default Home;