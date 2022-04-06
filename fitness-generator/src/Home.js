import React, { useContext, useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
// import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import background from "./images/fitness-rdl.jpg";
import { AuthContext, getUserName } from './config/firebase'
import { useCookies } from "react-cookie";
//fonts
import lemonMilkFont from './Res/Fonts/LEMONMILK-Regular.otf'
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
            <div style={{height: '100vh'}}>
                <div className="" style={{height: '100vh', background: `url(${background})`, }}>
                    {/*<Image fluid src='./fitness-rdl.jpg'></Image>*/}
                    
                    <div className="pt-5 text-start ps-5 ms-5">
                        <h1 className="pt-5 mt-5" style={{fontSize:'80px', color:'white', font: `url(${lemonMilkFont})`}}>FitGen</h1>
                        <h4  style={{color:'white'}}><br/>We use your past workout history and current metrics <br/><br/> to develop the ideal workout plan for you!</h4>
                        <Button className="mt-4" size="lg" style={{backgroundColor:'#B7D1E2', borderColor:'#323334', color:'#323334', borderRadius:'24px'}} onClick={() => navigate('/sign-up')}>Get Started</Button>
                    
                    
                    {/* <h1>Who we are.</h1>
                    <p>This is the vision of the creator, Dan Bagin, a personal trainer with a goal of finding the ideal workout for all perspective clients to improve their fitness.</p>
                    <Button onClick={() => navigate('/sign-up')}>Sign Up</Button> */}
                    </div>
                    

                    
                </div>
                

                <Card>
                    <div className="pt-5 mt-5 text-start ps-5 ms-5">
                        {/* <Container className="p-5 mb-4 bg-light rounded-3"> */}
                        <h2> About Us</h2>
                        
                        <div className="pt-4" style={{width: '800px', height: '100vh'}}>
                            <h4 className="ms-5">This is the the about us section where we will talk about the about us for 
                            the page and we are quite excited to start with everyone 
                            how we got started making this ite because the about us 
                            page will tell people whoever visits this site in the 
                            future how the developers were to create aan about us page</h4>
                        </div>
                    </div>    
                </Card>
            </div>
            )
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