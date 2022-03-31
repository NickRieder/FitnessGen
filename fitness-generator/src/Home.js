import React, { useContext, useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
// import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import background from "./images/fitness-rdl.jpg";
import { AuthContext, getUserName } from './config/firebase'
import { useCookies } from "react-cookie";
// db,
// import { collection, addDoc } from 'firebase/firestore'


const Home = () => {
    const navigate = useNavigate();

    const [cookies] = useCookies(['user'])

    const { user } = useContext(AuthContext); 
    // const [userData, setUserData] = userdata;
    const [firstName, setFirstName] = useState(() => cookies.firstName);
    const [lastName, setLastName] = useState(() => cookies.lastName); 
    const [displayName, setDisplayName] = useState(() => cookies.firstName + cookies.lastName);
    // const [loading, setLoading] = useState(() => (user!=null));

    // console.log(userData)
    // useEffect(() => {
    //     setLoading(false);
    // }, [user])

    const GuestHome = () => {
        return (
            <div className="mb-4" style={{height: '100vh', background: `url(${background})`, }}>
                {/*<Image fluid src='./fitness-rdl.jpg'></Image>*/}
                <div className="pt-5">
                    <Container className="p-5 mb-4 bg-dark rounded-3">
                    <h1 style={{color:'white'}}>Welcome to the fitness generator app.</h1>
                    <p  style={{color:'white'}}>We use information on your past workout history along with your current metrics to develop the ideal workout plan for you!</p>
                    <Button onClick={() => navigate('/sign-up')}>Get Started</Button>
                    </Container>
                    <Container className="p-5 mb-4 bg-light rounded-3">
                    <h1>Who we are.</h1>
                    <p>This is the vision of the creator, Dan Bagin, a personal trainer with a goal of finding the ideal workout for all perspective clients to improve their fitness.</p>
                    <Button onClick={() => navigate('/sign-up')}>Sign Up</Button>
                    </Container>
                </div>
            </div>)
    }

    const UserHome = () => { 
        // getUserNameData();

        return (
            <div className="mb-4" style={{height: '100vh', background: `url(${background})`, }}>
                {/*<Image fluid src='./fitness-rdl.jpg'></Image>*/}
                <div className="pt-5">
                    <Container className="p-5 mb-4 bg-dark rounded-3">
                    <h1 style={{color:'white'}}>Welcome {`${firstName} ${lastName}`}</h1>
                    <Button onClick={() => navigate('/questionnaire')}>Start Questionnaire</Button>
                    </Container>
                    <Container className="p-5 mb-4 bg-light rounded-3">
                    <h1>Who we are.</h1>
                    <p>This is the vision of the creator, Dan Bagin, a personal trainer with a goal of finding the ideal workout for all perspective clients to improve their fitness.</p>
                    {/* <Button onClick={() => console.log(user)}>Assessment</Button> */}
                    </Container>
                </div>
            </div>)
    }

    
    const HomePage = () => {
        if (user) {
            return <UserHome/>
        } else {
            return <GuestHome />
        }
    }

    console.log(user);
    return ( 
    <>
        <HomePage/>
        
    </>

    )
}
export default Home;